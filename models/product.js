'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Product extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Product.belongsTo(models.Laboratory, {
        foreignKey: 'laboratorio',
        as: 'laboratory'
      });
      Product.belongsTo(models.Drog, {
        foreignKey: 'droga',
        as: 'drog'
      });
    }
  }
  Product.init(
    {
      sapcode: DataTypes.INTEGER,
      name: DataTypes.STRING,
      presentation: DataTypes.STRING,
      laboratorio: DataTypes.INTEGER,
      droga: DataTypes.INTEGER,
      tucuman: DataTypes.INTEGER,
      salta: DataTypes.INTEGER,
      chaco: DataTypes.INTEGER,
      precio: DataTypes.INTEGER,
      createdAt: DataTypes.DATE,
      deletedAt: DataTypes.DATE,
    },
    {
      sequelize,
      modelName: 'Product',
    }
  );
  return Product;
};