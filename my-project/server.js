const express = require('express')
const app = express()
const port = 3000


const bodyParser = require('body-parser')

app.use(bodyParser.json()) // for parsing application/json
app.use(bodyParser.urlencoded({ extended: true })) // for parsing application/x-www-form-urlencoded


app.get('/', (req, res) => {
    res.send('Hello World!')
})

app.get('/users', (req, res) => {
    //
    res.send(['alice', 'bob'])
})

app.post('/users', (req, res) => {
    console.log(req.body.test)
    res.status(204)
    res.send()
})

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})