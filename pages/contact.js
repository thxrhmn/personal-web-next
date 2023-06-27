import Nav from "@/app/components/nav";
import { data } from "@/app/data";

export default function Contact() {
  return (
    <main className="md:w-[500px] mx-auto font-mono">
      <Nav />
      <div className="my-8 mx-5">
        <h2 className="text-center mb-4 font-bold">Contacts</h2>
        <ul>
          <li><a href={`mailto:${data.contacts.email}`}>Email</a></li>
          <li><a href={data.contacts.linkedin}>Linkedin</a></li>
          <li><a href={data.contacts.github}>Github</a></li>
          <li><a href={data.contacts.website}>Website</a></li>
        </ul>
      </div>
    </main>
  );
}
