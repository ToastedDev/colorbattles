import { notFound } from "next/navigation";
import { db } from "~/db";
import Counts from "./counts";

export default async function Color({
  params,
}: {
  params: Record<"id", string>;
}) {
  const color = await db.color.findFirst({
    where: {
      id: params.id,
    },
  });
  if (!color) return notFound();

  return <Counts color={color} />;
}
