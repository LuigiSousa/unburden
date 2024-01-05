const { config } = require('dotenv');
const mongoose = require('mongoose');
config() 

const urlDb = process.env.urlDb_unburden
mongoose.connect(urlDb)

const message = require('./models/messageModel')

const express = require('express')
const app = express()
const cors = require('cors')

app.use(cors())

app.use(express.json())
app.use(express.urlencoded({ extended: true }))

app.get('/', async (req, res) => {
    try {
        const messages = await message.find()
        res.json(messages)
    } catch (err) {
        res.send('Error: ' + err)
    }
})

const pageDividerRouter = require('./router/pageDivider')
const addMessageRouter = require('./router/addMessage')
const messsagePushRouter = require('./router/messagePush')
const messageReplyRedirectRouter = require('./router/messageReplyRedirect')
const saveReplyRouter = require('./router/saveReply')

app.use('/pageDivider', pageDividerRouter)
app.use('/addMessage', addMessageRouter)
app.use('/messagePush', messsagePushRouter)
app.use('/messageReply', messageReplyRedirectRouter)
app.use('/saveReply', saveReplyRouter)

app.listen(2007, () => {
    console.log("127.0.0.1:2007")
})