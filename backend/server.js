require('dotenv').config()
const express = require('express')
const mongoose = require('mongoose')
const workoutRoutes = require('./routes/workouts')

const app = express()

// middleware to check if request has a body (POST && PATCH)
app.use(express.json())
// middleware to track requests in console
app.use((req, res, next) => {
    console.log(req.method, req.path)
    next()
})

// routes
app.use('/workouts', workoutRoutes)

// connect to db via mongoose (ODM)
mongoose.connect(process.env.MONGO_URI)
    .then(() => {
        console.log('Connected to MongoDB')
        app.listen(process.env.PORT, () => {
        console.log(`express server running in port ${process.env.PORT}...`)
    })
    })
    .catch((error) => {
        console.error('Error connecting to MongoDB:', error)
    })

