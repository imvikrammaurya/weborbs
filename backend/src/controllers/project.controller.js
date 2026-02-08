const Project = require('../models/Project.model');

/**
 * @desc    Create a new project
 * @route   POST /api/projects
 * @access  Private/Admin
 */
const createProject = async (req, res) => {
    try {
        // Admin check is done in routes via role middleware ideally, or here.
        // Assuming roleMiddleware handles access, here we just create.
        const project = await Project.create(req.body);
        res.status(201).json({ success: true, data: project });
    } catch (error) {
        res.status(400).json({ success: false, message: error.message });
    }
};

/**
 * @desc    Get all projects
 * @route   GET /api/projects
 * @access  Private (Admin: all, Client: own)
 */
const getProjects = async (req, res) => {
    try {
        let query = {};

        // precise logic: authenticarted user is attached to req.user
        if (req.user.role === 'client') {
            query.client = req.user.id;
        }
        // Admins see all by default (empty query)

        const projects = await Project.find(query)
            .populate('client', 'name email')
            .sort({ createdAt: -1 });

        res.status(200).json({ success: true, data: projects });
    } catch (error) {
        res.status(500).json({ success: false, message: error.message });
    }
};

/**
 * @desc    Get single project
 * @route   GET /api/projects/:id
 * @access  Private
 */
const getProject = async (req, res) => {
    try {
        const project = await Project.findById(req.params.id).populate('client', 'name email');

        if (!project) {
            return res.status(404).json({ success: false, message: 'Project not found' });
        }

        // Access check
        if (req.user.role === 'client' && project.client._id.toString() !== req.user.id) {
            return res.status(403).json({ success: false, message: 'Not authorized to view this project' });
        }

        res.status(200).json({ success: true, data: project });
    } catch (error) {
        res.status(500).json({ success: false, message: error.message });
    }
};

/**
 * @desc    Update project
 * @route   PUT /api/projects/:id
 * @access  Private/Admin
 */
const updateProject = async (req, res) => {
    try {
        let project = await Project.findById(req.params.id);

        if (!project) {
            return res.status(404).json({ success: false, message: 'Project not found' });
        }

        project = await Project.findByIdAndUpdate(req.params.id, req.body, {
            new: true,
            runValidators: true
        });

        res.status(200).json({ success: true, data: project });
    } catch (error) {
        res.status(400).json({ success: false, message: error.message });
    }
};

/**
 * @desc    Delete project
 * @route   DELETE /api/projects/:id
 * @access  Private/Admin
 */
const deleteProject = async (req, res) => {
    try {
        const project = await Project.findById(req.params.id);

        if (!project) {
            return res.status(404).json({ success: false, message: 'Project not found' });
        }

        await project.deleteOne();

        res.status(200).json({ success: true, data: {} });
    } catch (error) {
        res.status(500).json({ success: false, message: error.message });
    }
};

module.exports = {
    createProject,
    getProjects,
    getProject,
    updateProject,
    deleteProject
};
