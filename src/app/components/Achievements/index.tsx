/* eslint-disable @next/next/no-img-element */
import { Trophy } from "lucide-react";
import Image from "next/image";

const achievements = [
  {
    id: 1,
    name: "Hackaton UniAnchieta 2024",
    description: "2º Lugar",
    images: [
      {
        id: 1,
        url: "/images/hackaton-anchieta-2024/1.jpg",
      },
      {
        id: 3,
        url: "/images/hackaton-anchieta-2024/3.jpeg",
      },
      {
        id: 6,
        url: "/images/hackaton-anchieta-2024/6.jpeg",
      },
    ],
  },
];

interface Achievements {
  title: string;
  itemTitle: string;
  itemDescription: string;
}

interface Props {
  achievementsTranslations: Achievements;
}

export default function Achievements({ achievementsTranslations }: Props) {
  const { title, itemTitle, itemDescription } = achievementsTranslations;

  return (
    <div className="flex w-full max-w-screen-lg flex-col gap-16 px-12">
      <div className="flex flex-col gap-6 ">
        <div className="flex items-center gap-2 text-slate-800 dark:text-slate-400">
          <Trophy />
          <h3 className="text-xl font-bold md:text-2xl">{title}</h3>
        </div>

        {achievements.map((achievement) => (
          <div
            className="flex flex-col gap-4 border-l-2 border-lime-600 pl-6 text-sm text-slate-800 md:text-base dark:text-slate-400 "
            key={achievement.id}
          >
            <div
              className="relative flex w-full flex-col items-center justify-between gap-6 overflow-hidden rounded-md bg-slate-300 
          p-5 text-left shadow-md shadow-slate-600 outline-none focus-visible:ring-2 
           focus-visible:ring-lime-600 
          md:items-start dark:bg-slate-800
           dark:shadow-sm dark:shadow-lime-600"
            >
              <div className="flex flex-col gap-0 self-start">
                <h2 className="bold">{itemTitle}</h2>
                <p className="text-xs text-slate-600">{itemDescription}</p>
              </div>
              <div className="flex flex-col gap-4 md:flex-row">
                {achievement.images.map((image) => (
                  <Image
                    src={image.url}
                    key={image.id}
                    alt={achievement.name}
                    width={200}
                    height={100}
                    className="rounded object-cover"
                  />
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
