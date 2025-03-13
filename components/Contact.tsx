"use client";

import React, { useRef } from "react";
import { useForm, ValidationError } from "@formspree/react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import ReCAPTCHA from "react-google-recaptcha";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

const Contact = () => {
  const recaptcha = useRef<ReCAPTCHA | null>(null);
  const [state] = useForm(process.env.NEXT_PUBLIC_FORMSPREE!);

  const handleFormSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (recaptcha.current && !recaptcha.current.getValue()) {
      toast.error("Please complete the CAPTCHA", { position: "top-center" });
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

      toast.success("Message sent successfully! ✅", { position: "top-center" });

      form.reset();
      recaptcha.current?.reset(); // Reset reCAPTCHA
    } catch (error) {
      toast.error("Failed to send message. Please try again.", { position: "bottom-center" });
      console.error(error);
    }
  };

  return (
    <section id="contact" className="px-8 md:px-16 py-16">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-5xl font-bold text-center text-primary">Let&apos;s Work Together 🤝</h1>
        <p className="text-lg text-gray-400 text-center mt-4">
          Have a project&#44; idea&#44; or just want to say hi? I&apos;d love to hear from you!
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mt-12">
          {/* Left Side - Contact Info */}
          <div className="flex flex-col justify-center">
            <h2 className="text-3xl font-semibold text-white">Get in Touch</h2>
            <p className="text-gray-400 mt-3 text-lg">
              Whether you&apos;re looking for a collaboration or have a business inquiry&comma; feel free to reach out.
            </p>

            {/* Social Icons Placeholder */}
            <div className="flex space-x-5 mt-6">
              {/* Add Social Icons Here */}
            </div>
          </div>

          {/* Right Side - Contact Form */}
          <Card className="shadow-xl bg-[#1a1a29] border border-gray-700 ">
            <CardContent className="p-8">
              <form onSubmit={handleFormSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="text-gray-300 text-lg">Name</label>
                  <Input
                    type="text"
                    name="name"
                    id="name"
                    placeholder="John Doe"
                    required
                    className="mt-2 text-white text-lg placeholder:text-gray-300"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="text-gray-300 text-lg">Email</label>
                  <Input
                    type="email"
                    name="email"
                    id="email"
                    placeholder="johndoe@example.com"
                    required
                    className="mt-2 text-lg placeholder:text-gray-300"
                  />
                  <ValidationError prefix="Email" field="email" errors={state.errors} />
                </div>

                <div>
                  <label htmlFor="message" className="text-gray-300 text-lg">Message</label>
                  <Textarea
                    name="message"
                    id="message"
                    placeholder="Type your message here..."
                    required
                    className="mt-2 text-lg placeholder:text-gray-300"
                  />
                  <ValidationError prefix="Message" field="message" errors={state.errors} />
                </div>

                {/* ReCAPTCHA */}
                <div className="flex justify-center">
                  <ReCAPTCHA
                    sitekey={process.env.NEXT_PUBLIC_GOOGLE_RECAPTCHA_SITE_KEY!}
                    ref={recaptcha}
                  />
                </div>

                {/* Submit Button */}
                <Button
                  type="submit"
                  disabled={state.submitting}
                  className="w-full bg-primary hover:bg-secondary text-black text-lg py-3 transition duration-300 cursor-pointer"
                >
                  Send Message
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </div>

      {/* Toast Notifications */}
      <ToastContainer />
    </section>
  );
};

export default Contact;
