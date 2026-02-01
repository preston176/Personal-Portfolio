"use client"

import React, { useRef } from "react"
import ReCAPTCHA from "react-google-recaptcha"
import { useForm, ValidationError } from "@formspree/react"

export const ContactForm = () => {
  const recaptcha = useRef<ReCAPTCHA | null>(null)
  const [state, handleSubmit] = useForm(process.env.NEXT_PUBLIC_FORMSPREE!)

  const handleFormSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()

    if (recaptcha.current && !recaptcha.current.getValue()) {
      alert("Please complete the CAPTCHA")
      return
    }

    await handleSubmit(e)

    if (state.succeeded) {
      const form = e.currentTarget
      form.reset()
      recaptcha.current?.reset()
    }
  }

  React.useEffect(() => {
    if (state.succeeded) {
      alert("Message sent successfully!")
    }
  }, [state.succeeded])

  return (
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
  )
}
