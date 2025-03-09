// import heroImg from '../assets/img2.png';
// import FeaturedOn from './FeaturedOn';
import TechStack from './TechStack';
import SocialIcons from './SocialIconsContainer';
import Link from 'next/link';

const Home = () => {
    return (
        <div className='px-7 md:px-10 lg:px-5 my-14 md:h-auto ' id='home'>
            <div className="w-fit flex flex-col md:flex-row items-center justify-between">
                {/* texts section */}
                <div className="text-white">
                    <h5 className='text-3xl mt-12'>Hello there, I&apos;m</h5>
                    <h1 className='font-semibold text-3xl md:text-5xl my-4'>
                        {/* <Typewriter
                            options={{
                                strings: ['Preston Mayieka', 'Preston'],
                                autoStart: true,
                                loop: true,
                                delay: 100,
                                deleteSpeed: 250

                            }}
                        /> */}
                        Preston Mayieka
                    </h1>

                    <p className='md:w-96'>I am a {''}
                        {/* <Typewriter
                            options={{
                                strings: ['Web developer', 'Computer Scientist', 'Tech Enthusiast', 'Open-Source Contributer'],
                                autoStart: true,
                                loop: true,
                                delay: 60,
                                deleteSpeed: 60
                            }} /> */}
                        Full-Stack Developer
                    </p>
                    <p className='md:w-96'>From {''}
                        Eldoret, Kenya
                    </p>
                    {/* buttons section */}
                    <div className="mt-5">
                        <Link href="/#projects" className='active'>
                            <button className=' bg-primary py-2 px-4 text-black rounded hover:bg-white hover:text-primary transition-all duration-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary cursor-pointer' aria-label='My Projects'>My Projects</button></Link>
                        <button className='outline px-5 py-1.5 rounded border-none text-white ml-5 hover:bg-secondary hover:text-black'><Link href="/CV-Preston_Nyamweya.pdf" target='_blank'>Download CV</Link></button>
                    </div>
                    {/* image */}
                </div>
                <div className="order-first md:order-last relative">
                    {/* <img src={heroImg} alt="" /> */}
                </div>
            </div>
            <div className="flex mt-4 -ml-4 md:-mb-20">
                <SocialIcons />
            </div>
            {/* separator */}
            {/* <div className="h-24 w-full mx-auto absolute left-0 hidden md:block"></div> */}
            {/* featured on*/}
            {/* <FeaturedOn /> */}
            <TechStack />
        </div>
    );
};

export default Home;