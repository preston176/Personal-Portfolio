export interface HashnodeArticle {
  id: string;
  title: string;
  brief: string;
  slug: string;
  coverImage?: {
    url: string;
  };
  publishedAt: string;
  url: string;
  readTimeInMinutes: number;
}

const HASHNODE_GQL_ENDPOINT = "https://gql.hashnode.com";

export async function getHashnodeArticles(
  host: string,
  first: number = 3
): Promise<HashnodeArticle[]> {
  const query = `
    query Publication($host: String!, $first: Int!) {
      publication(host: $host) {
        posts(first: $first) {
          edges {
            node {
              id
              title
              brief
              slug
              coverImage {
                url
              }
              publishedAt
              url
              readTimeInMinutes
            }
          }
        }
      }
    }
  `;

  try {
    const response = await fetch(HASHNODE_GQL_ENDPOINT, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        query,
        variables: { host, first },
      }),
      next: { revalidate: 3600 }, // Revalidate every hour
    });

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    const data = await response.json();

    if (data.errors) {
      console.error("GraphQL errors:", data.errors);
      throw new Error("Failed to fetch articles from Hashnode");
    }

    const articles = data.data?.publication?.posts?.edges?.map(
      (edge: { node: HashnodeArticle }) => edge.node
    ) || [];

    return articles;
  } catch (error) {
    console.error("Error fetching Hashnode articles:", error);
    return [];
  }
}
