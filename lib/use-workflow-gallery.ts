'use client'

import { useEffect, useState } from 'react'

export interface WorkflowRow {
  tool: string
  title: string
  imageUrl: string
  notes: string
}

export interface WorkflowGroup {
  tool: string
  title: string
  images: string[]
  notes: string
}

const CSV_URL = process.env.NEXT_PUBLIC_WORKFLOW_SHEET_CSV_URL || ''

// Tool priority, used to order filter tabs and "All" listings. Unlisted
// tools fall to the end rather than breaking.
export const TOOL_ORDER = ['n8n', 'Zapier', 'Make', 'GoHighLevel']
export const toolRank = (tool: string) => {
  const i = TOOL_ORDER.indexOf(tool)
  return i === -1 ? TOOL_ORDER.length : i
}

// Minimal CSV parser — handles quoted fields containing commas/newlines,
// which Google Sheets' published CSV export can produce.
export function parseCSV(text: string): string[][] {
  const rows: string[][] = []
  let cur = ''
  let row: string[] = []
  let inQuotes = false

  for (let i = 0; i < text.length; i++) {
    const char = text[i]
    if (inQuotes) {
      if (char === '"') {
        if (text[i + 1] === '"') {
          cur += '"'
          i++
        } else {
          inQuotes = false
        }
      } else {
        cur += char
      }
    } else {
      if (char === '"') {
        inQuotes = true
      } else if (char === ',') {
        row.push(cur)
        cur = ''
      } else if (char === '\n' || char === '\r') {
        if (char === '\r' && text[i + 1] === '\n') i++
        row.push(cur)
        cur = ''
        if (row.some((c) => c.trim() !== '')) rows.push(row)
        row = []
      } else {
        cur += char
      }
    }
  }
  if (cur !== '' || row.length > 0) {
    row.push(cur)
    if (row.some((c) => c.trim() !== '')) rows.push(row)
  }
  return rows
}

export type WorkflowGalleryStatus = 'loading' | 'ready' | 'error' | 'empty'

// Shared data source for both the homepage preview and the full gallery
// page, so the CSV is fetched and parsed in exactly one place.
export function useWorkflowGroups() {
  const [groups, setGroups] = useState<WorkflowGroup[]>([])
  const [status, setStatus] = useState<WorkflowGalleryStatus>('loading')

  useEffect(() => {
    if (!CSV_URL) {
      setStatus('error')
      return
    }

    fetch(CSV_URL, { cache: 'no-store' })
      .then((res) => {
        if (!res.ok) throw new Error('Failed to fetch sheet')
        return res.text()
      })
      .then((text) => {
        const rows = parseCSV(text)
        if (rows.length < 2) {
          setStatus('empty')
          return
        }

        const header = rows[0].map((h) => h.trim().toLowerCase())
        const toolIdx = header.indexOf('tool')
        const titleIdx = header.indexOf('title')
        const imgIdx = header.indexOf('imageurl')
        const notesIdx = header.indexOf('notes')

        const parsedRows: WorkflowRow[] = rows
          .slice(1)
          .filter((r) => r[imgIdx]?.trim())
          .map((r) => ({
            tool: r[toolIdx]?.trim() || 'Other',
            title: r[titleIdx]?.trim() || 'Workflow',
            imageUrl: r[imgIdx]?.trim(),
            notes: r[notesIdx]?.trim() || '',
          }))

        if (parsedRows.length === 0) {
          setStatus('empty')
          return
        }

        // Group consecutive-or-not rows sharing the same Tool + Title into
        // one card with multiple images (in the order they appear in the sheet).
        const groupMap = new Map<string, WorkflowGroup>()
        const order: string[] = []
        for (const row of parsedRows) {
          const key = `${row.tool}::${row.title}`
          if (!groupMap.has(key)) {
            groupMap.set(key, { tool: row.tool, title: row.title, images: [], notes: row.notes })
            order.push(key)
          }
          const group = groupMap.get(key)!
          group.images.push(row.imageUrl)
          if (!group.notes && row.notes) group.notes = row.notes
        }
        const parsedGroups = order.map((key) => groupMap.get(key)!)

        setGroups(parsedGroups)
        setStatus('ready')
      })
      .catch(() => setStatus('error'))
  }, [])

  return { groups, status }
}
