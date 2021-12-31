import React from 'react'
import { ReactComponent as Logo }  from '../welcomeChat.svg'

function Welcome() {
    return (
        <div className='flex-grow'>
            <div className='flex flex-col items-center space-y-5 h-full justify-center'>
                <h2 className='font-semibold text-3xl text-slate-700'>Welcome to Daychat, Dayveed</h2>
                <Logo className='h-52' />
                <p className='text-slate-700 font-light'>Send and recieve messages to friends and family on the app</p>
            </div>
        </div>
    )
}

export default Welcome
