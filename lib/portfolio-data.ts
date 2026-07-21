export const profile = {
  name: 'Mark Evander J. Bayona',
  shortName: 'Mark Bayona',
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
  { label: 'Testimonials', href: '#testimonials' },
  { label: 'Contact', href: '#contact' },
]

export const services = [
  {
    title: 'AI Workflow & Operations Automation',
    problem: 'Repetitive tasks, handoffs, and weekly reports eat hours and depend on someone remembering to act.',
    solution: 'I map the process end-to-end, then automate it, including data pulls, formatting, delivery, and internal handoffs.',
    outcome: 'Routine work runs itself, consistently, without supervision.',
    icon: 'Workflow',
  },
  {
    title: 'AI Chatbots & Customer Response',
    problem: 'Customers message at all hours, and slow replies cost bookings and sales.',
    solution: 'Context-aware chatbots with memory and a grounded knowledge base, connected to your real booking and escalation flow.',
    outcome: 'Instant, accurate responses 24/7, with humans looped in only when needed.',
    icon: 'MessagesSquare',
  },
  {
    title: 'CRM & Lead Automation (GoHighLevel)',
    problem: 'Leads slip through the cracks: unenriched, unprioritized, and contacted too late.',
    solution: 'Pipelines, tagging, enrichment, and nurture sequences that capture, score, and route every lead automatically.',
    outcome: 'Every lead answered fast; your team spends time closing, not researching.',
    icon: 'Users',
  },
  {
    title: 'Booking & Scheduling Systems',
    problem: 'Manual booking creates back-and-forth, missed reminders, and no-shows.',
    solution: 'Automated scheduling, confirmations, reminders, and cancellation handling, all synced to one source of truth.',
    outcome: 'Fuller calendars, fewer no-shows, zero manual coordination.',
    icon: 'CalendarClock',
  },
  {
    title: 'Process Mapping & AI Consulting',
    problem: 'You know work is inefficient, but you\'re not sure where the problem is or where AI actually fits.',
    solution: 'I document your operations end-to-end, expose the real bottlenecks, and build a realistic automation roadmap.',
    outcome: 'A clear blueprint of what to automate first for the biggest impact. No hype.',
    icon: 'GitBranch',
  },
]

export const projects = [
  {
    name: 'Clinic Booking & AI Messenger Automation System',
    problem: 'A skincare clinic managed bookings by hand: appointments got logged inconsistently, reminders were easy to forget, and Messenger inquiries could sit unanswered for hours.',
    solution:
      'Built a connected system: an AI chatbot that answers Messenger inquiries and books appointments using conversation memory and a grounded knowledge base, paired with a Calendly pipeline that logs every booking, sends SMS confirmations and reminders, updates records on cancellation, and emails staff at each step.',
    workflow: ['New inquiry or booking', 'AI Agent / Calendly capture', 'Log to Google Sheets', 'Notify staff', 'SMS confirmation & reminder'],
    tools: ['n8n', 'Google Gemini', 'Facebook Graph API', 'Calendly API', 'Google Sheets', 'Semaphore SMS', 'Gmail'],
    impact: 'Designed to remove manual booking follow-up entirely. Staff get instant visibility into every new booking, cancellation, and customer inquiry, with no appointment relying on someone remembering to log it.',
    accent: 'from-sky-500/15',
  },
  {
    name: 'Smart Lead Routing & AI Follow-Up',
    problem: 'Every new lead required manual research, prioritization, and a hand-written first reply, slow enough that hot leads went cold before anyone responded.',
    solution:
      'Built a Zapier workflow that enriches each form submission with company and contact data via Apollo, then routes leads by priority: high-priority leads get logged to Google Sheets with an instant Slack alert and an AI-drafted follow-up email, while lower-priority leads route straight to a sales notification.',
    workflow: ['Form submission', 'Enrich via Apollo', 'Route by priority', 'Slack alert + log', 'AI-drafted email sent'],
    tools: ['Zapier', 'Apollo', 'AI by Zapier', 'Google Sheets', 'Slack', 'Gmail'],
    impact: 'Designed to turn a raw form fill into an enriched, prioritized, personally answered lead within minutes, with no human touch needed before the first reply.',
    accent: 'from-teal-500/15',
  },
  {
    name: 'Financial Reporting Automation',
    problem: 'Every week, financial reporting meant manually logging into Xero, exporting transaction data, formatting it, and attaching it back into Asana for the team to review, an easy step to forget or fall behind on.',
    solution:
      'Built a Make workflow that kicks off automatically the moment a task is marked complete in Asana. It pulls the latest transaction data from Xero, logs it into Google Sheets, compiles it into a report, attaches that report back to the Asana task, then clears the sheet so it’s ready for next time.',
    workflow: ['Asana task completed', 'Pull data from Xero', 'Log to Google Sheets', 'Compile & attach report to Asana', 'Clear sheet for next run'],
    tools: ['Make', 'Xero', 'Google Sheets', 'Asana'],
    impact: 'Built to replace a manual weekly export-and-format routine with one that runs itself the moment a task is marked done in Asana.',
    accent: 'from-emerald-500/15',
  },
  {
    name: 'AI Document Processing Workflow',
    problem: 'Incoming email attachments pile up and require manual sorting, renaming, and filing.',
    solution:
      'Built a workflow that analyzes incoming email attachments with AI, generates descriptive filenames, files them into Google Drive, and logs everything automatically with built-in notifications.',
    workflow: ['Incoming attachment', 'Analyze with AI', 'Generate filename', 'Upload to Drive', 'Log & notify'],
    tools: ['Make', 'OpenAI', 'Google Drive', 'Google Sheets'],
    impact: 'Designed to remove manual sorting and filing work entirely. Once it’s running, documents get organized and logged without anyone touching them.',
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
  {
    category: 'AI',
    items: [
      { name: 'ChatGPT', description: "OpenAI's AI chatbot, used here for drafting content and powering AI agent logic." },
      { name: 'Gemini', description: "Google's AI model, used to power chatbots and understand customer messages." },
      { name: 'Claude', description: "Anthropic's AI model, used for reasoning-heavy automation and content generation." },
    ],
  },
  {
    category: 'Automation',
    items: [
      { name: 'n8n', description: 'An open-source workflow automation tool for building custom, self-hosted AI agents.' },
      { name: 'Zapier', description: 'A no-code platform that connects apps and automates tasks between them.' },
      { name: 'Make', description: 'A visual automation platform for building multi-step workflows between apps.' },
    ],
  },
  {
    category: 'CRM & Database',
    items: [
      { name: 'GoHighLevel', description: 'An all-in-one CRM for managing pipelines, campaigns, and client communication.' },
      { name: 'Google Sheets', description: 'A spreadsheet tool used as a lightweight database for logging automation data.' },
    ],
  },
  {
    category: 'Integrations',
    items: [
      { name: 'Calendly', description: 'Scheduling software used to automate bookings, confirmations, and reminders.' },
      { name: 'Slack', description: 'Team messaging app, used here to send instant alerts when something needs attention.' },
      { name: 'Xero', description: 'Cloud accounting software used to pull financial and transaction data automatically.' },
      { name: 'Apollo', description: 'A sales intelligence tool used to enrich leads with company and contact data.' },
      { name: 'Gmail', description: 'Email platform used to send automated notifications and follow-ups.' },
      { name: 'Google Drive', description: 'Cloud storage used to automatically file and organize processed documents.' },
      { name: 'Facebook Graph API', description: "Meta's API used to connect Messenger conversations into automated workflows." },
    ],
  },
  {
    category: 'Productivity',
    items: [
      { name: 'Google Workspace', description: "Google's productivity suite (Docs, Sheets, Drive), used as a hub for automated data." },
      { name: 'Microsoft 365', description: "Microsoft's productivity suite, used for documents, spreadsheets, and collaboration." },
      { name: 'Notion', description: 'A workspace tool used for documentation, planning, and process mapping.' },
      { name: 'Asana', description: 'A project management tool used to deliver reports and track automated tasks.' },
    ],
  },
  {
    category: 'Content & Design',
    items: [
      { name: 'DaVinci Resolve', description: 'Video editing software used to produce and edit social media content for WadeCo Auto Aesthetics.' },
      { name: 'CapCut', description: 'Mobile video editor used for quick-turnaround social media content.' },
      { name: 'Canva', description: 'Design tool used for social media graphics, carousels, and educational content.' },
    ],
  },
]

export const industries = [
  {
    name: 'Clinics & Wellness',
    description: 'Booking systems, appointment reminders, and AI-handled patient inquiries.',
  },
  {
    name: 'Local Service Businesses',
    description: 'Lead follow-up, scheduling, and reporting that runs without anyone chasing it.',
  },
  {
    name: 'BPO & Operations Teams',
    description: 'SLA reporting, schedule adherence alerts, and workflow documentation, automated end-to-end.',
  },
]

export const aboutPoints = [
  'Monitored real-time performance and staffing for 150+ agent teams as a Workforce Management Specialist and Real-Time Analyst.',
  'Owned and co-owned three service businesses: a cyber café, an auto detailing shop, and a mobile auto aesthetics service.',
  'Trained in No-Code Automation (Zapier, Make, n8n), Prompt Engineering, Process Mapping, and GoHighLevel CRM at Tara AI Studios.',
]

export const testimonials = [
  {
    quote:
      'Mark was someone I could rely on to stay composed even during high-pressure situations. He consistently monitored our real-time performance, communicated updates clearly, and helped the team make quick decisions to keep our service levels on track for the Ryder account. He was dependable, proactive, and always willing to step in whenever the operation needed support.',
    name: 'Joshua Musico',
    role: 'Senior Manager',
    company: 'Continuum Global Solutions',
  },
  {
    quote:
      "As my Co-Founder at WadeCo Auto Aesthetics PH, Mark has been instrumental in building our business from the ground up. He takes ownership of our day-to-day operations, keeping service schedules, mobile routing, equipment readiness, and resource allocation coordinated so we consistently deliver a great customer experience. He's someone I can rely on for business decisions and improving our processes, and his commitment has been key to our growth and stability.",
    name: 'Iriz Jeco Antigua',
    role: 'Co-Founder',
    company: 'WadeCo Auto Aesthetics PH',
  },
  {
    quote:
      "Mark was more than just a business partner. He was someone I could rely on to keep things moving. Whether it was coordinating with suppliers, managing inventory, or making sure customers were taken care of, he always approached problems with a practical mindset. He naturally looks for ways to make work more efficient, and I think that's what makes him well suited for building automation solutions today.",
    name: 'Paul Domenic Francisco',
    role: 'Co-owner',
    company: 'ZF Auto Spa Tint and LEDs',
  },
  {
    quote:
      "Mark worked under my supervision as a Real-Time Analyst and was an exceptionally reliable, dependable member of our workforce management team. He consistently delivered high-quality work with great attention to detail, regardless of the task or deadline. Beyond his work ethic, he was always willing to support colleagues and contribute to a positive, collaborative environment. It's been a privilege working alongside someone I trust completely.",
    name: 'Jerry Gajardo',
    role: 'Team Leader',
    company: 'Continuum Global Solutions',
  },
  {
    quote:
      "I supervised Mark during his assignment as a Project Site Engineer at Asiawide Negrense Construction Corporation. He consistently demonstrated professionalism in coordinating site activities, monitoring progress, and resolving on-site issues to keep work on schedule. He worked effectively with the general contractor's team, subcontractors, and field personnel to keep manpower, materials, and daily operations properly coordinated. His reliability and commitment to quality made him a valuable member of our team.",
    name: 'Jason Bohol',
    role: 'Project-in-Charge Engineer',
    company: 'Asiawide Negrense Construction Corporation',
  },
]
