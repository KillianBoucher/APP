const express = require('express');
const router = express.Router();
const tipsController = require('../controllers/tipsController');
const { authenticate, isAdmin } = require('../middleware/auth');

router.post('/', authenticate, isAdmin, tipsController.createTip);
router.get('/', authenticate, tipsController.getAllTips);
router.get('/:id', authenticate, tipsController.getTip);
router.put('/:id', authenticate, isAdmin, tipsController.updateTip);
router.delete('/:id', authenticate, isAdmin, tipsController.deleteTip);
router.get('/service/:serviceId/user/:userId', authenticate, tipsController.getTipsByServiceAndUser);

module.exports = router;
