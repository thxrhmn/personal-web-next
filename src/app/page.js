import Image from"next/image";

export default function Home() {
  return (
    <main className="md:w-[500px] mx-auto font-mono">
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
          <h1 className=" text-center">
            Hi there, I&apos;m Rahman Muhaemin
          </h1>
          <p className=" text-center">I&apos;m Fullstack Developer</p>
        </div>
      </div>

      <div className="m-5">
        <p className="desc">
          an enthusiastic Full Stack Developer. I have just completed a coding
          bootcamp and I&apos;m ready to kickstart my career in the tech world.
        </p>
        <p className="desc  mt-5">
          I have a strong interest in technology and love to explore new things.
          I possess skills in both front-end and back-end development, including
          HTML, CSS, JavaScript, React, Node.js, Golang, MySQL and PostgreSQL. I
          enjoy continuous learning and keeping up with industry advancements.
        </p>
      </div>

      <div className="m-5">
        <h2 className=" font-bold text-center">My Projects</h2>
        <div className="md:flex md:justify-between md:text-center">
          <div className="projects md:w-[45%]">
            <p className="">3 Weeks</p>
            <p className="">Dumbflix</p>
          </div>
          <div className="projects mt-3 md:mt-0 md:w-[45%]">
            <p className="">1 Week</p>
            <p className="">Holyways</p>
          </div>
        </div>
      </div>

      <div className="m-5">
        <h2 className="text-center mb-4 font-bold">Education</h2>
        <div className="md:flex md:justify-between md:text-center">
          <div className="education md:w-[45%]">
            <p className="">Feb 2023 - Apr 2023</p>
            <p className="">Fullstack Developer</p>
          </div>
          <div className="education mt-3 md:mt-0 md:w-[45%]">
            <p className="">Mei 2014 - Mei 2017</p>
            <p className="">Computer and network engineering</p>
          </div>
        </div>
      </div>

      <div className="m-5">
        <h2 className="text-center mb-4 font-bold">Programming Stack</h2>
        <ul className="flex flex-wrap gap-x-6 justify-center">
          <li>HTML</li>
          <li>CSS</li>
          <li>Saas</li>
          <li>Tailwind CSS</li>
          <li>Bootstrap</li>
          <li>Javascript</li>
          <li>NodeJS</li>
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
