import Card from "@/components/Card";
import Image from "next/image";
import Link from "next/link";
import { HashnodeArticle } from "@/lib/hashnode";
import { FiClock, FiCalendar } from "react-icons/fi";

interface ArticleCardProps {
  article: HashnodeArticle;
}

export const ArticleCard = ({ article }: ArticleCardProps) => {
  const formattedDate = new Date(article.publishedAt).toLocaleDateString("en-US", {
    year: "numeric",
    month: "short",
    day: "numeric",
  });

  return (
    <Link href={article.url} target="_blank" className="group">
      <Card className="h-full overflow-hidden hover:bg-slate-600 transition-all duration-300 hover:scale-[1.02]">
        {article.coverImage?.url && (
          <div className="relative w-full h-48 overflow-hidden rounded-t-lg bg-gray-800">
            <Image
              src={article.coverImage.url}
              alt={article.title}
              fill
              sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
              className="object-cover group-hover:scale-105 transition-transform duration-300"
              priority={false}
            />
          </div>
        )}
        <div className="p-6">
          <h3 className="font-bold text-lg mb-2 line-clamp-2 group-hover:text-emerald-300 transition-colors">
            {article.title}
          </h3>
          <p className="text-sm text-gray-400 mb-4 line-clamp-3">
            {article.brief}
          </p>
          <div className="flex items-center gap-4 text-xs text-gray-500">
            <div className="flex items-center gap-1">
              <FiCalendar />
              <span>{formattedDate}</span>
            </div>
            <div className="flex items-center gap-1">
              <FiClock />
              <span>{article.readTimeInMinutes} min read</span>
            </div>
          </div>
        </div>
      </Card>
    </Link>
  );
};
