import React from 'react';

const About = () => {
  return (
    <div className='px-7 md:px-10 sm:mt-24' id='about'>
      <h1 className='text-3xl mt-5 text-primary font-semibold'>About me</h1>
      <p className='text-white my-2 md:w-2/3 leading-[2]'>I am ... a</p>
   {/* techstack */}
   <div className="md:flex items-center my-7">
    <p className='text-primary text-8xl font-bold'>2+</p>
    <p className='text-white text-2xl md: ml-5'>Years of experience in working with web development technologies</p>
   </div>
    </div>
  );
};

export default About;