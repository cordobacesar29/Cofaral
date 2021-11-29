const productRouter = require('./product.routes');

const createRoutes = app => {
  app.use('/api/products', productRouter);
};

module.exports = createRoutes;
