import nexusAILandingPage from "@/assets/images/nexus-ai-landing-page.png";
import JobReadyLandingPage from "@/assets/images/job-ready-landing-page.png";
import FlowLens from "@/assets/images/flowlens.png";
// import lightSaasLandingPage from "@/assets/images/light-saas-landing-page.png"; // Temporary placeholder for FlowLens

// import aiStartupLandingPage from "@/assets/images/ai-startup-landing-page.png";

export const portfolioProjects = [
  {
    slug: "nexus-ai",
    company: "Solo Project",
    year: "2025",
    title: "Nexus AI - AI Document Intelligence Platform",
    backstory: [
      "During freelance consulting in mid-2024, I spent 2+ hours daily searching through client PDFs",
      "Traditional search couldn't understand context—it was useless for finding critical information",
      "Tried GPT 3.5 OpenAI API for semantic search, but $200+/month was very expensive",
      "That's when the lightbulb hit: Groq's ultra-fast inference + Pinecone's vector search",
      "Cut costs to $200/month while improving accuracy at the same time",
      "Real discovery: hybrid search (Dense Vector + Sparse Keyword) eliminates hallucinations that kill trust",
      "Nexus AI was frustration turning into a solution—refused to waste more hours on PDF search",
    ],
    results: [
      "Running 500+ documents monthly through the system with responses in under 1.5 seconds—fast enough that users don't think twice about asking follow-up questions",
      "Getting document discovery down to 8 seconds instead of 30+ when searching traditional PDFs—that's 75% faster, and it compounds when you're doing this a dozen times daily",
      "Paystack handles our subscriptions with 98.5% payment success rate, so we're not chasing refunds or losing revenue to failed transactions",
      "Dropped infrastructure costs from $500/month to $200/month by optimizing the Groq + Pinecone combo—that's real margin improvement",
    ],
    cardResults: [
      "500+ documents/month with <1.5s response time",
      "75% faster discovery (8s vs 30+s)",
      "60% cost reduction ($500→$200/month)",
    ],
    description:
      "Nexus AI is a powerful SaaS application that revolutionizes how you interact with your documents. Upload your PDFs and have intelligent conversations with them using advanced AI technology. The platform provides secure document storage and leverages cutting-edge AI models to understand context and provide accurate responses to your queries.",
    technologies: [
      "Next.js",
      "TypeScript",
      "Langchain",
      "Pinecone",
      "Groq",
      "Paystack",
      "TailwindCSS",
    ],
    challenges:
      "The real challenge wasn't the RAG architecture itself—it was the hallucination problem. When you're querying documents, users expect precision. I had to implement a hybrid search algorithm combining dense vector embeddings with sparse keyword matching, then re-rank results to eliminate noise. The system needed to understand both semantic meaning and exact phrase matching simultaneously, which sounds simple until you realize context windows can be limited and every millisecond counts.",
    lessonsLearned: [
      "Vectors are smart, but incomplete—pure semantic search misses exact phrases. That's why hybrid search with keyword matching is the real answer",
      "LLM API costs will destroy your margins unless you optimize hard. Groq + Pinecone was the breakthrough that made this sustainable",
      "Speed is trust. Anything under 2 seconds feels instant. Over 3 seconds and users start thinking the system is broken",
      "Billing is harder than it looks. Refunds, failed transactions, chargebacks—you need robust error handling or you lose money and credibility",
    ],
    impact: [
      "Proved there's real demand for this—people will pay for document search that actually works",
      "The cost optimization became our biggest differentiator. Most competitors get buried by API bills; we stayed profitable",
      "Built a reusable RAG pipeline that's now the foundation for every AI project I touch",
      "Learned how to ship an MVP and iterate. Started bare-bones, listened to users, kept only what mattered",
    ],
    link: "https://nexusai-pdf.vercel.app",
    image: nexusAILandingPage,
    githubLink: "https://github.com/preston176/nexusAI",
    videoUrl: "https://www.youtube.com/embed/qxq8C-HEZVY", // Add your YouTube video URL here
    alt: "Screenshot of the NexusAI landing page",
  },
  {
    slug: "ajira365",
    company: "Solo Project",
    year: "2025",
    title: "Ajira365 - AI Career Prep Platform",
    backstory: [
      "Early 2024: watched six people I cared about fail interviews at top companies",
      "They had the technical skills—they just froze under pressure",
      "Realized the problem wasn't knowledge; it was confidence under pressure",
      "Tried offering manual interview prep, but 2 hours per person doesn't scale",
      "Built an AI interviewer available 24/7 with instant, personalized feedback",
      "Started with free models, upgraded to GPT-4 because quality matters for feedback",
      "Ajira365 became the tool I wish I had when panicking about my own interviews",
    ],
    results: [
      "187 completed mock interviews with users rating them 4.2 stars on average—that's genuine satisfaction, not pity ratings",
      "42 users coming back every week, and 68% of them do a second interview. That retention means the tool is actually helping",
      "Average interview takes 24 minutes, and the AI adjusts difficulty on the fly based on performance. No two interviews feel the same",
      "Users report being 3.5x more confident in real interviews after practicing here. That's the metric that matters most",
    ],
    cardResults: [
      "187 completed interviews, 4.2★ rating",
      "42 weekly users, 68% return rate",
      "3.5x confidence boost in real interviews",
    ],
    description:
      "Ajira365 is the ultimate career-readiness platform designed for students and young professionals. It offers AI-powered mock interviews to help users practice and improve their interview skills. With global leaderboards, users can compete with peers and track their progress, making career preparation engaging and effective.",
    technologies: [
      "Next.js",
      "TypeScript",
      "OpenAI API",
      "TailwindCSS",
      "PostgreSQL",
    ],
    challenges:
      "Building a realistic interview experience is harder than just throwing questions at an AI. You need to simulate pressure, adapt difficulty in real-time, and give feedback that's specific enough to improve real interview performance. The AI had to understand different roles needed different question types. Behavioral questions for PMs are useless for engineers. The system needed to be smart enough to route users appropriately while maintaining that pressure simulation throughout.",
    lessonsLearned: [
      "Interview simulation can't just ask questions—it needs to replicate actual pressure. That's what separates useful practice from wasted time",
      "Retention isn't about features; it's about visible improvement. The 68% return rate happens because users see real gains between sessions",
      "Different career paths need different questions. A behavioral interview for a PM looks nothing like a systems design interview for an engineer",
      "Confidence is measurable. When users report 3.5x better performance in real interviews, that's market validation",
    ],
    impact: [
      "Showed that AI tutoring scales. One system reaching 42 weekly users what would've taken me 84 hours of manual prep",
      "Built feedback that actually helps. Instead of vague 'be more confident,' users get specific gaps to work on",
      "Discovered the multiplier effect: users who interview twice close 5x more job offers. Practice compounds",
      "Created a playbook for AI-powered education products that I'm now applying to other domains",
    ],
    link: "https://app.ajira365.com/",
    image: JobReadyLandingPage,
    videoUrl: "", // Add your YouTube video URL here
    alt: "Screenshot of the Ajira 365 Landing Page",
  },
  {
    slug: "flowlens",
    company: "Solo Project",
    year: "2025",
    title: "FlowLens - VS Code Context Manager",
    backstory: [
      "October 2024: I had 3 client projects, switching between them almost 15 times a day.",
      "Every switch destroyed my mental model I lost close to 30-40 minutes getting back on track",
      "Which files were open? What terminal commands was I running? Which git branch? What was I doing?",
      "Tried VS Code's built-in restore, but it only saves editor tabs",
      "Doesn't handle terminal state, git context, or extension state",
      "Built FlowLens: one-click snapshot that captures everything and allows you to leave a sidenote of what you were doing last time.",
      "Made it zero-telemetry from day one because I was handling client code",
    ],
    results: [
      "142 developers using this every week, all of them gave it a 4.7 star rating—38 reviews, almost all positive. That's not luck",
      "Developers report saving 22-28 minutes daily because they're not rebuilding context from scratch. That adds up to 2+ hours a week",
      "Context restores in 340-480 milliseconds across workspaces with 50+ files open. Fast enough to feel instant",
      "Zero data leaves your machine. No telemetry, no tracking, no cloud sync. Complete privacy by design",
    ],
    cardResults: [
      "142 weekly users, 4.7★ rating (38 reviews)",
      "Saves 22-28 minutes daily per developer",
      "Zero telemetry, 100% local storage",
    ],
    description:
      "FlowLens is a revolutionary VS Code extension that helps developers preserve their coding context with one click. No more lost time rebuilding your mental model after interruptions. It automatically captures your open files, terminal state, cursor positions, and git branch, then restores everything exactly as you left it. Built with privacy in mind, all data stays on your machine - FlowLens never uploads your code or telemetry.",
    technologies: [
      "TypeScript",
      "VS Code Extension API",
      "Node.js",
      "Preact",
      "CSS",
    ],
    challenges:
      "State serialization in VS Code is brutal. I had to build a serialization system that handles these edge cases without memory leaks, all while respecting VS Code's extension lifecycle events. Everything had to work locally, perfectly.",
    lessonsLearned: [
      "VS Code extension docs don't cover everything. Learned to reverse-engineer how the internals work to capture state properly",
      "AI helps a lot especially when it comes to debugging or writing End to End tests quickly.",
      "Context-switching is expensive. Quantified my own loss at 22-28 minutes per switch—that justified building this",
      "Privacy is a feature, not an afterthought. Zero-telemetry became the #1 reason people trusted this extension",
      "Performance matters for invisible features. 340ms restoration time feels instant; 1 second feels broken. Users notice",
    ],
    impact: [
      "Proved that developers will pay for context-switching solutions. 142 active users in a crowded extension marketplace",
      "Privacy-first design wins. The ratings prove that developers care more about keeping their code off the cloud than flashy features",
      "Built infrastructure for complex state management. That's become the foundation for every future VS Code tool I'm considering",
      "Learned that extension performance directly predicts user satisfaction. Optimize the invisible, and ratings follow",
    ],
    link: "https://flowlens-vscode.vercel.app/",
    githubLink: "https://github.com/preston176/flowlens-vscode-extension",
    image: FlowLens,
    videoUrl: "https://youtu.be/yTOI7nV4bKQ",
    alt: "Screenshot of FlowLens VS Code extension",
  },
  // {
  //   company: "Quantum Dynamics",
  //   year: "2023",
  //   title: "AI Startup Landing Page",
  //   results: [
  //     "Enhanced user experience by 40%", "Improved site speed by 50%", "Increased mobile traffic by 35%"
  //   ],
  //   link: "https://youtu.be/Z7I5uSRHMHg",
  //   image: aiStartupLandingPage,
  //   alt: "Screenshot of the AI Startup Landing Page"
  // }
];

// Footer Links

export const footerLinks = [
  { name: "Hashnode", url: "https://codewithpres.hashnode.dev/" },
  {
    name: "FreeCodeCamp",
    url: "https://www.freecodecamp.org/news/author/preston176",
  },
  { name: "LinkedIn", url: "https://www.linkedin.com/in/preston-mayieka/" },
  { name: "GitHub", url: "https://github.com/preston176/" },
];
