import React from 'react';
import { SocialIcon } from 'react-social-icons';

const Contact = () => {
  return (
    <div className='px-7 md:px-10 my-10' id='contact'>
      <div className="flex flex-col md:flex-row">
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
        <div className="md:w-1/2">
          <p className='mt-16 text-white text-2xl mb-6'>Feel free to reach me out ... </p>

          <form >
            <input type="text" name='name' id='name' placeholder='Your Name:' className='bg-[#F5F5F5] bg-opacity-10 py-3 px-3 md:w-3/4 w-full rounded my-3' />
            <input type="email" name='email' id='email' placeholder='Your email:' className='bg-[#F5F5F5] bg-opacity-10 py-3 px-3 md:w-3/4 w-full rounded my-3' />

            <textarea name="message" id="message" cols="30" rows="5" placeholder='Message: ' className='bg-[#F5F5F5] bg-opacity-10 py-3 px-3 md:w-3/4 w-full rounded my-3'></textarea>

            <button className='btn bg-primary py-2 px-12 text-white hover:bg-white hover:text-primary block transition-all duration-500 rounded'>Send</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;