// src/hooks/useHashnodePosts.d.ts
import { PageInfo, PostEdge } from "../queries/blog-data";

interface UseHashnodePostsSettings {
  host?: string;
  first?: number;
  endCursor?: string;
  tags?: string[];
}

interface UseHashnodePostsResponse {
  loading: boolean;
  error?: unknown; 
  pageInfo: PageInfo;
  totalDocs: number;
  posts: PostEdge[];
  loadMorePost: () => void;
}

declare function useHashnodePosts(settings?: UseHashnodePostsSettings): UseHashnodePostsResponse;

export default useHashnodePosts;
