'use strict';
const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class Laboratory extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Laboratory.hasOne(models.Product, {
        foreignKey: 'laboratorio',
        as: 'product',
      });
    }
  }
  Laboratory.init(
    {
      name: DataTypes.STRING,
      createdAt: DataTypes.DATE,
      deletedAt: DataTypes.DATE,
    },
    {
      sequelize,
      modelName: 'Laboratory',
      paranoid: true,
    }
  );
  return Laboratory;
};
