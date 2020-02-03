import db from '../src/models/index.js'

class ProductService {
  static async getAllProducts() {
    try {
      return await db.Product.findAll()
    } catch (error) {
      throw error
    }
  }

  static async postProduct(newProduct) {
    try {
      return await db.Product.create(newProduct)
    } catch (error) {
      throw error
    }
  }

  static async putProduct(id, updateProduct) {
    try {
      const productToUpdate = await db.Product.findOne({
        where: { id: Number(id) }
      })

      if (productToUpdate) {
        await db.Product.update(updateProduct, { where: { id: Number(id) } })

        return updateProduct
      }
      return null
    } catch (error) {
      throw error
    }
  }

  static async getProduct(id) {
    try {
      const theProduct = await db.Product.findOne({
        where: { id: Number(id) }
      })

      return theProduct
    } catch (error) {
      throw error
    }
  }

  static async deleteProduct(id) {
    try {
      const productToDelete = await db.Product.findOne({ where: { id: Number(id) } })

      if (productToDelete) {
        const deleteProduct = await db.Product.destroy({
          where: { id: Number(id) }
        })
        return deleteProduct
      }
      return null
    } catch (error) {
      throw error
    }
  }
}

export default ProductService