"use client"

import Link from "next/link";
import ArrowUpRightIcon from "@/assets/icons/arrow-up-right.svg";

const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
const currentYear = new Date().getFullYear();
const currentDay = days[new Date().getUTCDay()];

const footerLinks = [
  { name: "Hashnode", url: "https://codewithpres.hashnode.dev/" },
  { name: "FreeCodeCamp", url: "https://www.freecodecamp.org/news/author/preston176" },
  { name: "LinkedIn", url: "https://www.linkedin.com/in/preston-mayieka/" },
  { name: "GitHub", url: "https://github.com/preston176/" },
];

const FooterLink = ({ name, url }: { name: string; url: string }) => (
  <Link href={url} target="_blank" rel="noopener noreferrer">
    <span className="inline-flex items-center gap-1.5 cursor-pointer hover:underline">
      <span className="font-semibold">{name}</span>
      <ArrowUpRightIcon className="size-4" />
    </span>
  </Link>
);

export const Footer = () => {
  return (
    <footer className="relative overflow-x-clip">
      {/* Background decoration, stays behind */}
      <div className="absolute h-[400px] w-[1600px] bottom-0 left-1/2 -translate-x-1/2 bg-emerald-300/10 [mask-image:radial-gradient(50%_50%_at_bottom_center,black,transparent)] -z-10"></div>

      <div className="container relative">
        <div className="border-t border-white/15 py-6 text-sm flex flex-col md:flex-row md:justify-between gap-8 items-center">
          <div className="text-white/90">
            &copy; {currentYear}. Have a nice {currentDay} :)
          </div>
          <nav className="flex flex-col md:flex-row items-center gap-8">
            {footerLinks.map((link) => (
              <FooterLink key={link.name} {...link} />
            ))}
          </nav>
        </div>
      </div>
    </footer>
  );
};
