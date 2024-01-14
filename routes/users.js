const express = require('express');

const usersController = require('../controllers/users');

const router = express.Router();

router.get('/', usersController.getAll);

router.get('/:id', usersController.getSingle);

module.exports = router;