require('dotenv').config()
const express = require('express')

const app = express()

// basic middleware to track requests in console
app.use((req, res, next) => {
    console.log(req.method, req.path)
    next()
})

app.get('/', (req, res) => {
    res.json({mssg: 'Welcome to Workout Tracker.'})
})

app.listen(process.env.PORT, () => {
    console.log(`express server running in port ${process.env.PORT}...`)
})