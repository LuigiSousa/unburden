import { useState, useEffect } from 'react';

import './components-css/MainPage.css'

function MainPage() {

    const [messages, setMessages] = useState([]);
    const [visible, setVisible] = useState(3);

    const showMoreMessages = () => {
        setVisible((prevValue) => prevValue + 3);
    
    }

    useEffect(() => {
        async function getMessages() {
            const response = await fetch('http://localhost:2007');
            const data = await response.json();
            
            setMessages(data);
        }

        getMessages()
    }, [])

    return (
        <>
            <div id="messages-card-container">
                {
                    messages.slice(0, visible).map((message) => {
                        return (
                            <div id="message-card">
                                <h3 id="message-card-name">{message.name}</h3>
                                <p id="message-card-message">{message.message}</p>

                                <form action="http://localhost:2007/messagePush" method='POST'>
                                    <input type="hidden" name="id" value={message.messageId} />
                                    <button href="" id="see-more">see more</button>
                                </form>
                            </div>
                        )
                    })
                }

                <button id="message-load-more" onClick={showMoreMessages}>load more</button>
            </div>
        </>
    )
}

export default MainPage;