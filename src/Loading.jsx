import anime from "animejs";
import React, { useEffect, useRef } from "react";


const Loading = () => {
  const loadingRef = useRef(null);
  const logoRef = useRef(null);


  useEffect(() => {
    anime(
      {
        targets: ".bounce-element",
        translateY: [
          { value: "-25%", duration: 500, easing: "easeInOutSine" },
          { value: "0%", duration: 500, easing: "easeInOutSine" },
        ],
        delay: anime.stagger(100),
        loop: true,
      },
      0
    );
    anime({
      targets: ".blink-element",
      opacity: [
        { value: 0, duration: 800, easing: "easeInOutCirc" },
        { value: 1, duration: 800, easing: "easeInOutCirc" },
      ],
      loop: true,
    });
  }, []);




  useEffect(() => {
    const translateXValue = window.matchMedia("(min-width: 1024px)").matches ? `-${window.innerWidth/2-75}px` : `${window.innerWidth/2-60}px`;

    console.log(window.innerWidth/2)
    const animation = anime.timeline({
      easing: "easeInOutExpo",
      duration: 2000,
      delay: 2000,
    });
    animation
      .add({
        targets: logoRef.current.querySelector(".logo"),
        translateX: [translateXValue , "0px"],

        duration: 2000,
        easing: "easeInOutExpo",
      })
      .add(
        {
          targets: ".logo-stroke",
          stroke: ["#FAFAF9", "#292524"],
          duration: 1000,
          strokeWidth: [5, 3],
          easing: "easeInOutQuad",
        },
        0
      )
      .add(
        {
          targets: ".path-1",
          strokeDashoffset: [1, anime.setDashoffset],
          duration: 2000,
          easing: "easeInOutQuad",
        },
        0
      )
      .add(
        {
          targets: ".logo-text",
          opacity: [0, 1],
          translateX: ["500%", "0%"],
        },
        0
      )
      .add(
        {
          targets: ".rect",
          // delay: 2000,
          transform: ["rotate(45 72.5 27.5)", "rotate(-135 72.5 27.5)"],
          easing: "easeInOutQuad",
          duration: 2000,
        },
        0
      )
      .add(
        {
          targets: ".loading",
          opacity: [1, 0],
          duration: 2000,
          complete: () => {
            loadingRef.current.style.display = "none";
            anime({
              targets: ".rect",
              delay: 1000,
              transform: ["rotate(135 72.5 27.5)", "rotate(-135 72.5 27.5)"],
              easing: "easeInOutQuad",
              duration: 3000,
              loop: true,
            });
          },
        },
        0
      );
  }, []);
  return (
    <>
     <div ref={logoRef} className="fixed top-0 left-0 lg:right-0 lg:left-auto z-[60] p-4">


        <div className="p-4 w-full">
        <svg viewBox="0 0 200 80"  width="200" height="100" className="logo">
            <g className="fill-stone-800 font-mono text-sm  logo-text">
              <text x="1" y="40">
                open for
              </text>
              <text x="1" y="55">
                collaboration
              </text>
            </g>
            <g
              className="stroke-[#292524] logo-stroke"
              strokeWidth="2"
              fill="none"
              transform="translate(90,0)"
            >
              <path d="M 20,60 L 20,20 L 40,40 L 60,20 L 60,60" />

              <path className="path-1" d="M 20,60 L 60,20 M 20,20 L 60,60" />

              <path
                className="path-1"
                d="M 10,70 L 20,60 M 60,20 L 70,10 M 10,10 L 20,20 M 60,60 L 70,70"
              />
              <rect
                className="rect"
                x="65"
                y="20"
                width="15"
                height="15"
                // transform="rotate(45 72.5 27.5)"
              />
              <line x1="65" y1="45" x2="80" y2="45" />
            </g>
          </svg>
        </div>


      </div>

      {/* Loading screen */}
      <div
        ref={loadingRef}
        className="loading fixed inset-0 z-50 bg-neutral-800"
      >
        <div className="flex justify-center items-center min-h-screen">
          <div className="italic text-sm font-mono z-[60] text-white text-center">
            <div className=" bouncing flex justify-center space-x-2 mb-2">
            <img src="/image23x1.png" className="bounce-element h-10 lg:h-16 w-1.5 lg:w-3"/>
            <img src="/image24x1.png" className="bounce-element h-10 lg:h-16 w-1.5 lg:w-3"/>
            <img src="/image25x1.png" className="bounce-element h-10 lg:h-16 w-1.5 lg:w-3"/>
            {/* <div className="bounce-element h-10 w-2 bg-inherit ">c</div> */}
               {/*<div className="bounce-element h-10 w-2 bg-stone-500 "></div>
              <div className="bounce-element h-10 w-2 bg-stone-600"></div> */}
            </div>
            <div className="blink-element font-roboto text-xs font-light tracking-wider">
             Best viewed on a desktop or laptop.
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Loading;
