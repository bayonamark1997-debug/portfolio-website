export const profile = {
  name: 'Mark Evander J. Bayona',
  title: 'AI Automation Specialist',
  email: 'markevanderbayona@gmail.com',
  linkedin: 'linkedin.com/in/markbayona',
  linkedinUrl: 'https://linkedin.com/in/markbayona',
  upworkUrl: 'https://www.upwork.com/freelancers/~0130f36d461a823fdd?mp_source=share',
  onlineJobsUrl: 'https://v2.onlinejobs.ph/jobseekers/info/4486544',
  resumeUrl: 'https://docs.google.com/document/d/1HBTvXdsgc_iFS0HMr8YHZTav1ZfXphmdE3W14NWo-R0/preview',
  location: 'Bulacan, Philippines',
}

export const nav = [
  { label: 'Work', href: '#work' },
  { label: 'Gallery', href: '#gallery' },
  { label: 'Services', href: '#services' },
  { label: 'Process', href: '#process' },
  { label: 'About', href: '#about' },
  { label: 'Stack', href: '#stack' },
  { label: 'Contact', href: '#contact' },
]

export const services = [
  {
    title: 'AI Workflow & Operations Automation',
    problem: 'Repetitive tasks, handoffs, and weekly reports eat hours and depend on someone remembering to act.',
    solution: 'I map the process end-to-end, then automate it — data pulls, formatting, delivery, and internal handoffs included.',
    outcome: 'Routine work runs itself, consistently, without supervision.',
    icon: 'Workflow',
  },
  {
    title: 'AI Chatbots & Customer Response',
    problem: 'Customers message at all hours, and slow replies cost bookings and sales.',
    solution: 'Context-aware chatbots with memory and a grounded knowledge base, connected to your real booking and escalation flow.',
    outcome: 'Instant, accurate responses 24/7 — with humans looped in only when needed.',
    icon: 'MessagesSquare',
  },
  {
    title: 'CRM & Lead Automation (GoHighLevel)',
    problem: 'Leads slip through the cracks — unenriched, unprioritized, and followed up too late.',
    solution: 'Pipelines, tagging, enrichment, and nurture sequences that capture, score, and route every lead automatically.',
    outcome: 'Every lead answered fast; your team spends time closing, not researching.',
    icon: 'Users',
  },
  {
    title: 'Booking & Scheduling Systems',
    problem: 'Manual booking creates back-and-forth, missed reminders, and no-shows.',
    solution: 'Automated scheduling, confirmations, reminders, and cancellation handling — synced to one source of truth.',
    outcome: 'Fuller calendars, fewer no-shows, zero manual coordination.',
    icon: 'CalendarClock',
  },
  {
    title: 'Process Mapping & AI Consulting',
    problem: 'You know work is inefficient, but not where — or where AI actually fits.',
    solution: 'I document your operations end-to-end, expose the real bottlenecks, and build a realistic automation roadmap.',
    outcome: 'A clear blueprint of what to automate first for the biggest impact — no hype.',
    icon: 'GitBranch',
  },
]

export const projects = [
  {
    name: 'Clinic Booking & AI Messenger Automation System',
    problem: 'A skincare clinic managed bookings by hand — appointments got logged inconsistently, reminders were easy to forget, and Messenger inquiries could sit unanswered for hours.',
    solution:
      'Built a connected automation system: an AI chatbot that answers Messenger inquiries and captures booking requests using conversation memory and a grounded knowledge base, paired with a Calendly-driven pipeline that logs every booking, sends SMS confirmations and 24-hour reminders, updates records automatically on cancellation, and notifies staff by email at every key step.',
    workflow: ['New inquiry or booking', 'AI Agent / Calendly capture', 'Log to Google Sheets', 'Notify staff', 'SMS confirmation & reminder'],
    tools: ['n8n', 'Google Gemini', 'Facebook Graph API', 'Calendly API', 'Google Sheets', 'Semaphore SMS', 'Gmail'],
    impact: 'Designed to remove manual booking follow-up entirely — staff get instant visibility into every new booking, cancellation, and customer inquiry, with no appointment relying on someone remembering to log it.',
    accent: 'from-sky-500/15',
  },
  {
    name: 'Smart Lead Routing & AI Follow-Up',
    problem: 'Every new lead required manual research, prioritization, and a hand-written first reply — slow enough that hot leads went cold before anyone responded.',
    solution:
      'Built a Zapier workflow that enriches each form submission with company and contact data via Apollo, routes leads by priority, logs high-priority leads to Google Sheets with an instant Slack alert to the sales team, and sends an AI-drafted, personalized follow-up email automatically. Lower-priority leads route straight to a sales team notification.',
    workflow: ['Form submission', 'Enrich via Apollo', 'Route by priority', 'Slack alert + log', 'AI-drafted email sent'],
    tools: ['Zapier', 'Apollo', 'AI by Zapier', 'Google Sheets', 'Slack', 'Gmail'],
    impact: 'Turns a raw form fill into an enriched, prioritized, personally-answered lead within minutes — with no human touch needed before the first reply.',
    accent: 'from-teal-500/15',
  },
  {
    name: 'Financial Reporting Automation',
    problem: 'Manual financial reporting was time-consuming and repeated every single week.',
    solution:
      'Automated report extraction, CSV generation, and delivery straight into Asana — replacing a fully manual reporting process.',
    workflow: ['Pull from Xero', 'Format data', 'Generate CSV', 'Deliver to Asana'],
    tools: ['Make', 'Xero', 'Asana'],
    impact: 'Replaced a fully manual weekly reporting process with a consistent, hands-off automated one.',
    accent: 'from-emerald-500/15',
  },
  {
    name: 'AI Document Processing Workflow',
    problem: 'Incoming email attachments pile up and require manual sorting, renaming, and filing.',
    solution:
      'Built a workflow that analyzes incoming email attachments with AI, generates descriptive filenames, files them into Google Drive, and logs everything automatically with built-in notifications.',
    workflow: ['Incoming attachment', 'Analyze with AI', 'Generate filename', 'Upload to Drive', 'Log & notify'],
    tools: ['Make', 'OpenAI', 'Google Drive', 'Google Sheets'],
    impact: 'Removes manual sorting and filing work entirely — incoming documents get organized and logged without anyone touching them.',
    accent: 'from-amber-500/15',
  },
]

export const processSteps = [
  { title: 'Discovery', desc: 'Understand your goals, pain points, and where time is being lost.', icon: 'Search' },
  { title: 'Process Mapping', desc: 'Document your workflow end-to-end to expose the real bottlenecks.', icon: 'GitBranch' },
  { title: 'Design & Build', desc: 'Architect the automation around your tools, then build the workflows that do the work.', icon: 'Hammer' },
  { title: 'Test & Launch', desc: 'Validate every path and edge case, then roll it into live operations.', icon: 'Rocket' },
  { title: 'Optimize', desc: 'Monitor, refine, and expand as your business grows.', icon: 'TrendingUp' },
]

export const techStack = [
  { category: 'AI', items: ['ChatGPT', 'Gemini', 'Claude'] },
  { category: 'Automation', items: ['n8n', 'Zapier', 'Make'] },
  { category: 'CRM', items: ['GoHighLevel'] },
  { category: 'Integrations', items: ['Calendly', 'Slack', 'Xero', 'Apollo', 'Gmail', 'Google Drive', 'Facebook Graph API'] },
  { category: 'Productivity', items: ['Google Workspace', 'Microsoft 365', 'Notion', 'Asana'] },
  { category: 'Database', items: ['Google Sheets'] },
]

export const industries = [
  'Clinics & Wellness',
  'Local Service Businesses',
  'BPO & Operations Teams',
]

export const aboutPoints = [
  'Monitored real-time performance and staffing for 150+ agent teams as a Workforce Management Specialist and Real-Time Analyst.',
  'Owned and co-owned three service businesses — a cyber café, an auto detailing shop, and a mobile auto aesthetics service.',
  'Trained in No-Code Automation (Zapier, Make, n8n), Prompt Engineering, Process Mapping, and GoHighLevel CRM at Tara AI Studios.',
]
