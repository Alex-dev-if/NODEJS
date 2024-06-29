const Product = require('../models/Product')

module.exports = class ProductController{
  static async showProducts(req, res){
    const products = await Product.find().lean()

    res.render('products/all', { products })
  }

  static createProducts(req, res){
    res.render('products/create')
  }

  static async createProductsPost(req, res){
    const { name, price, description, image } = req.body

    const product = new Product({name, price, description, image})

    await product.save()

    res.redirect('/products')
  }

  static async getProduct(req, res){
    const id = req.params.id
    const product = await Product.findById(id).lean()

    res.render('products/product', { product })
  }

  static async deleteProduct(req, res){
    const id = req.params.id

    await Product.deleteOne({_id: id})

    res.redirect('/products')
  }

  static async editProduct(req, res){
    const id = req.params.id

    const product = await Product.findById(id).lean()

    res.render("products/edit", { product })
  }

  static async updateProduct(req, res){
    const id = req.params.id
    const {name, image, price, description} = req.body

    const product = {name, image, price, description}

    await Product.updateOne({_id: id}, product)

    res.redirect('/products')
  }
}