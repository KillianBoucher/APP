const mongoose = require('mongoose');

const serviceSchema = new mongoose.Schema(
  {
    created_at: {
      type: Date,
      default: Date.now,
    },
    modified_at: {
      type: Date,
      default: Date.now,
    },
    shiftType: {
      type: Number,
      enum: [0, 1, 2], // 0=breakfast, 1=lunch, 2=diner
      required: true,
    },
    shiftClosed: {
      type: Boolean,
      default: false,
    },
  },
  {
    timestamps: { createdAt: 'created_at', updatedAt: 'modified_at' },
  }
);

const Service = mongoose.model('Service', serviceSchema);

module.exports = Service;
