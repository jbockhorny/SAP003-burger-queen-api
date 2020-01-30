import models from '../server/src/models/index.js'
const getAllProducts = async (req, res) => {

  const products = await models.Product.findAll({ raw: true })
  res.send(products)
};

const postProduct = async (req, res) => {

  const newProduct = await models.Product.create(req.body)
  res.send(newProduct)  
};

const getProductId = async (req, res) => {

  const productId = await models.Product.findByPk(Number(req.params.id)
  )
  res.send(productId)  
};

export default {
  getAllProducts,
  postProduct,
  getProductId
}