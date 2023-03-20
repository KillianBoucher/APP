const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');

const Service = sequelize.define('Service', {
  shiftType: {
    type: DataTypes.INTEGER,
    allowNull: false,
    validate: {
      isIn: [[0, 1, 2]]
    }
  },
  shiftClosed: {
    type: DataTypes.BOOLEAN,
    allowNull: false,
    defaultValue: false
  },
}, {
  timestamps: true,
  createdAt: 'created_at',
  updatedAt: 'modified_at',
});

module.exports = Service;
 