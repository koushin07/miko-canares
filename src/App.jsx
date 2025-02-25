import { useEffect } from "react";

const PortfolioPage = () => {
  useEffect(() => {}, []);
  return (
    <header className="child flex flex-col  font-roboto px-10  pt-16 pb-2  w-full">
      <div className="flex flex-col">
        <span className=" h-full lg:w-1/2  font- mt-4 lg:text-2xl leading-loose">
          Crafting Solutions with Code, Design, and Precision
        </span>
        <span className=" h-full  pl-2 lg:w-1/2 font-thin italic  mt-4 lg:text-xl leading-loose">
          A journey rooted in development, design, and quality assurance, with a
          passion for creating impactful digital experiences
        </span>
      </div>

      <div className="pt-28 lg:pt-40">
        <button
          onClick={() =>
            (window.location.href = "mailto:canaresmiko3@gmail.com")
          }
          className="relative px-6 py-3 font-bold overflow-hidden rounded-lg group border"
        >
          <span className="absolute h-full w-full inset-0 bg-gradient-to-r from-transparent via-gray-500/40 to-transparent group-hover:via-gray-500/60 animate-wave"/>
          <span className="relative z-10 text-stone-800 [filter:invert(1)_brightness(0.67)_contrast(0.56)]">
            Let&apos;s Collaborate
          </span>
        </button>
      </div>

      {/* Contact Info */}
    </header>
  );
};

export default PortfolioPage;
