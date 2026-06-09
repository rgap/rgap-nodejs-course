console.log('=== Validation with if / else ===\n');

const users = [
  {
    username: 'alice',
    email: 'alice@example.com',
    age: 24,
  },
  {
    username: 'bo',
    email: 'not-an-email',
    age: 15,
  },
];

function validateUser(user) {
  const errors = [];

  if (typeof user.username !== 'string') {
    errors.push('username must be a string');
  } else if (user.username.length < 3) {
    errors.push('username must have at least 3 characters');
  }

  if (typeof user.email !== 'string') {
    errors.push('email must be a string');
  } else if (!user.email.includes('@')) {
    errors.push('email must include @');
  }

  if (typeof user.age !== 'number') {
    errors.push('age must be a number');
  } else if (user.age < 18) {
    errors.push('age must be at least 18');
  }

  if (errors.length > 0) {
    return {
      success: false,
      errors,
    };
  }

  return {
    success: true,
    data: user,
  };
}

for (const user of users) {
  const result = validateUser(user);

  console.log('Input:');
  console.log(user);

  if (result.success) {
    console.log('Valid user:');
    console.log(result.data);
  } else {
    console.log('Invalid user:');
    for (const error of result.errors) {
      console.log(`- ${error}`);
    }
  }

  console.log('');
}

