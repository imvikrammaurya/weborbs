const express = require('express');
const router = express.Router();
const passport = require('passport');
const authController = require('../controllers/auth.controller');
const { protect } = require('../middleware/auth.middleware');

// Manual Auth
router.post('/register', authController.registerUser);
router.post('/login', authController.loginUser);
router.get('/me', protect, authController.getMe);

// Google Auth
router.get('/google', passport.authenticate('google', { scope: ['profile', 'email'] }));

router.get('/google/callback', passport.authenticate('google', { session: false }), authController.googleCallback);

router.post('/complete-profile', protect, authController.completeProfile);

router.get('/health', (req, res) => {
    res.status(200).json({ status: 'ok', service: 'auth' });
});

module.exports = router;
