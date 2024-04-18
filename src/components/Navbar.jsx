import React, { useState } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

const Navbar = () => {
  const tl = gsap.timeline({
    repeat: -1,
    repeatDelay: 1,
    yoyo: "true",
  });

  useGSAP(() => {
    tl.from(".part1 > h1", {
      opacity: 0,
      y: 50,

      ease: "back.inOut",
    })
      .from(".part2 >h1", {
        opacity: 0,
        y: 50,
        ease: "back.inOut",
      })
      .from("button", {
        scale: 0,
        opacity: 0,
        ease: "back.inOut",
      });
  }, []);
  const [color, setcolor] = useState("#838383");

  const btnHandler = () => {
    setcolor("blue");
  };

  return (
    <div
      style={{ backgroundColor: `${color}` }}
      className="part1 w-5/6 rounded-lg flex justify-between items-center  overflow-hidden px-[40px] py-2"
    >
      <h1 className="font-semibold text-white text-1xl">ACF-01</h1>

      <div className="part2 flex items-center gap-[5vw]">
        {["OUR ETHOS", "DESIGN", "SPECS", "SOUSCRIPTION"].map((el) => (
          <h1 className="font-semibold text-white text-1xl" key={el}>
            {el}
          </h1>
        ))}
      </div>

      <button
        onClick={btnHandler}
        className="px-6 py-2 rounded-[10px] font-semibold bg-[#FF6B00] border-0 outline-0"
      >
        Enquiries
      </button>
    </div>
  );
};

export default Navbar;
