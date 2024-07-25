const express = require('express');
const router = express.Router();
const taskController = require('../controller/task');


router.get('/task', taskController.getTask);





module.exports = router;
