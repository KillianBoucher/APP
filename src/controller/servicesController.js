const Service = require('../models/services');

exports.createService = async (req, res) => {
  try {
    const service = new Service(req.body);
    await service.save();
    res.status(201).send(service);
  } catch (error) {
    res.status(400).send(error);
  }
};

exports.getServices = async (req, res) => {
  try {
    const services = await Service.find();
    res.status(200).send(services);
  } catch (error) {
    res.status(500).send(error);
  }
};

exports.getServiceById = async (req, res) => {
  try {
    const service = await Service.findById(req.params.id);
    if (!service) {
      return res.status(404).send({ message: 'Service not found' });
    }
    res.status(200).send(service);
  } catch (error) {
    res.status(500).send(error);
  }
};

exports.updateService = async (req, res) => {
  try {
    const service = await Service.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
      runValidators: true,
    });
    if (!service) {
      return res.status(404).send({ message: 'Service not found' });
    }
    res.status(200).send(service);
  } catch (error) {
    res.status(400).send(error);
  }
};

exports.deleteService = async (req, res) => {
  try {
    const service = await Service.findByIdAndRemove(req.params.id);
    if (!service) {
      return res.status(404).send({ message: 'Service not found' });
    }
    res.status(200).send({ message: 'Service deleted' });
  } catch (error) {
    res.status(500).send(error);
  }
};
