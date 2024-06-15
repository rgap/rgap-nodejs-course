const express = require('express'); // Import the express module

// Create an instance of Express
const app = express();
const port = 8080;

// Create a router for user-related routes
const userRouter = express.Router();

// Define user-related routes
userRouter.get('/', (req, res) => {
  res.send('User Home Page');
});

userRouter.get('/:userId', (req, res) => {
  const userId = req.params.userId; // Extract the userId from the URL
  res.send(`User ID: ${userId}`); // Send the response with the userId
});

// Use the userRouter for routes starting with /users
app.use('/users', userRouter);

// Start the server and listen on the specified port
app.listen(port, () => {
  console.log(`Express server with sub-routers is listening on port ${port}`);
});

/*
Historical Context:
- Sub-routers allow for modular and organized routing in larger applications.
- They enable the grouping of related routes, making the codebase more maintainable.
- Express provides the Router class to create modular route handlers.
*/
