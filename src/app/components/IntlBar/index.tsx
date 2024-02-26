"use client";
import us from "/public/images/us-round.png";
import br from "/public/images/br-round.png";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

function IntlBar() {
  const path = usePathname();

  return (
    <div className="flex w-full max-w-screen-lg flex-row items-center justify-center py-2">
      <div className="flex w-full items-center justify-end gap-2 pr-4 md:pr-0">
        <Link
          href="/pt"
          className={`rounded-full hover:scale-110 hover:ring-2 ${path === "/pt" ? "ring-2 ring-lime-600 hover:ring-lime-600" : "hover:ring-slate-600"}`}
        >
          <Image src={br} alt="br flag" width={36} height={36} />
        </Link>
        <Link
          href="/en"
          className={`rounded-full hover:scale-110 hover:ring-2 ${path === "/en" ? "ring-2 ring-lime-600 hover:ring-lime-600" : "hover:ring-slate-600"}`}
        >
          <Image src={us} alt="br flag" width={36} height={36} />
        </Link>
      </div>
    </div>
  );
}

export default IntlBar;
