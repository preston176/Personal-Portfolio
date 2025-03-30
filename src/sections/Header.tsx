"use client";

import Link from "next/link";

export const Header = () => {
  const navLinks = [
    { href: "/", label: "Home" },
    { href: "/#projects", label: "Projects" },
    { href: "/#about", label: "About" },
    { href: "/#contact", label: "Contact" },
  ];

  return (
    <div className="flex justify-center items-center relative top-3">
      <nav className="flex gap-1 p-0.5 border border-white/15 rounded-full bg-white/10 backdrop-blur-sm">
        {navLinks.map(({ href, label }, index) => {
          const isContact = index === navLinks.length - 1;

          return (
            <Link
              key={href}
              href={href}
              className={`nav-item px-4 py-2 rounded-full transition-colors ${isContact ? "bg-green-500 text-black hover:bg-green-400 hover:text-black" : "text-gray-300 hover:text-gray-400"
                }`}
            >
              {label}
            </Link>
          );
        })}
      </nav>
    </div>
  );
};
