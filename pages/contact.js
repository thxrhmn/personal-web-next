import Nav from "@/app/components/nav";
import { data } from "@/app/data";
import Image from "next/image";

export default function Contact() {
  return (
    <main className="md:w-[500px] mx-auto font-mono">
      <Nav />
      <div className="my-8 mx-5">
        <h2 className="text-center mb-4 font-bold">Contacts</h2>
        <ul className="text-center">
          <li className="">
            <a className="flex contacts" href={`mailto:${data.contacts.email}`}>
              <Image
                className="rounded-full"
                src={`/email.svg`}
                alt="Email Icon"
                width={17}
                height={17}
              />
              <span>{data.contacts.email}</span>
            </a>
          </li>
          <li>
            <a className="flex contacts" href={data.contacts.linkedin}>
              <Image
                className="rounded-full"
                src={`/linkedin.svg`}
                alt="Linkedin Icon"
                width={17}
                height={17}
              />
              <span>@rahman-muhaemin</span>
            </a>
          </li>
          <li>
            <a className="flex contacts" href={data.contacts.github}>
              <Image
                className="rounded-full"
                src={`/github.svg`}
                alt="Github Icon"
                width={17}
                height={17}
              />
              <span>{data.contacts.github}</span>
            </a>
          </li>
          <li>
            <a className="flex contacts" href={data.contacts.website}>
              <Image
                className="rounded-full"
                src={`/network.svg`}
                alt="Web Icon"
                width={17}
                height={17}
              />
              <span>{data.contacts.website}</span>
            </a>
          </li>
          <li>
            <a className="flex contacts" href={data.contacts.telegram}>
              <Image
                className="rounded-full"
                src={`/telegram.svg`}
                alt="Web Icon"
                width={17}
                height={17}
              />
              <span>{data.contacts.telegram}</span>
            </a>
          </li>
        </ul>
      </div>
    </main>
  );
}
