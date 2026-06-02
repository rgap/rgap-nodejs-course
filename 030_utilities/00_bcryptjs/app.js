const bcrypt = require('bcryptjs');

console.log("=== bcryptjs Demo ===\n");

// In a real app, users would be stored in a database.
const users = [];

function registerUser(username, plainPassword) {
  // Hash the plain password before storing anything.
  const hashedPassword = bcrypt.hashSync(plainPassword, 10);

  const user = {
    username,
    passwordHash: hashedPassword,
  };

  users.push(user);

  console.log(`Registered user: ${username}`);
  console.log(`Plain password: ${plainPassword}`);
  console.log(`Stored hash: ${hashedPassword}\n`);
}

function loginUser(username, plainPassword) {
  // Find the user record first.
  const user = users.find((candidate) => candidate.username === username);

  if (!user) {
    console.log(`Login failed for ${username}: user not found`);
    return;
  }

  // Compare the login attempt against the stored bcrypt hash.
  const isValidPassword = bcrypt.compareSync(plainPassword, user.passwordHash);

  if (isValidPassword) {
    console.log(`Login success for ${username}`);
    return;
  }

  console.log(`Login failed for ${username}: incorrect password`);
}

// Register one user, then test a correct and incorrect login.
registerUser('alice', 'super-secret-123');
loginUser('alice', 'super-secret-123');
loginUser('alice', 'wrong-password');
