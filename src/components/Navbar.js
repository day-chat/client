import axios from 'axios';
import React from 'react'
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { logout } from '../features/appSlice';
import { MdNotificationsNone } from 'react-icons/md'
import daychat from '../daychat.png'
import { BiSearchAlt } from 'react-icons/bi';

function Navbar() {
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const handleLogout = async () =>{
        await axios({
          method: 'get',
          url: 'http://localhost:3205/api/logout',
          withCredentials: true,
        
        }).then((res) => {
          dispatch(logout())
          navigate('/login')
        }).catch(err => console.log(err.response.data))
    
    }
    
    return (
        <div className='bg-white w-full shadow-sm flex px-3 items-center md:justify-center'>
            <img  src={daychat} className="h-14 md:h-16 object-contain" />

            <div className='flex-grow focus-within:shadow-lg flex md:max-w-lg items-center mr-2 bg-zinc-200 rounded-md px-2 py-1'>
                <BiSearchAlt className='text-zinc-500' />
                <input type="text" placeholder='Search user' className='w-full ml-1 text-sm bg-transparent border-0 outline-none' /> 
            </div>

            <div className='flex items-center space-x-2 md:space-x-4'>
                <MdNotificationsNone className="text-2xl text-blue-500 active:text-blue-700 active:scale-50 transition-all duration-200 cursor-pointer" />

                <h3 className='text-sm md:text-base font-semibold text-slate-800'>dayveed</h3>

                <button className="bg-red-500 px-2 py-1 shadow-md rounded-md text-xs text-neutral-50" onClick={() => handleLogout}>logout </button>
            </div>
        </div>
    )
}

export default Navbar
