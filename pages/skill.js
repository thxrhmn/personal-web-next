import Nav from "@/app/components/nav";
import { data } from "@/app/data";

export default function Skill() {
  return (
    <main className="md:w-[500px] mx-auto font-mono">
      <Nav />
      <div className="my-8 mx-5">
        <h2 className="text-center mb-4 font-bold">Programming Skill</h2>
        <ul className="text-center">
          {data.programmingStack.map((item) => (
            <li key={item.name}>{item.name}</li>
          ))}
        </ul>
      </div>
    </main>
  );
}
