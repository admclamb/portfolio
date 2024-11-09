import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import Link from "next/link";
import NavbarDrawer from "./navbar-drawer/navbar-drawer";

type NavbarProps = {
  className?: string;
};

export const navItems = [
  {
    name: "Home",
    link: "/",
  },
  {
    name: "Projects",
    link: "/#projects",
  },
  {
    name: "About",
    link: "/about",
  },
  {
    name: "Contact",
    link: "/contact",
  },
  {
    name: "Blog",
    link: "/blog",
  },
];

const Navbar = ({ className }: NavbarProps) => {
  return (
    <nav className={cn("flex justify-center items-center p-5", className)}>
      <h1 className="lg:hidden font-semibold">
        <Link href="/">Anthony Mclamb</Link>
      </h1>
      <ul className="border rounded justify-center items-center px-2 py-3 gap-5 bg-zinc-800 rounded-full hidden lg:flex">
        {navItems.map((item) => (
          <li key={item.name}>
            <Link
              href={item.link}
              className="border rounded-full p-3 hover:text-muted-foreground"
            >
              {item.name}
            </Link>
          </li>
        ))}
      </ul>
      <NavbarDrawer />
    </nav>
  );
};

export default Navbar;
