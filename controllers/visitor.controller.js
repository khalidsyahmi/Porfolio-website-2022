/* const Product = require('../models/product-model'); */

/* async function getAllProducts(req, res, next) {
  try {
    const products = await Product.findAll();
    res.render('customer/products/all-products', { products: products });
  } catch (error) {
    next(error);
  }
} */
function getVisitor(req,res,next){
  res.render('home/landing/landing-page');
}


/* async function getProductDetails(req, res, next) {
  try {
    const product = await Product.findById(req.params.id);
    res.render('customer/products/products-details', { product: product });
  } catch (error) {
    next(error);
  }
}
 */

module.exports = {
  getVisitor: getVisitor,

};