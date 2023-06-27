import Link from "next/link";

export default function Nav() {
  return (
    <div className="my-8 mx-5 opacity-90">
      <ul className="flex justify-evenly gap-x-2">
        <li className="underline">
          <Link href="/">About</Link>
        </li>
        <span>/</span>
        <li className="underline">
          <Link href="/contact">Contact</Link>
        </li>
        <span>/</span>
        <li className="underline">
          <Link href="/project">Project</Link>
        </li>
        <span>/</span>
        <li className="underline">
          <Link href="/skill">Skill</Link>
        </li>
      </ul>
    </div>
  );
}
