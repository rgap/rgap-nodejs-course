// Controller: Contains the logic to handle requests related to users
// This controller interacts with the Prisma client to fetch data from the database
import prisma from "../config/prisma.js";

export async function getAllUsers(req, res) {
  try {
    const users = await prisma.user.findMany();
    res.status(200).json(users);
  } catch (error) {
    res.status(500).json({ error: "Failed to fetch users" });
  }
}
