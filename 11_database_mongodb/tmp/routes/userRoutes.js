const express = require('express');
const { getUserByName } = require('../controllers/userController');

const router = express.Router();

// Route to get a user by name
router.get('/user/:name', getUserByName);

module.exports = router;
