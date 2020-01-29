import { Router } from 'express'
import ProductController from '../controllers/productscontrollers'

const ProductRouter = Router()
ProductRouter.get('/', ProductController.getAll)
// router.post('/', AuthorController.addAuthor)
// router.get('/:id', AuthorController.getAuthor)
// router.put('/:id', AuthorController.updatedAuthor)
// router.delete('/:id', AuthorController.deleteAuthor)

export default ProductRouter