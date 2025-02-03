import React from 'react'
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Search } from "lucide-react";
import { Button } from "@/components/ui/button";
import Image from "next/image";

const page = () => {
  return (

    <div> <Header />
    
<div className="flex justify-center">
<div className="w-[1428px] h-[1230px] mb-8 my-10">
        
  <div className='space-y-4'>
  <h6 className='flex justify-center font-[Helvetica Neue] text-[32px] pt-6 text-[rgba(17,17,17,1)] leading-[36px]
   font-medium'>GET HELP</h6>
  
      <div className='flex justify-center relative'>
  <input type="text" placeholder="What can we help you with?"
   className='w-[457.33px] h-[56px] text-[15px] pl-4 leading-[24px] font-normal rounded-[8px] border-2
    border-gray-400' /><Search width={15.1} height={15} className="relative top-5 right-8
    text-[rgba(141,141,141,1)]" /></div>

</div>

  <div className='flex justify-center'>
        
  <div className="flex justify-center w-[1309px] h-[1098px]">
            
  <div className="w-[923.75px] h-[958px] px-2">
            
    <h6 className="font-[Helvetica Neue] text-[28px] leading-[32px] text-[rgba(17,17,17,1)] font-medium pt-10">
      WHAT PAYMENT OPTIONS CAN I USE ON NIKE ORDERS?</h6>
    
    <p className='py-8 font-[Helvetica Neue] text-[15px] text-[rgba(17,17,17,1)] leading-[28px] font-medium'>
      We want to make buying your favourite Nike shoes and gear online fast and easy, and we accept the following
      payment options:</p>

    <div className="pl-10">
    <p className="pb-5 font-[Helvetica Neue] text-[16px] text-[rgba(17,17,17,1)] leading-[28px] font-medium">
      Visa, Mastercard, Diners Club, Discover, American Express, Visa Electron, Maestro</p>
      <p className="pb-5 font-[Helvetica Neue] text-[15px] text-[rgba(17,17,17,1)] leading-[28px] font-medium">
        If you enter your PAN information at checkout, you&apos;ll be able to pay for your order with PayTM or a
        local credit or debit card.</p>
      <p className="pb-5 font-[Helvetica Neue] text-[16px] text-[rgba(17,17,17,1)] leading-[28px] font-medium'">
        Apple Pay</p></div>

            
    <p className="pb-5 font-[Helvetica Neue] text-[16px] text-[rgba(17,17,17,1)] leading-[28px]">
      <span className="font-semibold underline">Nike Memebers</span>
      <span className="font-normal"> can store multiple debit or credit cards in their profile for faster checkout. 
        If you&apos;re not already a Member, </span>
      <span className="font-semibold underline">join us today.</span>
    </p>
            
            
    <div className="space-x-4 pb-5">
        <Button className="w-[106.13px] h-[39px] rounded-full font-[Helvetica Neue] text-[16px] leading-[24px]
         font-medium">JOIN US</Button>
        <Button className="w-[129.84px] h-[39x] rounded-full font-[Helvetica Neue] text-[16px] leading-[24px]
         font-medium">SHOP NIKE</Button>
    </div>

  <h3 className="font-[Helvetica Neue] font-medium text-[20px] text-[rgba(17,17,17,1)] leading-[24px] pb-5">FAQs</h3>
        
        <div>
  <p className="font-[Helvetica Neue] font-semibold text-[16px] text-[rgba(17,17,17,1)] leading-[28px]">
    Does my card need international purchases enabled?</p>
  <p className="font-[Helvetica Neue] font-normal text-[16px] text-[rgba(17,17,17,1)] leading-[28px]">
    Yes, we recommend asking your bank to enable international purchases on your card. You will be notified at
    checkout </p>
  <p className="font-[Helvetica Neue] font-normal text-[16px] text-[rgba(17,17,17,1)] leading-[28px] pb-5">
    if international purchases need to be enabled.</p>
        </div>
  
  <p className="font-[Helvetica Neue] font-normal text-[15px] text-[rgba(17,17,17,1)] leading-[28px] pb-6">
    Please note, some banks may charge<span className="font-[Helvetica Neue] font-semibold text-[15px]
     text-[rgba(17,17,17,1)] leading-[28px]"> a small transaction fee</span> for international orders.</p>

  <div>
    <p className="font-[Helvetica Neue] font-semibold text-[15px] text-[rgba(17,17,17,1)] leading-[28px]">
      Can I pay for my order with multiple methods?</p>
    <p className="font-[Helvetica Neue] font-normal text-[15px] text-[rgba(17,17,17,1)] leading-[28px] pb-5">
      No, payment for Nike orders can&apos;t be split between multiple payment methods.</p>
  </div>

  <div>
    <p className="font-[Helvetica Neue] font-semibold text-[15px] text-[rgba(17,17,17,1)] leading-[28px]">
      What payment method is accepted for SNKRS orders?</p>
    <p className="font-[Helvetica Neue] font-normal text-[15px] text-[rgba(17,17,17,1)] leading-[28px] pb-5">
      You can use any accepted credit card to pay for your SNKRS order.</p>
  </div>

  <div>
    <p  className="font-[Helvetica Neue] font-semibold text-[15px] text-[rgba(17,17,17,1)] leading-[28px]">
      Why don&apos;t I see Apple Pay as an option?</p>
    <p className="font-[Helvetica Neue] font-normal text-[16px] text-[rgba(17,17,17,1)] leading-[28px] pb-5">
      To see Apple Pay as an option in the Nike App or on Nike.com, you&apos;ll need to use a compatible Apple device
      running the latest OS, be signed in to your iCloud account and have a supported card in your Wallet.
      Additionally, you&apos;ll need to use Safari to use Apple Pay on Nike.com.</p>
  </div>

    <p className="text-[15px] text-[rgba(17,17,17,1)] font-[Helvetica Neue] leading-[28px] font-normal">
      Was this answer helpful?</p>
  
  <div className="flex gap-3 pb-3 pl-2">
    
    <Image 
    src="/thumb-up.svg" 
    alt="thumb-image" 
    width={18.34} 
    height={22.5} />

    <Image 
    src="/thumb-down.svg" 
    alt="thumb-image" 
    width={18.34} 
    height={22.5} />

  </div>
    
    <p className="font-[Helvetica Neue] text-[16px] leading-[24px] font-semibold text-[rgba(117,117,117,1)] pb-5">
      RELATED</p>

    <div className="space-y-5 pl-10">
      <p className="text-[16px] text-[rgba(17,17,17,1)] leading-[28px] font-[Helvetica Neue] font-semibold underline">
        WHAT ARE NIKE&apos;S DELIVERY OPTIONS?</p>
      <p className="text-[16px] text-[rgba(17,17,17,1)] leading-[28px] font-[Helvetica Neue] font-semibold underline">
        HOW DO I GET FREE DELIVERY ON NIKE ORDERS?</p>
    </div>

              
            

  </div>
  <div><hr className="w-[1px] h-[1065px] mt-10 bg-[rgba(217,217,217,1)]"/></div>
  
  <div className='w-[313.25px] h-[1042px]'>
    <h6 className='flex justify-end pr-10 mt-10 pb-7 font-[Helvetica Neue] text-[28px] font-medium leading-[32px]'>CONTACT US</h6>
    
    <div className='flex justify-end'>
    <div className="flex flex-col justify-between w-[265.25px] h-[836px]">
      <div className="flex flex-col justify-center items-center gap-7">

      <Image src="mobile-icon.svg"
      alt="mobile-image" 
      width={64} 
      height={64}
      />

      <div className="w-[263.15px] h-[112px] text-center font-[Helvetica Neue] text-[16px] leading-[28px]">
        <p className="font-[Helvetica Neue] text-[16px] font-semibold leading-[24px]">000 800 919 0566</p>
        <p>Products & Orders: 24 hours a day,</p>
        <p>7 days a week</p>
        <p>Company Info & Enquiries: 07:30 -</p>
        <p>16:30, Monday - Friday</p>
      </div>
      
      </div>


      <div className="flex flex-col justify-center items-center gap-5">

      <Image src="message-icon.svg"
      alt="message-image" 
      width={64} 
      height={64}
      />
                                        
      <div className="text-center">
        <p className="font-[Helvetica Neue] text-[15px] font-semibold leading-[24px]">24 hours a day</p>
        <p className="font-[Helvetica Neue] text-[15px] leading-[28px]">7 days a week</p>
      </div>
      
      </div>

      <div className="flex flex-col justify-center items-center gap-5">

      <Image src="envelop-icon.svg"
      alt="envelop-image" 
      width={64} 
      height={64}
      />
                                        
      <div className="text-center">
        <p  className="font-[Helvetica Neue] text-[15px] font-semibold leading-[24px]">We&apos;ll reply within</p>
        <p  className="font-[Helvetica Neue] text-[15px] leading-[28px]">five business days</p>
      </div>
      
      </div>

      <div className="flex flex-col justify-center items-center gap-7">

      <Image src="location-icon.svg"
      alt="location-image" 
      width={64} 
      height={64}
      />
                                        
      <div className="text-center">
        <p className="font-[Helvetica Neue] text-[16px] font-semibold leading-[24px]">STORE LOCATOR</p>
        <p className="font-[Helvetica Neue] text-[16px] leading-[28px]">Find Nike retail stores near you</p>
      </div>
      
      </div>
                    
                </div>
              </div>
            </div>

        </div>
        </div>
      </div>
    </div>
       <Footer />       
       </div>
  )
}

export default page
