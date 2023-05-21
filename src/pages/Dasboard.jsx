import jwtDecode from 'jwt-decode'
import React, { useEffect, useState } from 'react'
import Sidebar from '../components/Sidebar'
import Navbar from '../components/Navbar'
import Widgets from '../components/Widgets'
import { LikeIcon, RevIcon, TraIcon, UserIcon } from '../utils/Svg'
import LineGraph from '../components/LineGraph'
import PieChart from '../components/PieChart'
import Schedule from '../components/Schedule'

const Dasboard = () => {
    const [user, setUser] = useState({})
    useEffect(() => {
        const decoded = jwtDecode(localStorage.getItem('userToken'))
        setUser(decoded)
    }, [])

    return (
        <div className='flex  gap-10 p-8 w-full lg:h-[1024px] min-h-screen bg-primary'>
            <div className='hidden lg:flex w-1/5 '>
                <Sidebar />
            </div>
            <div className='flex flex-col w-full gap-8'>
                <Navbar userDp={user.picture} />
                <div className='grid grid-cols-8 gap-8 lg:h-1/6 content-center'>
                    <Widgets icon={<RevIcon className='w-4' />} itemName='Total Revenues' itmCnt='$2,129,430' bgCol='#DDEFE0' />
                    <Widgets icon={<TraIcon className='w-4' />} itemName='Total Transactions' itmCnt='1520' bgCol='#F4ECDD' />
                    <Widgets icon={<LikeIcon className='w-4' />} itemName='Total Likes' itmCnt='9721' bgCol='#EFDADA' />
                    <Widgets icon={<UserIcon className='w-4' />} itemName='Total Users' itmCnt='892' bgCol='#DEE0EF' />
                </div>

                <div className='bg-white w-full p-4 rounded-xl'>
                    <LineGraph />
                </div>
                <div className='grid grid-cols-8 gap-10'>
                    <div className='col-span-8 lg:col-span-4 bg-white rounded-xl' >
                        <PieChart />
                    </div>
                    <div className='col-span-8 lg:col-span-4 bg-white rounded-xl'>
                        <Schedule/>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Dasboard