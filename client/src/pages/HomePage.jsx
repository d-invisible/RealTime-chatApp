import React, { useState } from 'react'
import Sidebar from '../components/Sidebar'
import ChatContainer from '../components/ChatContainer'
import RightSideBar from '../components/RightSideBar'

const HomePage = () => {
    const [selectedUser, setSelectedUser] = useState(false);

    return (
        <div className='border w-full h-screen sm:px-[5%] sm:py-[2%] bg-[#111111]'>
            <div className={`border-2 border-gray-500 rounded-2xl overflow-hidden h-full grid relative ${selectedUser ? 'lg:grid-cols-4 md:grid-cols-[1fr_2fr] grid-cols-[1fr_2fr]' : 'grid-cols-[1fr_3fr]'}`}>
                <Sidebar selectedUser={selectedUser} setSelectedUser={setSelectedUser} />
                <div className={`${selectedUser ? 'lg:col-span-2' : ''} border-x border-gray-500 h-full min-h-0`}>
                    <ChatContainer selectedUser={selectedUser} setSelectedUser={setSelectedUser} />
                </div>
                {selectedUser && <RightSideBar selectedUser={selectedUser} setSelectedUser={setSelectedUser} />}
            </div>
        </div>
    )
}

export default HomePage