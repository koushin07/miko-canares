import { Briefcase, Code, Database, Pencil } from "lucide-react";
import React, { useEffect } from "react";

const Skills = () => {
  useEffect(() => {
    document.body.scrollTo(0, 0);
  });
  const skillList = [
    {
      id: 1,
      name: "QA & Testing",
      icon: <Briefcase size={48} />,
      skillSet: [
        { name: "Manual Testing", description: "Hands-on testing techniques" },
        {
          name: "Automation Testing",
          description: "Writing and executing automated tests",
        },
        { name: "Jira", description: "Issue tracking and project management" },
        { name: "Github", description: "Collaborative code versioning" },
        { name: "Junit", description: "Unit testing framework for Java" },
        { name: "Panaya", description: "SAP change impact analysis" },
        { name: "Cycle Labs", description: "Continuous testing platform" },
      ],
    },
    {
      id: 2,
      name: "Programming Languages",
      icon: <Code size={48} />,
      skillSet: [
        { name: "PHP", description: "Server-side scripting language" },
        { name: "Java", description: "Object-oriented programming language" },
        { name: "JavaScript", description: "Dynamic client-side language" },
        {
          name: "TypeScript",
          description: "Superset of JavaScript with static typing",
        },
        { name: "C#", description: "Microsoft software framework" },
      ],
    },
    {
      id: 3,
      name: "Databases & Servers",
      icon: <Database size={48} />,
      skillSet: [
        {
          name: "Database Management",
          description: "Designing and maintaining databases",
        },
        { name: "PGSQL", description: "Open-source relational database" },
        { name: "SQL Server", description: "Microsoft's relational database" },
        { name: "Oracle", description: "Enterprise-level database solution" },
        { name: "MySQL", description: "Open-source relational database" },
        {
          name: "Ubuntu Server",
          description: "Linux distribution for servers",
        },
      ],
    },
    {
      id: 4,
      name: "Design & Frameworks",
      icon: <Pencil size={48} />,
      skillSet: [
        {
          name: "Canva",
          description: "Graphic design and visual content creation",
        },
        { name: "Figma", description: "Collaborative design and prototyping" },
        { name: "Webflow", description: "No-code website building platform" },
        { name: "Laravel", description: "PHP web application framework" },
        { name: "VueJS", description: "Progressive JavaScript framework" },
        {
          name: "Angular",
          description: "TypeScript-based web application framework",
        },
        { name: "ASP.NET", description: "Open-source .NET framework" },
        { name: "TailwindCSS", description: "Utility-first CSS framework" },
      ],
    },
  ];
  return (
    <div className="child font-roboto  flex flex-col lg:flex-row  relative h-screen">
      <div
        className="w-full  p-8 relative z-0 h-[calc(100vh-300px)] overflow-y-auto "
        style={{
          scrollbarWidth: "none", // Firefox
          msOverflowStyle: "none", // IE/Edge
          WebkitOverflowScrolling: "touch", // Smooth scrolling on iOS
        }}
      >
        <ul className="text-sm lg:text-xl flex flex-col space-y-28 leading-7 tracking-widest ">
          {skillList.map((skill) => (
            <div
              key={skill.id}
              className="group text-justify font-roboto cursor-pointer  font-normal lg:w-2/3 text-wrap"
            >
              <h1 className="font-medium italic text-lg">{skill.name}</h1>
              <div className="pl-5 lg:pl-10 flex flex-wrap lg:flex-row gap-4 lg:gap-6 items-center align-middle  pt-4 lg:text-sm font-normal">
                {skill.skillSet.map((tech, index) => (
                  <small className=" border rounded px-2 py-1" key={index}>
                    {tech.name}
                  </small>
                ))}
              </div>
            </div>
          ))}
        </ul>
      </div>
    </div>

  );
};

export default Skills;
