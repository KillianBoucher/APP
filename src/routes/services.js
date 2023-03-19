const express = require('express');
const servicesController = require('../controllers/servicesController');
const auth = require('../middleware/auth');
router.post('/', auth, userController.create);



const router = express.Router();

router.post('/', servicesController.createService);
router.get('/', servicesController.getServices);
router.get('/:id', servicesController.getServiceById);
router.put('/:id', servicesController.updateService);
router.delete('/:id', servicesController.deleteService);

module.exports = router;
