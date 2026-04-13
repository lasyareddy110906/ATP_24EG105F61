import React from 'react'
import {NavLink} from 'react-router'

function Header() {
  return (
    
        <nav className=' p-3.5'>
            <ul className='flex justify-end gap-5 bg-amber-300  p-3.5 text-2xl'>
                <li>
                    <NavLink to="/" className={({isActive}) => isActive ? "text-red-500 font-bold" : "text-gray-700 hover:text-white"}>Home</NavLink>
                    </li>
                <li>
                    <NavLink to="/register" className={({isActive}) => isActive ? "text-red-500 font-bold" : "text-gray-700 hover:text-white"}>Register</NavLink>
                    </li>
                <li>
                    <NavLink to="/login" className={({isActive}) => isActive ? "text-red-500 font-bold" : "text-gray-700 hover:text-white"}>Login</NavLink>
                    </li>
                <li>
                    <NavLink to="/technologies" className={({isActive}) => isActive ? "text-red-500 font-bold" : "text-gray-700 hover:text-white"}>Technologies</NavLink>
                    </li>

            </ul>
        </nav>
    
  )
}

export default Header