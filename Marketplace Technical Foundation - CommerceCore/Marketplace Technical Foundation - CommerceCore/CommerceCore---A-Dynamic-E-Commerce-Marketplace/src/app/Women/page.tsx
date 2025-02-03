import React from 'react'
import SpecificHeader from '@/components/SpecificHeader';
import SpecificFooter from '@/components/SpecificFooter';
import { Button } from "@/components/ui/button";
import Image from "next/image";

const page = () => {
  return (
   
   <div>
    <SpecificHeader />
        
<div className='flex justify-center'>
    <div className="w-[880px] h-[2376px] flex justify-between">
          
<div className='flex flex-col'>



<div className="w-[440px] h-[386px]">
  
    <h6 className="font-inter text-[21px] leading-[24px] font-semibold pb-3">
      How would you like to get your order?</h6>
    <p className="font-inter text-[15px] text-[rgba(117,117,117,1)] leading-[24px] font-normal pb-9">
      Customs regulation for India require a copy of the recipient&apos;s KYC. The address on the KYC needs to match
      the shipping address. Our courier will contact you via SMS/email to obtain a copy of your KYC. The KYC will be
      stored securely and used solely for the purpose of clearing customs (including sharing it with customs
      officials) for all orders and returns. If your KYC does not match your shipping address, please click the link
      for more information. <span className="font-inter text-[15px] text-[rgba(117,117,117,1)] 
      leading-[24px] font-normal underline">Learn More</span></p>
    <Button variant="ghost" className="w-[440px] h-[82px] flex justify-start gap-6 border-2 font-inter 
     text-[15px] leading-[24px] font-semibold border-black rounded-[10px]">
    <Image src="icon-box2.svg" alt="" width={21.85} height={19.02} />Deliver It</Button>
</div>



<div className="w-[440px] h-[1504px]">
  
  
  <p className='font-inter text-[21px] leading-[24px] font-medium py-5'>Enter your name and address:</p>
  
  <div className="flex flex-col gap-6">
    
    <input type="text" placeholder="First Name" className="w-[440px] h-[56px] placeholder-black rounded-lg
     leading-[24px] font-inter text-[16px] font-normal pl-4 border-2 border-gray-300" />
    
    <input type="text" placeholder="Last Name" className="w-[440px] h-[56px] placeholder-black rounded-lg
     leading-[24px] font-inter text-[16px] font-normal pl-4 border-2 border-gray-300" />
    
    <input type="text" placeholder="Address Line 1" className="w-[440px] h-[56px] placeholder-black rounded-lg
     leading-[24px] font-inter text-[16px] font-normal pl-4 border-2 border-gray-300" />
    
    <input type="text" placeholder="Address Line 2" className="w-[440px] h-[56px] placeholder-black rounded-lg
     leading-[24px] font-inter text-[16px] font-normal pl-4 border-2 border-gray-300" />
    
    <input type="text" placeholder="Address Line 3" className="w-[440px] h-[56px] placeholder-black rounded-lg
     leading-[24px] font-inter text-[16px] font-normal pl-4 border-2 border-gray-300" />
    
    <div className="flex justify-between">
    <input type="text" placeholder="Postal Code" className="w-[211.19px] h-[56px]
     placeholder-black rounded-lg leading-[24px] font-inter text-[16px] font-normal pl-4 border-2
     border-gray-300" /><input type="text" placeholder="Locality" className="w-[211.19px] h-[56px]
     placeholder-black rounded-lg leading-[24px] font-inter text-[16px] font-normal pl-4
       border-2 border-gray-300" />
    </div>
    
    <div className="flex justify-between">
    <input type="text" placeholder="State/Territory" className="w-[211.19px]
     h-[56px] placeholder-black rounded-lg leading-[24px] font-inter text-[16px] font-normal pl-4
     border-2 border-gray-300" /><input type="text" placeholder="Pakistan" className="w-[211.19px] h-[56px]
     placeholder-black rounded-lg leading-[24px] font-inter text-[16px] font-normal pl-4 border-2
     border-gray-300" />
    </div>
    
<div className='flex flex-col gap-8 pt-1'>
    <label className="flex items-center">
    <input type="checkbox" className='w-[18px] h-[18px] rounded-sm border border-gray-200 p-4'/>
    <span className="ml-3 font-inter font-normal text-[15px] leading-[24px] text-[rgba(17,17,17,1)]">
     Save this address to my profile</span></label>
    
    <label className="flex items-center"><span className="w-[20px] h-[20px] rounded-sm bg-gray-300 border
     border-gray-300"></span><span className="ml-3 font-inter font-medium text-[15px] leading-[24px]
     text-[rgba(17,17,17,1)]">Make this my preferred address</span></label>
</div>
  
</div>

  <div className='w-[440px] h-[256px] flex flex-col gap-4 mt-6'>
  
  <p className='font-inter text-[21px] leading-[24px] font-medium mt-5'>What&apos;s your contact information?</p>
  <input type="text" placeholder="Email" className="w-[440px] h-[56px] placeholder-black rounded-lg leading-[24px]
   font-inter text-[16px] font-normal pl-4 border-2 border-gray-300" />
  
  <p className='font-inter text-[11px] leading-[24px] pl-4 text-[rgba(117,117,117,1)]'>
   A confirmation email will be sent after checkout.</p>
  
  <input type="text" placeholder="Phone Number" className="w-[440px] h-[56px] placeholder-black rounded-lg
   leading-[24px] font-inter text-[16px] font-normal pl-4 border-2 border-gray-300" />
  <p className='font-inter text-[11px] leading-[24px] pl-4 text-[rgba(117,117,117,1)]'>
  A carrier might contact you to confirm delivery.</p>
  
  </div>


  <div className='w-[440px] h-[256px] flex flex-col gap-4 mt-6'>
  <p className='font-inter text-[21px] leading-[24px] font-medium mt-5'>What&apos;s your PAN?</p>
  
  <input type="text" placeholder="PAN" className="w-[440px] h-[56px] placeholder-black rounded-lg leading-[24px]
   font-inter text-[16px] font-normal pl-4 border-2 border-gray-300" />
  
  <p className='w-[376.3px] h-[48px] font-inter text-[12px] leading-[24px] pl-4
   text-[rgba(117,117,117,1)]'>Enter your PAN to enable payment with UPI, Net Banking or local card methods</p>
  
  <label className="flex items-center">
  <input type="checkbox" className='w-[18px] h-[18px] rounded-sm border border-gray-200 p-4'/>
  <span className="ml-3 font-inter font-normal text-[12px] leading-[24px]
   text-[rgba(117,117,117,1)]">Save this address to my profile</span></label>
  
  </div>

  <label className="flex items-center">
  <input type="checkbox" className='w-[40px] h-[40px] rounded-sm border border-gray-200 p-4'/>
  <span className="ml-3 font-inter font-normal text-[12px] leading-[14px]
   text-[rgba(117,117,117,1)]">I have read and consent to eShopWorld processing my information in accordance with
    the <span className="underline">Privacy Statement</span> and <span className="underline">Cookie Policy.</span> 
    eShopWorld is a trusted Nike partner.</span></label>

  
  
  <div className='py-20'>
  <Button variant="ghost" className="w-[440px] h-[60px] bg-[rgba(245,245,245,1)] rounded-full 
  text-[rgba(117,117,117,1)] font-semibold hover:bg-[rgba(226,226,226,1)] hover:text-black hover:shadow-lg 
    hover:scale-105 transition duration-300 ease-in-out">Continue</Button>
</div>
          
  
  
<div className="w-[440px] h-[316px] flex flex-col gap-6">
  <h6 className="font-inter text-[20px] leading-[24px] font-medium text-[rgba(17,17,17,1)]">Delivery</h6>
  <hr />
  <h6 className="font-inter text-[21px] leading-[24px] font-medium text-[rgba(117,117,117,1)]">Shipping</h6>
  <hr />
  <h6 className="font-inter text-[21px] leading-[24px] font-medium text-[rgba(117,117,117,1)]">Billing</h6>
  <hr />
  <h6 className="font-inter text-[21px] leading-[24px] font-medium text-[rgba(117,117,117,1)]">Payment</h6>
  <hr />
</div>

    
  </div>
              
  </div>

<div className='w-[320px] h-[721px]'>

<p className='font-inter text-[21px] leading-[24px] font-medium py-5'>Order Summary</p>
<div className='w-[320px] h-[677px]'>
    
<div className='font-inter text-[15px] py-4 leading-[16px] text-[rgba(141,141,141,1)] flex justify-between'>
  <p>Subtotal</p>
  <p>₹ 20 890.00</p>
</div>

<div className='font-inter text-[15px] py-2 leading-[16px] text-[rgba(141,141,141,1)] flex justify-between'>
  <p>Delivery/Shipping</p>
  <p>Free</p>
</div>
    <hr className='mt-2'/>
    
  <div className='font-inter font-medium text-[15px] leading-[16px] flex justify-between py-4'>
    <p>Total</p>
    <p>₹ 20 890.00</p>
  </div>
    <hr />
  <p className='text-[9px] font-inter leading-[24px] pt-2'>(The total reflects the price of your order, including all duties and
     taxes)</p>

      
  <p className='font-inter text-[15px] font-bold leading-[24px] py-2 mt-4'>Arrives Mon, 27 Mar - Wed, 12 Apr</p>
  
  <div className='w-[320px] h-[208px]flex flex-col gap-2'>
      <div className='flex justify-between gap-4'>
    <Image src="pic-end1.svg" alt="" width={208} height={208}></Image>
    
    
  <div className='font-inter text-[13px]'>
  <p className='font-normal leading-[24px]'>Nike Dri-FIT ADV TechKnit Ultra Men&apos;s Short-Sleeve Running Top</p>
  <p className='leading-[19.6px] text-[rgba(141,141,141,1)]'>Qty 1</p>
  <p className='leading-[19.6px] text-[rgba(141,141,141,1)]'>Size L</p>
  <p className='leading-[19.6px] text-[rgba(141,141,141,1)]'>₹ 3 895.00</p>
</div>
      </div>
  </div>


  <div className='w-[320px] h-[208px]flex flex-col gap-2 mt-1'>
  <div className='flex justify-between gap-4'>
    <Image src="shoes-end.svg" alt="" width={208} height={208}></Image>
    
  <div className='font-inter text-[13px]'>
  <p className='font-normal leading-[24px]'>Nike Air Max 97 SE Men&apos;s Shoes</p>
  <p className='leading-[19.6px] text-[rgba(141,141,141,1)]'>Qty 1</p>
  <p className='leading-[19.6px] text-[rgba(141,141,141,1)]'>Size UK 8</p>
  <p className='leading-[19.6px] text-[rgba(141,141,141,1)]'>₹ 16 995.00</p>
</div>
      
      
  </div>
  </div>




      </div>
      </div>
</div>
</div>
    
    <SpecificFooter />
   </div>
  )
}

export default page
