const jwt = require('jsonwebtoken');
const User = require('../models/User.model');

/**
 * Register a new user
 * @param {Object} userData 
 * @returns {Object} { user, token }
 */
const registerUser = async (userData) => {
    const { email } = userData;

    // Check if user already exists
    const existingUser = await User.findOne({ email });
    if (existingUser) {
        throw new Error('User already exists');
    }

    // Create new user
    const user = await User.create(userData);

    // Generate token
    const token = generateToken(user._id, user.role);

    return { user, token };
};

/**
 * Login user
 * @param {string} email 
 * @param {string} password 
 * @returns {Object} { user, token }
 */
const loginUser = async (email, password) => {
    // Find user by email
    const user = await User.findOne({ email });
    if (!user) {
        throw new Error('Invalid credentials');
    }

    // Check password
    const isMatch = await user.comparePassword(password);
    if (!isMatch) {
        throw new Error('Invalid credentials');
    }

    // Generate token
    const token = generateToken(user._id, user.role);

    return { user, token };
};

/**
 * Generate JWT Token
 * @param {string} userId 
 * @param {string} role 
 * @returns {string} token
 */
const generateToken = (userId, role) => {
    if (!process.env.JWT_SECRET) {
        throw new Error('JWT_SECRET is not defined in environment variables');
    }

    return jwt.sign(
        { id: userId, role },
        process.env.JWT_SECRET,
        { expiresIn: '30d' }
    );
};

module.exports = {
    registerUser,
    loginUser,
    generateToken
};
