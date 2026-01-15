import React, { useEffect, useRef } from 'react'
import assets, { messagesDummyData } from '../assets/assets'
import { formatMessageTime } from '../lib/utils';

const ChatContainer = ({ selectedUser, setSelectedUser }) => {
    const scrollEnd = useRef();
    const messagesContainerRef = useRef();

    useEffect(() => {
        if (messagesContainerRef.current) {
            // Use setTimeout to ensure DOM has rendered before scrolling
            setTimeout(() => {
                if (messagesContainerRef.current) {
                    // Manually scroll the messages container instead of using scrollIntoView
                    messagesContainerRef.current.scrollTop = messagesContainerRef.current.scrollHeight;
                }
            }, 100);
        }
    }, [messagesDummyData, selectedUser]);

    return selectedUser ? (
        <div className='h-full flex flex-col'>
            {/* ----- header ----- */}
            <div className='shrink-0 flex items-center gap-3 py-3 mx-4 border-b border-stone-500'>
                <img src={assets.profile_martin} alt="chatUser" className='w-8 rounded-full' />
                <p className='flex-1 text-lg text-white flex items-center gap-2'>Martin Johnson
                    <span className='w-2 h-2 rounded-full bg-green-500'></span>
                </p>
                <img onClick={() => setSelectedUser(false)} src={assets.arrow_icon} alt="arrow" className='md:hidden max-w-7' />
                <img src={assets.help_icon} alt="helpIcon" className='max-md:hidden max-w-5' />
            </div>
            {/* ----- chat ----- */}
            <div ref={messagesContainerRef} className='flex-1 min-h-0 flex flex-col overflow-y-scroll p-3 pb-6'>
                {
                    messagesDummyData.map((msg, index) => (
                        <div key={index} className={`flex items-end gap-2 justify-end ${msg.senderId !== '680f50e4f10f3cd28382ecf9' && 'flex-row-reverse'}`}>
                            {msg.image ? (
                                <img src={msg.image} alt="userImage" className='max-w-[230px] border border-gray-700 rounded-lg overflow-hidden mb-8' />
                            ) : (
                                <p className={`p-2 max-w-[200px] md:text-sm font-light rounded-lg mb-8 break-all bg-gray-500/30 text-white ${msg.senderId !== '680f50e4f10f3cd28382ecf9' ? 'bg-violet-500/30 rounded-bl-none' : 'bg-gray-500/30 rounded-br-none'}`}>{msg.text}</p>
                            )}
                            <div className='text-center text-xs'>
                                <img src={msg.senderId === '680f50e4f10f3cd28382ecf9' ? assets.avatar_icon : assets.profile_martin} alt="userChatIcon" className='w-7 rounded-full' />
                                <p className='text-gray-500'>{formatMessageTime(msg.createdAt)}</p>
                            </div>
                        </div>
                    ))
                }
                <div ref={scrollEnd}></div>
            </div>

            {/* ----- bottom area ----- */}
            <div className='shrink-0 flex items-center gap-3 p-3 sm:pb-5 border-t border-stone-500'>
                <div className='flex-1 flex items-center bg-gray-100/12 px-3 rounded-full'>
                    <input type="text" placeholder='Send your message'
                        className='flex-1 text-sm p-3 border-none rounded-lg outline-none bg-transparent text-white' />
                    <input type="file" id='image' accept='image/png, image/jpeg' hidden />
                    <label htmlFor='image'>
                        <img src={assets.gallery_icon} alt="galleryIcon" className='w-5 mr-2 cursor-pointer' />
                    </label>
                    <img src={assets.send_button} alt="sendIcon" className='w-7 cursor-pointer' />
                </div>
            </div>
        </div>
    ) : (
        <div className='flex justify-center items-center h-full'>
            <div className='flex flex-col items-center gap-20'>
                <p className='pt-3 ps-3 text-lg text-white text-center'>Select a user to start chat</p>
                <div className='flex'>
                    <img src={assets.logo_icon} alt="logo" className='max-w-16' />
                    <p className='pt-3 ps-3 text-lg font-medium text-white text-center'>ChatMate</p>
                </div>
            </div>
        </div>
    )
}

export default ChatContainer