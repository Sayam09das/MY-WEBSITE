const express = require('express');
const path = require('path');
const { route } = require('../static');
const { link } = require('fs');
const router = express.Router();



router.get('/', (req, res) => {
    res.render('homepage/home', {
        GITHUB_LINK: process.env.GITHUB_LINK,
        LINKEDIN_LINK: process.env.LINKEDIN_LINK,
        INSTAGRAM_LINK: process.env.INSTAGRAM_LINK,
    });
});

router.get('/about', (req, res) => {
   res.render('aboutpage/about')
});

router.get('/projects', (req, res) => {
    res.render('projects/projects')
});

router.get('/contact', (req, res) => {
    res.render('homepage/home')
});
module.exports = router;