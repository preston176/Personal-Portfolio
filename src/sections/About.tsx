import Card from "@/components/Card";
import SectionHeader from "@/components/SectionHeader";
import { getHashnodeArticles } from "@/lib/hashnode";
import { ArticleCard } from "@/components/ArticleCard";

export const AboutSection = async () => {
  const articles = await getHashnodeArticles("codewithpres.hashnode.dev", 3);

  return (
    <section className="py-20 lg:py-28" id="about">
      <div className="container">
        <SectionHeader
          eyebrow="About Me"
          title="I Ship Fast, Automate Everything"
          description="From idea to production in weeks, not months"
        />

        {/* About Content */}
        <div className="mt-12 max-w-3xl mx-auto">
          <Card className="p-8 md:p-10">
            <p className="text-white/80 text-lg leading-relaxed mb-6">
              I don&apos;t just write code—I ship products and automate workflows.
              In 3 years, I&apos;ve shipped 3 production SaaS apps (AI document chat, career prep platform, VS Code extension)
              that serve 1,500+ users. I build systems that run themselves: AI pipelines, automated deployments, and tools that eliminate manual work.
            </p>

            <div className="grid md:grid-cols-2 gap-6 my-8">
              <div className="space-y-3">
                <h3 className="text-xl font-semibold text-green-400 mb-3">What I Automate</h3>
                <div className="space-y-2 text-white/80">
                  <p><strong className="text-white">AI Workflows:</strong> Document processing, RAG pipelines, LLM integrations</p>
                  <p><strong className="text-white">Development:</strong> CI/CD, Docker deployments, Git automation</p>
                  <p><strong className="text-white">User Flows:</strong> Payments, auth, email sequences, data sync</p>
                  <p><strong className="text-white">Productivity:</strong> VS Code extensions, dev tooling, context management</p>
                </div>
              </div>

              <div className="space-y-3">
                <h3 className="text-xl font-semibold text-green-400 mb-3">What I&apos;ve Shipped</h3>
                <ul className="space-y-2 text-white/80">
                  <li className="flex items-start gap-2">
                    <span className="text-green-400 mt-1">✓</span>
                    <span>AI document chat SaaS (500+ docs processed)</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-green-400 mt-1">✓</span>
                    <span>Career prep platform (1,000+ interviews)</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-green-400 mt-1">✓</span>
                    <span>VS Code extension (94+ installations)</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-green-400 mt-1">✓</span>
                    <span>Open-source developer tooling</span>
                  </li>
                </ul>
              </div>
            </div>

            <div className="border-t border-white/10 pt-6">
              <p className="text-white/80">
                I write about <strong className="text-white">shipping fast</strong>, <strong className="text-white">AI automation</strong>,
                and <strong className="text-white">developer productivity</strong> on FreeCodeCamp and Hashnode—sharing
                how to build and deploy real products, not just code.
              </p>
            </div>
          </Card>
        </div>

        <div className="mt-20 flex flex-col gap-8">
          {/* Articles from Hashnode */}
          <div className="space-y-6">
            <h3 className="text-2xl md:text-3xl font-bold text-center">Latest Articles</h3>


            {articles.length > 0 ? (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {articles.map((article) => (
                  <ArticleCard key={article.id} article={article} />
                ))}
              </div>
            ) : (
              <Card className="p-6 text-center text-gray-400">
                <p>No articles found. Check back soon!</p>
              </Card>
            )}

            {/* Read More Buttons */}
            <div className="flex flex-wrap items-center justify-center gap-4 pt-20">
              <a
                href="https://codewithpres.hashnode.dev/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 border border-white/15 px-6 h-12 rounded-xl transition hover:bg-gray-200 hover:text-gray-900 font-semibold"
              >
                Read More on Hashnode
                <svg
                  className="w-4 h-4"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M14 5l7 7m0 0l-7 7m7-7H3"
                  />
                </svg>
              </a>
              <a
                href="https://www.freecodecamp.org/news/author/preston176/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 border border-white bg-white text-gray-900 h-12 px-6 rounded-xl transition hover:bg-gray-200 font-semibold"
              >
                Read More on FreeCodeCamp
                <svg
                  className="w-4 h-4"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M14 5l7 7m0 0l-7 7m7-7H3"
                  />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
