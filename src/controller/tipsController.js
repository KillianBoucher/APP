const Tips = require('../models/tips');

exports.create = async (req, res) => {
  const tip = new Tips({
    amount: req.body.amount,
    id_user: req.body.id_user,
  });

  try {
    const savedTip = await tip.save();
    res.status(201).json(savedTip);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

exports.getAll = async (req, res) => {
  try {
    const tips = await Tips.find().populate('id_user');
    res.status(200).json(tips);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

exports.getById = async (req, res) => {
  try {
    const tip = await Tips.findById(req.params.id).populate('id_user');
    if (!tip) {
      return res.status(404).json({ message: 'Tip not found' });
    }
    res.status(200).json(tip);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

exports.update = async (req, res) => {
  try {
    const tip = await Tips.findByIdAndUpdate(
      req.params.id,
      {
        amount: req.body.amount,
        id_user: req.body.id_user,
        modified_at: Date.now(),
      },
      { new: true }
    );
    if (!tip) {
      return res.status(404).json({ message: 'Tip not found' });
    }
    res.status(200).json(tip);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

exports.delete = async (req, res) => {
  try {
    const tip = await Tips.findByIdAndRemove(req.params.id);
    if (!tip) {
      return res.status(404).json({ message: 'Tip not found' });
    }
    res.status(200).json({ message: 'Tip deleted' });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};
