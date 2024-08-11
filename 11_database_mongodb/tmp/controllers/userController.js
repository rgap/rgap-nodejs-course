const { findUserByName } = require('../services/userService');

// Controller function to handle the "GET /user/:name" route
const getUserByName = async (req, res) => {
  const { name } = req.params;

  try {
    const user = await findUserByName(name);
    if (user) {
      res.status(200).json(user);
    } else {
      res.status(404).json({ message: 'User not found' });
    }
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

module.exports = {
  getUserByName,
};
