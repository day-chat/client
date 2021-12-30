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
import Main from './components/Main';

function App() {
  // const socket = useRef()
  const { user } = useSelector(state => state.app)
  const dispatch = useDispatch()
  const navigate = useNavigate();
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
      dispatch(getError(err.response.data))

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


  return (
    <>
      {!user ? 
        <Routes>
          <Route path="/login" element={<Login navigate={navigate} />} />
          <Route path="/register" element={<Register />} />
        </Routes>
        :
        <Main />
      }
    </>
  )

}

export default App;
