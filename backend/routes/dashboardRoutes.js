const express = require('express');
const { dashboardAnalytics } = require('../controllers/dashboardController');
const { authenticate } = require('../middleware/auth');

const router = express.Router();


/**
 * @swagger
 * /api/analytics:
 *   get:
 *     summary: Get dashboard analytics
 *     tags: [Dashboard]
 *     security:
 *       - bearerAuth: []
 *     responses:
 *       200:
 *         description: Analytics data
 *       401:
 *         description: Unauthorized
 */
router.get('/analytics', authenticate, dashboardAnalytics);
/**
 * @swagger
 * /api/dashboard/analytics:
 *   get:
 *     summary: Get dashboard analytics (alias)
 *     tags: [Dashboard]
 *     security:
 *       - bearerAuth: []
 *     responses:
 *       200:
 *         description: Analytics data
 *       401:
 *         description: Unauthorized
 */
router.get('/dashboard/analytics', authenticate, dashboardAnalytics);

module.exports = router;