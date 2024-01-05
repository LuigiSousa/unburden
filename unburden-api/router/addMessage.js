const express = require("express")
const router = express.Router()

const mongoose = require("mongoose")
const { config } = require('dotenv')
config()

router.use(express.json())

const dbUrl = process.env.urlDb_unburden
mongoose.connect(dbUrl)

const message = require('../models/messageModel')

router.post("/", async (req, res) => {
    const randomId = Math.floor(Math.random() * 1000000000)

    const newMessage = new message({
        messageId: randomId,
        name: req.body.name,
        message: req.body.message
    })

    await newMessage.save()
    res.redirect('http://localhost:2106/messageAdded')
})

module.exports = router