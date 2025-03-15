const express = require('express');
const path = require('path');

const router = express.Router();


router.use('/images', express.static(path.join(__dirname, '../images')));

router.use(express.static(path.join(__dirname, '../frontend/homepage')));
router.use(express.static(path.join(__dirname, '../frontend/aboutpage')));

module.exports = router;
