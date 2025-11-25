import nexusAILandingPage from "@/assets/images/nexus-ai-landing-page.png";
import Postman2OpenSpecAPI from "@/assets/images/Postman2OpenSpecAPI.png";
import JobReadyLandingPage from "@/assets/images/job-ready-landing-page.png";

// import lightSaasLandingPage from "@/assets/images/light-saas-landing-page.png";
// import aiStartupLandingPage from "@/assets/images/ai-startup-landing-page.png";

export const portfolioProjects = [
  {
    slug: "nexus-ai",
    company: "Solo Project",
    year: "2025",
    title: "Nexus AI - Chat with your Docs",
    results: [
      "A SaaS Application that allows you to securely store your Documents and chat with them",
      "Uses Langchain, Pinecone and Groq for embeddings.",
      "Uses Paystack for Pricing and Subscriptions",
    ],
    description: "Nexus AI is a powerful SaaS application that revolutionizes how you interact with your documents. Upload your PDFs and have intelligent conversations with them using advanced AI technology. The platform provides secure document storage and leverages cutting-edge AI models to understand context and provide accurate responses to your queries.",
    technologies: ["Next.js", "TypeScript", "Langchain", "Pinecone", "Groq", "Paystack", "TailwindCSS"],
    challenges: "Implementing efficient document chunking and embedding strategies to ensure accurate and contextually relevant responses from the AI.",
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
    title: "Ajira365",
    results: [
      "#1 Career-readiness platform for Students & Young Professionals.",
      "Conduct AI-powered mock interviews to stay on top",
      "Compete and get ranked in Global Leaderboards",
    ],
    description: "Ajira365 is the ultimate career-readiness platform designed for students and young professionals. It offers AI-powered mock interviews to help users practice and improve their interview skills. With global leaderboards, users can compete with peers and track their progress, making career preparation engaging and effective.",
    technologies: ["Next.js", "TypeScript", "AI/ML", "TailwindCSS", "PostgreSQL"],
    challenges: "Creating a realistic AI interview experience that adapts to different career paths and provides meaningful feedback.",
    link: "https://app.ajira365.com/",
    image: JobReadyLandingPage,
    videoUrl: "", // Add your YouTube video URL here
    alt: "Screenshot of the Ajira 365 Landing Page",
  },
  {
    slug: "postman-to-openapi",
    company: "Team Project",
    year: "2024",
    title: "Postman to OpenAPI Converter",
    results: [
      "Converts Postman Collections (v2.x) to OpenAPI 3.0 Specifications.",
      "Preserves request metadata (descriptions, examples, etc.)",
      "Outputs in either YAML or JSON format",
    ],
    description: "A powerful tool that seamlessly converts Postman Collections (v2.x) into OpenAPI 3.0 Specifications. This converter helps teams transition from Postman to OpenAPI standards while preserving all important metadata, examples, and documentation. It supports both YAML and JSON output formats for maximum flexibility.",
    technologies: ["JavaScript", "Node.js", "Postman API", "OpenAPI Specification", "HTML/CSS"],
    challenges: "Ensuring accurate mapping between Postman's collection format and OpenAPI specification while maintaining all metadata integrity.",
    link: "https://postmantoopenapiconverter.netlify.app/",
    githubLink:
      "https://github.com/Technical-writing-mentorship-program/PostmanToOpenAPIConverter",
    image: Postman2OpenSpecAPI,
    videoUrl: "", // Add your YouTube video URL here
    alt: "Screenshot of the Light Saas Landing Page",
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
