import { Award } from "lucide-react";

export default function Achievements() {
  return (
    <div className="flex w-full max-w-screen-lg flex-col gap-16 px-12">
      <div className="flex flex-col gap-6 ">
        <div className="flex items-center gap-2 text-slate-800 dark:text-slate-400">
          <Award />
          <h3 className="text-xl font-bold md:text-2xl">Conquistas</h3>
        </div>
        <div className="flex flex-col gap-4 border-l-2 border-lime-600 pl-6 text-sm text-slate-800 md:text-base dark:text-slate-400">
          <p>Hackaton UniAnchieta 2024 - 2º Lugar</p>
        </div>
      </div>
    </div>
  );
}
