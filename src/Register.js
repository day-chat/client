import React, { useState } from 'react'


function Register() {
    const [input, setinput] = useState({
        username: "",
        email: "",
        gender: "M",
        password1: "",
        password2: ""
    
    })

    const handleChange = (e) =>{
        setinput({
            ...input,
            [e.target.name]: e.target.value
        })
    }

    const handleSubmit = (e) =>{
        e.preventDefault()

        console.log(input)
    }

    return (
        <div>
            <form>
                <div>
                    <h4>Email</h4>
                    <input type="email" name="email" onChange={handleChange} value={input.email}/>
                </div>

                <div>
                    <h4>username</h4>
                    <input type="text" name="username" onChange={handleChange} value={input.username}/>
                </div>

                <div>
                    <h4>gender</h4>
                    <select onChange={handleChange} name="gender">
                        <option value="M">male</option>
                        <option value="F">female</option>
                    </select>
                </div>

                <div>
                    <h4>New PassWord</h4>
                    <input type="password" name="password1" placeholder='enter your password' onChange={handleChange} value={input.password1} />
                </div>

                <div>
                    <h4>Confirm PassWord</h4>
                    <input type="password" name="password2" placeholder='confirm your password' onChange={handleChange} value={input.password2} />
                </div>

                <button type="submit" onClick={handleSubmit}>Login</button>
            </form>
        </div>
    )
}

export default Register
