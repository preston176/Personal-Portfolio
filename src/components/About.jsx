import React from 'react';

const About = () => {
  const skills = [
    { name: "javaScript && nodeJS", image: '/src/assets/icons/code.png'},
    { name: "Frontend Frameworks React" },
    { name: "Backend Frameworks - Express js" },
    { name: "mySQL & MongoDB" },
    { name: "Heroku, Firebase, Vercel" },
  ]




  return (
    <div className='px-7 md:px-10 sm:mt-24' id='about'>
      <h1 className='text-3xl mt-5 text-primary font-semibold'>About me</h1>
      <p className='text-white my-2 md:w-2/3 leading-[2]'>I am ... a</p>
      {/* techstack */}
      <div className="md:flex items-center my-7">
        <p className='text-primary text-8xl font-bold'>2+</p>
        <p className='text-white text-2xl md: ml-5'>Years of experience in working with web development technologies</p>

      </div>
      {/* skills card */}
      <div className='flex flex-col md:flex-row'>
        {
          skills.map((item, i) => {
            return (
              <div key={crypto.randomUUID()} className='skills md:w-[256px] md:h-[254px] bg-light hover:bg-primary flex flex-col items-baseline justify-end my-3 md:m-3 p-5 shadow-sm transition-all duration-500'>
              <img src={item.image} />
              <p className='text-2xl mt-3 text-white font-semibold'>{item.name}</p>
              </div>
            )
          })
        }
      </div>
    </div>
  );
};

export default About;