import React from 'react'
import {AiOutlineSearch} from 'react-icons/ai'
import {BiBell} from 'react-icons/bi'
const Navbar = ({userDp=""}) => {
  return (
    <div className='flex items-center justify-between py-2'>
        <h3 className='text-2xl font-bold'>DashBoard</h3>
        <div className='flex gap-8 items-center'>
            <div className='flex py-2 px-3 bg-white items-start rounded-xl'>
            <input className='w-44 h-4 focus:outline-0 ' type="text" placeholder='Search...'/>
            <AiOutlineSearch className='text-gray-400'/>
            </div>
            <BiBell className='text-2xl'/>
            <div >
                <img className='w-8 h-8 rounded-full bg-white' src={userDp} alt="" />
            </div>
        </div>

    </div>
  )
}

export default Navbar