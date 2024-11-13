
import { RotatingLines } from 'react-loader-spinner';
import useHashnodePosts from './../hooks/useHashnodePosts';



const Blogs = () => {

    const settings = {
        host: "codewithpres.hashnode.dev",
        first: 6,
    };
    const {
        loading,
        error,
        // pageInfo,
        // totalDocs,
        // loadMorePost,
        posts,
    } = useHashnodePosts(settings);


    interface posts {
        node: {
            title: string;
            coverImage: { url: string };
            brief: string;
            url: string;
            // other fields...
        };
    }
    // console.log(posts)

    return (
        <div className=' px-7 md:px-10 my-8 min-h-fit' id='articles'>
            <h1 className='text-3xl mt-5 text-primary font-semibold'>Articles</h1>
            <p className='text-white my-2 md:w-2/3 leading-[2]'>Checkout some of my featured articles</p>
            {/* project items */}
            {
                !error && loading ? (
                    <div>
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-y-5 my-6 items-center justify-center animate-pulse">
                            <div className='project-card flex flex-col shadow-sm md:w-[343px] border-white border rounded p-4 gap-5'>
                                <div className="h-48 bg-gray-200 mb-4"></div>
                                <div className='h-5 bg-gray-200 w-1/2'></div>
                                <div className='h-8 bg-gray-200 mt-1'></div>
                                <div className="h-8 bg-gray-200 mt-5">
                                </div>
                            </div>
                            <div className='project-card flex flex-col shadow-sm md:w-[343px] border-white border rounded p-4 gap-5'>
                                <div className="h-48 bg-gray-200 mb-4"></div>
                                <div className='h-5 bg-gray-200 w-1/2'></div>
                                <div className='h-8 bg-gray-200 mt-1'></div>
                                <div className="h-8 bg-gray-200 mt-5">
                                </div>
                            </div>
                            <div className='project-card flex flex-col shadow-sm md:w-[343px] border-white border rounded p-4 gap-5'>
                                <div className="h-48 bg-gray-200 mb-4"></div>
                                <div className='h-5 bg-gray-200 w-1/2'></div>
                                <div className='h-8 bg-gray-200 mt-1'></div>
                                <div className="h-8 bg-gray-200 mt-5">
                                </div>
                            </div>
                 
                        </div>
                        <div className="flex justify-center mt-8 animate-pulse">
                            <div className="h-8 bg-gray-200 w-56 ml-5">
                            </div>
                        </div>
                    </div>
                ) : (
                    <><div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-y-5 my-6 items-center justify-center">
                        {
                            posts.map((post: posts) =>
                                <div key={crypto.randomUUID()} className='project-card flex flex-col shadow-sm md:w-[343px] border-white border rounded p-4 gap-5'>
                                    <a href={post.node.url} target="_blank" className='mb-4'>
                                        {post.node.coverImage && post.node.coverImage.url ? (
                                            <img style={{ width: "100%", height: "100%" }} src={post.node.coverImage.url} alt={post.node.title} />
                                        ) : (
                                            <div style={{ width: "100%", height: "100%", backgroundColor: "#ccc" }}>No Image Available</div>
                                        )}
                                    </a>
                                    <h3 className='text-primary font-semibold text-lg'>{post.node.title}</h3>
                                    <p className='text-white mt-1 text-clip overflow-hidden ... line-clamp-2 '>{post.node.brief}</p>
                                    {/* btns */}
                                    <div className="mt-5">
                                        <a href={post.node.url} target="_blank"> <button className='btn bg-white py-2 px-4 text-black rounded hover:bg-black hover:text-white transition-all duration-500'>Read More</button></a>
                                        {/* <a href={project.repoURL}> <button className='btn outline px-5 py-1.5 rounded border-none text-white ml-5'>Git Repo</button></a> */}
                                    </div>

                                </div>

                            )
                        }

                    </div>
                        <div className="flex justify-center mt-8">
                            <a href="https://codewithpres.hashnode.dev" target='_blank'>
                                <button
                                    // Add this function to handle loading more posts
                                    className="btn outline px-5 py-1.5 rounded border-none text-white ml-5 transition-all duration-500"
                                >

                                    Read More Articles on Hashnode
                                </button>
                            </a>
                        </div>
                    </>

                )
            }


        </div >
    );
};

export default Blogs;

// {
//   title: "ChatSphere",
//   description: "A chatting app that lets you talk to your friends",
//   photo: "/images/projects/chatsphere.png",
//   liveURL: "https://chatsphere-chatapp.web.app/",
//   repoURL: "https://github.com/preston176/ChatSphere-react"
// },

// const projectsData = [
//     {
//         title: "Node-js Explained: A beginner's guide",
//         description: "A runtime environment for executing JavaScript code server-side",
//         photo: "https://cdn.hashnode.com/res/hashnode/image/upload/v1703155483443/e42a7be2-890a-4bd2-accf-306e53ccebbd.png?w=1600&h=840&fit=crop&crop=entropy&auto=compress,format&format=webp",
//         liveURL: "https://codewithpres.hashnode.dev/nodejs-explained-a-beginner-guide",
//         altText: "An image of Node.js logo"
//     },
//     {
//         title: "Writing Comprehensive API Documentation",
//         description: "A step-by-step guide on how you can be able to write an API documentation",
//         photo: "https://cdn.hashnode.com/res/hashnode/image/upload/v1705566411376/07d63224-6bd9-4b66-80c5-bfd59c3469d0.png?w=1600&h=840&fit=crop&crop=entropy&auto=compress,format&format=webp",
//         liveURL: "https://wtdkenya.hashnode.dev/writing-comprehensive-api-documentation",
//         altText: "An image of API documentation"
//     },

//     {
//         title: "Hacktoberfest 2023: Everything you need to know",
//         description: "This article is your passport to the heart of Hacktoberfest. Get to know what is Hacktoberfest",
//         photo: "https://cdn.hashnode.com/res/hashnode/image/upload/v1697178173972/973bb1c9-0645-4f0a-87c7-d4542f65928c.png?w=1600&h=840&fit=crop&crop=entropy&auto=compress,format&format=webp",
//         liveURL: "https://gdscuoe.hashnode.dev/hacktoberfest-2023-everything-you-need-to-know",
//         altText: "An image of Hacktoberfest logo"
//     },
//     {
//         title: "Is AI taking over Web development ?",
//         description: "This article demistifies the myth of AI replacing Web developers",
//         photo: "https://cdn.hashnode.com/res/hashnode/image/upload/v1714301705150/bf439462-aa0c-4c55-979c-7d5cc44c8d25.png?w=1600&h=840&fit=crop&crop=entropy&auto=compress,format&format=webp",
//         liveURL: "https://codewithpres.hashnode.dev/is-ai-taking-over-web-development",
//         altText: "An image of AI replacing humans blog"
//     },
// ]
