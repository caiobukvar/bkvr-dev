/* eslint-disable react/no-unescaped-entities */

import { jura } from "@/styles/fonts";
import { Contact } from "lucide-react";

export default function About() {
  return (
    <div className="flex flex-col w-full max-w-screen-lg gap-16 p-4 animate-slide-in-left ">
      <h1 className={`text-slate-600 text-3xl  tracking-tighter italic`}>
        Meet{" "}
        <span className={`text-lime-600 font-bold underline `}>
          Caio Bukvar
        </span>
        , software developer.
      </h1>

      <div className="flex flex-col gap-6 ">
        <div className="flex gap-2 items-center">
          <Contact />
          <h3 className="text-xl md:text-2xl font-bold">About me</h3>
        </div>
        <div className="flex flex-col gap-4 border-l-2 border-lime-600 pl-6 text-sm md:text-base">
          <p>
            Hi! I'm 30 years old, from Brazil, delivering solutions since 2021.
          </p>
          <p>
            Started my career on 2021, fell in love with programming when I
            started a fullstack development course. That was my first glampse on
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
