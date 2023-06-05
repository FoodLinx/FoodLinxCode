//dotenv
require('dotenv').config()
PORT = process.env.PORT

//Express
const express = require('express')
const mongoose = require('mongoose')
const homeRoutes = require('./routes/homeRoute')

const app = express()

//Middleware 
app.use(express.json())
app.use((req, res, next) => {
    console.log(req.path, req.method)
    next()
})

//Routes
app.get('/', (req, res) =>{
    res.json({message: "Hello World!"})
})

app.use('/api', homeRoutes)

//Database Connection
mongoose.connect(process.env.DATABASE)
    .then(() => {
            //Successfull database connection. Run Server
            app.listen(PORT, () => {
            console.log(`Server Running: Port ${PORT}`)
        })
    })
    .catch((error) => {
        console.log(error)
    })
