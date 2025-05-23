import { FaTwitter, FaLinkedin, FaGithub, FaEnvelope } from "react-icons/fa6";
import ArrowDown from "@/assets/icons/arrow-down.svg";
import { SocialIcons } from "@/components/SocialIcons";
import Link from "next/link";

export const HeroSection = () => {
  return (
    <section className="py-32 md:py-48 lg:mt-6 lg:py-60 font-poppins">
      <div className="container flex flex-col items-center">
        {/* Availability Badge - Centered */}
        <div className="bg-gray-950 border border-gray-800 px-4 py-1.5 flex items-center gap-4 rounded-lg justify-center">
          <div className="bg-green-500 size-2.5 rounded-full animate-pulse" aria-hidden="true"></div>
          <span className="text-sm font-medium">Available for projects</span>
        </div>

        {/* Hero Title */}
        <div className="max-w-lg md:max-w-2xl mx-auto text-center">
          <h1 className="text-3xl md:text-5xl font-bold mt-8 tracking-wide">
            Hi, I&apos;m  Preston <span className="bg-gradient-to-r from-green-400 to-green-500 text-transparent bg-clip-text">Mayieka</span>
          </h1>

          {/* Subtitle / Description */}
          <h2 className="md:text-lg mt-4 text-white/60">
            A Full-Stack Developer <br /> From Eldoret, Kenya
          </h2>
        </div>

        {/* Social Media Icons */}
        <div className="flex space-x-6 mt-8">
          <SocialIcons />
        </div>

        {/* CTA Buttons */}
        <div className="flex flex-col md:flex-row gap-4 items-center justify-center mt-8">
        <Link href={"#projects"}>
          <button
            className="inline-flex items-center gap-2 border border-white/15 px-6 h-12 rounded-xl transition hover:bg-gray-200 hover:text-gray-900"
            aria-label="View my projects"
          >
            <span className="font-semibold">View My Projects</span>
            <ArrowDown className="size-4 animate-bounce" aria-hidden="true" />
          </button>
          </Link>
          <Link href={"#contact"}>
            <button
              className="inline-flex items-center gap-2 border border-white bg-white text-gray-900 h-12 px-6 rounded-xl transition hover:bg-gray-200"
              aria-label="Connect with me"
            >
              <span role="img" aria-label="Wave emoji">👋</span>
              <span className="font-semibold">Let’s Connect</span>
            </button></Link>
        </div>


      </div>
    </section>
  );
};
