
const Blogs = () => {
    const projectsData = [
        {
            title: "Node-js Explained: A beginner's guide",
            description: "A runtime environment for executing JavaScript code server-side",
            photo: "https://cdn.hashnode.com/res/hashnode/image/upload/v1703155483443/e42a7be2-890a-4bd2-accf-306e53ccebbd.png?w=1600&h=840&fit=crop&crop=entropy&auto=compress,format&format=webp",
            liveURL: "https://codewithpres.hashnode.dev/nodejs-explained-a-beginner-guide",
            altText: "An image of Node.js logo"
        },
        {
            title: "Writing Comprehensive API Documentation",
            description: "A step-by-step guide on how you can be able to write an API documentation",
            photo: "https://cdn.hashnode.com/res/hashnode/image/upload/v1705566411376/07d63224-6bd9-4b66-80c5-bfd59c3469d0.png?w=1600&h=840&fit=crop&crop=entropy&auto=compress,format&format=webp",
            liveURL: "https://wtdkenya.hashnode.dev/writing-comprehensive-api-documentation",
            altText: "An image of API documentation"
        },

        {
            title: "Hacktoberfest 2023: Everything you need to know",
            description: "This article is your passport to the heart of Hacktoberfest. Get to know what is Hacktoberfest",
            photo: "https://cdn.hashnode.com/res/hashnode/image/upload/v1697178173972/973bb1c9-0645-4f0a-87c7-d4542f65928c.png?w=1600&h=840&fit=crop&crop=entropy&auto=compress,format&format=webp",
            liveURL: "https://gdscuoe.hashnode.dev/hacktoberfest-2023-everything-you-need-to-know",
            altText: "An image of Hacktoberfest logo"
        },
        {
            title: "Is AI taking over Web development ?",
            description: "This article demistifies the myth of AI replacing Web developers",
            photo: "https://cdn.hashnode.com/res/hashnode/image/upload/v1714301705150/bf439462-aa0c-4c55-979c-7d5cc44c8d25.png?w=1600&h=840&fit=crop&crop=entropy&auto=compress,format&format=webp",
            liveURL: "https://codewithpres.hashnode.dev/is-ai-taking-over-web-development",
            altText: "An image of AI replacing humans blog"
        },
    ]


    return (
        <div className=' propx-7 md:px-10 my-8 min-h-fit' id='blogs'>
            <h1 className='text-3xl mt-5 text-primary font-semibold'>Blogs</h1>
            <p className='text-white my-2 md:w-2/3 leading-[2]'>Checkout some of my featured articles</p>
            {/* project items */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-y-5 my-6 items-center justify-center">
                {
                    projectsData.map((project) =>
                        <div key={crypto.randomUUID()} className='project-card flex flex-col shadow-sm md:w-[343px] bg-[#31313f] rounded p-4'>
                            <a href={project.photo} className='mb-4'>
                                <img style={{
                                    width: "100%"
                                }} src={project.photo} alt={project.altText} />
                            </a>
                            <h3 className='text-primary font-semibold text-lg'>{project.title}</h3>
                            <p className='text-white mt-1'>{project.description}</p>
                            {/* btns */}
                            <div className="mt-5">
                                <a href={project.liveURL}> <button className='btn bg-primary py-2 px-4 text-white rounded hover:bg-white hover:text-primary transition-all duration-500'>Read More</button></a>
                                {/* <a href={project.repoURL}> <button className='btn outline px-5 py-1.5 rounded border-none text-white ml-5'>Git Repo</button></a> */}
                            </div>
                        </div>
                    )
                }
            </div>


        </div>
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