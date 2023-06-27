import Image from "next/image";
import AvatarIMG from "../../public/avatar.svg";

export default function Home() {
  return (
    <main className="md:w-[500px] mx-auto">
      <div className="header m-5 flex flex-col">
        <div className="flex justify-center mb-3">
          <Image
            className="rounded-full"
            src="/avatar.svg"
            alt="Avatar Logo"
            width={50}
            height={50}
          />
        </div>
        <div className="">
          <h1 className="font-mono text-center">Hi there, I&apos;m Rahman Muhaemin</h1>
          <p className="font-mono text-center">I&apos;m Fullstack Developer</p>
        </div>
      </div>

      <div className="m-5">
        <p className="font-mono text-justify">
          an enthusiastic Full Stack Developer. I have just completed a coding
          bootcamp and I&apos;m ready to kickstart my career in the tech world.
        </p>
        <p className="font-mono mt-5 text-justify">
          I have a strong interest in technology and love to explore new things.
          I possess skills in both front-end and back-end development, including
          HTML, CSS, JavaScript, React, Node.js, Golang, MySQL and PostgreSQL. I enjoy continuous
          learning and keeping up with industry advancements.
        </p>
      </div>

      <div className="m-5">
        <h2 className="font-mono text-center mb-4 font-bold">Education</h2>
        <div className="flex">
          <div className="education w-[45%]">
            <p className="font-mono">Feb 2023 - Apr 2023</p>
            <p className="font-mono">Fullstack Developer</p>
          </div>
          <div className="education w-[45%">
            <p className="font-mono">Mei 2014 - Mei 2017</p>
            <p className="font-mono">Computer and network engineering</p>
          </div>
        </div>
      </div>

      <div className="m-5 font-mono">
        <h2 className="text-center mb-4 font-bold">Programming Stack</h2>
        <ul className="list-disc flex flex-wrap gap-6 justify-center">
          <li>HTML</li>
          <li>CSS</li>
          <li>Saas</li>
          <li>Tailwind CSS</li>
          <li>Bootstrap</li>
          <li>Javascript</li>
          <li>Golang</li>
          <li>React</li>
          <li>React Native</li>
          <li>MySQL</li>
          <li>PostgreSQL</li>
          <li>MongoDB</li>
          <li>Git</li>
          <li>Linux</li>
        </ul>
      </div>
    </main>
  );
}
