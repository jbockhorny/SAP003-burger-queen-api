import ProductService from '../server/services/ProductService'

import Util from '../server/utils/Utils.js'

const util = new Util()

class ProductController {
  static async getAllProducts(req, res) {
    try {
      const allProducts = await ProductService.getAllProducts()
      if (allProducts.length > 0) {
        util.setSuccess(200, 'Products retrieved', allProducts)
      } else {
        util.setSuccess(200, 'No Product found')
      }
      return util.send(res)
    } catch (error) {
      util.setError(400, error)
      return util.send(res)
    }
  }

  static async postProduct(req, res) {
    if (!req.body.name || !req.body.price || req.body.type || req.body.breakfast ) {
      util.setError(400, 'Please provide complete details')
      return util.send(res)
    }
    const newProduct = req.body
    try {
      const createdProduct = await ProductService.postProduct(newProduct)
      util.setSuccess(201, 'Product Added!', createdProduct)
      return util.send(res)
    } catch (error) {
      util.setError(400, error.message)
      return util.send(res)
    }
  }

  static async putProduct(req, res) {
    const alteredProduct = req.body
    const { id } = req.params
    if (!Number(id)) {
      util.setError(400, 'Please input a valid numeric value')
      return util.send(res)
    }
    try {
      const updateProduct = await ProductService.updateProduct(id, alteredProduct)
      if (!updateProduct) {
        util.setError(404, `Cannot find product with the id: ${id}`)
      } else {
        util.setSuccess(200, 'Product updated', updateProduct)
      }
      return util.send(res)
    } catch (error) {
      util.setError(404, error)
      return util.send(res)
    }
  }

  static async getProduct(req, res) {
    const { id } = req.params

    if (!Number(id)) {
      util.setError(400, 'Please input a valid numeric value')
      return util.send(res)
    }

    try {
      const theProduct = await ProductService.getProduct(id)

      if (!theProduct) {
        util.setError(404, `Cannot find Product with the id ${id}`)
      } else {
        util.setSuccess(200, 'Found Product', theProduct)
      }
      return util.send(res)
    } catch (error) {
      util.setError(404, error)
      return util.send(res)
    }
  }

  static async deleteProduct(req, res) {
    const { id } = req.params

    if (!Number(id)) {
      util.setError(400, 'Please provide a numeric value')
      return util.send(res)
    }

    try {
      const productDelete = await ProductService.deleteProduct(id)

      if (productDelete) {
        util.setSuccess(200, 'Product deleted')
      } else {
        util.setError(404, `Product with the id ${id} cannot be found`)
      }
      return util.send(res)
    } catch (error) {
      util.setError(400, error)
      return util.send(res)
    }
  }
}

// import models from '../server/src/models'

// const getAllProducts = async (req, res) => {

//   const products = await models.Product.findAll({ raw: true })
//   res.send(products)
// };

// const postProduct = async (req, res) => {

//   const newProduct = await models.Product.create(req.body)
//   res.send(newProduct)  
// };

// const getProductId = async (req, res) => {

//   const productId = await models.Product.findByPk(Number(req.params.id)
//   )
//   res.send(productId)  
// };

// export default {
//   getAllProducts,
//   postProduct,
//   getProductId
// }

export default ProductController