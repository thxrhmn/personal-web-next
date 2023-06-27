
import Link from "next/link";

export default function Nav() {
  return (
    <div className="my-8 mx-5 opacity-90">
      <ul className="flex justify-evenly gap-x-2">
        <li>
          <Link href="/">About</Link>
        </li>
        <span>/</span>
        <li>
          <Link href="/contact">Contact</Link>
        </li>
        <span>/</span>
        <li>
          <Link href="/project">Project</Link>
        </li>
        <span>/</span>
        <li>
          <Link href="/skill">Skill</Link>
        </li>
      </ul>
    </div>
  );
}
