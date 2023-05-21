import React from 'react'
import { Line } from 'react-chartjs-2'
import {
    Chart as ChartJS,
    LineElement,
    CategoryScale,
    LinearScale,
    PointElement
} from 'chart.js';

ChartJS.register(
    LineElement,
    CategoryScale,
    LinearScale,
    PointElement
)
const LineGraph = () => {
    const data = {
        labels: ["", "Week 1", "", "Week 2", "", "Week 3", "", "Week 4", ""],
        datasets: [{
            data: [200, 380, 260, 206, 260, 300, 250, 220, 450],
            backgroundColor: 'transparent',
            borderColor: '#E9A0A0',
            pointBorderColor: 'transparent',
            pointBorderWidth: 4,
            tension: 0.4
        },
        {
            data: [100, 400, 300, 150, 290, 440, 350, 180, 250],
            backgroundColor: 'transparent',
            borderColor: '#9BDD7C',
            pointBorderColor: 'transparent',
            pointBorderWidth: 4,
            tension: 0.4
        }
        ],

    };
    const options = {
        aspectRatio: 4.5,
        plugins: {
            legend:{
                display: false
            } 
                
        },
        scales: {
            x: {
                grid: {
                    display: false
                }
            },
            y: {
                min: 0, max: 500, ticks: {
                    gap: 1,
                    stepSize: 100,
                }
            }
        }
    };
    return (
        <div className='w-full px-10 py-6 h-full'>
            <p className='text-xl font-bold'>Activities</p>
            <div className='flex justify-between mr-10 mb-10'>
                <p className='text-[#858585] text-sm mb-2'>May-June 2021 <i className='fa fa-angle-down'></i></p>
                <div className='flex items-center gap-4'>
                    <div className='flex gap-1 items-center'>
                        <div className='w-2 h-2 bg-[#E9A0A0] rounded-full'></div>
                        Guests
                    </div>
                    <div className='flex gap-1 items-center'>
                        <div className='w-2 h-2 bg-[#9BDD7C] rounded-full'></div>
                        Users
                    </div>
                </div>
            </div>
            <Line data={data} options={options}></Line>
        </div>
    )
}

export default LineGraph