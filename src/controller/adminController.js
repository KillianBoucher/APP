const jwt = require('jsonwebtoken');
const Admin = require('../models/admin');

exports.login = async (req, res) => {
  try {
    const admin = await Admin.findOne({ username: req.body.username });

    if (!admin) {
      return res.status(401).json({ message: "L'administrateur est introuvable" });
    }

    const isMatch = await admin.comparePassword(req.body.password);

    if (!isMatch) {
      return res.status(401).json({ message: 'Mot de passe incorrect' });
    }

    const token = jwt.sign({ id: admin._id }, process.env.JWT_SECRET, {
      expiresIn: '1h',
    });

    res.status(200).json({
      message: 'Connexion réussie',
      token: token,
    });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};
