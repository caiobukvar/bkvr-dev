import { Loader2 } from "lucide-react";

export default function Loading() {
  return (
    <div className="inset-0 fixed bg-black/60 h-screen w-screen">
      <div className="fixed left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 ">
        <Loader2
          className="text-lime-600 rounded-full animate-spin"
          size={64}
        />
      </div>
    </div>
  );
}
