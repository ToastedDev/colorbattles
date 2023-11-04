"use client";

import { Color } from "@prisma/client";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { FormEvent, useEffect, useMemo, useRef, useState } from "react";

export default function SearchForm({ colors }: { colors: Color[] }) {
  const router = useRouter();
  const dropdown1Ref = useRef<HTMLSelectElement>(null);
  const dropdown2Ref = useRef<HTMLSelectElement>(null);

  return (
    <div className="flex flex-col items-center justify-center gap-3">
      <div className="w-full grid grid-cols-1 gap-3 md:grid-cols-2">
        <div className="flex flex-col gap-2 rounded-lg bg-neutral-800 p-4">
          <select
            ref={dropdown1Ref}
            className="w-full rounded-lg border-none bg-neutral-700 px-4 py-3 focus:ring-0"
          >
            {colors.map((color) => (
              <option key={color.id} value={color.name}>
                {color.displayName}
              </option>
            ))}
          </select>
        </div>
        <div className="flex flex-col gap-2 rounded-lg bg-neutral-800 p-4">
          <select
            ref={dropdown2Ref}
            className="w-full rounded-lg border-none bg-neutral-700 px-4 py-3 focus:ring-0"
          >
            {colors.map((color) => (
              <option key={color.id} value={color.name}>
                {color.displayName}
              </option>
            ))}
          </select>
        </div>
      </div>
      <button
        className="w-full rounded-lg bg-neutral-800 px-4 py-3 text-center hover:opacity-80"
        onClick={() =>
          router.push(
            `/compare/${dropdown1Ref.current!.value}/${
              dropdown2Ref.current!.value
            }`
          )
        }
      >
        LET&apos;S COMPARE!
      </button>
    </div>
  );
}
