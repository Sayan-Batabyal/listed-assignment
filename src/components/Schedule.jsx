import React from 'react'
import Meet from './Meet'
import { Skeleton } from '@mui/material'

const Schedule = ({load}) => {
  return (
    <div className='flex flex-col gap-4 p-6 lg:p-8'>
        <div className='flex items-center justify-between'>
               { (load)? <Skeleton variant="text" width={'40%'} height={30} />
                : <p className='text-lg font-bold'>Today's schedule</p>}
                
                {(load)?<Skeleton variant="text" width={'20%'} height={20} />:<p className='text-[#858585] text-xs mb-2'>See All <i className='fa fa-angle-right'></i></p>}
            </div>
            <div className='flex flex-col gap-4'>
               <Meet title='Meeting with suppliers from Kuta Bali' 
                      time='14.00-15.00' location='at Sunset Road, Kuta, Bali ' 
                      border='#9BDD7C' load={load}/>
                <Meet title='Check operation at Giga Factory 1' 
                      time='18.00-20.00' location='at Central Jakarta' border='#6972C3' 
                      load={load}
                      />
            </div>
    </div>
  )
}

export default Schedule