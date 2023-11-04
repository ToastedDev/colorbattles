import { notFound } from "next/navigation";
import { db } from "~/db";

export const GET = async (
  _: any,
  { params }: { params: Record<"id", string> }
) => {
  const color = await db.color.findFirst({
    where: {
      id: params.id,
    },
  });
  if (!color) return notFound();
  return Response.json(color, {
    headers: {
      "Access-Control-Allow-Origin": "*",
      "Access-Control-Allow-Methods": "GET, POST, PUT, DELETE, OPTIONS",
      "Access-Control-Allow-Headers": "Content-Type, Authorization",
    },
  });
};

export const POST = async (
  _: any,
  { params }: { params: Record<"id", string> }
) => {
  if (
    (await db.color.count({
      where: {
        id: params.id,
      },
    })) < 1
  )
    return notFound();

  await db.color.update({
    where: {
      id: params.id,
    },
    data: {
      clicks: {
        increment: 1,
      },
    },
  });

  return new Response(undefined, {
    status: 204,
    headers: {
      "Access-Control-Allow-Origin": "*",
      "Access-Control-Allow-Methods": "GET, POST, PUT, DELETE, OPTIONS",
      "Access-Control-Allow-Headers": "Content-Type, Authorization",
    },
  });
};

export const DELETE = async (
  _: any,
  { params }: { params: Record<"id", string> }
) => {
  if (
    (await db.color.count({
      where: {
        id: params.id,
      },
    })) < 1
  )
    return notFound();

  await db.color.update({
    where: {
      id: params.id,
    },
    data: {
      clicks: {
        decrement: 1,
      },
    },
  });

  return new Response(undefined, {
    status: 204,
    headers: {
      "Access-Control-Allow-Origin": "*",
      "Access-Control-Allow-Methods": "GET, POST, PUT, DELETE, OPTIONS",
      "Access-Control-Allow-Headers": "Content-Type, Authorization",
    },
  });
};
