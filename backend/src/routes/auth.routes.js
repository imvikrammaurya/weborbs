const express = require('express');
const router = express.Router();
const passport = require('passport');
const rateLimit = require('express-rate-limit');
const authController = require('../controllers/auth.controller');
const { protect } = require('../middleware/auth.middleware');

// Rate limiting middleware for auth routes
const authLimiter = rateLimit({
    windowMs: 15 * 60 * 1000, // 15 minutes
    max: 20, // limit each IP to 20 requests per windowMs
    message: 'Too many authentication attempts from this IP, please try again after 15 minutes'
});

// Manual Auth
router.post('/register', authLimiter, authController.registerUser);
router.post('/login', authLimiter, authController.loginUser);
router.get('/me', protect, authController.getMe);

// Google Auth
router.get('/google', authLimiter, passport.authenticate('google', { scope: ['profile', 'email'] }));

router.get('/google/callback', passport.authenticate('google', { session: false }), authController.googleCallback);

router.post('/complete-profile', protect, authController.completeProfile);

router.get('/health', (req, res) => {
    res.status(200).json({ status: 'ok', service: 'auth' });
});

module.exports = router;
