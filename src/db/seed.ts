import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

async function main() {
  await prisma.color.deleteMany();
  await prisma.color.createMany({
    data: [
      {
        id: "red",
        name: "Red",
        hex: "#ff0000",
      },
      {
        id: "orange",
        name: "Orange",
        hex: "#FF6A00",
      },
      {
        id: "yellow",
        name: "Yellow",
        hex: "#ffff00",
      },
      {
        id: "green",

        name: "Green",
        hex: "#4CFF00",
      },
      {
        id: "blue",
        name: "Blue",
        hex: "#0026FF",
      },
      {
        id: "cyan",
        name: "Cyan",
        hex: "#00FFFF",
      },
      {
        id: "purple",
        name: "Purple",
        hex: "#B200FF",
      },
      {
        id: "pink",
        name: "Pink",
        hex: "#ff00ff",
      },
      {
        id: "black",
        name: "Black",
        hex: "#000000",
      },
      {
        id: "white",
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
