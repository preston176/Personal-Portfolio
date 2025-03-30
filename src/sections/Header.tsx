"use client";

import Link from "next/link";
import { useState, useEffect } from "react";

export const Header = () => {
  const navLinks = [
    { href: "/", label: "Home" },
    { href: "/#projects", label: "Projects" },
    { href: "/#about", label: "About" },
    { href: "/#contact", label: "Contact" },
  ];

  const [activeSection, setActiveSection] = useState<string | null>(null);

  useEffect(() => {
    const sections = navLinks
      .filter(({ href }) => href.startsWith("/#"))
      .map(({ href }) => document.querySelector(href.replace("/", "")));

    const observer = new IntersectionObserver(
      (entries) => {
        const visibleSection = entries.find((entry) => entry.isIntersecting);
        if (visibleSection) {
          setActiveSection(`#${visibleSection.target.id}`);
        }
      },
      { threshold: 0.5 } // Adjust for when to consider section "active"
    );

    sections.forEach((section) => {
      if (section) observer.observe(section);
    });

    return () => {
      sections.forEach((section) => {
        if (section) observer.unobserve(section);
      });
    };
  }, []);

  return (
    <div className="flex justify-center items-center fixed top-3 left-0 right-0 z-50">
      <nav className="flex gap-1 p-0.5 border border-white/15 rounded-full bg-white/10 backdrop-blur-sm">
        {navLinks.map(({ href, label }) => {
          const isActive = href === "/" ? activeSection === null : href === activeSection;

          return (
            <Link
              key={href}
              href={href}
              className={`nav-item px-4 py-2 rounded-full transition-colors ${
                isActive ? "bg-white text-gray-900 hover:bg-white/70" : "text-white hover:text-gray-300"
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
