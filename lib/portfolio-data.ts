export const profile = {
  name: 'Mark Evander J. Bayona',
  title: 'AI & Business Systems Specialist | Workflow Automation Consultant',
  email: 'markevanderbayona@gmail.com',
  linkedin: 'linkedin.com/in/markbayona',
  linkedinUrl: 'https://linkedin.com/in/markbayona',
  upworkUrl: 'https://www.upwork.com/freelancers/~0130f36d461a823fdd?mp_source=share',
  onlineJobsUrl: 'https://v2.onlinejobs.ph/jobseekers/info/4486544',
  location: 'Bulacan, Philippines',
}

export const nav = [
  { label: 'About', href: '#about' },
  { label: 'Services', href: '#services' },
  { label: 'Work', href: '#work' },
  { label: 'Gallery', href: '#gallery' },
  { label: 'Process', href: '#process' },
  { label: 'Stack', href: '#stack' },
  { label: 'Contact', href: '#contact' },
]

export const stats = [
  {
    value: 1.5,
    suffix: '+',
    label: 'Years in Workforce Management',
  },
  {
    value: 100,
    suffix: '%',
    label: 'Focused on Business Efficiency',
  },
]

export const highlights = [
  {
    icon: 'BriefcaseBusiness',
    value: '1.5+',
    title: 'Years in Workforce Management',
  },
  {
    icon: 'Bot',
    value: 'AI',
    title: 'Automation & Business Systems',
  },
  {
    icon: 'Workflow',
    value: 'No-Code',
    title: 'Zapier, Make & n8n',
  },
  {
    icon: 'Zap',
    value: '100%',
    title: 'Focused on Business Efficiency',
  },
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
    name: 'Facebook Messenger AI Agent',
    problem: 'Businesses struggle to answer customer inquiries quickly enough.',
    solution:
      'Built a context-aware AI chatbot with conversation memory and knowledge retrieval that handles customer conversations automatically.',
    workflow: ['Incoming message', 'Understand intent', 'Retrieve knowledge', 'Respond', 'Escalate if needed'],
    tools: ['n8n', 'Google Gemini', 'Facebook Graph API', 'Webhooks'],
    impact: 'Handles routine customer inquiries automatically, day or night, without waiting on a live agent.',
    accent: 'from-teal-500/15',
  },
  {
    name: 'Financial Reporting Automation',
    problem: 'Manual financial reporting was time-consuming and repeated every single week.',
    solution:
      'Automated report extraction, CSV generation, and delivery straight into Asana — replacing a fully manual reporting process.',
    workflow: ['Pull from Xero', 'Format data', 'Generate CSV', 'Deliver to Asana'],
    tools: ['Make', 'Xero', 'CSV', 'Asana'],
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
  { category: 'Database', items: ['Google Sheets', 'Airtable'] },
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
  'Former Workforce Management Specialist and Real-Time Analyst with hands-on experience optimizing operations and performance for 150+ agent teams.',
  'Experienced in process improvement, capacity planning, reporting, workforce analytics, and operational efficiency.',
  'Business owner with hands-on experience managing service operations and logistics.',
  'Now focused on helping businesses automate repetitive work using AI and no-code automation.',
]