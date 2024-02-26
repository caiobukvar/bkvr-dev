"use client";
import us from "/public/images/us-round.png";
import br from "/public/images/br-round.png";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

function IntlBar() {
  const path = usePathname();

  return (
    <div className="">
      <Link
        href="/pt"
        className={`fixed bottom-16 right-3 flex h-10 w-10 flex-col items-center justify-center rounded-full  hover:scale-110 hover:ring-2 dark:bg-transparent ${path === "/pt" ? "ring-2 ring-lime-600 hover:ring-lime-600" : "hover:ring-slate-600"}`}
      >
        <Image src={br} alt="br flag" width={48} height={48} />
      </Link>
      <Link
        href="/en"
        className={`fixed bottom-28 right-3 flex h-10 w-10 flex-col items-center justify-center rounded-full  hover:scale-110 hover:ring-2 dark:bg-transparent ${path === "/en" ? "ring-2 ring-lime-600 hover:ring-lime-600" : "hover:ring-slate-600"}`}
      >
        <Image src={us} alt="br flag" width={48} height={48} />
      </Link>
    </div>
  );
}

export default IntlBar;
