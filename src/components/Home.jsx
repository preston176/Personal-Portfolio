import React from 'react';

const Home = () => {
    return (
        <div className='px-7 md:px-10 my-14 md:h-screen bg-[#1a1a29]'>
            <div className="">
                {/* texts section */}
                <div className="text-white">
                <h5 className='text-3xl mt-12'>Hello there, I'm</h5>
                <h1 className='font-semibold text-3xl md:text-5xl my-4'>Preston Mayieka</h1>
                <p className='md:w-96'>I am a ...</p>
            {/* buttons section */}
            <div className="">
                <button className='btn bg-primary py-2 px-4 text-white rounded hover:bg-white hover:text-primary transition-all duration-500'>About me</button>
                <button className='btn outline px-5 py-1.5 rounded border-none text-white ml-5'>Download CV</button>
            </div>
                </div>
            </div>
        </div>
    );
};

export default Home;