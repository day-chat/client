import axios from 'axios';
import React from 'react'
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { logout } from '../features/appSlice';
import { Icon } from '@material-tailwind/react'
import Button from '@material-tailwind/react/Button'
import daychat from '../daychat.png'

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
                <Button
                    color="grey"
                    buttonType="link"
                    size="regular"
                    rounded={true}
                    iconOnly={true}
                    ripple="dark"
                    className="text-slate-500"
                >
                    <Icon name="search" size="md" />
                </Button>
                <input type="text" placeholder='Search user' className='w-full ml-1 text-sm bg-transparent border-0 outline-none' /> 
            </div>

            <div className='flex items-center space-x-2 md:space-x-4'>
                <Button
                    color="lightBlue"
                    buttonType="link"
                    size="xl"
                    rounded={true}
                    iconOnly={true}
                    ripple="dark"
                    className="text-blue-500"
                >
                    <Icon name="notifications_none" size="lg" />
                </Button>

                <h3 className='text-sm md:text-base font-semibold text-slate-800'>dayveed</h3>

                <button className="bg-red-500 px-2 py-1 shadow-md rounded-md text-xs text-neutral-50" onClick={() => handleLogout}>logout </button>
            </div>
        </div>
    )
}

export default Navbar
