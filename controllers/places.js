const router = require('express').Router()

router.get('/new', (req, res) => {
    let places = [{
        name: 'Yard House',
        city: 'Raleigh',
        state: 'NC',
        cuisines: 'American',
        pic: 'http://placekitten.com/250/250'
    }, {
        name: 'Happy Coffee',
        city: 'Chicago',
        state: 'IL',
        cuisines: 'Coffee, Bakery',
        pic: 'http://placekitten.com/250/250'

    }]
    res.render('places/new')
})

module.exports = router