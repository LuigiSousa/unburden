import './App.css'
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom'

import Header from './components/Header'
import NewMessagePage from './components/newMessage.jsx'
import MessageAdded from './components/MessageAdded.jsx'
import MainPage from './components/MainPage.jsx'
import Message from './components/Message-components/Message.jsx'
import MessageReply from './components/Message-components/MessageReply.jsx'

function App() {
  
  return (
    <>
      <Router>
        <Header />

        <Routes>
          <Route path="/" element={<MainPage />}></Route>
          <Route path="/newMessage" element={<NewMessagePage />}></Route>
          <Route path="/messageAdded" element={<MessageAdded />}></Route>
          <Route path="/message/:id" element={<Message />}></Route>
          <Route path="/messageReply/:id" element={<MessageReply />}></Route>
        </Routes>
      </Router>
    </>
  )
}

export default App
