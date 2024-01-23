const router = require('express').Router()

router.get('/', (req, res) => {
    let places = [{
        name: 'Yard House',
        city: 'Raleigh',
        state: 'NC',
        cuisines: 'American',
        pic: 'http://placeskitten.com/250/250'
    }, {
        name: 'Happy Coffee',
        city: 'Chicago',
        state: 'IL',
        cuisines: 'Coffee, Bakery',
        pic: 'http://placekitten.com/250/250'

    }]
    res.render('places/index', {places})
})

module.exports = router