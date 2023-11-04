import Image from "next/image";
import Link from "next/link";
import NavbarDropdown from "./dropdown";

interface Link {
  name: string;
  href: string;
}

const links: Link[] = [
  {
    name: "Compare",
    href: "/compare",
  },
];

export default function Navbar() {
  return (
    <nav className="mt-4 mx-4 p-4 bg-neutral-800 rounded-lg flex justify-between items-center">
      <Link
        href="/"
        className="flex items-center gap-2 hover:opacity-50 transition-all"
      >
        <Image
          src="/logo.png"
          alt="Color Battles Logo"
          width={24}
          height={24}
        />
        <p className="text-lg">Color Battles</p>
      </Link>
      <div>
        <div className="hidden md:flex md:gap-3">
          {links.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className="opacity-50 transition-all hover:underline hover:opacity-100"
            >
              {link.name}
            </Link>
          ))}
        </div>
        <div className="block md:hidden">
          <NavbarDropdown links={links} />
        </div>
      </div>
    </nav>
  );
}
