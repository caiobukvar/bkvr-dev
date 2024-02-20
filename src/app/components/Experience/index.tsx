import {
  AtSign,
  Briefcase,
  Building,
  ChevronRight,
  GitCommitHorizontal,
} from "lucide-react";

/* eslint-disable react/no-unescaped-entities */
export default function Experience() {
  return (
    <div className="flex flex-col w-full max-w-screen-lg gap-4 p-4 mt-12">
      <div className="flex gap-2 ">
        <Briefcase />
        <h3 className="text-xl md:text-2xl font-bold">
          Professional experience:
        </h3>
      </div>
      <div className="flex flex-col gap-12">
        <div className="flex flex-col gap-4 border-l-2 border-lime-600 pl-2 text-sm md:text-base">
          <div className="flex flex-col gap-2">
            <h2 className="text-slate-600 font-bold">
              Frontend Developer @ Unmaze
            </h2>

            <p className="text-xs">Mar. 2022 - Aug. 2023</p>
          </div>

          <p>
            I was responsible for developing unmaze's platform and maintaining
            it, focused on React. I've contributed with several crucial
            insights, which lead us to:
          </p>
          <ul className="text-wrap">
            <li className="flex md:items-center">
              <GitCommitHorizontal /> Revenue increased 40%;{" "}
            </li>
            <li className="flex md:items-center">
              <GitCommitHorizontal /> Total user amount increased by 60%;
            </li>
            <li className="flex md:items-center">
              <GitCommitHorizontal /> Number of active users increased by 50%;
            </li>
            <li className="flex md:items-center">
              <GitCommitHorizontal /> B2B clients raised from 0 to 8 (last
              trimester 2022);
            </li>
            <li className="flex md:items-center">
              <GitCommitHorizontal /> NPS kept above 85 throughout 2022.
            </li>
          </ul>
        </div>

        <div className="flex flex-col gap-4 border-l-2 border-lime-600 pl-2 text-sm md:text-base">
          <div className="flex flex-col gap-2">
            <h2 className="text-slate-600 font-bold">
              Frontend Developer @ Cubos Academy
            </h2>

            <p className="text-xs">Nov. 2021 - Mar. 2022</p>
          </div>
          <p>
            I was responsible for creating layouts based on figma designs,
            focused on React.
          </p>
          <ul>
            <li className="flex md:items-center">
              <GitCommitHorizontal /> major increase of my coding skills along
              with a senior dev reviewing my code;
            </li>
            <li className="flex md:items-center">
              <GitCommitHorizontal /> major increase on communication skills and
              introduction to dailies, weeklys, reports, 1 on 1's;
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
