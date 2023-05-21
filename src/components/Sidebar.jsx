import React from 'react'
import { Link } from 'react-router-dom'
import {FiPieChart} from 'react-icons/fi'
import {IoSettingsOutline} from 'react-icons/io5'
import {BiUserCircle} from 'react-icons/bi'
import {BsTags} from 'react-icons/bs'
import {TbCalendarTime} from 'react-icons/tb'

const Sidebar = () => {
  return (
    <div className='bg-black w-full h-full rounded-3xl flex  flex-col p-10 justify-between'>
     
     <div className='flex flex-col gap-11'>
     <span className='text-white text-4xl font-bold'>Board.</span>
     <ul className='text-white text-lg flex flex-col gap-5'>
        <li className='flex items-center gap-4'>
            <FiPieChart className='text-white'/>
            <Link className='font-bold'>Dashboard</Link>
        </li>
        <li className='flex items-center gap-4' >
            <BsTags className=''/>
            <Link className=''>Transactions</Link>
        </li>
        <li className='flex items-center gap-4'>
        <TbCalendarTime className='text-white'/>
            <Link className=''>Schedules</Link>
        </li>
        <li className='flex items-center gap-4'>
        <BiUserCircle className='text-white text-xl font-light'/>
            <Link className=''>Users</Link>
        </li>
        <li className='flex items-center gap-4'>
        <IoSettingsOutline className='text-white'/>
            <Link className=''>Settings</Link>
        </li>
     </ul>
     </div>
     <div className='text-white text-sm flex flex-col gap-2'>
        <Link>Help</Link>
        <Link>Contact Us</Link>
     </div>
    </div>
  )
}

export default Sidebar