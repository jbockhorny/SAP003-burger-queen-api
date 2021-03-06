import { Router } from 'express'
import ProductController from '../controllers/productscontrollers'

const ProductRouter = Router()
ProductRouter.get('/', ProductController.getAllProducts)
ProductRouter.post('/', ProductController.postProduct)
ProductRouter.get('/:id', ProductController.getProduct)
ProductRouter.put('/:id', ProductController.putProduct)
ProductRouter.delete('/:id', ProductController.deleteProduct)

export default ProductRouter