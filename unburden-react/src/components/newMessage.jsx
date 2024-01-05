import './components-css/newMessage.css'

function NewMessagePage() {
    return (
        <div id="newMessagePage-container">
            <h3>post a message:</h3>

            <form action="http://localhost:2007/addMessage" method="POST" id="form">
                <input type="text" placeholder="message (max: 55 characters)" name="message" id="message" maxLength="55" required/>
                <input type="text" placeholder="name (max: 12 characters)"name="name" id="name" maxLength="12" required/>
                <button type="submit" id="form-btn">submit</button>
            </form>

            <a id="return-btn" href="/">back to main page</a>
        </div>
    );
}

export default NewMessagePage;