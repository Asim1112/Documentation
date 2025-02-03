import React from 'react'
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Image from "next/image";
import { Button } from "@/components/ui/button";



const page = () => {
  return (
    
    <div>   <Header />
    
    
<div className="flex justify-center">
<div className="w-[1411px] h-[680px] flex justify-center">

            
        <div className="w-[1100px] h-[547.89px] flex justify-center mt-12">
        <div className="flex flex-col">
<div className="w-[717.33px] h-[62.89px] bg-[rgba(247,247,247,1)]">
<div className="flex flex-col justify-center h-full pl-6">
<p className="font-[Helvetica Neue] font-medium text-[13px] leading-[14px]">Free Delivery</p>
<p className="font-[Helvetica Neue] font-light text-[11px] leading-[24px]">Applies to orders of ₹ 14 000.00 or more.
     <span className="font-[Helvetica Neue] ml-3 font-medium text-[11px] leading-[24px] underline solid">
    <a href="#" className="hover:text-blue-500 transition-colors duration-300">View details</a></span></p>
</div>
</div>
        
        
<h6 className="font-[Helvetica Neue] font-medium text-[22px] leading-[33px] pt-5">Bag</h6>

<div className="w-[717.33px] h-[218px] flex items-center">
            
    <div className="flex">
<Image 
src="man-1.svg" 
alt="model image1" 
width={150} 
height={150} />
<div className='w-[537.33px] h-[112px] mt-1 ml-7'>
    <div className="w-[537.33px] flex justify-between">
        <p className="font-[Helvetica Neue] font-semibold text-[15px] leading-[28px]">Nike Dri-FIT ADV TechKnit Ultra</p>
        <p className="font-[Helvetica Neue] font-normal text-[15px] leading-[28px]">MRP: ₹ 3 895.00</p>
    </div>
        
        
        <p className="font-[Helvetica Neue] text-[rgba(117,117,117,1)] font-normal text-[15px] leading-[28px]">
        Men&apos;s Short-Sleeve Running Top</p>
        <p className="font-[Helvetica Neue] text-[rgba(117,117,117,1)] font-normal text-[15px] leading-[28px]">
        Ashen Slate/Cobalt Bliss</p>
        
        
    <div className="w-[167.39px] h-[28px] flex justify-between">
        <p className="font-[Helvetica Neue] text-[rgba(117,117,117,1)] font-normal text-[15px] leading-[28px]">
            Size <span className="font-[Helvetica Neue] text-[rgba(117,117,117,1)] font-normal ml-1 text-[14px]
             leading-[28px]">L</span></p>
        
        <p className="font-[Helvetica Neue] text-[rgba(117,117,117,1)] font-normal text-[15px] leading-[28px]">
            Quantity <span className="font-[Helvetica Neue] text-[rgba(117,117,117,1)] font-normal ml-1 text-[14px]
             leading-[28px]">1</span></p>
    </div>

        
        <div className="flex gap-4 my-6">
            <Image src="heart1.svg" alt="heart-image" width={19.5} height={16.76} />
            <Image src="delete1.svg" alt="delete-image" width={18.5} height={19.5} />
        </div>
            


</div>
</div>
</div>
        
    <hr className="w-[717.33px] h-[2px] mt-6"/>
        
<div className="w-[717.33px] h-[218px] flex pt-8 justify-end">
            
    <div className='w-[537.33px] h-[112px] mt-1 ml-7'>
        
        
        <div className="w-[537.33px] flex justify-between">
            <p className="font-[Helvetica Neue] font-semibold text-[15px] leading-[28px]">Nike Air Max 97 SE</p>
            <p className="font-[Helvetica Neue] font-normal text-[15px] leading-[28px]">MRP: ₹ 16 995.00</p>
        </div>
            
            <p className="font-[Helvetica Neue] text-[rgba(117,117,117,1)] font-normal text-[15px] leading-[28px]">
                Men&apos;s Shoes</p>
            <p className="font-[Helvetica Neue] text-[rgba(117,117,117,1)] font-normal text-[15px] leading-[28px]">
                Flat Pewter/Light Bone/Black/White</p>
            
        
        
        <div className="w-[167.39px] h-[28px] flex justify-between">
            
            <p className="font-[Helvetica Neue] text-[rgba(117,117,117,1)] font-normal text-[15px] leading-[28px]">
                Size <span className="font-[Helvetica Neue] text-[rgba(117,117,117,1)] font-normal ml-1 text-[14px]
                 leading-[28px]">8</span></p>
            <p className="font-[Helvetica Neue] text-[rgba(117,117,117,1)] font-normal text-[15px] leading-[28px]">
                Quantity <span className="font-[Helvetica Neue] text-[rgba(117,117,117,1)] font-normal ml-1 text-[14px]
                 leading-[28px]">1</span></p>
        </div>

            
            
        <div className="flex gap-4 my-6">
            <Image src="heart1.svg" alt="heart-image" width={19.5} height={16.76} />
            <Image src="delete1.svg" alt="delete-image" width={18.5} height={19.5} />
        </div>

    </div>
          
    </div>
    <hr className="w-[717.33px] h-[2px] mt-6"/>          
    </div>
                    
        <div className="w-[350.67px] h-[295px] flex flex-col px-2 ml-4 mt-1">
        
        <p className="font-[Helvetica Neue] text-[21px] leading-[33px] font-medium mb-6">Summary</p>
        <div className='flex justify-between mb-2'><p>Subtotal</p><p>₹ 20 890.00</p></div>
        <div className="flex justify-between mb-5"><p>Estimated Delivery & Handling</p><p>Free</p></div>
        
        <hr className="w-[335px] h-[1px] mb-4" />
        
        <div className="flex justify-between mb-4"><p>Total</p><p>₹ 20 890.00</p></div>
        
        <hr className="w-[335px] h-[1px] mb-10" />
        
        <div className="flex items-center justify-center"><Button className="w-[334.67px] h-[60px] rounded-full
         font-[Helvetica Neue]">Member Checkout</Button></div>
        
        
        </div>

        </div>
    </div>
    </div>
    <Footer />        
    </div>
  )
}

export default page
