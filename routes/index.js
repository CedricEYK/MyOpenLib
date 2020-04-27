const express = require('express')

const indexCtrl = require('../controllers/index')

const router = express.Router()

router.get('/', indexCtrl.getHomePage)

module.exports = router