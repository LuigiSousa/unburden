const express = require('express')
const router = express.Router()

const mongoose = require('mongoose')
const message = require('../models/messageModel')
const { config } = require('dotenv')
config()

const urlDb = process.env.urlDb_unburden
mongoose.connect(urlDb)

router.post('/', async (req, res) => {
    const newReply = {
        name: req.body.name,
        message: req.body.message,
    }

    const id = req.body.id

    const updatingMessage = await message.findOne({ messageId: id })
    updatingMessage.replies.push(newReply)
    await updatingMessage.save()

    res.redirect(`http://localhost:2106/message/${id}`)
})

module.exports = router