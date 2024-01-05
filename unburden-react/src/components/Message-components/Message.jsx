import { useParams } from "react-router-dom";
import { useState, useEffect } from 'react';

import '../components-css/Message.css'

import { GoReply } from "react-icons/go";
import { VscReport } from "react-icons/vsc";
  
function Message() {

    const { id } = useParams();

    const [message, setMessage] = useState([]);
    const [replies, setReplies] = useState([]);

    useEffect(() => {
        async function pushMessage() {
            const response = await fetch(`http://localhost:2007/messagePush/${id}`)
            const data = await response.json()
            setMessage(data)
            setReplies(data.replies)
        }

        pushMessage()
    }, [])  

    return (
        <div id="message-page">
            <div id="message-card-container">
                <div id="message-card">
                    <h3 id="message-card-name">{message.name}</h3>
                    <p id="message-card-message">{message.message}</p>


                    <div id="interaction-buttons">
                        <form action={`http://localhost:2007/messageReply/${id}`} method="POST">
                            <input type="hidden" name="id" value={id} />
                            <button type="submit" id="reply-btn">reply <GoReply /></button>
                        </form>

                        <form action={`http://localhost:2007/messageReport/${id}`} method="POST">
                            <input type="hidden" name="id" value={id} />
                            <button type="submit" id="report-btn">report <VscReport /></button>
                        </form>
                    </div>
                </div>
            </div>

            <div id="message-reply-container">
                <h4 id="message-reply-title">Replies:</h4>

                {
                    replies.map((reply) => {
                        return (
                            <div id="message-reply-card">
                                <h3 id="message-reply-card-name">{reply.name}</h3>
                                <p id="message-reply-card-message">{reply.message}</p>
                            </div>
                        )
                    })
                }
            </div>
        </div>
    );
}

export default Message;