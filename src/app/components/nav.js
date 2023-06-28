import Link from "next/link";
import { JetBrains_Mono } from "next/font/google";

const jetBrainsMono = JetBrains_Mono({ subsets: ["latin"] });

export default function Nav() {
  return (
    <div className={jetBrainsMono.className}>
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
    </div>
  );
}
