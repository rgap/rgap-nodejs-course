const { z } = require("zod");

console.log("=== Validation with zod ===\n");

const userSchema = z.object({
  username: z.string().min(3),
  email: z.string().email(),
  age: z.number().min(18),
});

const users = [
  {
    username: "alice",
    email: "alice@example.com",
    age: 24,
  },
  {
    username: "bo",
    email: "not-an-email",
    age: 15,
  },
];

for (const user of users) {
  const result = userSchema.safeParse(user);

  console.log("Input:");
  console.log(user);

  if (result.success) {
    console.log("Valid user:");
    console.log(result.data);
  } else {
    console.log("Invalid user:");

    for (const issue of result.error.issues) {
      const field = issue.path.join(".") || "root";
      console.log(`issue.path`, issue.path);
      console.log(`- ${field}: ${issue.message}`);
    }
  }

  console.log("");
}
