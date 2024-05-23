import Image from 'next/image'
import React from 'react'


function HeroSection() {
    return (
        // <div className='bg-white'>
        //     <div className='bg-lime-100 m-10 rounded-lg'>
        //         <div className='flex justify-left'>
        //         <Image src='/text.png' width={200} height={200} alt='text logo' className='ml-20 h-auto w-auto'></Image>
        //         </div>
        //         <div className='flex justify-end'>
        //         <Image src='/girl.png' width={300} height={600} alt='girl' className='w-auto h-auto'></Image>
        //         </div>
        //     </div>
        // </div>
        <div className="flex items-center justify-center bg-lime-100 p-6 rounded-lg">
        <div className="max-w-2xl flex items-center">
          {/* Text Content */}
          <div className="text-left p-6">
            <h1 className="text-4xl font-bold">
              LET'S <br /> 
              EXPLORE <br /> 
              <span className="bg-yellow-300 px-2">UNIQUE</span> <br /> 
              CLOTHES.
            </h1>
            <p className="mt-4 text-lg">
              Live for influential and innovative fashion!
            </p>
            <button className="mt-6 bg-black text-white py-2 px-4 rounded hover:bg-gray-800">
              Shop Now
            </button>
          </div>
          {/* Image */}
          <div className="flex-shrink-0">
            <img 
              src="/girl.png" 
              alt="Unique Clothes"
              width={500}
              height={500} 
              className=" rounded-lg"
            />
          </div>
        </div>
      </div>
    )
}

export default HeroSection
