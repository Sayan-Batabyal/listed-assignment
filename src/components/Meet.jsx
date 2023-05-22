import { Skeleton } from '@mui/material'
import React, { useEffect, useState } from 'react'

const Meet = ({load, title="Sayan", time="12.00-13.00" , location="at Durgapur",border="#000000"}) => {
  const [cls,setcls]=useState('w-[95%] flex flex-col gap-1 px-3 py-1')
  
  useEffect(() => {
    load?setcls('w-[95%] flex flex-col gap-1 px-3 py-1'):setcls('w-[95%] flex flex-col gap-1 px-3 py-1 border-l-4')
  }, [load])
  
  return (
    <div className='flex gap-1 '>
    {(load)? <Skeleton variant="rectangle" width={6} height={70} />:null} 
    <div className={cls} style={{borderColor:`${border}`}}>
        
        {(load)? <Skeleton variant="text" width={'50%'} height={20} /> :<p className='text-xs md:text-sm font-bold text-[#666666]'>{title}</p>}
        {(load)? <Skeleton variant="text" width={'20%'} height={15} /> :<p className='text-xs text-[#999999]'>{time}</p>}
        {(load)? <Skeleton variant="text" width={'30%'} height={15} /> :<p className='text-xs text-[#999999]'>{location}</p>}
    </div>
    </div>
  )
}

export default Meet