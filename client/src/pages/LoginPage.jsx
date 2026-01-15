import React, { useState } from 'react'
import assets from '../assets/assets'
import { Link } from 'react-router-dom'

const LoginPage = () => {
    const [isLoginFlow, setIsLoginFlow] = useState(false);

    return (
        <div className='border w-full h-screen sm:px-[5%] sm:py-[2%] bg-[#111111]'>
            <div className='border-2 border-gray-500 rounded-2xl overflow-hidden h-full '>
                <div className='flex justify-center items-center h-full p-3'>
                    {/* ---- left section ---- */}
                    <div className=' h-full flex-1'>
                        <div className='flex justify-center items-center h-full'>
                            <div className='flex flex-col items-center gap-5'>
                                <p className='pt-3 ps-3 text-lg text-white text-center'>Welcome to Chating world</p>
                                <div className='flex'>
                                    <img src={assets.logo_icon} alt="logo" className='max-w-16' />
                                    <p className='pt-3 ps-3 text-lg font-medium text-white text-center'>ChatMate</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* ---- right section ---- */}
                    <div className=' h-full flex-1 p-12'>
                        {isLoginFlow ? (

                            <div key="login" className='bg-[#bdbdbd10] rounded-lg h-full w-80 mx-auto p-6'>
                                <p className='text-lg text-white text-center'>Login to ChatMate</p>
                                <div className='flex flex-col justify-between items-center h-[90%] p-0 text-white'>
                                    <form action="" className='flex flex-col gap-0 mt-6 w-full'>
                                        <input type="text" placeholder='Username' className='w-full p-3 border border-gray-500 rounded-lg mb-3' />
                                        <input type="password" placeholder='Password' className='w-full p-3 border border-gray-500 rounded-lg mb-3' />
                                        <button type='submit' className='w-50 mx-auto p-3 bg-green-500 rounded-lg text-white'>Login</button>
                                    </form>
                                    <p className='text-gray-400'>Don't have an account? <Link onClick={() => setIsLoginFlow(false)} className='text-blue-400 ms-2'>Signup</Link></p>
                                </div>

                            </div>

                        ) : (

                            <div key="signup" className='bg-[#bdbdbd10] rounded-lg h-full w-80 mx-auto p-6'>
                                <p className='text-lg text-white text-center'>Signup to ChatMate</p>
                                <div className='flex flex-col justify-between items-center h-[90%] p-0 text-white'>
                                    <form action="" className='flex flex-col gap-0 mt-6 w-full'>
                                        <input type="text" placeholder='Username' className='w-full p-3 border border-gray-500 rounded-lg mb-3' />
                                        <input type="email" placeholder='Email' className='w-full p-3 border border-gray-500 rounded-lg mb-3' />
                                        <input type="password" placeholder='Password' className='w-full p-3 border border-gray-500 rounded-lg mb-3' />
                                        <button type='submit' className='w-50 mx-auto p-3 bg-green-500 rounded-lg text-white'>Signup</button>
                                    </form>
                                    <p className='text-gray-400'>Already have an account? <Link onClick={() => setIsLoginFlow(true)} className='text-blue-400 ms-2'>Login</Link></p>
                                </div>

                            </div>

                        )}
                    </div>

                </div>
            </div>
        </div>
    )
}

export default LoginPage