import Nav from "@/app/components/nav";
import { data } from "@/app/data";
import Image from "next/image";
import Link from "next/link";

export default function Project() {
  return (
    <main className="md:w-[500px] mx-auto">
      <Nav />
      <div className="my-8 mx-5">
        <h2 className="font-bold text-center mb-4">My Projects</h2>
        <div className="">
          <ol className="relative border-l border-gray-200 dark:border-gray-700">
            {data.projects.map((item, idx) => (
              <li key={idx} className="mb-10 ml-4">
                <div className="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -left-1.5 border border-white dark:border-black dark:bg-black"></div>
                <time className="mb-1 text-sm font-normal leading-none italic">
                  {item.process}
                </time>
                <h3 className="project-name">{item.name}</h3>
                <p className="mb-4 text-base font-normal">{item.desc}</p>
                <div className="flex">
                  <h5 className="text-sm">stacks:</h5>
                  <ul className="flex text-sm project-stacks">
                    {item.stacks.map((item, idx) => (
                      <li className="underline" key={idx}>
                        {item.name}
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="flex">
                  <Link href={item.linkGH}>
                    <Image
                      className="rounded-full project-stacks-link"
                      src="/github.svg"
                      alt="Github Logo"
                      width={15}
                      height={15}
                    />
                  </Link>
                  <Link href={item.linkProd}>
                    <Image
                      className="rounded-full project-stacks-link"
                      src="/network.svg"
                      alt="Network Logo"
                      width={15}
                      height={15}
                    />
                  </Link>
                </div>
              </li>
            ))}
          </ol>
        </div>
      </div>
    </main>
  );
}
