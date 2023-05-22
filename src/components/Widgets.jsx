import React from 'react'
import "../components/css-skeletons.min.css"
import Skeleton from '@mui/material/Skeleton';
import Stack from '@mui/material/Stack';
const Widgets = ({ load = "", icon = "Icon", itemName = "sayan", itmCnt, bgCol = '' }) => {
  return (

    <div className={`flex lg:gap-0 gap-3 flex-col p-5 lg:col-span-2 col-span-4 rounded-xl `} style={{ backgroundColor: `${load?'white':bgCol}` }}>
      <div className='flex wt-full flex-row-reverse'>{(load)? <Skeleton variant="circular" width={40} height={40} /> :icon}</div>
      <div className='flex flex-col gap-1'>
      {(load)? <Skeleton variant="text" width={'40%'} height={20} /> :<p className='lg:text-sm text-xs'>{itemName}</p>}
      {(load)? <Skeleton variant="text" width={'70%'} height={40} /> : <p className='lg:text-2xl text-base font-bold'>{itmCnt}</p>}
      </div>
    </div>
  )
}
export default Widgets