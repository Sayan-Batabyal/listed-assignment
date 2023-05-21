import React from 'react'

const Widgets = ({icon="Icon",itemName="sayan",itmCnt,bgCol=''}) => {
  return (
    <div className={`flex flex-col p-5 w-full md:w-1/4 rounded-xl`}  style={{backgroundColor:`${bgCol}`}}>
        <div className='flex wt-full flex-row-reverse'>{icon}</div>
        <div className='flex flex-col gap-1'>
            <p className='text-sm'>{itemName}</p>
            <p className='text-2xl font-bold'>{itmCnt}</p>
        </div>
    </div>
  )
}

export default Widgets