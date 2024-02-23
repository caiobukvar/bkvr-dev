/* eslint-disable react/no-unescaped-entities */

import { Contact } from "lucide-react";

export default function About() {
  return (
    <div className="flex w-full max-w-screen-lg animate-slide-in-left flex-col gap-16 p-4 ">
      <h1
        className={`text-center text-3xl italic tracking-tighter text-slate-600 md:text-start`}
      >
        Meet{" "}
        <span
          className={`font-bold text-lime-600 underline hover:text-lime-500 `}
        >
          Caio Bukvar
        </span>
        , software developer.
      </h1>

      <div className="flex flex-col gap-6 ">
        <div className="flex items-center gap-2">
          <Contact />
          <h3 className="text-xl font-bold md:text-2xl">About me</h3>
        </div>
        <div className="flex flex-col gap-4 border-l-2 border-lime-600 pl-6 text-sm md:text-base">
          <p>
            Hi! I'm 30 years old, from Brazil, delivering solutions since 2021.
          </p>
          <p>
            Started my career on 2021, fell in love with programming when I
            started a fullstack development course. That was my first glance on
            the tech area, besides gaming, making me hungry for knowledge.
          </p>
          <p>
            Nowadays, I'm commited to improve my skills as a developer, while
            learning a bit about design, typography and UI/UX, scratching some
            designs here and there.
          </p>
          <p>I'm always aiming to deliver the best possible solution.</p>
        </div>
      </div>
    </div>
  );
}
