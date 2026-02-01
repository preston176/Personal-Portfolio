"use client"

import Card from "@/components/Card"
import SectionHeader from "@/components/SectionHeader"
import { ContactInfo } from "./contact/ContactInfo"
import { ContactForm } from "./contact/ContactForm"

export const ContactSection = () => {
  return (
    <section className="py-20 lg:py-28" id="contact">
      <SectionHeader title="Contact Me" description="Let's connect!" eyebrow="Feel free to reach out" />
      <div className="container px-4 mx-auto mt-20">
        <Card className="p-6 md:p-8 lg:p-12">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
            <ContactInfo />
            <ContactForm />
          </div>
        </Card>
      </div>
    </section>
  )
}
