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
    results: [
      "500+ documents processed with <2s average query response time",
      "Reduced document search time by 75% using RAG architecture",
      "Integrated Paystack subscription billing processing recurring payments",
      "Built with Next.js, LangChain, Pinecone, and Groq for 60% cost optimization",
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
      "Implementing efficient document chunking and embedding strategies to ensure accurate and contextually relevant responses from the AI.",
    link: "https://nexusai-pdf.vercel.app",
    image: nexusAILandingPage,
    githubLink: "https://github.com/preston176/nexusAI",
    videoUrl: "https://www.youtube.com/embed/qxq8C-HEZVY", // Add your YouTube video URL here
    alt: "Screenshot of the NexusAI landing page",
  },
  {
    slug: "ajira365",
    company: "Personal Project",
    year: "2025",
    title: "Ajira365 - AI Career Prep Platform",
    results: [
      "1,000+ mock interviews conducted with AI-powered feedback system",
      "Global leaderboard tracking 300+ active users across 15 countries",
      "Built full-stack platform with Next.js, TypeScript, and PostgreSQL",
      "Integrated real-time interview simulation with adaptive AI responses",
    ],
    description:
      "Ajira365 is the ultimate career-readiness platform designed for students and young professionals. It offers AI-powered mock interviews to help users practice and improve their interview skills. With global leaderboards, users can compete with peers and track their progress, making career preparation engaging and effective.",
    technologies: [
      "Next.js",
      "TypeScript",
      "AI/ML",
      "TailwindCSS",
      "PostgreSQL",
    ],
    challenges:
      "Creating a realistic AI interview experience that adapts to different career paths and provides meaningful feedback.",
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
    results: [
      "94+ active installations with 4.8★ rating on VS Code Marketplace",
      "Saves developers 30+ minutes daily by restoring full coding context in <500ms",
      "Zero-telemetry, privacy-first architecture with 100% local storage",
      "Handles 50+ file workspaces with custom state serialization",
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
      "Building a seamless context restoration system that works across different workspace configurations while maintaining zero-latency performance and ensuring complete privacy. Managing the complexity of capturing and restoring VS Code's internal state without disrupting the developer's workflow.",
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
