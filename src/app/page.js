import Image from "next/image";
import { data } from "./data";
import Link from "next/link";
import Nav from "./components/nav";

export default function Home() {
  return (
    <main className="md:w-[500px] mx-auto font-mono">
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
        <div className="text-center items-center md:flex md:justify-between md:text-center">
          {data.educations.map((item) => (
            <div key={item.name} className="education mb-3 md:w-[45%]">
              <p className="">{item.graduation}</p>
              <p className="">{item.name}</p>
              <p className="">{item.major}</p>
            </div>
          ))}
        </div>
      </div>

    </main>
  );
}
