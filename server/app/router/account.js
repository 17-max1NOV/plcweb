const express = require('express');
const router = express.Router();
const staffController =require('../controller/staff');
router.post('/login',staffController.login);
module.exports = router;