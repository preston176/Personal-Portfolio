import { useEffect, useContext } from 'react';
import Header from '../components/Header/Header';
import Home from '../components/Home';
import About from '../components/About';
import Projects from '../components/Projects';
import Blogs from '../components/Blogs';
// import Stats from '../components/Stats';
import Contact from '../components/Contact';
import Footer from '../components/Footer';
// import whatsappLogo from '/assets/icons/WhatsApp_icon.png';
import backToTopIcon from '/assets/icons/back-to-top.png';
import Resume from '../components/Resume';
// import Services from '../components/Services';
import Search from '../components/Search/Search';
import { GlobalContext } from '../context/GlobalContext';


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
        <>
            <Search />
            <Header />
            <Home />
            <About />
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
                <a href="#">
                    <img src={backToTopIcon} width="60" alt="a back to top logo" />
                </a>
            </div>
            {/* End of floating whatsapp icon on bottom */}
        </>
    );
};

export default LandingPage;
