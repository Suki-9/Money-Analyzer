const GoogleAPI = require('./googleapi/api.js')
const express = require('express')
const bodyParser = require('body-parser')

const cors = require('cors')

const app = express()
app.use(bodyParser.json())
app.use(cors())

app.get('/api/auth2', function(req, res) {
    res.send({
        AuthURL: GoogleAPI.genurl
    })
})

app.get('/test', function(req, res) {
    res.send({
        msg: "Hello World!"
    })
})

app.listen(process.env.PORT || 3000)