import { Loader2 } from "lucide-react";

export default function Loading() {
  return (
    <div className="fixed inset-0 h-screen w-screen bg-black/60">
      <div className="fixed left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 ">
        <Loader2
          className="animate-spin rounded-full text-lime-600"
          size={64}
        />
      </div>
    </div>
  );
}
