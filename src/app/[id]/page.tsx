import { Metadata } from "next";
import { notFound } from "next/navigation";
import { db } from "~/db";
import Counts from "./counts";

export const generateMetadata = async ({
  params,
}: {
  params: Record<"id", string>;
}): Promise<Metadata> => {
  const color = await db.color.findFirst({
    where: {
      name: params.id,
    },
  });
  return {
    title: color?.displayName,
    themeColor: color?.hex,
    openGraph: {
      images: [
        {
          url: `https://colorbattles.vercel.app/api/og?hex=${color?.hex.slice(
            1
          )}`,
        },
      ],
    },
  };
};

export default async function Color({
  params,
}: {
  params: Record<"id", string>;
}) {
  const color = await db.color.findFirst({
    where: {
      name: params.id,
    },
  });
  if (!color) return notFound();

  return <Counts color={color} />;
}
