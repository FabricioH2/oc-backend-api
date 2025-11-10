// api.routes.js
const express = require('express');
const router = express.Router();
const controller = require('../controller/data-controller');

// La URL que el frontend usa: /comments
router.get('/comments', controller.listComments);
router.post('/comments', controller.createComment);

module.exports = router;