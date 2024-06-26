const User = require('../models/User')

const bcrypt = require('bcryptjs')

module.exports = class AuthController{
  static login (req, res){
    res.render('auth/login')
  }

  static async loginPost(req, res){
    const {email, password} = req.body

    const user = await User.findOne({where: {email: email}})

    if (!user){
      req.flash('message', 'User not found')
      res.render('auth/login')

      return 
    }

    const passwordMatch = bcrypt.compareSync(password, user.password)

    if(!passwordMatch){
      req.flash('message', 'Incorrect password')
      res.render('auth/login')

      return
    }

    req.session.userid = user.id
    req.session.save(()=>{
      res.redirect('/')
    })
  }

  static register (req, res){
    res.render('auth/register')
  }
  
  static async registerSave(req, res){
    const {name, email, password, confirmpassword} = req.body

    if(password!=confirmpassword){
      req.flash('message', 'Passwords must be the same')
      res.render('auth/register')

      return
    }

    const checkIfUserExists = await User.findOne({where:{email: email}})

    if(checkIfUserExists){
      req.flash('message', 'There is already a user with this email')
      res.render('auth/register')

      return
    }

    const salt = bcrypt.genSaltSync(10)
    const hashedPassword = bcrypt.hashSync(password, salt)

    const user = {
      name,
      email,
      password: hashedPassword
    }

    try {
      const createdUser = await User.create(user)

      req.session.userid = createdUser.id
      req.flash('message', 'Cadastro concluído!')
      req.session.save(()=>{
        res.redirect('/login')
      })
      
    } catch (error) {
      console.log(`Não foi possível cadastrar: ${error}`)
    }
  }

  static logout(req, res){
    req.session.destroy()
    res.redirect('/login')
  }
}