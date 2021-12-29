import React, { useEffect, useRef } from 'react';
import './App.css';
import { io } from "socket.io-client"
import { useSelector } from 'react-redux';
import Login from './Login';
import axios from 'axios';
import { getOtherUsers, login, logout } from './features/appSlice'
import { useDispatch } from 'react-redux'

function App() {
  // const socket = useRef()
  const { user } = useSelector(state => state.app)
  const dispatch = useDispatch()
  
  // useEffect(() => {
  //   socket.current = io("http://localhost:3200")
  //   console.log(socket)
  // }, [])

  const fetchUser = async () =>{

    await axios({
      method: 'get',
      url: 'http://localhost:3205/api/getUser',
      withCredentials: true,
      
    }).then((res) => {
      return dispatch(login(res.data))

    }).catch(err => { return dispatch(logout()) })
    
  }

  const getUsers = async () =>{
    await axios({
        method: 'get',
        url: 'http://localhost:3205/api/users',
        withCredentials: true,
        
    }).then((res) => {
        dispatch(getOtherUsers(res.data))
    }).catch(err => console.log(err.response.data))
  
  }

  useEffect(() => {
    fetchUser()
    getUsers()
  }, [])

  const handleLogout = async () =>{
    await axios({
      method: 'get',
      url: 'http://localhost:3205/api/logout',
      withCredentials: true,
    
    }).then((res) => {
      dispatch(logout())
      console.log(res.data)

    }).catch(err => (err.response.data?.error))
  }

  if (!user) return <Login />

  return (
    <div className="bg-green-300 h-screen w-screen">
      sdfg
      <button onClick={handleLogout}>logout</button>
    </div>
  );
}

export default App;
