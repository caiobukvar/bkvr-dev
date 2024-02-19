/* eslint-disable react/no-unescaped-entities */

import Image from "next/image";

export default function About() {
  return (
    <div className="flex flex-col w-full max-w-screen-lg gap-16 p-4 animate-slide-in-left ">
      <h1 className="text-slate-600 text-3xl">
        Meet <span className="text-lime-600 font-bold">Caio Bukvar</span>,
        software developer.
      </h1>

      <div className="flex flex-col gap-4">
        <h3 className="text-2xl font-bold">About me:</h3>
        <div className="flex flex-col gap-4 border-l-2 border-lime-600 pl-2">
          <p>
            Hi! I'm 30 years old, from Brazil, delivering solutions since 2021.
          </p>
          <p>
            Started my career on 2021, fell in love with programming when I
            started a fullstack development course, focusing on javascript,
            React and Node.JS. That was my first glampse on the tech area,
            besides gaming, making me hungry for knowledge.
          </p>
          <p>
            Since then, I'm commited to improve my skills as a developer and
            always aim to deliver the best possible solution.
          </p>
        </div>
      </div>
    </div>
  );
}
