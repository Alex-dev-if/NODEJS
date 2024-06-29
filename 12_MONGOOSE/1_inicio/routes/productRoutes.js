const express = require('express')
const router = express()

const ProductController = require('../controllers/productsController')

router.get('/create', ProductController.createProducts)
router.post('/create', ProductController.createProductsPost)
router.post('/remove/:id', ProductController.deleteProduct)
router.get('/edit/:id', ProductController.editProduct)
router.post('/edit/:id', ProductController.updateProduct)
router.get('/:id', ProductController.getProduct)
router.get('/', ProductController.showProducts)

module.exports = router