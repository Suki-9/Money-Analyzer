const GoogleAPI = require('./googleapi/api.js')
const express = require('express')
const bodyParser = require('body-parser')

const cors = require('cors')

const app = express()
app.use(bodyParser.json())
app.use(cors())

app.get('/api/oauth2', async function (req, res) {
    res.send({
        auth_url: await GoogleAPI.genurl()
    })
})

app.post('/api/refresh_token', async function (req, res) {
    const AuthorizatioCode = req.body.code
    res.send({
        token: await GoogleAPI.GetRefresh_token(AuthorizatioCode)
    })
})

app.post('/api/access_token', async function (req, res) {
    const refresh_token = req.body.code
    res.send({
        token: await GoogleAPI.GetAccess_token(refresh_token)
    })
})

app.get('/test', async function (req, res) {
    res.send({
        auth_url: await GoogleAPI.genurl()
    })
})

app.listen(process.env.PORT || 3000)