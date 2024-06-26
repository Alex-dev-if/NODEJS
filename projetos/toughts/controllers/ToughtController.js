const Tought = require('../models/Tought')
const User = require('../models/User')

const { Op } = require('sequelize')

module.exports = class ToughtController{
  static async showToughts(req, res){

    let search = ''
    if(req.query.search){
      search = req.query.search
    }

    let order = 'DESC'

    if(req.query.order === 'old'){
      order = 'ASC'
    }

    const toughtsData = await Tought.findAll({
      include: User, 
      where: {title: {[Op.like]: `%${search}%`}},
      order: [['createdAt', order]]
    })

    const toughts = toughtsData.map((result)=>result.get({plain: true}))

    let toughtsQty = toughts.length

    if(toughtsQty === 0){
      toughtsQty = false
    }
    
    res.render('toughts/home', { toughts, search, toughtsQty})
  }

  static async dashboard(req, res){
    const userId = req.session.userid 

    const user = await User.findOne({where:{id: userId}, include: Tought, plain: true}) 
    if(!user){
      res.redirect('/login')
    }

    const toughts = user.Toughts.map((result)=>result.dataValues)
    res.render('toughts/dashboard', toughts.length > 0 ? { toughts } : {emptyToughts: true})
  
  }

  static createTought(req, res){
    res.render('toughts/create')
  }

  static async createToughtPost(req, res){

    const tought = {
      title: req.body.title,
      UserId: req.session.userid
    }

    try {
      await Tought.create(tought)

      req.flash('message', 'Tought created!')

      req.session.save(()=>{
        res.redirect('/toughts/dashboard')
      })
    } catch (error) {
      console.log(error)
    }
  }

  static async deleteTought(req, res){
    const id = req.params.id
    const UserId = req.session.userid

    try {
      await Tought.destroy({where: {id: id, UserId: UserId}})
      req.flash('message', 'Tought deleted successfully')

      req.session.save(()=>{
        res.redirect('/toughts/dashboard')
      })
    } catch (error) {
      console.log(error)
    }

  }

  static async updateTought(req, res){
    const id = req.params.id
    
    const tought = await Tought.findOne({raw: true, where: {id: id}})

    res.render('toughts/edit', { tought })
  }

  static async updateToughtPost(req, res){
    const id = req.params.id
    const UserId = req.session.userid

    const tought = {
      title: req.body.title
    }

    try {
      await Tought.update(tought, {where: {id: id, UserId: UserId}})
      req.flash('message', 'Updated successfully!')
      req.session.save(()=>{
        res.redirect('/toughts/dashboard')
      })
    } catch (error) {
      console.log(error)
    }
  }
}
