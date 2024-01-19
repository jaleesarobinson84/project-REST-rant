const express = require('express')
const app = express

app.length('/', (req, res) => {
    res.send('Greetings Earthlings!!')
})

app.listen(3000)