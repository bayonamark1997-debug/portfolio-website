export const profile = {
  name: 'Mark Evander J. Bayona',
  title: 'AI Automation Specialist | Workflow Automation Consultant',
  email: 'markevanderbayona@gmail.com',
  linkedin: 'linkedin.com/in/markbayona',
  linkedinUrl: 'https://linkedin.com/in/markbayona',
  location: 'Bulacan, Philippines',
}

export const nav = [
  { label: 'About', href: '#about' },
  { label: 'Services', href: '#services' },
  { label: 'Work', href: '#work' },
  { label: 'Process', href: '#process' },
  { label: 'Stack', href: '#stack' },
  { label: 'Contact', href: '#contact' },
]

export const stats = [
  { value: 6, suffix: '+', label: 'Years Operations Experience' },
  { value: 3, suffix: '', label: 'AI Automation Projects' },
  { value: 5, suffix: 'hrs', label: 'Saved Per Week Per Workflow' },
  { value: 4, suffix: '', label: 'No-Code Automation Certifications' },
]

export const services = [
  {
    title: 'AI Workflow Automation',
    problem: 'Teams lose hours to repetitive, manual tasks that never end.',
    solution: 'I map your process and automate it end-to-end with AI and no-code tools.',
    outcome: 'Reclaim hours every week and remove human error from routine work.',
    icon: 'Workflow',
  },
  {
    title: 'CRM Automation (GoHighLevel)',
    problem: 'Leads slip through the cracks and follow-ups happen too late.',
    solution: 'Automated pipelines, tagging, and nurture sequences inside GoHighLevel.',
    outcome: 'Every lead is captured, nurtured, and followed up automatically.',
    icon: 'Users',
  },
  {
    title: 'Lead Generation Automation',
    problem: 'Prospecting and qualifying leads eats up your sales team’s day.',
    solution: 'Workflows that enrich, score, and route leads to the right person.',
    outcome: 'Your team spends time closing, not researching.',
    icon: 'Target',
  },
  {
    title: 'AI Chatbots',
    problem: 'Customers wait too long for answers to common questions.',
    solution: 'Context-aware chatbots with memory and knowledge retrieval.',
    outcome: '24/7 instant responses that resolve routine inquiries on their own.',
    icon: 'MessagesSquare',
  },
  {
    title: 'Appointment Scheduling',
    problem: 'Manual booking and confirmations create back-and-forth and no-shows.',
    solution: 'Automated scheduling, reminders, and confirmations.',
    outcome: 'Fuller calendars with fewer no-shows and zero manual coordination.',
    icon: 'CalendarClock',
  },
  {
    title: 'Business Process Mapping',
    problem: 'You know work is inefficient but can’t see exactly where.',
    solution: 'I document your operations end-to-end to expose the real bottlenecks.',
    outcome: 'A clear blueprint of what to automate first for the biggest impact.',
    icon: 'GitBranch',
  },
  {
    title: 'Reporting Automation',
    problem: 'Weekly reports are assembled by hand from scattered sources.',
    solution: 'Automated data extraction, formatting, and delivery.',
    outcome: 'Consistent reports delivered on schedule with no manual effort.',
    icon: 'BarChart3',
  },
  {
    title: 'Internal Operations Automation',
    problem: 'Handoffs and internal tasks depend on someone remembering to act.',
    solution: 'Trigger-based workflows that move work forward automatically.',
    outcome: 'Smoother operations that run without constant supervision.',
    icon: 'Cog',
  },
  {
    title: 'Prompt Engineering',
    problem: 'AI tools give inconsistent results without the right instructions.',
    solution: 'Carefully engineered prompts tuned to your specific use cases.',
    outcome: 'Reliable, high-quality AI output you can build workflows on.',
    icon: 'Sparkles',
  },
  {
    title: 'AI Consulting',
    problem: 'It’s hard to know where AI actually fits in your business.',
    solution: 'Practical guidance grounded in real operations experience.',
    outcome: 'A focused, realistic automation roadmap — no hype.',
    icon: 'Lightbulb',
  },
]

export const projects = [
  {
    name: 'AI Lead Enrichment & Scoring System',
    problem: 'Sales teams spend hours manually researching and qualifying leads.',
    solution:
      'Built an automated workflow that enriches lead data, scores opportunities, generates personalized outreach drafts, and alerts the sales team the moment high-value leads appear.',
    workflow: ['New lead', 'Enrich data', 'Score & prioritize', 'Draft outreach', 'Notify sales'],
    tools: ['Zapier', 'OpenAI', 'SQL', 'APIs'],
    impact: 'Cut manual lead-qualification time by an estimated 60% — roughly 5 hours saved per week.',
    accent: 'from-emerald-500/15',
  },
  {
    name: 'Facebook Messenger AI Agent',
    problem: 'Businesses struggle to answer customer inquiries quickly enough.',
    solution:
      'Built a context-aware AI chatbot with conversation memory and knowledge retrieval that handles customer conversations automatically.',
    workflow: ['Incoming message', 'Understand intent', 'Retrieve knowledge', 'Respond', 'Escalate if needed'],
    tools: ['n8n', 'Google Gemini', 'Facebook Graph API', 'Webhooks'],
    impact: 'Resolves an estimated 70% of routine inquiries without human intervention — 24/7 support.',
    accent: 'from-teal-500/15',
  },
  {
    name: 'Financial Reporting Automation',
    problem: 'Manual financial reporting consumed 3–4 hours every single week.',
    solution:
      'Automated report extraction, CSV generation, and delivery straight into Asana — replacing a fully manual reporting process.',
    workflow: ['Pull from Xero', 'Format data', 'Generate CSV', 'Deliver to Asana'],
    tools: ['Make', 'Xero', 'CSV', 'Asana'],
    impact: 'Eliminated 3–4 hours of repetitive reporting work per week and improved consistency.',
    accent: 'from-emerald-500/15',
  },
]

export const processSteps = [
  { title: 'Discovery', desc: 'Understand your goals, pain points, and where time is being lost.', icon: 'Search' },
  { title: 'Process Mapping', desc: 'Document your workflow end-to-end to expose the real bottlenecks.', icon: 'GitBranch' },
  { title: 'Solution Design', desc: 'Design the automation architecture around your specific tools.', icon: 'PenTool' },
  { title: 'Build', desc: 'Build the workflows and integrations that do the work for you.', icon: 'Hammer' },
  { title: 'Testing', desc: 'Validate every path and edge case before anything goes live.', icon: 'FlaskConical' },
  { title: 'Deployment', desc: 'Roll the automation into your live operations with confidence.', icon: 'Rocket' },
  { title: 'Optimization', desc: 'Monitor, refine, and expand as your business grows.', icon: 'TrendingUp' },
]

export const techStack = [
  { category: 'AI', items: ['ChatGPT', 'Gemini', 'Claude'] },
  { category: 'Automation', items: ['Zapier', 'Make', 'n8n'] },
  { category: 'CRM', items: ['GoHighLevel'] },
  { category: 'Productivity', items: ['Google Workspace', 'Microsoft 365', 'Notion', 'Asana'] },
  { category: 'Database', items: ['Google Sheets', 'Airtable', 'SQL'] },
]

export const industries = [
  'Marketing Agencies',
  'Coaches',
  'Consultants',
  'Auto Detailing Businesses',
  'Construction Companies',
  'Local Service Businesses',
  'Startups',
  'BPO Operations',
]

export const aboutPoints = [
  'Former Workforce Management Specialist and Real-Time Analyst with 6+ years optimizing operations and performance.',
  'Experienced in process improvement, capacity planning, reporting, workforce analytics, and operational efficiency.',
  'Business owner with hands-on experience managing service operations and logistics.',
  'Now focused on helping businesses automate repetitive work using AI and no-code automation.',
]
