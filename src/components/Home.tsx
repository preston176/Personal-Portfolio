import Typewriter from 'typewriter-effect';
// import heroImg from '../assets/img2.png';
import { Link } from 'react-scroll';
import FeaturedOn from './FeaturedOn';

const Home = () => {
    return (
        <div className='px-7 md:px-10 lg:px-5 my-14 md:h-auto ' id='home'>
            <div className="w-fit flex flex-col md:flex-row items-center justify-between">
                {/* texts section */}
                <div className="text-white">
                    <h5 className='text-3xl mt-12'>Hello there, I'm</h5>
                    <h1 className='font-semibold text-3xl md:text-5xl my-4'>
                        <Typewriter
                            options={{
                                strings: ['Preston Mayieka'],
                                autoStart: true,
                                loop: false,
                                delay: 100,
                                deleteSpeed: 2000

                            }}
                        />

                    </h1>

                    <p className='md:w-96'>I am a
                        <Typewriter
                            options={{
                                strings: ['Web developer', 'Computer scientist', 'Tech Enthusiast', 'Open-Source Contributer'],
                                autoStart: true,
                                loop: true,
                                delay: 60,
                                deleteSpeed: 60
                            }} />

                    </p>
                    {/* buttons section */}
                    <div className="mt-5">
                        <Link to="about" className='active'>
                            <button className=' bg-white py-2 px-4 text-black rounded hover:bg-white hover:text-primary transition-all duration-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary' aria-label='About me'>About me</button></Link>
                        <button className=' outline px-5 py-1.5 rounded border-none text-white ml-5'><a href="/CV-Preston_Nyamweya.pdf" target='_blank'>Download CV</a></button>
                    </div>
                    {/* image */}
                </div>
                <div className="order-first md:order-last relative">
                    {/* <img src={heroImg} alt="" /> */}
                </div>

            </div>
            {/* separator */}
            {/* <div className="h-24 w-full mx-auto absolute left-0 hidden md:block"></div> */}
            {/* featured on*/}
            <FeaturedOn />
        </div>
    );
};

export default Home;