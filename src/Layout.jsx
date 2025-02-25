import { useEffect, useRef, useState } from "react";
import { NavLink, Outlet, useLocation } from "react-router";
import anime from "animejs";
import Loading from "./Loading";

const Layout = () => {
  const grained = useRef(null);
  const [isActive, setIsActive] = useState(false);
  const line1Ref = useRef(null);
  const line2Ref = useRef(null);
  const location = useLocation();
  // Update position on mouse move

  const navItems = [
    { num: "01", text: "Profile", link: "/" },
    // { num: "02", text: "Experience", link: "experience" },
    { num: "02", text: "About", link: "/about" },
    { num: "03", text: "Projects", link: "projects" },
    { num: "05", text: "Skills", link: "skills" },
  ];
  useEffect(() => {
    anime({
      targets: ".navigation",
      translateY: ["100%", "0%"],
      duration: 800,
      easing: "easeOutQuad",
      delay: anime.stagger(100),
    });
  }, []);
  useEffect(() => {
    const animation = anime.timeline({
      duration: 1000,
      delay: 3000,
      easing: "easeInOutExpo",
    });
    animation
      .add({
        targets: ".miko",
        translateY: [130, 0],
        delay: 3000,
        // duration: 2000,
        easing: "easeOutQuint",
      })
      .add(
        {
          targets: ".canares",
          translateY: [130, 0],
          delay: 3000,
          // duration: 2000,
          easing: "easeOutQuint",
        },
        0
      );
  }, []);
  useEffect(() => {
    anime(
      {
        targets: ".child *",
        opacity: [0, 1],
        translateX: [-100, 0],
        easing: "easeOutCubic",
        duration: 2000,
        // delay: anime.stagger(200, {
        //   from: 'first',
        //   easing: 'easeOutCubic',

        // }),
      },
      0
    );
    setIsActive(false);
  }, [location]);

  //humberger animation
  useEffect(() => {
    const animation = anime.timeline({
      easing: "easeInOutQuad",
      duration: 300,
    });
    if (isActive) {
      animation
        .add({
          targets: [line1Ref.current],
          easing: "easeInOutQuad",
          duration: 300,
          rotate: "20deg",
        })
        .add(
          {
            targets: [line2Ref.current],
            easing: "easeInOutQuad",
            duration: 300,
            rotate: "-10deg",
            translateX: "-5px",
          },
          0
        );
    } else {
      animation
        .add({
          targets: [line1Ref.current],
          easing: "easeInOutQuad",
          duration: 300,
          rotate: "0deg",
        })
        .add(
          {
            targets: [line2Ref.current],
            easing: "easeInOutQuad",
            duration: 300,
            rotate: "0deg",
            translateX: "0px",
          },
          0
        );
    }
    animation.add({
      targets: ".navNumber",
      translateY: [100, 0],
      delay: anime.stagger(200, { start: 500 }),
      duration: 500,
      easing: "easeOutQuad",
    });
  }, [isActive]);

  const handleMobileNavigation = () => {
    setIsActive(!isActive);
  };
  useEffect(() => {
    anime
      .timeline({
        easing: "easeInOutQuad",
        loop: true,
      })
      // First phase: Show first text, then move to second text
      .add({
        targets: ".animation-effect",
        translateY: [0, "-33.33%"], // Move up by 1/3 of the container
        duration: 1200,
        easing: "easeInOutQuad",
        changeBegin: () => {
          anime({
            targets: ".letter-1",
            translateY: ["0", "-30%"],
            duration: 800,
            easing: "easeInOutQuad",
            delay: anime.stagger(120),
          })
          anime({
            targets: ".letter-2",
            translateY: ['50%', '0'],
            duration: 800,
            easing: "easeInOutQuad",
            delay: anime.stagger(120),
          })
        }
      })
      // Pause briefly on second text
      .add({
        duration: 1000,
      })
      // Second phase: Show second text, move to third text
      .add({
        targets: ".animation-effect",
        translateY: ["-33.33%", "-66.66%"], // Move up by another 1/3
        duration: 1200,
        easing: "easeInOutQuad",
        changeBegin: () => {
          anime({
            targets: ".letter-2",
            translateY: ['0', '-30%'],
            duration: 800,
            easing: "easeInOutQuad",
            delay: anime.stagger(120),
          })
          anime({
            targets: ".letter-3",
            translateY: ['50%', '0'],
            duration: 800,
            easing: "easeInOutQuad",
            delay: anime.stagger(120),
          })
        }
      })
      // Pause briefly on third text
      .add({
        duration: 1000,
      });
    // Reset to first text (with animation)

  }, []);

  useEffect(() => {
    const navAnimation = anime.timeline({
      duration: 1000,

      easing: "easeInOutExpo",
    });
    navAnimation.add({
      targets: [
        ".logo-stroke",
        line1Ref.current,
        line2Ref.current,
        ".logo-text",
      ],
      // ["#292524", "#FAFAF9"],
      stroke: isActive ? "#FAFAF9" : "#292524",
    });
    if (isActive) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
  }, [isActive]);
  return (
    <>
      <Loading />
      <div className="fixed top-0 right-0 lg:hidden pt-10 pr-10 w-fit z-[60]">
        <svg
          width="20px"
          height="20px"
          viewBox="0 0 24 24"
          fill="none"
          onClick={() => handleMobileNavigation()}
          style={{ cursor: "pointer" }}
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            ref={line1Ref}
            d="M3 10H21"
            stroke="#71717A"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            ref={line2Ref}
            d="M3 15H21"
            stroke="#71717A"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </div>
      {/* for mobile navigation */}
      {isActive && (
        <div className=" h-screen overflow-hidden w-screen overscroll-none bg-gradient-to-br from-stone-500 to-stone-300 touch-none z-[20]">
          <nav className="fixed bottom-40 right-0 pr-10 z-0">
            <ul className="space-y-6">
              {navItems.map((item) => (
                <li key={item.num} className="relative group text-right ">
                  <NavLink
                    to={item.link}
                    className="  flex items-center justify-end space-x-10 animated-text hover:text-white transition-colors duration-300"
                  >
                    <div className="overflow-hidden h-6 lg:h-28 w-fit">
                      <span className="navNumber flex space-x-2 font-roboto relative text-xl">
                        <h1 className="opacity-60 group-hover:opacity-100 transition-opacity">
                          {item.num}
                        </h1>
                        <h1 className="font-medium tracking-wider">
                          {item.text}
                        </h1>
                      </span>
                    </div>
                    {/* <div className="overflow-hidden h-6 lg:h-28 w-fit">
                      <span className="relative text-lg font-medium tracking-wider">

                      </span>
                    </div> */}
                  </NavLink>
                </li>
              ))}
            </ul>
          </nav>
        </div>
      )}
      <div
        ref={grained}
        className=" grained bg-zinc-900 relative overflow-hidden font-mono"
      >
        <div className=" relative pt-10 lg:pt-0">
          <header className="font-lato px-10 to-10 pt-16  text-slate-300 w-1/4">
            <div className="hover-effect  text-lg md:text-3xl font-bold">
              <div
                className="flex flex-col overflow-hidden h-7 md:h-9
                 w-48 "
              >
                <div className=" animation-effect">
                  <div>
                    {"Developer".split("").map((char, index) => (
                      <span key={index} className=" letter-1 inline-block">
                        {char}
                      </span>
                    ))}
                  </div>
                  <div>
                    {" "}
                    {"Designer".split("").map((char, index) => (
                      <span key={index} className="letter-2 inline-block">
                        {char}
                      </span>
                    ))}
                  </div>
                  <div>
                    {" "}
                    {"Developer".split("").map((char, index) => (
                      <span key={index} className="letter-3 inline-block">
                        {char}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>{" "}
            <div className="relative group w-full h-full">
              <div className="overflow-hidden h-24 lg:h-32 w-fit">
                <header className="miko relative  tracking-wider text-7xl  lg:text-9xl pb-2">
                  Miko
                </header>
              </div>
              <div className="overflow-hidden h-24 lg:h-32 w-fit">
                <header className="canares relative  tracking-wider text-7xl lg:text-9xl pb-2">
                  Canares
                </header>
              </div>
            </div>
          </header>

          {/* Main Content Area */}
          <main className="relative -translate-y-10 h-screen overflow-hidden">
            <div className="w-full h-full">
              <div className="font-thin font-roboto subpixel-antialiased child text-stone-300 h-full">
                <Outlet />
              </div>
            </div>
          </main>

          {/* Bottom Contact Info */}
        </div>

        {/* Right Edge Navigation with SVG */}
        <div className="hidden lg:block fixed bottom-0 z-[0] right-0 w-[400px] h-[600px]">
          {/* Navigation Menu - Positioned to align with SVG */}
          <nav className="absolute bottom-32 right-20 z-0">
            <ul className="space-y-6">
              {navItems.map((item) => (
                <li key={item.num} className="group text-right ">
                  <NavLink
                    to={item.link}
                    className={({ isActive }) => `
                    navigation ppercase font-mono flex items-center justify-end space-x-4
                    animated-text transition-colors duration-300
                    ${isActive ? "text-stone-400" : "hover:text-white"}
                  `}
                  >
                    <span className=" text-sm opacity-60 group-hover:opacity-100 transition-opacity">
                      {item.num}
                    </span>
                    <span className="text-base opacity-60 font-medium tracking-wider">
                      {item.text}
                    </span>
                  </NavLink>
                </li>
              ))}
            </ul>
          </nav>

          {/* Edge SVG */}
          <svg viewBox="0 0 400 600" className="w-full h-full pb-2 pr-2 z-[0]">
            {/* Main corner lines */}

            {/* Additional overlapping lines */}
            <line
              x1="380"
              y1="-20"
              x2="380"
              y2="620"
              stroke="white"
              strokeWidth="1"
              opacity="0.5"
            />
            <line
              x1="-20"
              y1="580"
              x2="420"
              y2="580"
              stroke="white"
              strokeWidth="1"
              opacity="0.5"
            />

            {/* Diagonal overlapping line */}
          </svg>
        </div>
        <div className="flex font-roboto items-center space-x-6 absolute bottom-1 text-[14px] right-1/3 lg:right-0  lg:pr-16 text-black">
          <a
            href="https://linkedin.com/in/miko-cañares-772525292"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center font-medium  tracking-widest  space-x-2 text-stone-800 hover:text-black transition-colors duration-300"
          >
            {/* <Linkedin size={18} /> */}
            <span>LinkedIn</span>
          </a>
          <a
            href="https://github.com/koushin07"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center font-medium  tracking-widest  space-x-2 text-stone-800 hover:text-black transition-colors duration-300"
          >
            {/* <Github size={18} /> */}
            <span>Github</span>
          </a>
        </div>
      </div>
    </>
  );
};

export default Layout;
