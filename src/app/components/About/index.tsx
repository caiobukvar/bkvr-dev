import Link from "next/link";

export default function About() {
  return (
    <div
      className="flex flex-col max-w-screen-lg gap-8 p-4 animate-slide-in-left"
      id="about"
    >
      <h1 className="text-slate-600 text-2xl">
        Meet Caio Bukvar, software developer
      </h1>

      <div className="flex flex-col gap-4">
        <h3 className="text-xl">About me:</h3>
        <p>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nam ipsam,
          numquam dicta veritatis enim commodi incidunt asperiores repellendus,
          beatae velit ducimus nulla ullam temporibus! Hic totam temporibus,
          optio vero voluptate debitis dolorem quae nesciunt et non quibusdam,
          iste accusamus facere necessitatibus voluptas delectus quidem officiis
          ad perferendis? Sapiente, illo corporis asperiores doloremque
          molestiae facilis. Cum voluptatibus hic sapiente temporibus quae
          accusamus, facere tempore saepe debitis placeat est deserunt. Quam
          reiciendis culpa reprehenderit voluptatum, facere iste sit omnis a
          placeat, atque itaque corporis sequi. Ad perferendis quasi quas
          voluptate, saepe voluptates doloribus voluptatum dolore ratione
          praesentium eos unde odio quos officiis!
        </p>
      </div>

      <button className="bg-slate-700 hover:bg-slate-600 hover:outline hover:outline-2 hover:outline-lime-600 text-lime-600 text-md text-center rounded-md p-2 w-[120px]">
        <Link href="/projects">Learn more</Link>
      </button>
    </div>
  );
}
