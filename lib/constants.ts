import nexusAILandingPage from "@/assets/images/nexus-ai-landing-page.png";
import Postman2OpenSpecAPI from "@/assets/images/Postman2OpenSpecAPI.png";
import JobReadyLandingPage from "@/assets/images/job-ready-landing-page.png";

// import lightSaasLandingPage from "@/assets/images/light-saas-landing-page.png";
// import aiStartupLandingPage from "@/assets/images/ai-startup-landing-page.png";

export const portfolioProjects = [
  {
    company: "Solo Project",
    year: "2025",
    title: "Nexus AI - Chat with your Docs",
    results: [
      "A SaaS Application that allows you to securely store your Documents and chat with them",
      "Uses Langchain, Pinecone and Groq for embeddings.",
      "Uses Paystack for Pricing and Subscriptions",
    ],
    link: "https://nexusai-pdf.vercel.app",
    image: nexusAILandingPage,
    githubLink: "https://github.com/preston176/nexusAI",
    alt: "Screenshot of the NexusAI landing page",
  },
  {
    company: "Personal Project",
    year: "2025",
    title: "Ajira365",
    results: [
      "#1 Career-readiness platform for Students & Young Professionals.",
      "Conduct AI-powered mock interviews to stay on top",
      "Compete and get ranked in Global Leaderboards",
    ],
    link: "https://ajira-365.vercel.app/",
    // githubLink: "https://github.com/Technical-writing-mentorship-program/PostmanToOpenAPIConverter",
    image: JobReadyLandingPage,
    alt: "Screenshot of the Ajira 365 Landing Page",
  },
  {
    company: "Team Project",
    year: "2024",
    title: "Postman to OpenAPI Converter",
    results: [
      "Converts Postman Collections (v2.x) to OpenAPI 3.0 Specifications.",
      "Preserves request metadata (descriptions, examples, etc.)",
      "Outputs in either YAML or JSON format",
    ],
    link: "https://postmantoopenapiconverter.netlify.app/",
    githubLink:
      "https://github.com/Technical-writing-mentorship-program/PostmanToOpenAPIConverter",
    image: Postman2OpenSpecAPI,
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
