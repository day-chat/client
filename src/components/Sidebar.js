import React from 'react'
import SidebarChat from './SidebarChat'
import { BiSearchAlt } from 'react-icons/bi'
import { FiMoreVertical } from 'react-icons/fi'

function Sidebar() {
    return (
        <div className='bg-[#4e3cc5] p-2 w-1/5 border-r'>
            <div className='flex items-center justify-between'>
                <h2 className='text-zinc-50 font-semibold text-2xl'>Chats</h2>
                <FiMoreVertical className='text-zinc-100 text-xl active:scale-75 transition-all duration-200 cursor-pointer' />
            </div>

            <div className='bg-[#7165c0] flex items-center w-full rounded-lg px-2 py-1 my-4 focus-within:shadow-lg'>
                <BiSearchAlt className='cursor-pointer text-zinc-200' />
                <input type="text" placeholder='Search for chat' className='text-sm ml-1 flex-grow text-zinc-300 placeholder:text-zinc-300 bg-transparent border-0 outline-none' /> 
            </div>

            <div className='overflow-y-scroll max-h-[70vh] scroll-m-1 hide-scrollbar divide-y divide-zinc-500'>
                <SidebarChat name="ryan" />
                <SidebarChat name="gold" />
                <SidebarChat name="gold" />
                <SidebarChat name="gold" />
                <SidebarChat name="gold" />
                <SidebarChat name="gold" />
                <SidebarChat name="gold" />
                <SidebarChat name="gold" />
                <SidebarChat name="gold" />
                <SidebarChat name="gold" />
                <SidebarChat name="gold" />
                <SidebarChat name="gold" />
                <SidebarChat name="gold" />
                <SidebarChat name="gold" />
                <SidebarChat name="gold" />
           
            </div>
        </div>
    )
}

export default Sidebar
