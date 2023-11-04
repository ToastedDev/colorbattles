import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

async function main() {
  await prisma.color.deleteMany();
  await prisma.color.createMany({
    data: [
      {
        name: "red",
        displayName: "Red",
        hex: "#ff0000",
      },
      {
        name: "orange",
        displayName: "Orange",
        hex: "#FF6A00",
      },
      {
        name: "yellow",
        displayName: "Yellow",
        hex: "#ffff00",
      },
      {
        name: "green",
        displayName: "Green",
        hex: "#4CFF00",
      },
      {
        name: "blue",
        displayName: "Blue",
        hex: "#0026FF",
      },
      {
        name: "cyan",
        displayName: "Cyan",
        hex: "#00FFFF",
      },
      {
        name: "purple",
        displayName: "Purple",
        hex: "#B200FF",
      },
      {
        name: "pink",
        displayName: "Pink",
        hex: "#ff00ff",
      },
      {
        name: "black",
        displayName: "Black",
        hex: "#000000",
      },
      {
        name: "white",
        displayName: "White",
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
