import Nav from "@/app/components/nav";
import { data } from "@/app/data";

export default function Project() {
  return (
    <main className="md:w-[500px] mx-auto font-mono">
      <Nav />
      <div className="my-8 mx-5">
        <h2 className="font-bold text-center">My Projects</h2>
        <div className="flex text-center">
          {data.projects.map((item) => (
            <div key={item.name} className="projects w-[45%]">
              <p className="">{item.process}</p>
              <a href={item.linkGH} className="">
                {item.name}
              </a>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}
