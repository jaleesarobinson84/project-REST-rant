const router = require('express').Router()
const places = require('../models/places')

// SHOW
router.get('/:id', (req, res) => {
  let id = Number(req.params.id)
  if (isNaN(id)) {
    res.render('error404')
  }
  else if (!places[id]) {
    res.render('error404')
  }
  else {
  res.render('places/show', {place: places[id], id})
  }
})

// DELETE
router.delete('/:id', (req, res) => {
  let id = Number(req.params.id)
  if (isNaN(id)) {
    res.render('error404')
  }
  else if (!places[id]) {
    res.render('error404')
  }
  else { 
    places.splice(id, 1)
    res.redirect('/places')
  }
})

// EDIT
router.get('/:id/edit', (req, res) => {
  let id = Number(req.params.id)
  if (isNaN(id)) {
    res.render('error404')
  }
  else {
  res.render('places/edit', {place: places[id], id})
  }
})


router.get('/', (req, res) => {
    let places = [{
        name: 'Yard House',
        city: 'Raleigh',
        state: 'NC',
        cuisines: 'American',
        pic: '/images/yard-house-tables.jpg',
        PhotoCredit: 'Favour Otunji',
        credit: 'Photo by <a href="https://unsplash.com/@kodeblacc?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash">Favour Otunji</a> on <a href="https://unsplash.com/photos/brown-dinette-set-lot-dD7xFyDzES4?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash">Unsplash</a>'
  
        }, {
        name: 'Happy Coffee',
        city: 'Chicago',
        state: 'IL',
        cuisines: 'Coffee, Bakery',
        pic: '/images/coffee-shop.jpg',
        photoCredit: 'Sincerly Media',
        credit:'Photo by <a href="https://unsplash.com/@sincerelymedia?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash">Sincerely Media</a> on <a href="https://unsplash.com/photos/man-standing-near-the-kitchen-counter-VNsdEl1gORk?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash">Unsplash</a>'

    }]
    res.render('places/index', {places}) 
})

router.put('/:id', (req, res) => {
  let id = Number(req.params.id)
  if (isNaN(id)) {
      res.render('error404')
  }
  else if (!places[id]) {
      res.render('error404')
  }
  else {
      // Dig into req.body and make sure data is valid
      if (!req.body.pic) {
          // Default image if one is not provided
          req.body.pic = '/images/yard-house-tables.jpg'
      }
      if (!req.body.city) {
          req.body.city = 'Anytown'
      }
      if (!req.body.state) {
          req.body.state = 'USA'
      }

      // Save the new data into places[id]
      places[id] = req.body
      res.redirect(`/places/${id}`);
  }
})

  

module.exports = router