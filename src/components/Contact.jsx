import React from 'react';
import { SocialIcon } from 'react-social-icons';

const Contact = () => {
  return (
    <div className='px-7 md:px-10 my-10' id='contact'>
      <div className="">
        {/* texts and icons */}
        <div className="md:w-1/2">
          <h1 className='text-3xl mt-5 text-primary font-semibold'>Connect with me: </h1>
          <p className='text-white my-2 md:w-2/3 leading-[2]'>
            {/* social icons */}
            <div className="flex mx-2 hover:cursor-pointer">

              <SocialIcon className='ml-4' url="https://twitter.com/Preston_176" />
              <SocialIcon className='ml-4' url="https://github.com/preston176" />
              <SocialIcon className='ml-4' url="mailto:prestonnyamweya@gmail.com" />
            </div>
          </p>
        </div>
        {/* contact form */}
      </div>
    </div>
  );
};

export default Contact;