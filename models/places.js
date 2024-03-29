const mongoose = require('mongoose')

// schema
const placeSchema = new mongoose.Schema({
    name: {type: String, required: true},
    pic: {type: String, default: ['/images/coffee-shop.jpg']},
    cuisines: {type: String, required: true},
    city: {type: String, default: 'Chicago'},
    state: {type: String, default: 'IL'},
    founded: {
        type: Number,
        min: [1673, 'Definitely in their Seasoned Era!!'],
        max: [new Date().getFullYear(), 'This year is in the future, Cheers!!!']
    },
    comments: [{type: mongoose.Schema.Types.ObjectId, ref: 'Comment'}]
})

placeSchema.methods.showEstablished = function() {
    return `${this.name} has been serving ${this.city}, ${this.state} since ${this.founded}.`
}
  

module.exports = mongoose.model('Place', placeSchema)