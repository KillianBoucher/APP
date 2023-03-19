const express = require('express');
const router = express.Router();
const tipsController = require('../controllers/tipsController');
const auth = require('../middleware/auth');
router.post('/', auth, userController.create);

router.post('/', tipsController.create);
router.get('/', tipsController.getAll);
router.get('/:id', tipsController.getById);
router.put('/:id', tipsController.update);
router.delete('/:id', tipsController.delete);

module.exports = router;
