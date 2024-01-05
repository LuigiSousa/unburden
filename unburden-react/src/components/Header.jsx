import './components-css/Header.css'

import { MdAdd } from "react-icons/md";

function Header() {

    return (
        <div id="header-container">
            <a href="/">unburden</a>

            <button id="newMessage-btn">
                <MdAdd id="newMessage-icon" /> <a href='/newMessage'>new message</a>
            </button>
        </div>
    )
}

export default Header