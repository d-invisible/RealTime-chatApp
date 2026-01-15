import React from 'react'
import assets, { userDummyData } from '../assets/assets'
import { useNavigate } from 'react-router-dom'

const Sidebar = ({ selectedUser, setSelectedUser }) => {
    const navigate = useNavigate();
    return (

        <div className='p-3 pb-5'>
            <div className='flex justify-between items-center'>
                <div className='flex items-center gap-2'>
                    <img src={assets.logo_icon} alt="logo" className='max-w-8' />
                    <p className='text-lg font-medium text-white'>ChatMate</p>
                </div>
                <div className='relative py-2 group'>
                    <img src={assets.menu_icon} alt="menu" className='min-w-3 max-w-5 cursor-pointer' />
                    <div className='absolute top-full right-0 z-20 w-32 p-5 rounded-md bg-[#222222] border border-gray-600 text-gray-100 hidden group-hover:block'>
                        <p className='cursor-pointer text-sm' onClick={() => navigate('/profile')}>Edit Profile</p>
                        <hr className='my-2 border-t border-gray-500' />
                        <p className='cursor-pointer text-sm'>Logout</p>
                    </div>
                </div>
            </div>

            <div className='mt-5 mb-5 w-full flex items-center gap-2 bg-[#222222] p-2 rounded-md'>
                <img src={assets.search_icon} alt="search" className='w-3' />
                <input type='text' className='bg-transparent border-none outline-none text-gray-100 text-sm placeholder-[#6e6e6e] flex-1' placeholder='search user' />
            </div>

            <div className='flex flex-col'>
                {userDummyData.map((user, index) => (
                    <div key={index} className={`ps-3 relative flex justify-center items-center rounded-lg group  ${selectedUser?._id === user?._id ? 'bg-purple-900 text-gray-100' : 'hover:bg-zinc-800 text-gray-400'}`} onClick={() => setSelectedUser(user)}>
                        <img src={user?.profilePic || assets.avatar_icon} alt="profile"
                            className='w-[35px] aspect-[1/1] rounded-full m-1 me-3' />
                        <div className='flex-1 h-20 flex flex-col leading-5 py-5'>
                            <p className=' group-hover:text-gray-100'>{user?.fullName}</p>
                            {
                                index < 3
                                    ? <span className='text-green-400 text-xs'>Online</span>
                                    : <span className='text-neutral-400 text-xs'>Offline</span>
                            }
                        </div>
                        {index > 2 && <p className='my-5 absolute top-4 right-4 text-xs h-5 w-5 flex justify-center items-center rounded-full bg-violet-500 text-zinc-200 '>{index}</p>}
                    </div>
                ))}

            </div>

        </div>

    )
}

export default Sidebar