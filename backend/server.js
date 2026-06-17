require('dotenv').config()
const express = require('express')
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

app.listen(process.env.PORT, () => {
    console.log(`express server running in port ${process.env.PORT}...`)
})