const mongoose = require('mongoose')

let commentSchem = new mongoose.Schema({
    author: {type: String, default: 'Anonymous'},
    rant: {type: Boolean, default: false},
    stars: {type: Number, require: true},
    content: {type: String, default: ''}
})

module.exports = mongoose.model('Comment', commentSchema)