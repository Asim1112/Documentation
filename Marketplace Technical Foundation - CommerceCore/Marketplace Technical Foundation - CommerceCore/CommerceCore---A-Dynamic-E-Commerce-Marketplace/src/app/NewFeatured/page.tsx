import React from 'react'
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Image from "next/image";
import { LucideChevronDown, LucideChevronUp, Settings2 } from 'lucide-react';
import { Button } from "@/components/ui/button";

const NewFeatured = () => {
  return (
      <div> <Header />
    <div className='flex justify-center'>
      <div className='w-[1440px]'>
        <div className='w-[1440px] h-[51px] content-center mt-20'>

    <div className="flex justify-between px-12 ">
<div><p className='font-[Helvetica Neue] text-[24px] leading-[31.2px] font-semibold'>New (500)</p></div>
    
            <div className="flex gap-10">
      <div className='flex gap-2 items-center'><p className='font-[Helvetica Neue] text-[16px] leading-[28px] font-medium'>Hide Filters</p>
      <Settings2 width="24" height="24"/></div>
    <div className='flex gap-2 items-center'><p className='font-[Helvetica Neue] text-[15px] leading-[28px] font-medium'>Sort By</p>
    <LucideChevronDown width="24" height="24"/></div>
            </div>
</div>
  </div>
   
  <div className='flex pl-10'>
  
  <div className="w-[192px] h-[2145.72px] ">

    <div>
<div className="font-[Helvetica Neue] font-semibold text-[15px] leading-[21.6px] space-y-4 py-3 my-6 px-2">
    <p>Shoes</p>
    <p>Tops & T-Shirts</p>
    <p>Hoodies & Sweatshirts</p>
    <p>Jackets</p>
    <p>Trousers & Tights</p>
    <p>Shorts</p>
    <p>Tracksuits</p>
    <p>Jumpsuits & Rompers</p>
    <p>Skirts & Dresses</p>
    <p>Socks</p>
    <p>Accessories & Equipment</p>
</div>
<div className='px-2'>
    <div className='py-4'><hr /></div>
      <div className="flex justify-between">
        <h6 className='font-[Helvetica Neue] font-semibold leading-[24px] text-[16px]'>Gender</h6>
        <LucideChevronUp width="24px" height="24px"/>
      </div>
      <div>
            <div className="flex gap-2 pt-5 pb-1">
      <input type="checkbox" id="option1" className='w-5 h-5 text-blue-600' />
      <form action="Men" className='font-[Helvetica Neue] text-[15px] leading-[24px] font-medium'>Men</form>
            </div>

            <div className="flex gap-2 pb-1">
      <input type="checkbox" id="option1" className='w-5 h-5 text-blue-600' />
      <form action="Women" className='font-[Helvetica Neue] text-[15px] leading-[24px] font-medium'>Women</form>
            </div>

            <div className="flex gap-2">
      <input type="checkbox" id="option1" className='w-5 h-5 text-blue-600' />
      <form action="Unisex" className='font-[Helvetica Neue] text-[15px] leading-[24px] font-medium'>Unisex</form>
            </div>
            <div className="py-4"><hr /></div>
  
      <div className="flex justify-between">
      <h6 className='font-[Helvetica Neue] font-semibold leading-[24px] text-[16px]'>Kids</h6>
      <LucideChevronUp width="24px" height="24px"/>
    </div>

<div className="flex gap-2 pt-5 pb-1">
    <input type="checkbox" id="option1" className='w-5 h-5 text-blue-600' />
    <form action="Boys" className='font-[Helvetica Neue] text-[15px] leading-[24px] font-medium'>Boys</form>
          </div>

          <div className="flex gap-2">
    <input type="checkbox" id="option1" className='w-5 h-5 text-blue-600' />
    <form action="Girls" className='font-[Helvetica Neue] text-[15px] leading-[24px] font-medium'>Girls</form>
          </div>
          <div className="py-4"><hr /></div>

          <div className="flex justify-between">
  <h6 className='font-[Helvetica Neue] font-semibold leading-[24px] text-[16px]'>Shop By Price</h6>
  <LucideChevronUp width="24px" height="24px"/>
</div>

                    
<div className="flex gap-2 pt-5 pb-1">
    <input type="checkbox" id="option1" className='w-5 h-5 text-blue-600' />
    <form action="Unisex" className='font-[Helvetica Neue] text-[15px] leading-[24px] font-medium'>Under ₹ 2 500.00</form>
          </div>

          <div className="flex gap-2">
    <input type="checkbox" id="option1" className='w-5 h-5 text-blue-600' />
    <form action="Unisex" className='font-[Helvetica Neue] text-[15px] leading-[24px] font-medium'>₹ 2 501.00 - ₹ </form>
          </div>
    </div>
</div>

</div>

        </div>
<div className='w-[7px] h-[329px] bg-gray-500 rounded-[7px]'></div>


<div className='w-[1092px]  ml-14'>


      {/* BOX DIV ONE */}
<div className='flex justify-between pb-10'>
  
  
  <div><Image src="pic1.svg" alt="pic1-image" width={348} height={348}/>
  
        <div>
    <p className="text-[rgba(158,53,0,1)] font-[Helvetica Neue] font-semibold text-[15px] leading-[28px]">Just In</p>
    <p className="font-[Helvetica Neue] font-semibold text-[15px] leading-[24px]">Nike Air Force 1 Mid &apos;07</p>
    <p className="text-[15px] font-medium font-[Helvetica Neue] leading-[24px] text-[rgba(117,117,117,1)]">Men&apos;s Shoes</p>
    <p className="text-[15px] font-medium font-[Helvetica Neue] leading-[24px] text-[rgba(117,117,117,1)]">1 Colour</p>
        </div>
        <div className="font-[Helvetica Neue] font-semibold text-[15px] leading-[28px] py-2"><p>MRP : ₹ 10 795.00</p></div>
  </div>
  
  <div><Image src="pic2.svg" alt="pic2-image" width={348} height={348}/>
        <div>
    <p className="text-[rgba(158,53,0,1)] font-[Helvetica Neue] font-semibold text-[15px] leading-[28px]">Just In</p>
    <p className="font-[Helvetica Neue] font-semibold text-[15px] leading-[24px]">Nike Court Vision Low Next Nature</p>
    <p className="text-[15px] font-medium font-[Helvetica Neue] leading-[24px] text-[rgba(117,117,117,1)]">Men&apos;s Shoes</p>
    <p className="text-[15px] font-medium font-[Helvetica Neue] leading-[24px] text-[rgba(117,117,117,1)]">1 Colour</p>
        </div>
        <div className="font-[Helvetica Neue] font-semibold text-[15px] leading-[28px] py-2"><p>MRP : ₹ 4 995.00</p></div>
  </div>
  
  <div><Image src="pic3.svg" alt="pic3-image" width={348} height={348}/>
        <div>
    <p className="text-[rgba(158,53,0,1)] font-[Helvetica Neue] font-semibold text-[15px] leading-[28px]">Just In</p>
    <p className="font-[Helvetica Neue] font-semibold text-[15px] leading-[24px]">Nike Air Force 1 PLT.AF.ORM</p>
    <p className="text-[15px] font-medium font-[Helvetica Neue] leading-[24px] text-[rgba(117,117,117,1)]">Women&apos;s Shoes</p>
    <p className="text-[15px] font-medium font-[Helvetica Neue] leading-[24px] text-[rgba(117,117,117,1)]">1 Colour</p>
        </div>
        <div className="font-[Helvetica Neue] font-semibold text-[15px] leading-[28px] py-2"><p>MRP : ₹ 8 695.00</p></div>
  </div>

</div>
  
             {/* BOX DIV TWO */}

             <div className='flex justify-between pb-10'>
  
  
  <div><Image src="pic4.svg" alt="pic4-image" width={348} height={348}/>
  
        <div>
    <p className="text-[rgba(158,53,0,1)] font-[Helvetica Neue] font-semibold text-[15px] leading-[28px]">Just In</p>
    <p className="font-[Helvetica Neue] font-semibold text-[15px] leading-[24px]">Nike Air Force 1 React</p>
    <p className="text-[15px] font-medium font-[Helvetica Neue] leading-[24px] text-[rgba(117,117,117,1)]">Men&apos;s Shoes</p>
    <p className="text-[15px] font-medium font-[Helvetica Neue] leading-[24px] text-[rgba(117,117,117,1)]">1 Colour</p>
        </div>
        <div className="font-[Helvetica Neue] font-semibold text-[15px] leading-[28px] py-2"><p>MRP : ₹ 13 295.00</p></div>
  </div>
  
  <div><Image src="pic5.svg" alt="pic5-image" width={348} height={348}/>
        <div>
    <p className="text-[rgba(158,53,0,1)] font-[Helvetica Neue] font-semibold text-[15px] leading-[28px]">Promo Exclusion</p>
    <p className="font-[Helvetica Neue] font-semibold text-[15px] leading-[24px]">Air Jordan 1 Elevate Low</p>
    <p className="text-[15px] font-medium font-[Helvetica Neue] leading-[24px] text-[rgba(117,117,117,1)]">Women&apos;s Shoes</p>
    <p className="text-[15px] font-medium font-[Helvetica Neue] leading-[24px] text-[rgba(117,117,117,1)]">1 Colour</p>
        </div>
        <div className="font-[Helvetica Neue] font-semibold text-[15px] leading-[28px] py-2"><p>MRP : ₹ 11 895.00</p></div>
  </div>
  
  <div><Image src="pic6.svg" alt="pic6-image" width={348} height={348}/>
        <div>
    <p className="text-[rgba(158,53,0,1)] font-[Helvetica Neue] font-semibold text-[15px] leading-[28px]">Just In</p>
    <p className="font-[Helvetica Neue] font-semibold text-[15px] leading-[24px]">Nike Standard Issue</p>
    <p className="text-[15px] font-medium font-[Helvetica Neue] leading-[24px] text-[rgba(117,117,117,1)]">Women&apos;s Basketball Jersey</p>
    <p className="text-[15px] font-medium font-[Helvetica Neue] leading-[24px] text-[rgba(117,117,117,1)]">1 Colour</p>
        </div>
        <div className="font-[Helvetica Neue] font-semibold text-[15px] leading-[28px] py-2"><p>MRP : ₹ 2 895.00</p></div>
  </div>

</div>


{/* BOX DIV THREE */}

<div className='flex justify-between pb-10'>
  
  
  <div><Image src="pic7.svg" alt="pic7-image" width={348} height={348}/>
  
        <div>
    <p className="text-[rgba(158,53,0,1)] font-[Helvetica Neue] font-semibold text-[15px] leading-[28px]">Promo Exclusion</p>
    <p className="font-[Helvetica Neue] font-semibold text-[15px] leading-[24px]">Nike Dunk Low Retro SE</p>
    <p className="text-[15px] font-medium font-[Helvetica Neue] leading-[24px] text-[rgba(117,117,117,1)]">Men&apos;s Shoes</p>
    <p className="text-[15px] font-medium font-[Helvetica Neue] leading-[24px] text-[rgba(117,117,117,1)]">1 Colour</p>
        </div>
        <div className="font-[Helvetica Neue] font-semibold text-[15px] leading-[28px] py-2"><p>MRP : ₹ 9 695.00</p></div>
  </div>
  
  <div><Image src="pic8.svg" alt="pic8-image" width={348} height={348}/>
        <div>
    <p className="text-[rgba(158,53,0,1)] font-[Helvetica Neue] font-semibold text-[15px] leading-[28px]">Sustainable Materials</p>
    <p className="font-[Helvetica Neue] font-semibold text-[15px] leading-[24px]">Nike Dri-FIT UV Hyverse</p>
    <p className="text-[15px] font-medium font-[Helvetica Neue] leading-[24px] text-[rgba(117,117,117,1)]">Men&apos;s Short-Sleeve Graphic Fitness Top</p>
    <p className="text-[15px] font-medium font-[Helvetica Neue] leading-[24px] text-[rgba(117,117,117,1)]">1 Colour</p>
        </div>
        <div className="font-[Helvetica Neue] font-semibold text-[15px] leading-[28px] py-2"><p>MRP : ₹ 2 495.00</p></div>
  </div>
  
  <div><Image src="pic9.svg" alt="pic9-image" width={348} height={348}/>
        <div>
    <p className="text-[rgba(158,53,0,1)] font-[Helvetica Neue] font-semibold text-[15px] leading-[28px]">Just In</p>
    <p className="font-[Helvetica Neue] font-semibold text-[15px] leading-[24px]">Nike Court Vision Low</p>
    <p className="text-[15px] font-medium font-[Helvetica Neue] leading-[24px] text-[rgba(117,117,117,1)]">Men&apos;s Shoes</p>
    <p className="text-[15px] font-medium font-[Helvetica Neue] leading-[24px] text-[rgba(117,117,117,1)]">1 Colour</p>
        </div>
        <div className="font-[Helvetica Neue] font-semibold text-[15px] leading-[28px] py-2"><p>MRP : ₹ 5 695.00</p></div>
  </div>

</div>


{/* BOX DIV FOUR */}

<div className='flex justify-between pb-10'>
  
  
  <div><Image src="pic10.svg" alt="pic10-image" width={348} height={348}/>
  
        <div>
    <p className="text-[rgba(158,53,0,1)] font-[Helvetica Neue] font-semibold text-[15px] leading-[28px]">Just In</p>
    <p className="font-[Helvetica Neue] font-semibold text-[15px] leading-[24px]">Nike Dri-FIT Ready</p>
    <p className="text-[15px] font-medium font-[Helvetica Neue] leading-[24px] text-[rgba(117,117,117,1)]">Men&apos;s Short-Sleeve Fitness Top</p>
    <p className="text-[15px] font-medium font-[Helvetica Neue] leading-[24px] text-[rgba(117,117,117,1)]">3 Colour</p>
        </div>
        <div className="font-[Helvetica Neue] font-semibold text-[15px] leading-[28px] py-2"><p>MRP : ₹ 2 495.00</p></div>
  </div>
  
  <div><Image src="pic11.svg" alt="pic11-image" width={348} height={348}/>
        <div>
    <p className="text-[rgba(158,53,0,1)] font-[Helvetica Neue] font-semibold text-[15px] leading-[28px]">Just In</p>
    <p className="font-[Helvetica Neue] font-semibold text-[15px] leading-[24px]">Nike One Leak Protection: Period</p>
    <p className="text-[15px] font-medium font-[Helvetica Neue] leading-[24px] text-[rgba(117,117,117,1)]">Women&#39;s Mid-Rise 18cm (approx.) Biker Shorts
    </p>
    <p className="text-[15px] font-medium font-[Helvetica Neue] leading-[24px] text-[rgba(117,117,117,1)]">2 Colour</p>
        </div>
        <div className="font-[Helvetica Neue] font-semibold text-[15px] leading-[28px] py-2"><p>MRP : ₹ 3 395.00</p></div>
  </div>
  
  <div><Image src="pic12.svg" alt="pic12-image" width={348} height={348}/>
        <div>
    <p className="text-[rgba(158,53,0,1)] font-[Helvetica Neue] font-semibold text-[15px] leading-[28px]">Just In</p>
    <p className="font-[Helvetica Neue] font-semibold text-[15px] leading-[24px]">Nike Air Force 1 LV8 3</p>
    <p className="text-[15px] font-medium font-[Helvetica Neue] leading-[24px] text-[rgba(117,117,117,1)]">Older Kids&apos; Shoe</p>
    <p className="text-[15px] font-medium font-[Helvetica Neue] leading-[24px] text-[rgba(117,117,117,1)]">1 Colour</p>
        </div>
        <div className="font-[Helvetica Neue] font-semibold text-[15px] leading-[28px] py-2"><p>MRP : ₹ 7 495.00</p></div>
  </div>

</div>


{/* BOX DIV FIVE */}

<div className='flex justify-between pb-10'>
  
  
  <div><Image src="pic13.svg" alt="pic13-image" width={348} height={348}/>
  
        <div>
    <p className="text-[rgba(158,53,0,1)] font-[Helvetica Neue] font-semibold text-[15px] leading-[28px]">Just In</p>
    <p className="font-[Helvetica Neue] font-semibold text-[15px] leading-[24px]">Nike Blazer Low Platform</p>
    <p className="text-[15px] font-medium font-[Helvetica Neue] leading-[24px] text-[rgba(117,117,117,1)]">Women&apos;s Shoes</p>
    <p className="text-[15px] font-medium font-[Helvetica Neue] leading-[24px] text-[rgba(117,117,117,1)]">1 Colour</p>
        </div>
        <div className="font-[Helvetica Neue] font-semibold text-[15px] leading-[28px] py-2"><p>MRP : ₹ 8 195.00</p></div>
  </div>
  
  <div><Image src="pic14.svg" alt="pic14-image" width={348} height={348}/>
        <div>
    <p className="text-[rgba(158,53,0,1)] font-[Helvetica Neue] font-semibold text-[15px] leading-[28px]">Just In</p>
    <p className="font-[Helvetica Neue] font-semibold text-[15px] leading-[24px]">Nike Air Force 1 &apos;07</p>
    <p className="text-[15px] font-medium font-[Helvetica Neue] leading-[24px] text-[rgba(117,117,117,1)]">Women&apos;s Shoes</p>
    <p className="text-[15px] font-medium font-[Helvetica Neue] leading-[24px] text-[rgba(117,117,117,1)]">2 Colour</p>
        </div>
        <div className="font-[Helvetica Neue] font-semibold text-[15px] leading-[28px] py-2"><p>MRP : ₹ 8 195.00</p></div>
  </div>
  
  <div><Image src="pic15.svg" alt="pic15-image" width={348} height={348}/>
        <div>
    <p className="text-[rgba(158,53,0,1)] font-[Helvetica Neue] font-semibold text-[15px] leading-[28px]">Just In</p>
    <p className="font-[Helvetica Neue] font-semibold text-[15px] leading-[24px]">Nike Pro Dri-FIT</p>
    <p className="text-[15px] font-medium font-[Helvetica Neue] leading-[24px] text-[rgba(117,117,117,1)]">Men&apos;s Tight-Fit Sleeveless Top</p>
    <p className="text-[15px] font-medium font-[Helvetica Neue] leading-[24px] text-[rgba(117,117,117,1)]">1 Colour</p>
        </div>
        <div className="font-[Helvetica Neue] font-semibold text-[15px] leading-[28px] py-2"><p>MRP : ₹ 1 495.00</p></div>
  </div>

</div>

{/* BOX DIV SIX */}

<div className='flex justify-between pb-10'>
  
  
  <div><Image src="pic16.svg" alt="pic16-image" width={348} height={348}/>
  
        <div>
    <p className="text-[rgba(158,53,0,1)] font-[Helvetica Neue] font-semibold text-[15px] leading-[28px]">Just In</p>
    <p className="font-[Helvetica Neue] font-semibold text-[15px] leading-[24px]">Nike Dunk Low Retro</p>
    <p className="text-[15px] font-medium font-[Helvetica Neue] leading-[24px] text-[rgba(117,117,117,1)]">Men&apos;s Shoes</p>
    <p className="text-[15px] font-medium font-[Helvetica Neue] leading-[24px] text-[rgba(117,117,117,1)]">1 Colour</p>
        </div>
        <div className="font-[Helvetica Neue] font-semibold text-[15px] leading-[28px] py-2"><p>MRP : ₹ 8 695.00</p></div>
  </div>
  
  <div><Image src="pic17.svg" alt="pic17-image" width={348} height={348}/>
        <div>
    <p className="text-[rgba(158,53,0,1)] font-[Helvetica Neue] font-semibold text-[15px] leading-[28px]">Just In</p>
    <p className="font-[Helvetica Neue] font-semibold text-[15px] leading-[24px]">Nike Air Max SC</p>
    <p className="text-[15px] font-medium font-[Helvetica Neue] leading-[24px] text-[rgba(117,117,117,1)]">Women&apos;s Shoes</p>
    <p className="text-[15px] font-medium font-[Helvetica Neue] leading-[24px] text-[rgba(117,117,117,1)]">2 Colour</p>
        </div>
        <div className="font-[Helvetica Neue] font-semibold text-[15px] leading-[28px] py-2"><p>MRP : ₹ 5 995.00</p></div>
  </div>
  
  <div><Image src="pic18.svg" alt="pic18-image" width={348} height={348}/>
        <div>
    <p className="text-[rgba(158,53,0,1)] font-[Helvetica Neue] font-semibold text-[15px] leading-[28px]">Just In</p>
    <p className="font-[Helvetica Neue] font-semibold text-[15px] leading-[24px]">Nike Dri-FIT UV Miler</p>
    <p className="text-[15px] font-medium font-[Helvetica Neue] leading-[24px] text-[rgba(117,117,117,1)]">Men&apos;s Short-Sleeve Running Top</p>
    <p className="text-[15px] font-medium font-[Helvetica Neue] leading-[24px] text-[rgba(117,117,117,1)]">1 Colour</p>
        </div>
        <div className="font-[Helvetica Neue] font-semibold text-[15px] leading-[28px] py-2"><p>MRP : ₹ 1 695.00</p></div>
  </div>

</div>

{/* BOX DIV SEVEN */}

<div className='flex justify-between pb-10'>
  
  
  <div><Image src="pic19.svg" alt="pic19-image" width={348} height={348}/>
  
        <div>
    <p className="text-[rgba(158,53,0,1)] font-[Helvetica Neue] font-semibold text-[15px] leading-[28px]">Just In</p>
    <p className="font-[Helvetica Neue] font-semibold text-[15px] leading-[24px]">Nike Air Max SYSTM</p>
    <p className="text-[15px] font-medium font-[Helvetica Neue] leading-[24px] text-[rgba(117,117,117,1)]">Older Kids&apos; Shoes</p>
    <p className="text-[15px] font-medium font-[Helvetica Neue] leading-[24px] text-[rgba(117,117,117,1)]">1 Colour</p>
        </div>
        <div className="font-[Helvetica Neue] font-semibold text-[15px] leading-[28px] py-2"><p>MRP : ₹ 6 495.00</p></div>
  </div>
  
  <div><Image src="pic20.svg" alt="pic20-image" width={348} height={348}/>
        <div>
    <p className="text-[rgba(158,53,0,1)] font-[Helvetica Neue] font-semibold text-[15px] leading-[28px]">Just In</p>
    <p className="font-[Helvetica Neue] font-semibold text-[15px] leading-[24px]">Nike Alate All U</p>
    <p className="text-[15px] font-medium font-[Helvetica Neue] leading-[24px] text-[rgba(117,117,117,1)]">Women&apos;s Light-Support U-Neck Printed Sports Bra</p>
    <p className="text-[15px] font-medium font-[Helvetica Neue] leading-[24px] text-[rgba(117,117,117,1)]">1 Colour</p>
        </div>
        <div className="font-[Helvetica Neue] font-semibold text-[15px] leading-[28px] py-2"><p>MRP : ₹ 2 195.00</p></div>
  </div>
  
  <div><Image src="pic21.svg" alt="pic21-image" width={348} height={348}/>
        <div>
    <p className="text-[rgba(158,53,0,1)] font-[Helvetica Neue] font-semibold text-[15px] leading-[28px]">Just In</p>
    <p className="font-[Helvetica Neue] font-semibold text-[15px] leading-[24px]">Nike Court Legacy Lift</p>
    <p className="text-[15px] font-medium font-[Helvetica Neue] leading-[24px] text-[rgba(117,117,117,1)]">Women&apos;s Shoes</p>
    <p className="text-[15px] font-medium font-[Helvetica Neue] leading-[24px] text-[rgba(117,117,117,1)]">2 Colour</p>
        </div>
        <div className="font-[Helvetica Neue] font-semibold text-[15px] leading-[28px] py-2"><p>MRP : ₹ 7 495.00</p></div>
  </div>

</div>

{/* BOX DIV EIGHT */}

<div className='flex justify-between pb-10'>
  
  
  <div><Image src="pic22.svg" alt="pic22-image" width={348} height={348}/>
  
        <div>
    <p className="text-[rgba(158,53,0,1)] font-[Helvetica Neue] font-semibold text-[15px] leading-[28px]">Just In</p>
    <p className="font-[Helvetica Neue] font-semibold text-[15px] leading-[24px]">Nike Swoosh</p>
    <p className="text-[15px] font-medium font-[Helvetica Neue] leading-[24px] text-[rgba(117,117,117,1)]">Women&apos;s Medium-support Padded Sports Bra Tank</p>
    <p className="text-[15px] font-medium font-[Helvetica Neue] leading-[24px] text-[rgba(117,117,117,1)]">2 Colour</p>
        </div>
        <div className="font-[Helvetica Neue] font-semibold text-[15px] leading-[28px] py-2"><p>MRP : ₹ 3 095.00</p></div>
  </div>
  
  <div><Image src="pic23.svg" alt="pic23-image" width={348} height={348}/>
        <div>
    <p className="text-[rgba(158,53,0,1)] font-[Helvetica Neue] font-semibold text-[15px] leading-[28px]">Just In</p>
    <p className="font-[Helvetica Neue] font-semibold text-[15px] leading-[24px]">Nike SB Zoom Janoski OG+</p>
    <p className="text-[15px] font-medium font-[Helvetica Neue] leading-[24px] text-[rgba(117,117,117,1)]">Shoes</p>
    <p className="text-[15px] font-medium font-[Helvetica Neue] leading-[24px] text-[rgba(117,117,117,1)]">1 Colour</p>
        </div>
        <div className="font-[Helvetica Neue] font-semibold text-[15px] leading-[28px] py-2"><p>MRP : ₹ 8 595.00</p></div>
  </div>
  
  <div><Image src="pic24.svg" alt="pic24-image" width={348} height={348}/>
        <div>
    <p className="text-[rgba(158,53,0,1)] font-[Helvetica Neue] font-semibold text-[15px] leading-[28px]">Just In</p>
    <p className="font-[Helvetica Neue] font-semibold text-[15px] leading-[24px]">Nike Dri-FIT Run Division Rise 365</p>
    <p className="text-[15px] font-medium font-[Helvetica Neue] leading-[24px] text-[rgba(117,117,117,1)]">Men&apos;s Running Tank</p>
    <p className="text-[15px] font-medium font-[Helvetica Neue] leading-[24px] text-[rgba(117,117,117,1)]">1 Colour</p>
        </div>
        <div className="font-[Helvetica Neue] font-semibold text-[15px] leading-[28px] py-2"><p>MRP : ₹ 10 795.00</p></div>
  </div>

</div>

{/* BOX DIV NINE */}

<div className='flex justify-between pb-10'>
  
  
  <div><Image src="pic25.svg" alt="pic25-image" width={348} height={348}/>
  
        <div>
    <p className="text-[rgba(158,53,0,1)] font-[Helvetica Neue] font-semibold text-[15px] leading-[28px]">Just In</p>
    <p className="font-[Helvetica Neue] font-semibold text-[15px] leading-[24px]">Nike Dri-FIT Challenger</p>
    <p className="text-[15px] font-medium font-[Helvetica Neue] leading-[24px] text-[rgba(117,117,117,1)]">Men&#39;s 18cm (approx.) 2-in-1 Versatile Shorts
    </p>
    <p className="text-[15px] font-medium font-[Helvetica Neue] leading-[24px] text-[rgba(117,117,117,1)]">1 Colour</p>
        </div>
        <div className="font-[Helvetica Neue] font-semibold text-[15px] leading-[28px] py-2"><p>MRP : ₹ 2 495.00</p></div>
  </div>
  
  <div><Image src="pic26.svg" alt="pic26-image" width={348} height={348}/>
        <div>
    <p className="text-[rgba(158,53,0,1)] font-[Helvetica Neue] font-semibold text-[15px] leading-[28px]">Just In</p>
    <p className="font-[Helvetica Neue] font-semibold text-[15px] leading-[24px]">Jordan Series ES</p>
    <p className="text-[15px] font-medium font-[Helvetica Neue] leading-[24px] text-[rgba(117,117,117,1)]">Men&apos;s Shoes</p>
    <p className="text-[15px] font-medium font-[Helvetica Neue] leading-[24px] text-[rgba(117,117,117,1)]">2 Colour</p>
        </div>
        <div className="font-[Helvetica Neue] font-semibold text-[15px] leading-[28px] py-2"><p>MRP : ₹ 7 495.00</p></div>
  </div>
  
  <div><Image src="pic27.svg" alt="pic27-image" width={348} height={348}/>
        <div>
    <p className="text-[rgba(158,53,0,1)] font-[Helvetica Neue] font-semibold text-[15px] leading-[28px]">Just In</p>
    <p className="font-[Helvetica Neue] font-semibold text-[15px] leading-[24px]">Nike Outdoor Play</p>
    <p className="text-[15px] font-medium font-[Helvetica Neue] leading-[24px] text-[rgba(117,117,117,1)]">Older Kids&apos; Oversized Woven Jacket</p>
    <p className="text-[15px] font-medium font-[Helvetica Neue] leading-[24px] text-[rgba(117,117,117,1)]">1 Colour</p>
        </div>
        <div className="font-[Helvetica Neue] font-semibold text-[15px] leading-[28px] py-2"><p>MRP : ₹ 3 895.00</p></div>
  </div>

</div>

{/* BOX DIV TEN */}

<div className='flex justify-between pb-28'>
  
  
  <div><Image src="pic28.svg" alt="pic28-image" width={348} height={348}/>
  
        <div>
    <p className="text-[rgba(158,53,0,1)] font-[Helvetica Neue] font-semibold text-[15px] leading-[28px]">Just In</p>
    <p className="font-[Helvetica Neue] font-semibold text-[15px] leading-[24px]">Nike Air Force 1 Mid &apos;07</p>
    <p className="text-[15px] font-medium font-[Helvetica Neue] leading-[24px] text-[rgba(117,117,117,1)]">Older Kids&#39; (Girls&#39;) High-waisted Woven Shorts
    </p>
    <p className="text-[15px] font-medium font-[Helvetica Neue] leading-[24px] text-[rgba(117,117,117,1)]">2 Colour</p>
        </div>
        <div className="font-[Helvetica Neue] font-semibold text-[15px] leading-[28px] py-2"><p>MRP : ₹ 2 495.00</p></div>
  </div>
  
  <div><Image src="pic29.svg" alt="pic29-image" width={348} height={348}/>
        <div>
    <p className="text-[rgba(158,53,0,1)] font-[Helvetica Neue] font-semibold text-[15px] leading-[28px]">Just In</p>
    <p className="font-[Helvetica Neue] font-semibold text-[15px] leading-[24px]">Nike Blazer Low &apos;77 Jumbo</p>
    <p className="text-[15px] font-medium font-[Helvetica Neue] leading-[24px] text-[rgba(117,117,117,1)]">Women&apos;s Shoes
    </p>
    <p className="text-[15px] font-medium font-[Helvetica Neue] leading-[24px] text-[rgba(117,117,117,1)]">1 Colour</p>
        </div>
        <div className="font-[Helvetica Neue] font-semibold text-[15px] leading-[28px] py-2"><p>MRP : ₹ 10 795.00</p></div>
  </div>
  
  <div><Image src="pic30.svg" alt="pic30-image" width={348} height={348}/>
        <div>
    <p className="text-[rgba(158,53,0,1)] font-[Helvetica Neue] font-semibold text-[15px] leading-[28px]">Just In</p>
    <p className="font-[Helvetica Neue] font-semibold text-[15px] leading-[24px]">Nike SB Force 58</p>
    <p className="text-[15px] font-medium font-[Helvetica Neue] leading-[24px] text-[rgba(117,117,117,1)]">Skate Shoe</p>
    <p className="text-[15px] font-medium font-[Helvetica Neue] leading-[24px] text-[rgba(117,117,117,1)]">1 Colour</p>
        </div>
        <div className="font-[Helvetica Neue] font-semibold text-[15px] leading-[28px] py-2"><p>MRP : ₹ 5 995.00</p></div>
  </div>

</div>
<hr className='mt-4'/>
<div className="w-[1092px] h-[259px] flex flex-col justify-center items-center">

  <div>
  <p className="font-[Helvetica Neue] font-semibold text-[19px] leading-[24px] py-3 text-[#111111]">Related Cateogories</p>
    <div className='font-[Helvetica] text-[12px] leading-[18px] font-medium space-y-3'>
      <Button variant="outline" className="bg-white text-[#111111] rounded-full font-[Helvetica] text-[12px] leading-[18px] font-medium hover:bg-white hover:text-black mr-2 w-[160.83px]">Best Selling Products</Button>
      <Button variant="outline" className="bg-white text-[#111111] rounded-full font-[Helvetica] text-[12px] leading-[18px] font-medium hover:bg-white hover:text-black mr-2 w-[104.36px]">Best Shoes</Button>
      <Button variant="outline" className="bg-white text-[#111111] rounded-full font-[Helvetica] text-[12px] leading-[18px] font-medium hover:bg-white hover:text-black mr-2 w-[165.31px]">New Basketball Shoes</Button>
      <Button variant="outline" className="bg-white text-[#111111] rounded-full font-[Helvetica] text-[12px] leading-[18px] font-medium hover:bg-white hover:text-black mr-2 w-[151.56px]">New Football Shoes</Button>
      <Button variant="outline" className="bg-white text-[#111111] rounded-full font-[Helvetica] text-[12px] leading-[18px] font-medium hover:bg-white hover:text-black mr-2 w-[139.83px]">New Men&apos;s Shoes</Button>
      <Button variant="outline" className="bg-white text-[#111111] rounded-full font-[Helvetica] text-[12px] leading-[18px] font-medium hover:bg-white hover:text-black mr-2 w-[153.08px]">New Running Shoes</Button>
      <Button variant="outline" className="bg-white text-[#111111] rounded-full font-[Helvetica] text-[12px] leading-[18px] font-medium hover:bg-white hover:text-black mr-2 w-[140.92px]">Best Men&apos;s Shoes</Button>
      <Button variant="outline" className="bg-white text-[#111111] rounded-full font-[Helvetica] text-[12px] leading-[18px] font-medium hover:bg-white hover:text-black mr-2 w-[145.64px]">New Jordan Shoes</Button>
      <Button variant="outline" className="bg-white text-[#111111] rounded-full font-[Helvetica] text-[12px] leading-[18px] font-medium hover:bg-white hover:text-black mr-2 w-[159.11px]">Best Women&apos;s Shoes</Button>
      <Button variant="outline" className="bg-white text-[#111111] rounded-full font-[Helvetica] text-[12px] leading-[18px] font-medium hover:bg-white hover:text-black mr-2 w-[155.47px]">Best Training & Gym</Button>
    </div>
  </div>





</div>
</div>

        </div>       
        </div>
    </div>
      <Footer />      </div>
  )
}

export default NewFeatured;
