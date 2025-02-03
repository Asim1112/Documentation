import React from 'react'
import Image from "next/image";
import Link from "next/link";

const SpecificHeader = () => {
  return (
    <div className='flex justify-center'>
        
        <div className='w-[1411px] h-[72.8px] flex justify-between items-center bg-[rgba(255,255,255,1)]'>
        
        <div className="pl-24">
            <Link href="/">
            <Image 
            src="/nike-logo.svg"
            alt="logo icon"
            width={62.29}
            height={21.75}/>
            </Link>
        </div>

        <div className="w-[260px] h-[50px] flex justify-between px-1">
            <p className="font-[Helvetica Neue] text-[14px] leading-[24p] content-center">000 800 100 9538</p>
            
            <Image 
            src="/menu-icon.svg"
            alt="logo icon"
            width={17.88}
            height={18.69}/>
            
            <Image 
            src="/bag-icon.svg"
            alt="logo icon"
            width={20}
            height={19.5}/>
        </div>
        </div>
    </div>





  )
}

export default SpecificHeader;
