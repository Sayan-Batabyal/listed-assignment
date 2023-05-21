import jwtDecode from 'jwt-decode'
import React, { useEffect, useState } from 'react'
import Sidebar from '../components/Sidebar'
import Navbar from '../components/Navbar'

const Dasboard = () => {
    const [user,setUser]=useState({})
    useEffect(() => {
      const decoded=jwtDecode(localStorage.getItem('userToken'))
      setUser(decoded)
    }, [])
    
  return (
    <div className='flex gap-10 p-8 w-full min-h-screen bg-primary'>
     <div className='w-1/6 '>
        <Sidebar/>
     </div>
     <div className='flex flex-col w-5/6'>
      <Navbar userDp={user.picture}/>
      <div>Body</div>  
     </div>
    </div>
  )
}

export default Dasboard