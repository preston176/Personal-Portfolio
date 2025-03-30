import ArrowDown from "@/assets/icons/arrow-down.svg";

export const HeroSection = () => {
  return (
    <section className="py-32 md:py-48 lg:mt-12 lg:py-60 font-poppins">
      <div className="container flex flex-col items-center">
        {/* Availability Badge - Centered */}
        <div className="bg-gray-950 border border-gray-800 px-4 py-1.5 flex items-center gap-4 rounded-lg justify-center">
          <div className="bg-green-500 size-2.5 rounded-full" aria-hidden="true"></div>
          <span className="text-sm font-medium">Available for projects</span>
        </div>

        {/* Hero Title */}
        <div className="max-w-lg md:max-w-2xl mx-auto text-center">
          <h1 className="text-3xl md:text-5xl font-bold mt-8 tracking-wide">
            Hi, I'm  Preston <span className="text-green-400">Mayieka</span>
          </h1>

          {/* Subtitle / Description */}
          <h2 className="md:text-lg mt-4 text-white/60">
            A Full-Stack Developer <br /> From Eldoret, Kenya
          </h2>
        </div>

        {/* CTA Buttons */}
        <div className="flex flex-col md:flex-row gap-4 items-center justify-center mt-8">
          <button
            className="inline-flex items-center gap-2 border border-white/15 px-6 h-12 rounded-xl transition hover:bg-white hover:text-gray-900"
            aria-label="View my projects"
          >
            <span className="font-semibold">View My Projects</span>
            <ArrowDown className="size-4 animate-bounce" aria-hidden="true" />
          </button>

          <button
            className="inline-flex items-center gap-2 border border-white bg-white text-gray-900 h-12 px-6 rounded-xl transition hover:bg-gray-200"
            aria-label="Connect with me"
          >
            <span role="img" aria-label="Wave emoji">👋</span>
            <span className="font-semibold">Let’s Connect</span>
          </button>
        </div>
      </div>
    </section>
  );
};
