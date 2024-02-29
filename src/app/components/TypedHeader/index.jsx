"use client";

import { useTypewriter } from "react-simple-typewriter";

function TypedHeader({ headerTransaltions }) {
  const { title1, title2 } = headerTransaltions;

  const [text] = useTypewriter({
    words: [`${title2}`],
    loop: 1,
    typeSpeed: 100,
  });

  return (
    <div>
      <h1
        className={`text-center text-3xl italic tracking-tight text-slate-600`}
      >
        {title1}
        <span
          className={`font-bold text-lime-600 underline hover:text-lime-500 `}
        >
          Caio Bukvar
        </span>
        {text}
      </h1>
    </div>
  );
}

export default TypedHeader;
