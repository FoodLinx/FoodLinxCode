const express = require('express')
const Message = require('../models/textMessageModel')
const {
    GetAllMessages, GetMessage, PostMessage, 
} = require('../controllers/homeController')

const router = express.Router()

//GET /api/:id Gets a message from the database
router.get('/:id', GetMessage)

//GET /api/ Gets all messages
router.get('/', GetAllMessages)

//POST /api/ Posts(Saves) a message to the database
router.post('/', PostMessage)

module.exports = router