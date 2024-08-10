import prisma from "./src/client.js";

async function main() {
  try {
    // Query all users
    const users = await prisma.user.findMany();
    console.log("All users:", users);
  } catch (err) {
    console.error("An error occurred:", err.message);
  } finally {
    // Close the Prisma client connection
    await prisma.$disconnect();
  }
}

main().catch(err => console.error(err));
