import React from 'react';
import { Link } from 'react-scroll';

const Blogs = () => {
  const projectsData = [
    {
      title: "Why Everyone Should Learn Programming: Unlocking the Power of Code",
      description: "An article focused on the importance of coding",
      photo: "https://cdn.hashnode.com/res/hashnode/image/stock/unsplash/hGV2TfOh0ns/upload/3f4bcc84d07b03733db7b8276060891b.png?w=1600&h=840&fit=crop&crop=entropy&auto=compress,format&format=webp",
      liveURL: "https://codewithpres.hashnode.dev/why-everyone-should-learn-programming-unlocking-the-power-of-code",
      repoURL: "https://github.com/preston176/ShopMART-E-commerce"
    },
    {
      title: "Python vs JavaScript: Choosing the Right Language for Your Coding Journey",
      description: "Choose the right language for your coding journey",
      photo: "https://cdn.hashnode.com/res/hashnode/image/stock/unsplash/fPkvU7RDmCo/upload/5899c3bc15269c73a05b3073d36bdf29.jpeg?w=1600&h=840&fit=crop&crop=entropy&auto=compress,format&format=webp",
      liveURL: "https://codewithpres.hashnode.dev/python-vs-javascript-choosing-the-right-language-for-your-coding-journey",
      repoURL: "https://github.com/preston176/blogging-website-react-js"
    },

    {
      title: "What is Storybook and why do developers use it",
      description: "An open-source tool for UI development",
      photo: "https://cdn.hashnode.com/res/hashnode/image/stock/unsplash/9SoCnyQmkzI/upload/ba7817cb8c2a9e218654464f90ea20ce.jpeg?w=1600&h=840&fit=crop&crop=entropy&auto=compress,format&format=webp",
      liveURL: "https://codewithpres.hashnode.dev/what-is-storybook-and-why-developers-should-use-what-is-storybook",
      repoURL: "https://github.com/preston176/todo-list-react"
    },
  ]


  return (
    <div className='px-7 md:px-10 my-8' id='projects'>
      <h1 className='text-3xl mt-5 text-primary font-semibold'>Blogs</h1>
      <p className='text-white my-2 md:w-2/3 leading-[2]'>Checkout some of my featured articles</p>
      {/* project items */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-y-5 my-6 items-center justify-center">
        {
          projectsData.map((project, i) =>
            <div key={crypto.randomUUID()} className='flex flex-col shadow-sm md:w-[343px] bg-[#31313f] rounded p-4'>
              <a href={project.photo} className='mb-4'>
                <img src={project.photo} alt="project-image" />
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