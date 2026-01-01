"use client";

import React, { useRef } from "react";
import Card from "@/components/Card";
import { CardHeader } from "@/components/CardHeader";
import SectionHeader from "@/components/SectionHeader";
import { SocialIcons } from "@/components/SocialIcons";
import { FaTwitter, FaLinkedin, FaGithub, FaEnvelope, FaPhone, FaWhatsapp } from "react-icons/fa6";
import { MapPin } from "lucide-react";
import ReCAPTCHA from "react-google-recaptcha";
import { useForm, ValidationError } from "@formspree/react";
import { Map, MapMarker, MarkerContent, MarkerTooltip, MapControls } from "@/components/ui/map";

export const ContactSection = () => {
  const recaptcha = useRef<ReCAPTCHA | null>(null);
  const [state] = useForm(process.env.NEXT_PUBLIC_FORMSPREE!);

  // Nairobi, Kenya coordinates
  const NAIROBI_COORDS = {
    longitude: 36.8219,
    latitude: -1.2921,
  };

  const handleFormSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (recaptcha.current && !recaptcha.current.getValue()) {
      alert("Please complete the CAPTCHA");
      return;
    }

    const form = e.currentTarget;
    const formData = new FormData(form);

    try {
      const response = await fetch(
        `https://formspree.io/f/${process.env.NEXT_PUBLIC_FORMSPREE!}`,
        {
          method: "POST",
          body: formData,
          headers: { Accept: "application/json" },
        }
      );

      if (!response.ok) throw new Error("Form submission failed");

      alert("Message sent successfully!");
      form.reset();
      recaptcha.current?.reset();
    } catch (error) {
      console.error(error);
      alert("Failed to send message. Please try again.");
    }
  };

  return (
    <section className="py-20 lg:py-28" id="contact">
      <SectionHeader title="Contact Me" description="Let's connect!" eyebrow="Feel free to reach out" />
      <div className="container px-4 mx-auto mt-20">
        <Card className="p-6 md:p-8 lg:p-12">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
            {/* Left Side - Contact Info & Socials */}
            <div className="flex flex-col justify-start space-y-5 md:space-y-6">
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

              {/* Location Section with Map */}
              <div className="space-y-3 pt-4 border-t border-white/10">
                <div className="flex items-center space-x-3">
                  <MapPin className="text-green-500 size-5 md:size-6 flex-shrink-0" />
                  <span className="text-white text-sm md:text-base lg:text-lg font-semibold">
                    Nairobi, Kenya
                  </span>
                </div>

                {/* Interactive Map */}
                <div className="relative h-[280px] rounded-lg overflow-hidden border border-white/10 shadow-lg shadow-green-500/10 hover:shadow-green-500/20 transition-shadow duration-500">
                  <Map
                    center={[NAIROBI_COORDS.longitude, NAIROBI_COORDS.latitude]}
                    zoom={11}
                    minZoom={8}
                    maxZoom={16}
                  >
                    <MapMarker
                      longitude={NAIROBI_COORDS.longitude}
                      latitude={NAIROBI_COORDS.latitude}
                    >
                      <MarkerContent>
                        <div className="relative">
                          {/* Pulsing ring animation */}
                          <div className="absolute inset-0 rounded-full bg-green-500 animate-ping opacity-75"></div>
                          <div className="relative size-6 rounded-full bg-gradient-to-br from-green-400 to-green-600 border-2 border-white shadow-lg flex items-center justify-center">
                            <MapPin className="size-3 text-white" />
                          </div>
                        </div>
                      </MarkerContent>
                      <MarkerTooltip className="bg-gray-800 text-white border border-green-500/50 shadow-lg shadow-green-500/20">
                        <div className="flex flex-col gap-0.5 min-w-[120px]">
                          <span className="font-semibold text-green-400">Nairobi, Kenya</span>
                          <span className="text-xs text-white/70">Based here</span>
                        </div>
                      </MarkerTooltip>
                    </MapMarker>

                    <MapControls
                      position="bottom-right"
                      showZoom={true}
                      showCompass={true}
                    />
                  </Map>
                </div>
              </div>
            </div>

            {/* Right Side - Contact Form */}
            <form
              onSubmit={handleFormSubmit}
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
              <ValidationError prefix="Email" field="email" errors={state.errors} />

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
              <ValidationError prefix="Message" field="message" errors={state.errors} />

              {/* ReCAPTCHA */}
              <div className="flex justify-center">
                <ReCAPTCHA
                  sitekey={process.env.NEXT_PUBLIC_GOOGLE_RECAPTCHA_SITE_KEY!}
                  ref={recaptcha}
                />
              </div>

              <button
                type="submit"
                disabled={state.submitting}
                className="w-full bg-green-500 hover:bg-green-400 text-black font-semibold py-2 rounded-md transition-colors text-sm md:text-base"
              >
                {state.submitting ? "Sending..." : "Send Message"}
              </button>
            </form>
          </div>
        </Card>
      </div>
    </section>
  );
};
