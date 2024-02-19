import { AtSign, Building, ChevronRight } from "lucide-react";

/* eslint-disable react/no-unescaped-entities */
export default function Experience() {
  return (
    <div className="flex flex-col w-full max-w-screen-lg gap-4 p-4 mt-12">
      <h3 className="text-2xl font-bold">Professional experience:</h3>
      <div className="flex flex-col gap-12">
        <div className="flex flex-col gap-4 border-l-2 border-lime-600 pl-2">
          <div className="flex flex-col">
            <div className="flex gap-2">
              <h2 className="text-slate-600 font-bold">Frontend Developer</h2>
              <AtSign className="text-slate-600 w-5 h-5 self-center" />
              <h2 className="text-slate-600 font-bold">Unmaze</h2>
            </div>
            <p className="text-xs">Mar. 2022 - Aug. 2023</p>
          </div>

          <p>
            I was responsible for developing unmaze's platform and maintaining
            it, focused on React. I've contributed with several crucial
            insights, which lead us to:
          </p>
          <ul>
            <li className="flex">
              <ChevronRight /> Revenue increased 40%;{" "}
            </li>
            <li className="flex">
              <ChevronRight /> Total user amount increased by 60%;
            </li>
            <li className="flex">
              <ChevronRight /> Number of active users increased by 50%;
            </li>
            <li className="flex">
              <ChevronRight /> B2B clients raised from 0 to 8 (last trimester
              2022);
            </li>
            <li className="flex">
              <ChevronRight /> NPS kept above 85 throughout 2022.
            </li>
          </ul>
        </div>

        <div className="flex flex-col gap-4 border-l-2 border-lime-600 pl-2">
          <div className="flex flex-col">
            <div className="flex gap-2">
              <h2 className="text-slate-600 font-bold">Frontend Developer</h2>
              <AtSign className="text-slate-600 w-5 h-5 self-center" />
              <h2 className="text-slate-600 font-bold">Cubos Academy</h2>
            </div>
            <p className="text-xs">Nov. 2021 - Mar. 2022</p>
          </div>
          <p>
            I was responsible for creating layouts based on figma designs,
            focused on React.
          </p>
          <ul>
            <li className="flex">
              <ChevronRight /> major increase of my coding skills along with a
              senior dev reviewing my code;
            </li>
            <li className="flex">
              <ChevronRight /> major increase on communication skills and
              introduction to dailies, weeklys, reports, 1 on 1's;
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
