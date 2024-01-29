// Modules and Global
const express = require('express')
const methodOverride = require('method-override')

// Configuration
require('dotenv').config()
const app = express()

// Express Settings/MIDDLEWARE
app.set('views', __dirname + '/views')
app.set('view engine', 'jsx')
app.engine('jsx', require('express-react-views').createEngine())
app.use(express.static('public'))
app.use(express.urlencoded({extended: true }))
app.use(methodOverride('_method'))

// controllers
app.use('/places', require('./controllers/places'))

// ROUTES
app.get('/', (req, res) => {
    res.render('home')
})

// 404 Route
app.get('*', (req, res) => {
    // {res.status(404).send('<h1>404 Page</h1>')
    res.render('error404')
})

// listen for connections
app.listen(process.env.PORT)