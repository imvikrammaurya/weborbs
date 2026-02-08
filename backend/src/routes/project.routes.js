const express = require('express');
const router = express.Router();
const projectController = require('../controllers/project.controller');
const { protect } = require('../middleware/auth.middleware');
const { authorize } = require('../middleware/role.middleware');

const { ensureProfileCompleted } = require('../middleware/profile.middleware');

// Routes
router.route('/')
    .post(protect, ensureProfileCompleted, authorize('admin'), projectController.createProject)
    .get(protect, ensureProfileCompleted, projectController.getProjects);

router.route('/:id')
    .get(protect, ensureProfileCompleted, projectController.getProject)
    .put(protect, ensureProfileCompleted, authorize('admin'), projectController.updateProject)
    .delete(protect, ensureProfileCompleted, authorize('admin'), projectController.deleteProject);

module.exports = router;
