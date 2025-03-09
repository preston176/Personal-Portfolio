import useHashnodePosts from "@/hooks/useHashnodePosts";
import { Skeleton } from "@/components/ui/skeleton";
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import Image from "next/image";

const Blogs = () => {
    const settings = {
        host: "codewithpres.hashnode.dev",
        first: 3,
    };

    const { loading, error, posts } = useHashnodePosts(settings);

    return (
        <section className="px-7 md:px-10 my-8 min-h-fit" id="articles">
            <h1 className="text-4xl mt-5 text-primary font-semibold">Articles</h1>

            {/* Show Skeletons if Loading */}
            {loading && !error ? (
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 my-6">
                    {Array.from({ length: 3 }).map((_, index) => (
                        <Card key={index} className="border border-gray-300 shadow-sm bg-gray-800">
                            <CardHeader>
                                <Skeleton className="h-48 w-full bg-[#1a1a29] rounded-md" />
                            </CardHeader>
                            <CardContent>
                                <Skeleton className="h-6 w-3/4 bg-[#1a1a29] rounded-md mb-2" />
                                <Skeleton className="h-4 w-full bg-[#1a1a29] rounded-md" />
                            </CardContent>
                            <CardFooter>
                                <Skeleton className="h-10 w-32 bg-[#1a1a29] rounded-md" />
                            </CardFooter>
                        </Card>
                    ))}
                </div>
            ) : (
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 my-6">
                    {posts.map((post) => (
                        <Link key={post.node.url}  href={post.node.url}>
                            <Card className="shadow-md border border-gray-700 bg-[#1a1a29] rounded px-3">
                                <CardHeader>
                                    <Link href={post.node.url} target="_blank" rel="noopener noreferrer">
                                        {post.node.coverImage?.url ? (
                                            <Image
                                                src={post.node.coverImage.url}
                                                alt={post.node.title}
                                                className="w-full h-48 object-cover rounded-md"
                                                width={500}
                                                height={300}
                                                priority
                                            />
                                        ) : (
                                            <div className="h-48 bg-gray-200 flex items-center justify-center rounded-md">
                                                <span className="text-gray-500">No Image Available</span>
                                            </div>
                                        )}
                                    </Link>
                                </CardHeader>
                                <CardContent>
                                    <h3 className="text-primary font-semibold text-xl mb-4">{post.node.title}</h3>
                                    <p className="text-gray-300 text-lg line-clamp-2">{post.node.brief}</p>
                                </CardContent>
                                <CardFooter>
                                    <Link href={post.node.url} target="_blank" rel="noopener noreferrer">
                                        <Button className="bg-primary cursor-pointer text-black hover:bg-white hover:scale-105" variant="default">Read More</Button>
                                    </Link>
                                </CardFooter>
                            </Card></Link>
                    ))}
                </div>
            )}

            {/* Improved Next.js SEO-friendly Buttons */}
            <div className="flex flex-col items-center justify-center mt-8 gap-4 md:flex-row">
                <Link href="https://codewithpres.hashnode.dev" passHref>
                    <Button className="text-black bg-primary cursor-pointer hover:bg-white  hover:scale-105">
                        Read More Articles on Hashnode
                    </Button>
                </Link>
                <Link href="https://www.freecodecamp.org/news/author/preston176/" passHref>
                    <Button variant="link" className="text-white cursor-pointer hover:scale-105">
                        Read More on freeCodeCamp
                    </Button>
                </Link>
            </div>
        </section>
    );
};

export default Blogs;
