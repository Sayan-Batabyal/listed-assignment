import React from 'react'

const Meet = ({title="Sayan", time="12.00-13.00" , location="at Durgapur",border="#000000"}) => {
  return (
    <div className='flex flex-col gap-1 px-3 py-1 border-l-4' style={{borderColor:`${border}`}}>
        <p className='text-sm font-bold text-[#666666]'>{title}</p>
        <p className='text-xs text-[#999999]'>{time}</p>
        <p className='text-xs text-[#999999]'>{location}</p>
    </div>
  )
}

export default Meet