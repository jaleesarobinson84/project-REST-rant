const router = require('express').Router()
router.get ('/new', (req, res) => {
    res.render('places/new')
})
router.get('/', (req, res) => {
    let places = [{
        name: 'Yard House',
        city: 'Raleigh',
        state: 'NC',
        cuisines: 'American',
        pic: '/public/images/yard-house-tables.jpg'
    }, {
        name: 'Happy Coffee',
        city: 'Chicago',
        state: 'IL',
        cuisines: 'Coffee, Bakery',
        pic: '/public/images/coffee-shop.jpg'

    }]
    res.render('places/index', {places}) 
})

router.post('/', (req, res) =>{
    res.send('POST /places stub')
})

module.exports = router