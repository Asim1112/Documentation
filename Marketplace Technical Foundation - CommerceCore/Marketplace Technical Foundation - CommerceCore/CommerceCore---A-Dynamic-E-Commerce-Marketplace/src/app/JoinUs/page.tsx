import React from 'react'
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Image from "next/image";
import { Button} from "@/components/ui/button";

const page = () => {
  return (
    <div> <Header />
    <div className="flex justify-center">
      
    <div className='w-[380px] h-[833px] py-10 px-7 box-borde'>
            
  <div className="flex flex-col gap-7 items-center w-[324px] h-[182px]">
  <Image
    src="nike-logo.svg" 
    alt="nike logo image" 
    width={45.50} 
    height={16.54}/>

  
  <h6 className="font-inter text-[18px] font-[700] leading-[26px]">BECOME A NIKE MEMBER</h6>
  <p className='w-[282.8px] h-[60px] px-1 font-inter text-[14px] text-[rgba(141,141,141,1)]
     leading-[22px] font-normal content-center text-center'>Create your Nike Member profile and get first access to
     the very best of Nike products, inspiration and community.</p>
  </div>
            
  <div className=" space-y-2">
  <label htmlFor="email"></label><input type="email" id="email" placeholder="Email address" 
   className="w-[324px] h-[40px] rounded-[3px] border border-gray-300 text-[14px] leading-[17px] font-normal
   font-inter pl-4" />
  
  <label htmlFor="password"></label><input type="password" id="password" placeholder="Password" 
   className="w-[324px] h-[40px] rounded-[3px] border border-gray-300 text-[14px] leading-[17px] font-normal
   font-inter pl-4" />
  
  <label htmlFor="password"></label><input type="password" id="password" placeholder="First Name" 
   className="w-[324px] h-[40px] rounded-[3px] border border-gray-300 text-[14px] leading-[17px] font-normal
   font-inter pl-4" />
  
  <label htmlFor="password"></label><input type="password" id="password" placeholder="Last Name"
   className="w-[324px] h-[40px] rounded-[3px] border border-gray-300 text-[14px] leading-[17px]
   font-normal font-inter pl-4" />
  
  <div className="pb-2">
  <label htmlFor="password"></label><input type="password" id="password" placeholder="Date of Birth" 
   className="w-[324px] h-[40px] rounded-[3px] border border-gray-300 text-[14px] leading-[17px] font-normal
   font-inter pl-4" />
  <p className="font-inter text-[11px] text-[rgba(141,141,141,1)] font-normal leading-[13.31px]
   pt-2 text-center">Get a Nike Member Reward every year on your Birthday.</p>
  </div>
  
  <label htmlFor="password"></label><input type="password" id="password" placeholder="Pakistan" 
   className="w-[324px] h-[40px] rounded-[3px] border border-gray-300 text-[14px] leading-[17px] font-normal
   font-inter pl-4" />
  
  <div className='flex justify-between'>
  <Button variant="outline" className="w-[153.89px] h-[40px] font-inter text-[13px] font-normal
   text-[rgba(141,141,141,1)]">Male</Button>
  <Button variant="outline" className="w-[153.89px] h-[40px] font-inter text-[13px] font-normal
   text-[rgba(141,141,141,1)]">Female</Button>
  </div>
  
  </div>
            
  <div className="flex flex-col gap-4 py-6">
  <label className="flex items-center"><input type="checkbox" className='w-[35px] h-[35px] rounded-[3px] border
   border-gray-300'/><span className="ml-3 font-inter font-medium text-[11px] leading-[14px]
   text-[rgba(141,141,141,1)]">Sign up for emails to get updates from Nike on products, offers and your Member
    benefits</span></label>
  
  <div className="w-[309.31px] h-[30px] px-2">
  <p className="text-[12px] leading-[16px] font-medium font-inter
   text-center text-[rgba(141,141,141,1)]">By creating an account, you agree to Nike&apos;s 
   <span className="text-[12px] underline text-[rgba(141,141,141,1)]"><a href="#" 
   className='hover:text-blue-500 transition-colors duration-300'>Privacy Policy</a>
   </span> and <span className="text-[12px] underline text-[rgba(141,141,141,1)]"><a href="#" 
   className='hover:text-blue-500 transition-colors duration-300'>Terms of Use.</a></span></p>
   </div>
  </div>
            
    <div className="flex flex-col gap-4">
    <Button className="w-[324px] h-[40px] rounded-[3px] text-[15px] leading-[17px] font-normal font-inter
     text-white">JOIN US</Button>
    <div className="flex justify-center items-center gap-1"><p className="font-inter text-[11px]
     leading-[14px] font-normal text-[rgba(141,141,141,1)]">Already a Member?</p>
     <span className="font-inter underline text-[11px] leading-[14px] font-normal">
     <a href="#" className='hover:text-blue-500 transition-colors duration-300'>Sign In.</a></span></div>
    </div>

    </div>
      
    </div>
    <Footer />            
    </div>
  )
}

export default page
