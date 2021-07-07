const express = require('express');
const router = express.Router();

// Import Function
const authService = require('../../service/authService');

//http://localhost:3000/app/v1/auth/signin
router.get('/signin', (req, res) => {
    authService.signIn(req, res);
})

//http://localhost:3000/app/v1/auth/signup
router.get('/signup', (req, res) => {
    authService.signUp(req, res);
})

//http://localhost:3000/app/v1/auth
router.use('/', require('../../service/auth'));

module.exports = router;
