import { Metadata } from "next";
import { db } from "~/db";
import SearchForm from "./form";

export const metadata: Metadata = {
  title: "Compare Select",
};

export default async function CompareSelect() {
  const colors = await db.color.findMany({
    orderBy: {
      id: "asc",
    },
  });

  return (
    <div className="mx-auto max-w-3xl">
      <SearchForm colors={colors} />
    </div>
  );
}
