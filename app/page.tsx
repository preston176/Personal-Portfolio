"use client";
import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import Header from "@/components/Header/Header";
import Home from "@/components/Home";
import Resume from "@/components/Resume";
import Projects from "@/components/Projects";
import Blogs from "@/components/Blogs";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

const LandingPage = () => {
  const [showBackToTop, setShowBackToTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      const windowHeight = window.innerHeight;
      const scrollThreshold = 0.25 * windowHeight;

      setShowBackToTop(scrollPosition > scrollThreshold);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <Header />
      <Home />
      <Resume />
      <Projects />
      <Blogs />
      <Contact />
      <Footer />

      {/* Floating Back to Top Icon */}
      <div
        className={`fixed bottom-4 right-4 ${
          showBackToTop ? "opacity-100" : "opacity-0"
        } transition-opacity duration-700`}
        style={{ zIndex: 6 }}
      >
        <Link href="#">
          <Image src="/assets/icons/back-to-top.png" width={60} height={60} alt="Back to Top" />
        </Link>
      </div>
    </>
  );
};

export default LandingPage;
