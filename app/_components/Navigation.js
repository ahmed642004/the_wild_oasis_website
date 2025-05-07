import Link from "next/link";
import { auth } from "../_lib/auth";
import Guest from "./Guest";

export default async function Navigation() {
  const session = await auth();
  console.log(session.user.image);
  return (
    <nav className="z-10 text-[18px] xl:text-xl">
      <ul className="flex gap-6 xl:gap-16 items-center">
        <li>
          <Link
            href="/cabins"
            className="hover:text-accent-400 transition-colors"
          >
            Cabins
          </Link>
        </li>
        <li>
          <Link
            href="/about"
            className="hover:text-accent-400 transition-colors"
          >
            About
          </Link>
        </li>
        <Guest />
      </ul>
    </nav>
  );
}
