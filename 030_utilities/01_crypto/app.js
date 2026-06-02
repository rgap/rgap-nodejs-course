const crypto = require('crypto');

console.log("=== crypto Demo ===\n");

const message = 'hello from node crypto';
const secret = 'top-secret-key';

// Generate a secure random token as hex text.
const token = crypto.randomBytes(16).toString('hex');

// Create a SHA-256 hash of the message.
const hash = crypto.createHash('sha256').update(message).digest('hex');

// Create an HMAC signature using the message and a secret key.
const signature = crypto.createHmac('sha256', secret).update(message).digest('hex');

console.log(`Random token: ${token}\n`);

console.log(`Original message: ${message}`);
console.log(`SHA-256 hash: ${hash}\n`);

console.log(`Secret key: ${secret}`);
console.log(`HMAC signature: ${signature}`);
