/**
 * Middleware to ensure user profile is completed
 */
const ensureProfileCompleted = (req, res, next) => {
    // User must be authenticated first (req.user exists)
    if (!req.user) {
        return res.status(401).json({
            success: false,
            message: 'Not authorized, user not found'
        });
    }

    if (!req.user.profileCompleted) {
        return res.status(403).json({
            success: false,
            message: 'Profile incomplete. Please update your profile.',
            requiresProfileCompletion: true
        });
    }

    next();
};

module.exports = { ensureProfileCompleted };
