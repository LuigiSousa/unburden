const express = require('express')
const router = express.Router()

const message = require('../models/messageModel')

router.get('/', async (req, res) => {
    const messages = await message.find()

    const dividedMessages = []
    for (let i = 0; i < messages.length; i += 6) {
        const dividedMessage = messages.slice(i, i + 6)
        dividedMessages.push(dividedMessage)
    }

    res.json(dividedMessages)
})

module.exports = router