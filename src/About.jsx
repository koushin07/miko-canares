import { ArrowRight } from "lucide-react";
import { Link } from "react-router";

export const About = () => {
  const experiences = [
    {
      year: "2023",
      title: "Analyst II ERP Product Application",
      description:
        "Testing terminal applications within the different servers. and Developing automated test ",
    },
    {
      year: "2023",
      title: "System and Infrastructure Engineer - Intern",
      description:
        "Set up servers, installed software, and resolved issues to ensure reliability",
    },
    {
      year: "2022",
      title: "Freelance - Web Developer",
      description:
        "Building Website for clients business and projects",
    },
  ];
  return (
    <div
      className="p-8 pt-10 font-roboto h-[calc(100vh-300px)] overflow-y-auto"
      style={{
        scrollbarWidth: "none", // Firefox
        msOverflowStyle: "none", // IE/Edge
        WebkitOverflowScrolling: "touch", // Smooth scrolling on iOS
      }}
    >
      <div className="max-w-4xl  space-y-16">
        {/* Header Section */}
        <header className="space-y-6">
          <h1 className="text-3xl font-light text-gray-100">
            From Servers to Code
          </h1>
          <div className="space-y-4 text-lg font-thin  text-gray-300">
            <p className="leading-relaxed">
              Starting with a foundation in system infrastructure, the journey
              evolved from working with server environments to testing and
              improving server-based systems. This curiosity eventually led to a
              passion for web development and UI/UX design, merging technical
              skills with creativity to craft impactful solutions.
            </p>
            {/* <p className="leading-relaxed">
            Starting in quality assurance, I developed an eye for detail and precision. With a self-taught approach, I transitioned into web development and UI/UX design, creating digital solutions that blend functionality and aesthetics. This journey continues, driven by curiosity and the pursuit of excellence.
          </p> */}
          </div>
        </header>

        {/* Timeline Section */}
        <section className="space-y-8">
          <h2 className="text-2xl font-thin text-gray-100">
            Journey Highlights
          </h2>
          <div className="space-y-6">
            {experiences.map((milestone, index) => (
              <div key={index} className="flex gap-6 items-start">
                <div className="w-36 flex-shrink-0 text-gray-500 font-medium">
                  {milestone.year}
                </div>
                <div className="flex-1 space-y-1">
                  <h3 className="font-light text-gray-100">
                    {milestone.title}
                  </h3>
                  <p className="text-gray-400 italic">
                    {milestone.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Quote Section */}
        <section className=" shadow-sm">
          <blockquote className="text-xl italic text-gray-200 text-center">
            Curiosity keeps leading me down new paths.
            <footer className="mt-2 text-gray-400 text-sm">
              — Walt Disney
            </footer>
          </blockquote>
        </section>

        {/* Call to Action */}
        <div className="text-center ">
          <Link to={"/projects"}>
            <button
              // onClick={() =>
              //   (window.location.href = "/projects")
              // }
              className="relative  px-6 py-3  font-medium overflow-hidden rounded-lg group border"
            >
              <span className="absolute h-full w-full inset-0 bg-gradient-to-r from-transparent via-gray-500/40 to-transparent group-hover:via-gray-500/60 animate-wave" />
              <span className="flex text-base relative z-10 text-stone-800 [filter:invert(1)_brightness(0.67)_contrast(0.56)]">
                Explore My Work
                <ArrowRight className="w-5 h-5 self-center" />
              </span>
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};
