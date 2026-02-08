const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');

const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        trim: true
    },
    email: {
        type: String,
        required: true,
        unique: true,
        trim: true,
        lowercase: true
    },
    password: {
        type: String,
        required: false // Optional for OAuth users
    },
    googleId: {
        type: String,
        unique: true,
        sparse: true
    },
    profileCompleted: {
        type: Boolean,
        default: false
    },
    role: {
        type: String,
        enum: ['admin', 'client', 'team'],
        default: 'client'
    },
    contactInfo: {
        phone: String,
        address: String,
        company: String
    },
    profileImage: {
        type: String,
        default: ''
    },
    isActive: {
        type: Boolean,
        default: true
    }
}, {
    timestamps: true
});

// Hash password before saving
userSchema.pre('save', async function (next) {
    if (!this.isModified('password')) return next();

    // Skip if password is not set (OAuth user)
    if (!this.password) return next();

    try {
        const salt = await bcrypt.genSalt(10);
        this.password = await bcrypt.hash(this.password, salt);
        next();
    } catch (error) {
        next(error);
    }
});

// Method to compare password
userSchema.methods.comparePassword = async function (candidatePassword) {
    if (!this.password) return false;
    return await bcrypt.compare(candidatePassword, this.password);
};

// Method to return user data without sensitive info
userSchema.methods.toJSON = function () {
    const user = this.toObject();
    delete user.password;
    delete user.googleId;
    return user;
};

module.exports = mongoose.model('User', userSchema);
