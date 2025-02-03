import React from 'react'
import Image from "next/image";

const SpecificFooter = () => {
  return (
<div className="flex justify-center">
<div className="w-[1411px] h-[51px] flex justify-between bg-black px-4">


<div className='flex items-center'>
    <Image src="tracker.svg" alt="location-image" width={6.39} height={9} />
    <p className="font-[Helvetica Neue] font-normal pl-2 text-white text-[9px] leading-[24px]">Pakistan</p>
    <div className="flex gap-4 font-[Helvetica Neue] text-[9px] pl-8 font-normal leading-[24px] text-[rgba(141,141,141,1)]">
        <p>© 2023 NIKE, Inc. All Rights Reserved</p>
        <p>Terms of Use</p>
        <p>Terms of Sale</p>
        <p>Privacy Policy</p>
    </div>
</div>

<div className="flex gap-2 items-center">
        <div><Image src="card-1.svg" alt="card-image1" width={45} height={27} /></div>
        <div><Image src="card-2.svg" alt="card-image2" width={45} height={27} /></div>
        <div><Image src="card-3.svg" alt="card-image3" width={45} height={27} /></div>
        <div><Image src="card-4.svg" alt="card-image4" width={45} height={27} /></div>
        <div><Image src="card-5.svg" alt="card-image5" width={45} height={27} /></div>
        <div><Image src="card-6.svg" alt="card-image6" width={45} height={27} /></div>
        <div><Image src="card-7.svg" alt="card-image7" width={45} height={27} /></div>
        <div><Image src="card-8.svg" alt="card-image8" width={45} height={27} /></div>
        <div><Image src="card-9.svg" alt="card-image9" width={54} height={18} /></div>
        <div><Image src="card-10.svg" alt="card-image10" width={54} height={15} /></div>
        <div><Image src="card-11.svg" alt="card-image11" width={45} height={27} /></div>
</div>
        

    
</div>   
    
    
</div>
  )
}

export default SpecificFooter
