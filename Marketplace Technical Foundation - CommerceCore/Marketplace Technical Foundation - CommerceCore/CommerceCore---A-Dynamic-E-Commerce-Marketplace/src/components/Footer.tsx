import React from 'react';
import Image from "next/image";

const Footer = () => {
  return (
    <div className='flex justify-center'>
      <div className='w-full max-w-[1440px] h-auto bg-black px-6 md:px-10 py-6 md:py-10'>
        
        <div className='flex flex-col md:flex-row gap-6 md:gap-32 px-2'>
          <div className="text-white font-[Helvetica Neue]">
            <ul className="font-medium text-[10px] md:text-[12px] leading-[32.67px]">
              <li><a href="#">FIND A STORE</a></li>
              <li><a href="#">BECOME A MEMBER</a></li>
              <li><a href="#">SIGN UP FOR EMAIL</a></li>
              <li><a href="#">Send Us Feedback</a></li>
              <li><a href="#">STUDENT DISCOUNTS</a></li>
            </ul>
          </div>
          <div className="text-white font-[Helvetica Neue]">
            <ul className="text-[11px] md:text-[12px] leading-[28px] font-medium">
              <li><a href="#">GET HELP</a></li>
              <li className='text-[#7E7E7E]'><a href="#">Order Status</a></li>
              <li className='text-[#7E7E7E]'><a href="#">Delivery</a></li>
              <li className='text-[#7E7E7E]'><a href="#">Returns</a></li>
              <li className='text-[#7E7E7E]'><a href="#">Payment Options</a></li>
              <li className='text-[#7E7E7E]'><a href="#">Contact Us On Nike.com Inquiries</a></li>
              <li className='text-[#7E7E7E]'><a href="#">Contact Us On All Other Inquiries</a></li>
            </ul>
          </div>
          <div className="text-white font-[Helvetica Neue]">
            <ul className='text-[11px] md:text-[12px] font-normal leading-[28px]'>
              <li><a href="#">ABOUT NIKE</a></li>
              <li className='text-[#7E7E7E]'><a href="#">News</a></li>
              <li className='text-[#7E7E7E]'><a href="#">Careers</a></li>
              <li className='text-[#7E7E7E]'><a href="#">Investors</a></li>
              <li className='text-[#7E7E7E]'><a href="#">Sustainability</a></li>
            </ul>
          </div>
        </div>

        <div className="flex justify-center md:justify-end gap-3 mt-6 md:mt-0">
          <a href="#"><Image src="/twitter.svg" alt="twitter" width={30} height={30}/></a>
          <a href="#"><Image src="/facebook.svg" alt="facebook" width={30} height={30}/></a>
          <a href="#"><Image src="/youtube.svg" alt="youtube" width={30} height={30}/></a>
          <a href="#"><Image src="/insta.svg" alt="instagram" width={30} height={30}/></a>
        </div>

        <div className="flex flex-col md:flex-row justify-between items-center pt-6 w-full px-4">
          <div className="flex items-center gap-3">
            <Image src="pointer.svg" alt="pointer" width={9.38} height={13.12}/>
            <p className="text-white text-[12px]">India</p>
            <p className="text-[#7E7E7E] text-[11px] pl-4">&copy; 2023 Nike, Inc. All Rights Reserved</p>
          </div>
          <ul className="flex flex-col md:flex-row gap-2 md:gap-6 text-[#7E7E7E] text-[11px] mt-4 md:mt-0">
            <li><a href="#">Guides</a></li>
            <li><a href="#">Terms of Sale</a></li>
            <li><a href="#">Terms of Use</a></li>
            <li><a href="#">Nike Privacy Policy</a></li>
          </ul>
        </div>
      </div>            
    </div>  
  );
}

export default Footer;