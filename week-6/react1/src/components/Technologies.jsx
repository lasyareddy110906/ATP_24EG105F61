import { Outlet } from "react-router"
import {NavLink} from 'react-router'
import Java from "./Java"
import Node from "./Node"
import Vue from "./Vue"


function Technologies() {
  return (
    <div>
    <nav>
    <ul className='flex justify-center gap-5 bg-red-500  p-3.5 text-2xl'>
                <li>
                    <NavLink to="java" className={({isActive}) => isActive ? "text-amber-500 font-bold" : "text-gray-700 hover:text-white"}>Java</NavLink>
                    </li>
                <li>
                    <NavLink to="node" className={({isActive}) => isActive ? "text-amber-500 font-bold" : "text-gray-700 hover:text-white"}>Node.js</NavLink>
                    </li>
                <li>
                    <NavLink to="vue" className={({isActive}) => isActive ? "text-amber-500 font-bold" : "text-gray-700 hover:text-white"}>Vue.js</NavLink>
                    </li>

            </ul>
       </nav>
       <Outlet />
       </div>
  )
}

export default Technologies