import { useEffect } from 'react'
import LoginForm from '../components/LoginForm'


const Login = () => {
 
  return (
    <div className='w-full min-h-screen bg-primary flex' >
    <div className='hidden lg:flex bg-black text-white text-lg flex w-2/5 items-center justify-center' >
        <span className='lg:text-[86px] sm:text-4xl font-bold'>Board.</span>
    </div>
    <div className='w-full lg:w-3/5'>
    <LoginForm/>
    </div>    
    </div>
  )
}

export default Login