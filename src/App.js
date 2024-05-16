import React, { useEffect, useState } from 'react'
// import axios from 'axios'
import "./App.css";
import Homepage from "./pages/HomePage";
import { Route } from "react-router-dom";
import Chatpage from "./pages/ChatPage";




const App = () => {
//   const [chats,setChats]=useState([])
//   const getUser=async()=>{
//     const {data}=await axios.get("/api/chats")
//     setChats(data)
    
// }

//   useEffect(() => {
//     getUser()
//   }, [])
  
  return (
    // <div>{chats.map(chat=><div>{chat.chatName}</div>)}</div>

     <div className="App">
      <Route path="/" component={Homepage} exact />
      <Route path="/chats" component={Chatpage} />
    </div>
  )
}

export default App