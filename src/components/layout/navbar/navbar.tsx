import { cn } from "@/lib/utils";
import Link from "next/link";

type NavbarProps = {
  className?: string;
};

const NavItems = [
  {
    name: "Home",
    link: "/",
  },
  {
    name: "Work",
    link: "/work",
  },
  {
    name: "About",
    link: "/about",
  },
  {
    name: "Contact",
    link: "/contact",
  },
];

const Navbar = ({ className }: NavbarProps) => {
  return (
    <nav className={cn("flex justify-center items-center p-5", className)}>
      <ul className="border rounded flex justify-center items-center px-2 py-3 gap-5 bg-zinc-800 rounded-full">
        <li>
          <Link
            href="/"
            className="border rounded-full p-3 hover:text-muted-foreground"
          >
            Home
          </Link>
        </li>
        <li>
          <Link
            href="/work"
            className="border rounded-full p-3 hover:text-muted-foreground"
          >
            Work
          </Link>
        </li>
        <li>
          <Link
            href="/about"
            className="border rounded-full p-3 hover:text-muted-foreground"
          >
            About
          </Link>
        </li>
        <li>
          <Link
            href="/contact"
            className="border rounded-full p-3 hover:text-muted-foreground"
          >
            Contact
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
