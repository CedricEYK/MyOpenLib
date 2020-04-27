/**
 * *Main server file, with the minimum parts to navigate to different routes. Not yet has body-parser and models
 */

const express = require('express')

const errorCtrl = require('./controllers/error')

const path = require('path')

const app = express();

app.set('view engine', 'ejs')
app.set('views', 'views')

const indexRoutes = require('./routes/index')
const collectionRoutes = require('./routes/collection')

app.use(express.static(path.join(__dirname, "assets")))

app.use(indexRoutes)
app.use('/collection', collectionRoutes)

app.use("*", errorCtrl.get404)

app.listen(8080, function () {
    console.log('server running on :8080')
})