"use client";

import Card from "@/components/Card";
import { CardHeader } from "@/components/CardHeader";
import SectionHeader from "@/components/SectionHeader";
import { SocialIcons } from "@/components/SocialIcons";
import Link from "next/link";
import { FaTwitter, FaLinkedin, FaGithub, FaEnvelope, FaPhone, FaWhatsapp } from "react-icons/fa6";

export const ContactSection = () => {
  return (
    <section className="py-20 lg:py-28" id="contact">
      <SectionHeader title="Contact Me" description="Let's connect!" eyebrow="Feel free to reach out" />
      <div className="container px-4 mx-auto mt-20">
        <Card className="p-6 md:p-8 lg:p-12">


          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
            {/* Left Side - Contact Info & Socials */}
            <div className="flex flex-col justify-center space-y-5 md:space-y-6">
              <div className="flex items-center space-x-3">
                <FaEnvelope className="text-green-500 size-5 md:size-6 flex-shrink-0" />
                <span className="text-white text-sm md:text-base lg:text-lg">
                  prestonnyamweya@gmail.com
                </span>
              </div>
              <div className="flex items-center space-x-3">
                <FaPhone className="text-green-500 size-5 md:size-6 flex-shrink-0" />
                <span className="text-white text-sm md:text-base lg:text-lg">
                  +254 799 078 848
                </span>
              </div>
              <SocialIcons />
            </div>

            {/* Right Side - Contact Form */}
            <form
              action="https://formspree.io/f/YOUR_FORM_ID"
              method="POST"
              className="space-y-5 md:space-y-6"
              aria-label="Contact Form"
            >
              <input
                type="email"
                name="email"
                placeholder="Email"
                required
                aria-required="true"
                autoComplete="email"
                className="w-full p-3 rounded-md bg-gray-800 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-green-500 border border-white/40 text-sm md:text-base"
              />
              <input
                type="text"
                name="subject"
                placeholder="Subject"
                required
                aria-required="true"
                autoComplete="off"
                className="w-full p-3 rounded-md bg-gray-800 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-green-500 border border-white/40 text-sm md:text-base"
              />
              <textarea
                name="message"
                placeholder="Your Message"
                required
                aria-required="true"
                rows={4}
                className="w-full p-3 rounded-md bg-gray-800 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-green-500 border border-white/40 text-sm md:text-base"
              ></textarea>
              <button
                type="submit"
                className="w-full bg-green-500 hover:bg-green-400 text-black font-semibold py-2 rounded-md transition-colors text-sm md:text-base"
              >
                Send Message
              </button>
            </form>
          </div>
        </Card>
      </div>
    </section>
  );
};
