import models from '../server/src/models/index.js'
const getAll = async (req, res) => {

  const products = await models.Product.findAll({ raw: true })
  res.send(products)

};
export default {
  getAll
}