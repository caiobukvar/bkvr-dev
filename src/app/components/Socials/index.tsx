import Image from "next/image";
import Github from "/public/images/github-logo.svg";
import Linkedin from "/public/images/linkedin-logo.svg";
import Link from "next/link";

export default function Socials() {
  return (
    <div className="flex flex-col w-full max-w-screen-lg p-4 gap-6 mt-12">
      <h3 className="text-2xl font-bold">Want to know more?</h3>
      <p className="text-xl font-bold text-slate-600">Find me on</p>

      <div className="flex flex-col gap-6">
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
    </div>
  );
}
