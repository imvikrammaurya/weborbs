const mongoose = require('mongoose');

const projectSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, 'Project name is required'],
        trim: true
    },
    description: {
        type: String,
        trim: true
    },
    client: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: [true, 'Client is required']
    },
    status: {
        type: String,
        enum: ['pending', 'in-progress', 'completed', 'hold'],
        default: 'pending'
    },
    budget: {
        type: Number,
        default: 0
    },
    deadline: {
        type: Date
    },
    slaTier: {
        type: String,
        enum: ['basic', 'standard', 'premium'],
        default: 'standard'
    },
    slaStatus: {
        type: String,
        enum: ['active', 'warning', 'breached'],
        default: 'active'
    }
}, {
    timestamps: true
});

module.exports = mongoose.model('Project', projectSchema);
