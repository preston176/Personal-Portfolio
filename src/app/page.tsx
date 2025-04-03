import { AboutSection } from "@/sections/About";
import { ContactSection } from "@/sections/Contact";
import { ExperienceSection } from "@/sections/Experience";
import { Footer } from "@/sections/Footer";
import { Header } from "@/sections/Header";
import { HeroSection } from "@/sections/Hero";
import { ProjectsSection } from "@/sections/Projects";
import { TestimonialsSection } from "@/sections/Testimonials";

export default function Home() {
  return (
    <div className="">
      <Header />
      <HeroSection />
      <ProjectsSection />
      {/* <ExperienceSection /> */}
      <TestimonialsSection />
      <AboutSection />
      <ContactSection />
      <Footer />
    </div>
  );
}
