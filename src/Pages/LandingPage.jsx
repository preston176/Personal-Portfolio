import React from 'react'
import Header from '../components/Header'
import Home from '../components/Home'
import About from '../components/About'
import Projects from '../components/Projects'
import Blogs from '../components/Blogs'
import Stats from '../components/Stats'
import Contact from '../components/Contact'
import Footer from '../components/Footer'

const LandingPage = () => {
    return (
        <div>
            <Header />
            <Home />
            <About />
            <Projects />
            <Blogs />
            <Stats />
            <Contact />
            <Footer />
        </div>
    )
}

export default LandingPage
