import Image from "next/image";
import Github from "/public/images/github-logo.svg";
import Linkedin from "/public/images/linkedin-logo.svg";
import Link from "next/link";

export default function Socials() {
  return (
    <div className="flex flex-col w-full max-w-screen-lg p-4 gap-16 mt-12">
      <div className="flex flex-col gap-6">
        <h3 className="text-2xl font-bold">Want to know more?</h3>
        <p className="text-xl font-bold text-slate-600">Find me on</p>

        <Link
          href="https://github.com/caiobukvar"
          className="flex gap-4 items-center"
          target="_blank"
        >
          {" "}
          <Image src={Github} height={36} width={36} alt="github" />
          Github
        </Link>

        <Link
          href="https://www.linkedin.com/in/caiobukvar/"
          className="flex gap-4 items-center"
          target="_blank"
        >
          <Image src={Linkedin} height={36} width={36} alt="linkedin" />
          Linkedin
        </Link>
      </div>

      <form className="flex flex-col gap-6">
        <p className="text-xl font-bold text-slate-600">
          Or send me an e-mail:{" "}
        </p>
        <textarea
          placeholder="Insert e-mail content..."
          // value={filter}
          // onChange={(e) => setFilter(e.target.value)}
          className="bg-slate-800 rounded-md p-2 text-md font-semibold tracking-tight text-slate-400 placeholder:text-slate-w-48 text-center0 outline-none min-h-[200px] hover:ring-2 hover:ring-lime-600 focus-visible:ring-2 focus-visible:ring-lime-600"
        />
        <button className="w-[150px] bg-slate-700 hover:bg-slate-600 outline-none hover:ring-2 hover:ring-lime-600 hover:underline text-lime-600 text-md rounded-md p-3 focus-visible:ring-2 focus-visible:ring-lime-600">
          Send e-mail
        </button>
      </form>
    </div>
  );
}
