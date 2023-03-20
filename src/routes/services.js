const express = require('express');
const router = express.Router();
const servicesController = require('../controllers/servicesController');

router.post('/', servicesController.createService);
router.get('/', servicesController.getAllServices);
router.get('/:id', servicesController.getService);
router.put('/:id', servicesController.updateService);
router.delete('/:id', servicesController.deleteService);

module.exports = router;
