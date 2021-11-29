const models = require('../models');

const getProduct = async (req, res) => {
    try {
        const products = await models.Product.findAll();
        return res.status(200).json(products);
    } catch (error) {
        return res.status(400).json(error.message);
    }
};

const getProductById = async (req, res) => {
    const { id } = req.params;

    try {
        const product = await models.Product.findOne({ where: { id } });
        if (!product) {
        return res.status(400).json({ error: 'Product ID does not exist' });
        }
        return res.status(200).json(product);
    } catch (err) {
        return res.status(400).json({ error });
    }
};
  
  const deleteProduct = async (req, res) => {
    const { id } = req.params;
    try {
      const product = await models.Product.findOne({ where: { id } });
      if (!product) {
        return res
          .status(404)
          .json({ error: 'Product to delete does not exist' });
      }
      await models.Product.destroy({ where: { id } });
      return res.status(200).json('Successfully product deleted');
    } catch (error) {
      return res.status(400).json({ error });
    }
  };
  
  const updateProduct= async (req, res) => {
    const { id } = req.params;
    const { body } = req;
  
    try {
      const product = await models.Product.findByPk(id);
  
      if (!product) {
        return res.status(404).json({
          ok: false,
          msg: `Not found member with the id ${id}`
        });
      }
  
      await product.update(body);
  
      res.json({
        ok: true,
        product
      });
    } catch (error) {
      console.log(error);
      res.status(500).json({
        ok: false,
        msg: 'Error'
      });
    }
  }
  
  const createProduct = async (req, res) => {
    try {
      const result = await models.Product.create(req.body);
      return res.status(201).json({
        status: 'success',
        message: 'successfully created product',
      });
    } catch (e) {
      return res.status(400).json({
        e,
        message: 'error loading product',
      });
    }
  };
  
  module.exports = {
    getProduct,
    getProductById,
    createProduct,
    updateProduct,
    deleteProduct,
  };
  