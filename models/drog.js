'use strict';
const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class Drog extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Drog.hasOne(models.Product, {
        foreignKey: 'droga',
        as: 'product',
      });
    }
  }
  Drog.init(
    {
      name: DataTypes.STRING,
      createdAt: DataTypes.DATE,
      deletedAt: DataTypes.DATE,
    },
    {
      sequelize,
      modelName: 'Drog',
      paranoid: true,
    }
  );
  return Drog;
};