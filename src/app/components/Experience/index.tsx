import { Briefcase } from "lucide-react";
import { useTranslations } from "next-intl";

/* eslint-disable react/no-unescaped-entities */
export default function Experience() {
  const t = useTranslations("Experience");
  const job2ListKeys = ["i1", "i2", "i3", "i4", "i5"] as const;
  const job1ListKeys = ["i1", "i2"] as const;
  const job1Tags = [
    "React",
    "ChakraUI",
    "Javascript",
    "Figma",
    "Slack",
    "Trello",
    "Jira",
    "Clickup",
    "Websocket",
    "Postman",
    "PostgreSQL",
  ];
  const job2Tags = [
    "React",
    "ChakraUI",
    "Docker",
    "Javascript",
    "Figma",
    "Slack",
    "Trello",
    "Jira",
    "Clickup",
    "Websocket",
    "Postman",
    "PostgreSQL",
  ];

  return (
    <div className="mt-24 flex w-full max-w-screen-lg flex-col gap-6 px-12 ">
      <div className="flex items-center gap-2 text-slate-800 dark:text-slate-400">
        <Briefcase />
        <h3 className="text-xl font-bold md:text-2xl ">{t("title")}</h3>
      </div>
      <div className="flex flex-col gap-12">
        <div className="flex flex-col gap-4 border-l-2 border-lime-600 pl-6 text-sm text-slate-800 md:text-base dark:text-slate-400">
          <div className="flex flex-col gap-2 text-slate-600">
            <h2 className="font-bold">{t("frontend-dev")} @ Unmaze</h2>

            <p className="text-xs">
              {t("march")} 2022 - {t("august")}
            </p>
          </div>

          <p>{t("job2.description")}</p>
          <ul className="ml-6 list-disc text-wrap text-slate-800 dark:text-slate-400">
            {job2ListKeys.map((key) => (
              <li key={key}>{t(`job2.list.${key}`)}</li>
            ))}
          </ul>
          <div className="flex flex-wrap gap-2">
            {job2Tags.map((key) => (
              <div
                key={key}
                className="rounded-md bg-slate-400 p-1 text-xs text-slate-800"
              >
                {key}
              </div>
            ))}
          </div>
        </div>

        <div className="flex flex-col gap-4 border-l-2 border-lime-600 pl-6 text-sm text-slate-800 md:text-base dark:text-slate-400">
          <div className="flex flex-col gap-2 text-slate-600">
            <h2 className="font-bold ">{t("frontend-dev")} @ Cubos Academy</h2>

            <p className="text-xs">
              {t("november")} 2021 - {t("march")} 2022
            </p>
          </div>
          <p>{t("job1.description")}</p>
          <ul className="ml-6 list-disc text-wrap text-slate-800 dark:text-slate-400">
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
