"use client"

import { FaEnvelope, FaPhone } from "react-icons/fa6"
import { MapPin } from "lucide-react"
import { SocialIcons } from "@/components/SocialIcons"
import { contactInfo } from "@/constants/contactData"
import { LocationMap } from "./LocationMap"

export const ContactInfo = () => {
  return (
    <div className="flex flex-col justify-start space-y-5 md:space-y-6">
      <div className="flex items-center space-x-3">
        <FaEnvelope className="text-green-500 size-5 md:size-6 flex-shrink-0" />
        <span className="text-white text-sm md:text-base lg:text-lg">
          {contactInfo.email}
        </span>
      </div>

      <div className="flex items-center space-x-3">
        <FaPhone className="text-green-500 size-5 md:size-6 flex-shrink-0" />
        <span className="text-white text-sm md:text-base lg:text-lg">
          {contactInfo.phone}
        </span>
      </div>

      <SocialIcons />

      {/* Location Section with Map */}
      <div className="space-y-3 pt-4 border-t border-white/10">
        <div className="flex items-center space-x-3">
          <MapPin className="text-green-500 size-5 md:size-6 flex-shrink-0" />
          <span className="text-white text-sm md:text-base lg:text-lg font-semibold">
            {contactInfo.location}
          </span>
        </div>

        <LocationMap />
      </div>
    </div>
  )
}
