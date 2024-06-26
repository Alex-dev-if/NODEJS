const express = require('express')
const exphbs = require('express-handlebars')
const session = require('express-session')
const FileStore = require('session-file-store')(session)
const flash = require('express-flash')

const app = express()

const conn = require('./db/conn.js')

// models
const Tought = require('./models/Tought.js')
const User = require('./models/User.js')

// import routes
const toughtsRoutes = require('./routes/toughtRoutes.js')
const authRoutes = require('./routes/authRoutes.js')

// import controller
const ToughtController = require('./controllers/ToughtController.js')

// template engine
app.engine('handlebars', exphbs.engine())
app.set('view engine', 'handlebars')

// receber resposta do body
app.use(express.urlencoded({
  extended: true
}))
app.use(express.json())

// assets
app.use(express.static('public'))

// session midleware
app.use(
  session({
    name: 'session',
    secret: 'my_secret',
    resave: false,
    saveUninitialized: false,
    store: new FileStore({
      logFn: function() {},
      path: require('path').join(require('os').tmpdir(), 'sessions')
    }),
    cookie: {
      secure: false,
      maxAge: 360000,
      expires: new Date(Date.now()+360000),
      httpOnly: true
    }
  })
)

// flash messages 
app.use(flash())

// set session to res
app.use((req, res, next)=>{
  if (req.session.userid){
    res.locals.session = req.session
  }
  next()
})

// routes 
app.use('/toughts', toughtsRoutes)
app.use('/', authRoutes)
app.get('/', ToughtController.showToughts)

conn
  .sync()
  .then(()=>{
    app.listen(3000)
  })
  .catch((err)=>console.log(err))