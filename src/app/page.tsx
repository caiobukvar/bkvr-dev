import Image from "next/image";
import About from "./components/About";
import Avatar from "/public/AvatarMaker.svg";

export default function Home() {
  return (
    <main className="flex flex-col items-center p-6 gap-6">
      <Image
        src={Avatar}
        alt="avatar"
        width={200}
        height={200}
        className="rounded-lg"
      />
      <h1 className="text-5xl text-lime-500">BKVR.DEV</h1>

      <About />
    </main>
  );
}
