const mongoose = require('mongoose');

const TipsSchema = new mongoose.Schema({
  amount: { type: Number, required: true },
  id_user: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
  created_at: { type: Date, default: Date.now },
  modified_at: { type: Date, default: Date.now },
});

module.exports = mongoose.model('Tips', TipsSchema);
