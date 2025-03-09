"use client"
import { useEffect, useContext } from 'react';

// import About from '../components/About';

// import Stats from '../components/Stats';

// import whatsappLogo from '/assets/icons/WhatsApp_icon.png';
import backToTopIcon from '@/public/assets/icons/back-to-top.png';
// import Services from '../components/Services';
import Image from 'next/image';
import { GlobalContext } from '@/archive/src/context/GlobalContext';
import Header from '@/components/Header/Header';
import Home from '@/components/Home';
import Resume from '@/components/Resume';
import Projects from '@/components/Projects';
import Blogs from '@/components/Blogs';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';
import Link from 'next/link';

const LandingPage = () => {
  const { showBackToTop, setShowBackToTop } = useContext(GlobalContext);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      const windowHeight = window.innerHeight;
      const scrollThreshold = 0.25 * windowHeight;

      if (scrollPosition > scrollThreshold) {
        setShowBackToTop(true);
      } else {
        setShowBackToTop(false);
      }
    };

    window.addEventListener('scroll', handleScroll);

    // Cleanup function to remove the event listener when the component unmounts
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [setShowBackToTop]); // effect runs only once

  return (
    <main>
      <Header />
      <Home />
      {/* <About /> */}
      <Resume />
      {/* <Services /> */}
      <Projects />
      <Blogs />
      {/* <Stats /> */}
      <Contact />
      <Footer />

      {/* Floating Whatsapp Icon on bottom right */}
      <div className={`fixed top-0 right-0 mr-3 mb-3 py-2 ${showBackToTop ? 'opacity-95' : 'opacity-0 transition-opacity duration-700'}`} style={{
        zIndex: "6",
        left: "initial",
      }}>
        <Link href="#">
          <Image src={backToTopIcon} width="60" alt="a back to top logo" />
        </Link>
      </div>
      {/* End of floating whatsapp icon on bottom */}
    </main>
  );
};

export default LandingPage;
