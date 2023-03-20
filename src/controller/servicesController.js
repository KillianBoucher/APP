const Service = require('../models/service');

exports.createService = async (req, res) => {
  try {
    const newService = await Service.create(req.body);
    res.status(201).json({ service: newService });
  } catch (error) {
    res.status(400).json({ error });
  }
};

exports.getAllServices = async (req, res) => {
  try {
    const services = await Service.findAll();
    res.status(200).json({ services });
  } catch (error) {
    res.status(500).json({ error });
  }
};

exports.getService = async (req, res) => {
  try {
    const service = await Service.findByPk(req.params.id);
    if (service) {
      res.status(200).json({ service });
    } else {
      res.status(404).json({ error: 'Service not found' });
    }
  } catch (error) {
    res.status(500).json({ error });
  }
};

exports.updateService = async (req, res) => {
  try {
    const service = await Service.findByPk(req.params.id);
    if (service) {
      await service.update(req.body);
      res.status(200).json({ service });
    } else {
      res.status(404).json({ error: 'Service not found' });
    }
  } catch (error) {
    res.status(400).json({ error });
  }
};

exports.deleteService = async (req, res) => {
  try {
    const service = await Service.findByPk(req.params.id);
    if (service) {
      await service.destroy();
      res.status(204).json({ message: 'Service deleted' });
    } else {
      res.status(404).json({ error: 'Service not found' });
    }
  } catch (error) {
    res.status(500).json({ error });
  }
};
