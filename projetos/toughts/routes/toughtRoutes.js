const express = require('express')
const router = express.Router()

const ToughtController = require('../controllers/ToughtController')

// helpers
const checkAuth = require("../helpers/auth").checkAuth

router.get('/add', checkAuth, ToughtController.createTought)
router.post('/add', checkAuth, ToughtController.createToughtPost)
router.get('/edit/:id', checkAuth, ToughtController.updateTought)
router.post('/edit/:id', checkAuth, ToughtController.updateToughtPost)
router.post('/remove/:id', checkAuth, ToughtController.deleteTought)
router.get('/dashboard', checkAuth, ToughtController.dashboard)
router.get('/', checkAuth, ToughtController.showToughts)

module.exports = router

