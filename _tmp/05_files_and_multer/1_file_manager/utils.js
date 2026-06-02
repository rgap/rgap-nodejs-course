import { dirname } from "node:path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
export const __dirname = dirname(__filename);
