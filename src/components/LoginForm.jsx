import React, { useEffect, useRef } from 'react'
import { AppleLogo, GoogleLogo } from '../utils/Svg'
import { Link, useNavigate } from 'react-router-dom'

const LoginForm = () => {
    const nav=useNavigate();
    
      const handleSignIn=(e)=>{
         const gbtn= ref.current.querySelector("div[role=button]");
         gbtn.click();
      } 
      const ref=useRef(null)
    useEffect(() => {
        /* global google  */
        const handleCallback=(res)=>{
            localStorage.setItem('userToken',res.credential)
            nav("/dash")
            
        }
        
    
       google.accounts.id.initialize({
        client_id:"467875009697-5dpds2bjhld15nentpkah38qbp9sgg4l.apps.googleusercontent.com",
        callback:handleCallback 
      })

      google.accounts.id.renderButton(
        ref.current,
        {theme:"light",size:"large"}
      )
  },[nav])

      
      
  return (
    <div className='lg:px-[28%] w-[95%] p-20 gap-4 flex flex-col items-center justify-center'>
        <div className='hidden' ref={ref}></div>
        <div className='w-full flex flex-col gap-2 text-left'>
        <span className='text-4xl font-bold '>Sign In</span>
        <span className='font-normal font-lato'>Sign in to your account</span>
        </div>
        <div className='flex items-center justify-between font-lato w-full'>
            <div className='flex items-center justify-center bg-white px-4 py-1 text-[#858585] rounded-lg gap-2' >
             <GoogleLogo className='w-4' />   
            <button className='text-sm' onClick={handleSignIn}>Sign in with Google</button>
            </div>
            <div className='flex items-center justify-center bg-white px-6 py-1 text-[#858585] rounded-lg gap-2'>
            <AppleLogo className='w-4'/>
            <button className='text-sm'>Sign in with Apple</button>
            </div>
        </div>
        <div className='flex flex-col w-full'>
            <form className='flex flex-col gap-4 bg-white p-8 text-base rounded-3xl'>
                <div className='flex flex-col gap-1'>
                <label>Email address</label>
                <input className='bg-primary font-lato px-4 py-2 rounded-lg text-base focus:outline-0 focus:bg-[#EAEAEA]' type="email" required placeholder="johndoe@gmail.com"/>
                </div>
                <div className='flex flex-col gap-1'>
                <label>Password</label>
                <input className='bg-primary font-lato p-4 py-2 rounded-lg text-base focus:outline-0 focus:bg-[#EAEAEA]' type="password" required placeholder=""/>
                </div>
                <Link to={"/"} className='text-[#346BD4] font-lato'>Forgot password?</Link>
                <button type='submit' className='bg-black text-white font-bold px-4 py-2 rounded-lg '>Sign In</button>
            </form>
            <p className='mt-4 text-center font-lato text-[#858585]'>Don't have an account? <Link to={'/'} className='text-[#346BD4]' >Register here</Link></p>
        </div>
        
        
    </div>
  )
}

export default LoginForm