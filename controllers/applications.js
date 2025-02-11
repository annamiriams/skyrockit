// DEPENDENCIES

const express = require('express');
const router = express.Router();

const User = require('../models/user.js');

// ROUTES

// INDEX
router.get('/', (req, res) => {
    // 
    
    try {
        res.render('applications/index.ejs');
    } catch (error) {
        console.log(error);
        res.redirect('/');
    }

});

module.exports = router;