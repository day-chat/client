import React, { useState } from 'react'
import axios from 'axios'
import { useDispatch, useSelector } from 'react-redux'
import { getError, login } from './features/appSlice'
import { useNavigate } from 'react-router-dom'

function Login() {
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const { error } = useSelector(state => state.app)

    const [input, setinput] = useState({
        email: "",
        password: ""
    })

    const handleChange = (e) =>{
        setinput({
            ...input,
            [e.target.name]: e.target.value
        })
    }

    const handleSubmit = async (e) =>{
        e.preventDefault();

        await axios({
            method: 'post',
            url: 'http://localhost:3205/api/login',
            data: {
                email: input.email,
                password: input.password
            },
            withCredentials: true,
            
        }).then((res) => {
            dispatch(login(res.data))
            navigate("/")

        }).catch(err => dispatch(getError(err.response.data)) )
    } 

    return (
        <div>
            { error && <p className='error'>{error?.error}</p> }
            <form>
                <div>
                    <h4>Email</h4>
                    <input type="email" name="email" onChange={handleChange} value={input.email}/>
                </div>

                <div>
                    <h4>PassWord</h4>
                    <input type="password" name="password" onChange={handleChange} value={input.password} />
                </div>

                <button type="submit" onClick={handleSubmit}>Login</button>
            </form>
            
        </div>
    )
}

export default Login
