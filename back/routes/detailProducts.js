const express = require('express');
const router = express.Router();

/* Get */
router.get('/', function (req, res, next) {
    res.send('Estoy en home')
})

module.exports = router