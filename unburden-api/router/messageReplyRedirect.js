const express = require("express")
const router = express.Router()

router.post('/:id', (req, res) => {
    const id = req.params.id

    res.redirect(`http://localhost:2106/messageReply/${id}`)
})

module.exports = router