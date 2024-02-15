import Link from "next/link";

export default function Navbar() {
  return (
    <div className="flex w-full align-center p-6 gap-6 bg-slate-600">
      <Link href="/">Home</Link>
      <Link href="/projects">Projects</Link>
      <Link href="/social">Social</Link>
    </div>
  );
}
