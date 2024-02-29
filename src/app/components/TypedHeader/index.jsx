/* eslint-disable react-hooks/exhaustive-deps */
"use client";
import { gsap } from "gsap";
import { TextPlugin } from "gsap/TextPlugin";
import { useEffect } from "react";

gsap.registerPlugin(TextPlugin);

function TypedHeader({ headerTransaltions }) {
  const { title1, title2 } = headerTransaltions;

  useEffect(() => {
    gsap.defaults({ ease: "none" });

    const tl = gsap.timeline({ repeat: 0, yoyo: false });

    tl.to(".title1", {
      text: `${title1}`,
      duration: 1,
      x: 100,
    });

    tl.to(".dev-name", {
      text: `Caio Bukvar`,
      duration: 1,
      x: 100,
    });

    tl.to(".title2", {
      text: `${title2}`,
      duration: 1,
      x: 100,
    });
  }, []);

  return (
    <div className="flex w-full max-w-screen-lg">
      <h2 className="text-3xl italic text-slate-600">
        <span className="title1 "></span>
        <span className="dev-name font-bold text-lime-600 underline"></span>
        <span className="title2 "></span>
      </h2>
    </div>
  );
}

export default TypedHeader;
