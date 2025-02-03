import React from 'react'
import Image from "next/image";
import { Button } from "@/components/ui/button";
import Header from '@/components/Header';
import Footer from '@/components/Footer';



const page = () => {
  return (


<div> <Header />

<div className="flex justify-center">
<div className='w-[1440px] flex justify-center mt-6 mb-10'>
<div className="w-[380px] h-[489px] flex flex-col jsutify-center items-center gap-6">



<div className="flex justify-center">
<div className="w-[324px] h-[128px] flex flex-col items-center justify-center gap-4">
<Image src="nike-logo.svg" alt="" width={45.50} height={16.54}/>

<div className="w-[186.5px] h-[57px] text-center">
<p className="font-[Helvetica Neue] text-[18px] font-bold leading-[26px] items-center">YOUR ACCOUNT FOR EVERYTHING NIKE
</p></div>

</div>
</div>


<div className="flex flex-col items-center gap-2">

<label htmlFor="email"></label><input type="email" id="email" placeholder="Email address"
 className="w-[324px] h-[40px] rounded-[3px] border border-gray-300 text-[14px] leading-[16.1px] font-normal
font-[Helvetica Neue] pl-4" />
<label htmlFor="password"></label><input type="password" id="password" placeholder="Password" className="w-[324px]
 h-[40px] rounded-[3px] border border-gray-300 text-[14px] leading-[16.1px] font-normal font-[Helvetica Neue] pl-4"/>

</div>



<div className='flex justify-between gap-8'>
<label className="flex items-center">
<input type="checkbox" className='w-[20px] h-[20px] rounded-[3px] border border-gray-300 p-4'/>
<span className="ml-3 font-[Helvetica Neue] font-medium text-[12px] leading-[14px] text-[rgba(141,141,141,1)]">
Keep me signed in</span>
</label>


<a href="#" className="flex items-center">
<span className='ml-4 font-[Helvetica Neue] font-medium text-[12px] leading-[14px] text-[rgba(188,188,188,1)]'>
Forgotten your password?</span>
</a>
</div>



<div className="w-[279px] h-[30px]">
<p className="text-[12px] leading-[16px] font-medium font-[Helvetica Neue] text-center text-[rgba(141,141,141,1)]">
    By logging in&apos; you agree to Nike&apos;s <span className="underline text-[rgba(141,141,141,1)]">
<a href="#" className='hover:text-blue-500 transition-colors duration-300'>Privacy Policy</a>
</span> and <span className="underline text-[rgba(141,141,141,1)]">
<a href="#" className='hover:text-blue-500 transition-colors duration-300'>Terms of Use.</a>
</span>
</p>
</div>



<div>
<Button className="w-[324px] h-[40px] rounded-[3px] text-[11px] leading-[17px] font-light font-[Helvetica Neue]
 text-[rgba(188,188,188,1)]">SIGN IN</Button>
</div>


<div className="flex items-center gap-1">
<p className="font-[Helvetica Neue] text-[12px] leading-[14px] font-normal text-[rgba(141,141,141,1)]">Not a member?
</p><span className="font-[Helvetica Neue] underline text-[12px] leading-[14px] font-normal">Join Us</span>
</div>



</div>
</div>
</div>
<Footer />
</div>
)
}

export default page
