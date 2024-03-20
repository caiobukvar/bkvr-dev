import { HandHelping } from "lucide-react";
import { useTranslations } from "next-intl";

export default function VoluntaryWork() {
  const t = useTranslations("Voluntary");
  const job1ListKeys = ["i1", "i2", "i3", "i4", "i5"] as const;
  const job1Tags = [
    "Next",
    "TypeScript",
    "Javascript",
    "TailwindCSS",
    "React Query",
    "Ant Design",
    "OAuth",
    "CI/CD",
    "Figma",
  ];

  return (
    <div className="mt-24 flex w-full max-w-screen-lg flex-col gap-6 px-12 ">
      <div className="flex items-center gap-2 text-slate-800 dark:text-slate-400">
        <HandHelping />
        <h3 className="text-xl font-bold md:text-2xl ">{t("title")}</h3>
      </div>
      <div className="flex flex-col gap-12">
        <div className="flex flex-col gap-4 border-l-2 border-lime-600 pl-6 text-sm text-slate-800 md:text-base dark:text-slate-400">
          <div className="flex flex-col gap-2 text-slate-600">
            <h2 className="font-bold">{t("dev")} @ College Hack</h2>

            <p className="text-xs">
              {t("march")} 2023 - {t("currently")}
            </p>
          </div>

          <ul className="ml-6 flex list-disc flex-col gap-2 text-wrap text-slate-800 dark:text-slate-400">
            {job1ListKeys.map((key) => (
              <li key={key}>{t(`job1.list.${key}`)}</li>
            ))}
          </ul>
          <div className="flex flex-wrap gap-2">
            {job1Tags.map((key) => (
              <div
                key={key}
                className="rounded-md bg-slate-400 p-1 text-xs text-slate-800"
              >
                {key}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
