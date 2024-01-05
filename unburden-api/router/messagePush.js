const express = require('express')
const router = express.Router()

const mongoose = require('mongoose')
const message = require('../models/messageModel')
const { config } = require('dotenv')
config()

const dbUrl = process.env.urlDb_unburden
mongoose.connect(dbUrl)

router.post('/', async (req, res) => {
    const id = req.body.id

    res.redirect(`http://localhost:2106/message/${id}`)
})

router.get('/:id', async (req, res) => {
    const id = Number(req.params.id)

    try {
        const messageData = await message.findOne({ messageId: id })
        res.json(messageData)
    } catch (err) {
        res.redirect('http://localhost:2106')
    }
})

module.exports = router