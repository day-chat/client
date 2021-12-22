import React, { useEffect } from 'react';
import './App.css';
import { io } from "socket.io-client"


function App() {
  useEffect(() => {
    const socket = io("http://localhost:3200")
  }, [])

  return (
    <div className="bg-green-300 h-screen w-screen">
      sdfg
    </div>
  );
}

export default App;
