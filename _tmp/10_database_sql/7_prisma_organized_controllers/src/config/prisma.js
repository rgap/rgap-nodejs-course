// Configuration: Set up the Prisma client to be used across the application
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export default prisma;
