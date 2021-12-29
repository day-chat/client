import React, { useEffect, useRef } from 'react';
import { io } from "socket.io-client"
import { useDispatch } from 'react-redux'
import { useSelector } from 'react-redux';
import { Route, Routes, useLocation, useNavigate } from 'react-router-dom';
import axios from 'axios';

import Login from './Login';
import Register from './Register';
import './App.css';

import { getError, getOtherUsers, login, logout } from './features/appSlice'

function App() {
  // const socket = useRef()
  const { user } = useSelector(state => state.app)
  const dispatch = useDispatch()
  let navigate = useNavigate();
  const location = useLocation();

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
      dispatch(login(res.data))
      navigate("/")

    }).catch(err => {
      dispatch(logout())
      
      if(location.pathname !== '/register'){
        navigate("/login")
      }
    })
    
  }

  const getUsers = async () =>{
    await axios({
        method: 'get',
        url: 'http://localhost:3205/api/users',
        withCredentials: true,
        
    }).then((res) => {
        dispatch(getOtherUsers(res.data))
    }).catch(err => dispatch(getError(err.response.data)) )
  
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
      navigate('/login')
    }).catch(err => console.log(err.response.data?.error))
  }

  return (
    <>
      {!user ? 
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
        </Routes>
        :
        (
          <div className="bg-green-300 h-screen w-screen">
            sdfg
            <button onClick={handleLogout}>logout</button>
          </div>
        )
      }
    </>
  )

}

export default App;
