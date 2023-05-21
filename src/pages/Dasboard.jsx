import jwtDecode from 'jwt-decode'
import React, { useEffect, useState } from 'react'

const Dasboard = () => {
    const [user,setUser]=useState({})
    useEffect(() => {
      const decoded=jwtDecode(localStorage.getItem('userToken'))
      setUser(decoded)
    }, [])
    
  return (
    <div className='flex flex-col gap-2'>
      <p>{user.given_name+user.family_name}</p>
      <p>{user.email}</p>
     <img src={user.picture} alt="userimg" />
    </div>
  )
}

export default Dasboard