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
          title="Crafting Code with Purpose"
          description="Learn more about who I am and what I do"
        />

        <div className="mt-20 flex flex-col gap-8">
          {/* Articles from Hashnode */}
          <div className="space-y-6">
            <div className="flex items-center justify-between">
              <h3 className="text-2xl font-bold">Recent Articles</h3>
            </div>

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
            <div className="flex flex-wrap items-center justify-center gap-4 mt-8">
              <a
                href="https://codewithpres.hashnode.dev/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3 bg-emerald-500 hover:bg-emerald-600 text-white font-semibold rounded-lg transition-all duration-300 hover:scale-105"
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
                className="inline-flex items-center gap-2 px-6 py-3 bg-blue-500 hover:bg-blue-600 text-white font-semibold rounded-lg transition-all duration-300 hover:scale-105"
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
