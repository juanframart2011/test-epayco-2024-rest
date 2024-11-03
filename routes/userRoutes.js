const express = require('express');
const UserController = require('../controllers/UserController');

const router = express.Router();

router.post('/register', UserController.register.bind(UserController));

module.exports = router;