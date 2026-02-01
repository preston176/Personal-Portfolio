"use client"

import Link from "next/link"
import { motion } from "framer-motion"
import { useActiveSection } from "@/hooks/useActiveSection"
import { headerAnimation } from "@/constants/heroAnimations"

export const Header = () => {
  const navLinks = [
    { href: "/", label: "Home", id: "hero" },
    { href: "/#projects", label: "Projects", id: "projects" },
    { href: "/#about", label: "Articles", id: "about" },
    { href: "/#contact", label: "Contact", id: "contact" },
  ]

  const activeSection = useActiveSection(["hero", "projects", "about", "contact"])

  return (
    <motion.div
      className="sticky md:w-fit mx-auto top-5 z-50"
      {...headerAnimation}
    >
      <nav className="flex justify-center items-center gap-1 p-2 border border-white/15 rounded-full bg-black/80 backdrop-blur-md shadow-lg ">
        {navLinks.map(({ href, label, id }, index) => {
          const isContact = index === navLinks.length - 1
          const isActive = activeSection === id

          return (
            <Link
              key={href}
              href={href}
              className={`nav-item text-xs md:text-sm px-4 py-2 rounded-full transition-colors ${
                isContact
                  ? "bg-green-500 text-black hover:bg-green-400 hover:text-black"
                  : isActive
                  ? "bg-white/10 text-white"
                  : "text-gray-300 hover:text-white"
              }`}
            >
              {label}
            </Link>
          )
        })}
      </nav>
    </motion.div>
  )
}
