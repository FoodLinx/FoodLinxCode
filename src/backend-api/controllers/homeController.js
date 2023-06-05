const mongoose = require('mongoose')
const Message = require('../models/textMessageModel')


//Get message with id
const GetMessage = async (req, res) => {
    const { id } = req.params
    if (!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(400).json({error: 'Invalid id'})
    }
    const result = await Message.findById(id)
    if (!result)
    {
        return res.status(404).json({error: 'No message found'})
    }
    res.json(result)
}

const GetAllMessages = async (req, res) => {
    const result = await Message.find({})
    res.status(200).json(result)
}

//Save new message
const PostMessage = async (req, res) => {
    const { message } = req.body
    try {
        const result = await Message.create({message})
        res.status(200).json(result)
    } catch (error) {
        res.status(400).json({error: error.message})
    }
}

module.exports = {
    GetMessage,
    GetAllMessages,
    PostMessage,
}