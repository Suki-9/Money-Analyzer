const GoogleAPI = require('./googleapi/api.js')
const express = require('express')
const bodyParser = require('body-parser')

const cors = require('cors')

const app = express()
app.use(bodyParser.json())
app.use(cors())

app.get('/api/oauth2', function(req, res) {
    res.send({
        OAuthURL: GoogleAPI.genurl[0],
        clientId: GoogleAPI.genurl[1],
        clientSecret: GoogleAPI.genurl[2],
        redirectUri: GoogleAPI.genurl[3],
    })
})

app.post('/api/gettoken', function(req, res) {
    const AuthorizatioCode = req.body["AuthorizatioCode"]
    if (AuthorizatioCode == undefined) {
        res.send({
            AccessToken: "AuthorizatioCode is not found!",
            ErrorCode: "1"
        })
    } else {
        res.send({
            AccessToken: GoogleAPI.gettoken(AuthorizatioCode),
            ErrorCode: "0"
        })
    }
})

app.get('/test', function(req, res) {
    res.send({
        msg: "うぇぶさぁばぁです(笑)"
    })
})

app.listen(process.env.PORT || 3000)