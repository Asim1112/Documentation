import React from 'react'
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { ShoppingCart } from "lucide-react";

const page = () => {
  return (
    
    <div> <Header />
    
  <div className="flex justify-center">
  <div className="flex justify-center w-[1440px] h-[1173px] pt-36">
            
    <div className="flex justify-center gap-32">
      
    <div>
        <Image src="pic31.svg" alt="pic31" width={653} height={653}/>
    </div>
  <div className="space-y-10">
      <div className='w-[367px] h-[96px]'>
      <p className="font-poppins text-[48px] font-semibold leading-[48px]">Nike Air Force 1 PLT.AF.ORM </p>
      </div>
      
      
      <div className="w-[374.92px] h-[413px] space-y-10">
      <div className="font-poppins text-[15px] leading-[28px] font-normal">
  <p>
    Turn style on its head with this crafted take on the Air Jordan 1 Mid. Its &#34;inside out&#34;-inspired 
    construction, including unique layering and exposed foam accents, ups the ante on this timeless Jordan Brand 
    silhouette. Details like the deco stitching on the Swoosh add coveted appeal, while the unexpected shading, 
    rich mixture of materials and aged midsole aesthetic give this release an artisan finish.
  </p>
</div>
      <p className="font-poppins text-[36px] leading-[28px] font-medium ">₹ 8 695.00</p>
      <Button className='w-[174.42px] h-[44px] rounded-full'><ShoppingCart width={22.36} height={16.3}
       className="font-poppins text-[15px] leading-[24px] font-medium"/>Add To Cart</Button>
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
