import React from 'react'
import Avatar, { genConfig } from 'react-nice-avatar'

function SidebarChat({ name }) {
    const config = genConfig()

    return (
        <div className="px-3 py-2 cursor-pointer hover:bg-[#6252c5] hover:rounded-md">
            <div className='flex items-center space-x-2'>
                <Avatar className='w-7 h-7' {...config} />
                <p className='font-semibold text-sm text-zinc-100'>{name}</p>
            </div>

            <div className='flex items-center'>
                <p className='flex-grow text-xs text-zinc-300'>last message</p>
                <p className='text-xs bg-red-500 text-zinc-100 rounded-full w-4 h-4 text-center'>4</p>
            </div>
        </div>
    )
}

export default SidebarChat
