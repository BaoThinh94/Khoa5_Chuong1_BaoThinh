import React from 'react'
import { NavLink } from 'react-router-dom'
import { Fragment } from 'react'
import { Menu, Transition } from '@headlessui/react'
import { openNotificationWithIcon } from '../../../../util/settings/Notifycation/Notifycation'
import { TOKEN, USER_LOG } from '../../../../util/settings/config'


export default function Header() {

    const userlog = JSON.parse(localStorage.getItem(USER_LOG))
    return (
        <header className="p-2 dark:bg-gray-800/75 dark:text-gray-100 fixed w-full z-10">
            <div className="container flex justify-between h-16 mx-auto">
                <NavLink to={"/home"} className="flex items-center p-2">
                    <img src='https://cyberlearn.vn/wp-content/uploads/2020/03/cyberlearn-min-new-opt2.png' alt='cyber'></img>
                </NavLink>
                <ul className="items-stretch hidden space-x-3 lg:flex">
                    <li className="flex">
                        <NavLink rel="noopener noreferrer" to='/home' activeClassName=' dark:text-violet-400 dark:border-violet-400' className="flex items-center px-4 -mb-1 border-b-2 dark:border-transparent hover:text-violet-400">Home</NavLink>
                    </li>
                    <li className="flex">
                        <NavLink rel="noopener noreferrer" to='/contact' activeClassName=' dark:text-violet-400 dark:border-violet-400' className="flex items-center px-4 -mb-1 border-b-2 dark:border-transparent hover:text-violet-400">Contact</NavLink>
                    </li>
                    <li className="flex">
                        <NavLink rel="noopener noreferrer" to='/news' activeClassName=' dark:text-violet-400 dark:border-violet-400' className="flex items-center px-4 -mb-1 border-b-2 dark:border-transparent hover:text-violet-400">News</NavLink>
                    </li>
                </ul>
                <div className="items-center flex-shrink-0 hidden lg:flex">
                    { localStorage.getItem(TOKEN) ? <div className='hover:text-violet-400 flex justify-center items-center cursor-pointer'>Chào {userlog.hoTen} <img className='ml-3 rounded-full' src='https://picsum.photos/50/50'/></div> : <div><NavLink to={"/login"}><button className="self-center px-8 py-3 rounded">Sign in</button></NavLink>
                        <NavLink to={"/register"}className="self-center px-8 py-3 font-semibold rounded dark:bg-violet-400 dark:text-gray-900">Sign up</NavLink></div> }
                    
                </div>


                <button className="p-4 lg:hidden" >
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-6 h-6 dark:text-gray-100">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path>
                    </svg>
                </button>
                {/* <div className='lg:hidden pos'>
                    <ul className="items-stretch  flex space-x-3 lg:hidden">
                        <li className="flex">
                            <NavLink rel="noopener noreferrer" to='/home' activeClassName=' dark:text-violet-400 dark:border-violet-400' className="flex items-center px-4 -mb-1 border-b-2 dark:border-transparent">Home</NavLink>
                        </li>
                        <li className="flex">
                            <NavLink rel="noopener noreferrer" to='/contact' activeClassName=' dark:text-violet-400 dark:border-violet-400' className="flex items-center px-4 -mb-1 border-b-2 dark:border-transparent">Contact</NavLink>
                        </li>
                        <li className="flex">
                            <NavLink rel="noopener noreferrer" to='/news' activeClassName=' dark:text-violet-400 dark:border-violet-400' className="flex items-center px-4 -mb-1 border-b-2 dark:border-transparent">News</NavLink>
                        </li>
                    </ul>
                    <div className="items-center flex-shrink-0 flex  lg:hidden">
                        <button className="self-center px-8 py-3 rounded">Sign in</button>
                        <button className="self-center px-8 py-3 font-semibold rounded dark:bg-violet-400 dark:text-gray-900">Sign up</button>
                    </div>
                </div> */}
            </div>
        </header >
    )
}
