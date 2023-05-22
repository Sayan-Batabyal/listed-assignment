import React from 'react'
import { Pie } from 'react-chartjs-2'
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import "./css-skeletons.min.css"
import { Skeleton } from '@mui/material';
ChartJS.register(ArcElement, Tooltip, Legend);
const PieChart = ({load}) => {
    const data = {
        labels: ['Super Hoodies', 'Custom Short Pants', 'Basic Tees',],
        datasets: [
            {
                data: [14, 31, 55],
                backgroundColor: [
                    '#EE8484',
                    '#F6DC7D',
                    '#98D89E',
                ],
                borderWidth: 0
            },
        ],
    }

    const options = {
        plugins: {
            legend: {
                display: false
            }
        }
    }
    return (


        <div className='flex flex-col p-4 lg:p-8 gap-4'>
            <div className='flex justify-between'>
            {(load)? <Skeleton variant="text" width={'30%'} height={30} /> :<p className='text-lg font-bold'>Top Products</p>}
            {(load)? <Skeleton variant="text" width={'20%'} height={30} /> :  <p className='text-[#858585] text-sm mb-2'>May - June 2021 <i className='fa fa-angle-down'></i></p>}
            </div>
            <div className='flex  items-center gap-3 justify-evenly'>
                <div className='w-[100px] lg:w-[120px] lg:h-[120px] h-[100px]'>
                {(load)? <Skeleton variant="circular" width={120} height={120} /> :<Pie data={data} options={options}></Pie>}
                </div>
                <div className='flex flex-col gap-5'>
                    <div className='flex gap-1 items-baseline' >
                    {(load)? <Skeleton variant="circular" width={10} height={10}/> : <div className='w-2 h-2 bg-[#98D89E] rounded-full'></div>}
                        <div className='flex flex-col w-full'>
                        {(load)? <Skeleton variant="text" width={100} height={20} /> : <p className='font-bold text-sm'>Basic Tees</p>}
                        {(load)? <Skeleton variant="text" width={'30%'} height={15} /> : <p className='text-[#858585] text-xs'>51%</p>}
                        </div>
                    </div>
                    <div className='flex gap-1 items-baseline' >
                    {(load)? <Skeleton variant="circular" width={10} height={10} /> : <div className='w-2 h-2 bg-[#F6DC7D] rounded-full'></div>}
                        <div className='flex flex-col w-full'>
                        {(load)? <Skeleton variant="text" height={20} /> : <p className='font-bold text-sm'>Custom Short Pants</p>}
                        {(load)? <Skeleton variant="text" width={'30%'} height={15} /> :<p className='text-[#858585] text-xs'>31%</p>}
                        </div>
                    </div>
                    <div className='flex gap-1 items-baseline' >
                    {(load)? <Skeleton variant="circular" width={10} height={10} /> :<div className='w-2 h-2 bg-[#EE8484] rounded-full'></div>}
                        <div className='flex flex-col w-full'>
                        {(load)? <Skeleton variant="text" height={20} /> : <p className='font-bold text-sm'>Super Hoodies</p>}
                         {(load)? <Skeleton variant="text" width={'30%'} height={15} /> :  <p className='text-[#858585] text-xs'>14%</p>}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default PieChart