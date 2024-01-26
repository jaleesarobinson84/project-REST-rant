const router = require('express').Router()
const places = require('../models/places')

router.get ('/new', (req, res) => {
    res.render('places/new')
})
router.get('/', (req, res) => {
    let places = [{
        name: 'Yard House',
        city: 'Raleigh',
        state: 'NC',
        cuisines: 'American',
        pic: '/images/yard-house-tables.jpg'
    }, {
        name: 'Happy Coffee',
        city: 'Chicago',
        state: 'IL',
        cuisines: 'Coffee, Bakery',
        pic: '/images/coffee-shop.jpg'

    }]
    res.render('places/index', {places}) 
})

router.post('/', (req, res) => {
    console.log(req.body)
    if (!req.body.pic) {
      // Default image if one is not provided
      req.body.pic = 'http://placekitten.com/400/400'
    }
    if (!req.body.city) {
      req.body.city = 'Anytown'
    }
    if (!req.body.state) {
      req.body.state = 'USA'
    }
    places.push(req.body)
    res.redirect('/places')
  })
  

module.exports = router