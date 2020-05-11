const express = require('express')

const indexCtrl = require('../controllers/index')

const router = express.Router()

router.get('/', indexCtrl.getHomePage)

//testing endpoints for functionality
router.get("/bookResults", indexCtrl.getBookResults);

module.exports = router