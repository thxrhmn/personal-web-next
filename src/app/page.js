import Image from "next/image";
import { data } from "./data";
import Nav from "./components/nav";

export default function Home() {
  return (
    <main className="md:w-[500px] mx-auto">
      <div className="header my-8 mx-5 flex flex-col">
        <div className="flex justify-center mb-3">
          <Image
            className="rounded-full"
            src={`/${data.avatar}`}
            alt="Avatar Logo"
            width={50}
            height={50}
          />
        </div>
        <div className="">
          <h1 className="text-center">{data.header.text}</h1>
          <p className="text-center">{data.header.text2}</p>
        </div>
      </div>

      <Nav />

      <div className="my-8 mx-5">
        <p className="desc">{data.desc.text1}</p>
        <p className="desc mt-5">{data.desc.text2}</p>
      </div>

      <div className="my-8 mx-5">
        <h2 className="text-center mb-4 font-bold">Educations</h2>
        <ol className="relative border-l border-gray-200 dark:border-gray-700">
          {data.educations.map((item, idx) => (
            <li key={idx} className="mb-10 ml-4">
              <div className="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -left-1.5 border border-white dark:border-black dark:bg-black"></div>
              <time className="mb-1 text-sm font-normal leading-none italic">
                {item.graduation}
              </time>
              <h3 className="text-md">{item.name}</h3>
              <p className="mb-4 text-base font-normal">{item.major}</p>
            </li>
          ))}
        </ol>
      </div>
    </main>
  );
}
