import React from 'react'

const Widgets = ({icon="Icon",itemName="sayan",itmCnt,bgCol=''}) => {
  return (
    <div className={`flex lg:gap-0 gap-3 flex-col p-5 lg:col-span-2 col-span-4 rounded-xl`}  style={{backgroundColor:`${bgCol}`}}>
        <div className='flex wt-full flex-row-reverse'>{icon}</div>
        <div className='flex flex-col gap-1'>
            <p className='lg:text-sm text-xs'>{itemName}</p>
            <p className='lg:text-2xl text-lg font-bold'>{itmCnt}</p>
        </div>
    </div>
  )
}

export default Widgets