import React, { useState } from "react";

const Project = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [hoveredProject, setHoveredProject] = useState(null);

  const projects = [
    {
      id: 1,
      name: "ERIS: Equipment Resource Information System",
      desc: "It provides information on the region's equipment resources, including their status, movement, and backtrack, allowing the RDRRMC Region 10 and local DRRM offices to monitor resources",
      image: "/eris.png",
      url: "",
      tech: ["Laravel", "InertiaJS", "VueJS", "TailwindCSS"],
    },
    // {
    //   id: 2,
    //   name: "Date Me: Dating website",
    //   desc: "Date Me offers users the opportunity to upload captivating profile images and engage in real-time chat, fostering meaningful connections in the online dating realm.",
    //   image: "/date-me.png",
    //   url: "#",
    //   tech: ["ASP.NET", "Angular", "SignalR", "Ngx-Bootstrap"],
    // },
    {
      id: 3,
      name: "LogiWare: One-Stop Inventory",
      desc: "your all-in-one inventory information system, shipment tracking, and product flow. Stay on top of your inventory with ease and precision, all in one place",
      image: "/logiware.png",
      url: "https://logiware.onrender.com/",
      tech: ["ASP.NET", "Angular", "SpartanNG", "TailwindCSS"],
    },
    {
      id: 4,
      name: "ReadMindMe: Social Media",
      desc: "where faith meets expression. Share your beliefs, thoughts, and perspectives on our unique social platform. Whether you're religious or not",
      image: "/read-mind-me.png",
      url: "https://read-mind-me.onrender.com/",
      tech: ["ASP.NET", "ReactTS", "SignalR", "ShadCN"],
    },
    {
      id: 8,
      name: "Time Caps",
      desc: "Send personalized emails to recipients at a future date. Share memories, goals, and messages with your future self or loved ones. Keep the magic of surprise alive",
      image: "/time-cap.png",
      url: "https://timecaps.onrender.com",
      tech: ["Angular", "PrimeNG", "TailwindCSS", "ASP.NET", "MailKit", "Hangfire"],
    },
    // {
    //   id: 5,
    //   name: "Lorem Hotel: Frontend Dashboard Application",
    //   desc: "a modern frontend dashboard application designed to optimize hotel operations. Featuring an intuitive interface, it allows hotel staff to manage bookings, monitor occupancy, track room services, and maintain detailed guest profiles efficiently.",
    //   image: "/lorem-hotel.png",
    //   url: "#",
    //   tech: ["ReactJS", "DaisyUI", "TailwindCSS"],
    // },
    // {
    //   id: 7,
    //   name: "VLCC: Victorious Living Church",
    //   desc: "a welcoming community focused on grace, truth, and the transformative power of the Holy Spirit.",
    //   image: "/VLCC.png",
    //   url: "#",
    //   tech: ["Webflow", "Figma"],
    // },
  ];

  const handleMouseMove = (e) => {
    setMousePosition({
      x: (e.clientX - window.innerWidth / 2) * 0.05,
      y: (e.clientY - window.innerHeight / 2) * 0.05,
    });
  };

  return (
    <div
      className="child font-roboto  flex flex-col lg:flex-row  relative h-screen"
      onMouseMove={handleMouseMove}
    >
      <div
        className="w-fit p-8 relative z-0 h-[calc(100vh-300px)] overflow-y-auto "
        style={{

          scrollbarWidth: "none", // Firefox
          msOverflowStyle: "none", // IE/Edge
          WebkitOverflowScrolling: "touch", // Smooth scrolling on iOS
        }}
      >
        <ul className="text-sm lg:text-xl flex flex-col space-y-16 leading-7 tracking-widest custom-list">
          {projects.map((project) => (
            <a
              target="_blank"
              href={project.url}
              key={project.id}
              onMouseEnter={() => setHoveredProject(project)}
              onMouseLeave={() => setHoveredProject(null)}
              className="group text-justify font-roboto cursor-pointer list-decimal list-outside font-normal lg:w-2/3 text-wrap"
            >
              <h1 className="font-medium italic transition-all duration-300 ease-in-out transform group-hover:underline">{project.name}</h1>
              <span className="text-xs text-start pl-6 pt-4 font-light">
                {project.desc}
              </span>
              <div className="pl-5 lg:pl-10 flex space-x-2 items-center align-middle pt-4 text-xs font-normal">
                {project.tech.map((tech, index) => (
                  <small
                    className="font-light italic border-r last:border-none px-2 py-1"
                    key={index}
                  >
                    {tech}
                  </small>
                ))}
              </div>
            </a>
          ))}
        </ul>
      </div>

      <div className=" hidden w-2/3 p-8 lg:flex items-center justify-center fixed bottom-1/2 left-1/3  z-50">
        {hoveredProject && (
          <div
            onMouseEnter={() => setHoveredProject(hoveredProject)}
            onMouseLeave={() => setHoveredProject(null)}
            className="transition-all duration-300 ease-out"
            style={{
              transform: `translate(${mousePosition.x}px, ${mousePosition.y}px)`,
            }}
          >
            <div className="[filter:invert(1)_brightness(0.67)_contrast(0.56)]">
              <img
                style={{
                  width: "80%", // This scales the image to 50% of its container's width
                  height: "auto", // This maintains the aspect ratio of the image
                }}
                src={hoveredProject.image}
                alt={hoveredProject.name}
                className="text-center shadow-2xl  shadow-slate-600 [filter:invert(1)_brightness(0.67)_contrast(0.56)]"
              />
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Project;
