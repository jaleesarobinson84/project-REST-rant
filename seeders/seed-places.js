const db = require('../models')

db.Place.create ([{
    name: 'Yard House',
    city: 'Raleigh',
    state: 'NC',
    cuisines:'American',
    pic: '/images/yard-house-tables.jpg',
    founded: 2000
}, {
    name: 'Happy Coffee',
    city: 'Chicago',
    state: 'IL',
    cuisines: 'Coffee, Bakery',
    pic: '/images/coffee-shop.jpg',
    founded: 2021
}])

.then(() => {
    console.log('Success!')
    process.exit()
})
.catch(err => {
    console.log('Failure', err)
    process.exit()
})