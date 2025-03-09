import { gql } from "graphql-request";
import { getClient } from "../lib/graphQLClient";

export const getAllPosts = async (host, first = 10, endCursor, tags) => {
  const client = getClient();

  const data = await client.request(
    gql`
      query allPosts($first: Int!, $host: String, $endCursor: String, $tags: [ObjectId!]) {
        publication(host: $host) {
          title
          posts(first: $first, after: $endCursor, filter:{tags: $tags}) {
            totalDocuments
            pageInfo{
              hasNextPage
              endCursor
            }
            edges {
              node {
                author{
                  name
                  profilePicture
                }
                title
                subtitle
                brief
                slug
                url
                coverImage {
                  url
                }
                tags {
                  name
                  slug
                  id
                }
                publishedAt
                readTimeInMinutes
              }
            }
          }
        }
      }
    `,
    {
      first: first,
      host: host,
      endCursor: endCursor,
      tags: tags,
    }
  );

  return data?.publication?.posts;
};