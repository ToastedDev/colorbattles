import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

async function main() {
  await prisma.color.createMany({
    data: [
      {
        name: "Red",
        hex: "#ff0000",
      },
      {
        name: "Orange",
        hex: "#FF6A00",
      },
      {
        name: "Yellow",
        hex: "#ffff00",
      },
      {
        name: "Green",
        hex: "#4CFF00",
      },
      {
        name: "Blue",
        hex: "#0026FF",
      },
      {
        name: "Cyan",
        hex: "#00FFFF",
      },
      {
        name: "Purple",
        hex: "#B200FF",
      },
      {
        name: "Pink",
        hex: "#ff00ff",
      },
      {
        name: "Black",
        hex: "#000000",
      },
      {
        name: "White",
        hex: "#ffffff",
      },
    ],
  });
}

main()
  .then(async () => {
    await prisma.$disconnect();
  })
  .catch(async (e) => {
    console.error(e);
    await prisma.$disconnect();
    process.exit(1);
  });
