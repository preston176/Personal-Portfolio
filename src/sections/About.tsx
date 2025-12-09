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
          title="Building Products That Scale"
          description="3+ years turning ideas into production applications"
        />

        {/* About Content */}
        <div className="mt-12 max-w-3xl mx-auto">
          <Card className="p-8 md:p-10">
            <p className="text-white/80 text-lg leading-relaxed mb-6">
              I&apos;m a full-stack engineer who builds and ships production-grade applications.
              In 3 years, I&apos;ve gone from writing my first React component to architecting
              AI-powered SaaS platforms serving real users.
            </p>

            <div className="grid md:grid-cols-2 gap-6 my-8">
              <div className="space-y-3">
                <h3 className="text-xl font-semibold text-green-400 mb-3">Technical Stack</h3>
                <div className="space-y-2 text-white/80">
                  <p><strong className="text-white">Frontend:</strong> React, Next.js, TypeScript, TailwindCSS</p>
                  <p><strong className="text-white">Backend:</strong> Node.js, PostgreSQL, REST APIs</p>
                  <p><strong className="text-white">AI/ML:</strong> LangChain, RAG pipelines, Pinecone</p>
                  <p><strong className="text-white">DevOps:</strong> Vercel, Docker, Git workflows</p>
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
                I share technical knowledge through articles on <strong className="text-white">FreeCodeCamp</strong> and{" "}
                <strong className="text-white">Hashnode</strong>, covering full-stack development,
                AI integration, and developer productivity.
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
