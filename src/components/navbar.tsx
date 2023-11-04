import Image from "next/image";
import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="p-4 bg-neutral-800 rounded-lg flex justify-between">
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
    </nav>
  );
}
