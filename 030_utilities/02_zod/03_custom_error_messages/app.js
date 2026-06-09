const { z } = require('zod');

console.log('=== Custom Error Messages with zod ===\n');

const userSchema = z.object({
  username: z
    .string({ error: 'Username is required and must be text.' })
    .min(3, { error: 'Username must have at least 3 characters.' }),
  email: z
    .string({ error: 'Email is required and must be text.' })
    .email({ error: 'Email must be a valid email address.' }),
  age: z
    .number({ error: 'Age is required and must be a number.' })
    .min(18, { error: 'Age must be 18 or older.' }),
});

const user = {
  username: 'bo',
  email: 'not-an-email',
  age: 15,
};

const result = userSchema.safeParse(user);

console.log('Input:');
console.log(user);

if (result.success) {
  console.log('\nValid user:');
  console.log(result.data);
} else {
  console.log('\nInvalid user:');

  for (const issue of result.error.issues) {
    const field = issue.path.join('.') || 'root';
    console.log(`- ${field}: ${issue.message}`);
  }
}

