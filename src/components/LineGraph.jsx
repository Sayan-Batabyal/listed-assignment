import React, { useEffect, useRef, useState } from 'react'
import { Line } from 'react-chartjs-2'
import {
    Chart as ChartJS,
    LineElement,
    CategoryScale,
    LinearScale,
    PointElement
} from 'chart.js';
import { Skeleton } from '@mui/material';

ChartJS.register(
    LineElement,
    CategoryScale,
    LinearScale,
    PointElement
)
const LineGraph = ({load,chartData}) => {
    const ref=useRef(null)

      
    const data = {
        labels: load?[]:[...chartData.lineLabel],
        datasets: [{
            data: load?[]:[...chartData.lineData[0]],
            backgroundColor: 'transparent',
            borderColor: '#E9A0A0',
            pointBorderColor: 'transparent',
            pointBorderWidth: 4,
            tension: 0.4
        },
        {
            data: load?[]:[...chartData.lineData[1]],
            backgroundColor: 'transparent',
            borderColor: '#9BDD7C',
            pointBorderColor: 'transparent',
            pointBorderWidth: 4,
            tension: 0.4
        }
        ],

    };

    const [windowSize, setWindowSize] = useState(window.innerWidth);
      useEffect(() => {
        const handleWindowResize = () => {
          setWindowSize(window.innerWidth);
          
        };
          
        window.addEventListener('resize', handleWindowResize);
    
        return () => {
          window.removeEventListener('resize', handleWindowResize);
        };
      }, []);



    const options = {
        aspectRatio: `${windowSize > 600 ? 4.5:1}`,
        plugins: {
            legend:{
                display: false
            } 
                
        },
        scales: {
          
            x: {
                
                grid: {
                    display:false,
                    zeroLineColor: 'transparent'

                }
            },
            y: {
                border:{
                    display:false
                 },
                min: 0, max: 500, ticks: {
                    gap: 1,
                    stepSize: 100,
                }
            }
        }
    };
    return (
        <div ref={ref} className='w-full px-3 lg:px-10 lg:py-6 py-2 h-full'>
           {(load)? <Skeleton variant="text" width={'30%'} height={40} /> : <p className='text-xl font-bold'>Activities</p>}
            <div className='flex justify-between mr-3 lg:mr-10 mb-4 lg:mb-10'>
            {(load)? <Skeleton variant="text" width={'20%'} height={20} /> :<p className='text-[#858585] text-sm mb-2'>May-June 2021 <i className='fa fa-angle-down'></i></p>}
                
            {(load)?null:<div className='flex items-center gap-4'>
                    <div className='flex gap-1 items-center'>
                        <div className='w-2 h-2 bg-[#E9A0A0] rounded-full'></div>
                        <p className='text-sm lg:text-base' >Guests</p>
                    </div>
                    <div className='flex gap-1 items-center'>
                        <div className='w-2 h-2 bg-[#9BDD7C] rounded-full'></div>
                        <p className='text-xs md:text-base' >Users</p>
                    </div>
                </div>}
            </div>

            {(load) ?
                        <div className='flex items-center justify-center gap-0'>
                            <div className="hidden lg:flex w-1/3 h-full skeleton skeleton-chart-line animate-pulse"></div>
                            <div className="w-full lg:w-1/3 h-full skeleton skeleton-chart-line"></div>
                            <div className="hidden lg:flex w-1/3 h-full skeleton skeleton-chart-line"></div>
                            

                        </div>
                   : <Line data={data} options={options}></Line>}
        </div>
    )
}

export default LineGraph