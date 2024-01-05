import { useParams } from "react-router-dom";
import { useState, useEffect } from 'react';

import '../components-css/MessageReply.css'

function MessageReply() {

    const { id } = useParams()

    const [message, setMessage] = useState([])

    useEffect(() => {
        async function pushMessage() {
            const response = await fetch(`http://localhost:2007/messagePush/${id}`)
            const data = await response.json()
            setMessage(data)
        }

        pushMessage()
    }, [])

    return (
        <div id="message-reply-page">
            <div id="Mmssage-card-container">
                <div id="message-card">
                    <h3 id="message-card-name">{message.name}</h3>
                    <p id="message-card-message">{message.message}</p>
                </div>
            </div>

            <div id="message-reply-form-container">
                <h2>reply to the previous message</h2>
                <form action="http://localhost:2007/saveReply" method="POST" id="message-reply-form">
                    <input type="hidden" name="id" value={id}/>
                    <input type="text" name="name" placeholder="name (max: 12 characters)" maxLength={12} id="name" required/>
                    <input type="text" name="message" placeholder="message (max: 40 characters)" maxLength={40} id="message" required/>
                    <button type="submit" id="form-btn">reply</button>
                </form>
            </div>
        </div>
    )
}

export default MessageReply