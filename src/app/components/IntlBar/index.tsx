import us from "/public/images/us-round.png";
import br from "/public/images/br-round.png";
import Image from "next/image";

function IntlBar() {
  return (
    <div className="flex w-full max-w-screen-lg flex-row items-center justify-center py-2">
      <div className="flex w-full items-center justify-end gap-1 pr-4 md:pr-0">
        <button className="rounded-full hover:scale-110 hover:ring-2 hover:ring-lime-600">
          <Image src={br} alt="br flag" width={36} height={36} />
        </button>
        <button className="rounded-full hover:scale-110 hover:ring-2 hover:ring-lime-600">
          <Image src={us} alt="br flag" width={36} height={36} />
        </button>
      </div>
    </div>
  );
}

export default IntlBar;
