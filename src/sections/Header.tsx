"use client";

import Link from "next/link";
import { motion } from "framer-motion";

export const Header = () => {
  const navLinks = [
    { href: "/", label: "Home" },
    { href: "/#projects", label: "Projects" },
    { href: "/#about", label: "About" },
    { href: "/#contact", label: "Contact" },
  ];

  return (
    <motion.div
      className="sticky md:w-fit mx-auto top-5 z-50"
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <nav className="flex justify-center items-center gap-1 p-2 border border-white/15 rounded-full bg-black/80 backdrop-blur-md shadow-lg ">
        {navLinks.map(({ href, label }, index) => {
          const isContact = index === navLinks.length - 1;

          return (
            <Link
              key={href}
              href={href}
              className={`nav-item text-xs md:text-sm px-4 py-2 rounded-full transition-colors ${isContact ? "bg-green-500 text-black hover:bg-green-400 hover:text-black " : "text-gray-300 hover:text-white"}`}
            >
              {label}
            </Link>
          );
        })}
      </nav>
    </motion.div>
  );
};
