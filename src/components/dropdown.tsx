"use client";

import * as DropdownMenu from "@radix-ui/react-dropdown-menu";
import { Menu } from "lucide-react";
import Link from "next/link";

interface Link {
  name: string;
  href: string;
}

export default function NavbarDropdown({ links }: { links: Link[] }) {
  return (
    <DropdownMenu.Root>
      <DropdownMenu.Trigger asChild>
        <button aria-label="Open menu">
          <Menu />
        </button>
      </DropdownMenu.Trigger>
      <DropdownMenu.Portal>
        <DropdownMenu.Content className="z-50 mr-5 min-w-[8rem] overflow-hidden rounded-lg bg-gray-800 shadow-md data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2">
          {links.map((link) => (
            <DropdownMenu.Item
              key={link.name}
              className="relative flex cursor-pointer select-none items-center rounded-sm p-2 text-sm outline-none hover:underline data-[disabled]:pointer-events-none data-[disabled]:opacity-50"
              asChild
            >
              <Link href={link.href}>{link.name}</Link>
            </DropdownMenu.Item>
          ))}
        </DropdownMenu.Content>
      </DropdownMenu.Portal>
    </DropdownMenu.Root>
  );
}
