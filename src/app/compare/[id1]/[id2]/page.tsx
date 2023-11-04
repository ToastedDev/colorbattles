import { Metadata } from "next";
import { notFound } from "next/navigation";
import { db } from "~/db";
import Counts from "./counts";

type Params = Record<"id1" | "id2", string>;

export const generateMetadata = async ({
  params,
}: {
  params: Params;
}): Promise<Metadata> => {
  const color1 = await db.color.findFirst({
    where: {
      name: params.id1,
    },
  });
  const color2 = await db.color.findFirst({
    where: {
      name: params.id2,
    },
  });
  return {
    title: color1?.displayName + " vs " + color2?.displayName,
  };
};

export default async function Color({ params }: { params: Params }) {
  const color1 =
    (await db.color.findFirst({
      where: {
        name: params.id1,
      },
    })) ?? notFound();
  const color2 =
    (await db.color.findFirst({
      where: {
        name: params.id2,
      },
    })) ?? notFound();

  return <Counts color1={color1} color2={color2} />;
}
