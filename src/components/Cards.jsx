import React from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import ScrollTrigger from 'gsap/dist/ScrollTrigger';
gsap.registerPlugin(ScrollTrigger);

const Cont = () => {
  useGSAP(() => {
    const t1 = gsap.timeline({
        scrollTrigger: {
          trigger: ".LandingPage",
          markers: false,
          start: "top 0",
          end: "bottom ",
          scrub: 2,
        }
      })
      t1.from(".Card", {
        y: -80,
        opacity: 1,
        duration: 1,
        scrub: 2,
      })   
    })
  
  return (
    <div className='w-full h-full relative z-20 flex justify-center items-center'>
        <div className="Cards hidden sm:hidden md:block lg:block mx-2  sm:mt-[-40px]">
            <div className='border-4 mb-4 border-white rounded-3xl h-[26vh] w-[20vh] md:h-[h-28vh] md:w-[14vh] lg:h-[44vh] lg:w-[30vh] lg:mx-2'>
                <img className='w-full h-full object-cover rounded-2xl opacity-100' src="https://cdn.prod.website-files.com/62451d7a6e48bc35f488aa25/65a88bb09a96b4844beb4d5d_%5Bimage%5D%20-%204406483-p-800.jpeg" alt="" />
            </div>
            <div className='border-4 mb-4 border-white rounded-3xl h-[26vh] w-[20vh] md:h-[h-28vh] md:w-[14vh]  lg:h-[44vh] lg:w-[30vh] lg:mx-2'>
                <img className='w-full h-full object-cover rounded-2xl opacity-100' src="https://dl.imgdrop.io/file/aed8b140-8472-4813-922b-7ce35ef93c9e/2024/08/27/IMG-20240825-WA0006a4b6ab5438901fb1.md.jpeg" alt="" />
            </div>
        </div>
        <div className="Card hidden sm:hidden md:block lg:block mx-2 mt-[-40px]">
            <div className='border-4 mb-4 border-white rounded-3xl h-[26vh] w-[20vh] md:h-[h-28vh] md:w-[14vh] lg:h-[44vh] lg:w-[30vh] lg:mx-2'>
                <img className='w-full h-full object-cover rounded-2xl opacity-100' src="https://cdn.prod.website-files.com/62451d7a6e48bc35f488aa25/6549a284ac74c7023b19739a_%5Bimage%5D%20-%208623354-p-800.jpeg" alt="" />
            </div>
            <div className='border-4 mb-4 border-white rounded-3xl h-[26vh] w-[20vh] md:h-[h-28vh] md:w-[14vh] lg:h-[44vh] lg:w-[30vh] lg:mx-2'>
                <img className='w-full h-full object-cover rounded-2xl opacity-100' src="https://cdn.prod.website-files.com/62451d7a6e48bc35f488aa25/6446ccb5810868c3f7146b17_326764969_753850086364194_585687702731970490_n-p-800.jpg" alt="" />
            </div>
        </div>
        <div className="Cards mx-2 mt-[-40px]">
            <div className='border-4 mb-4 border-white rounded-3xl h-[26vh] w-[20vh] md:h-[h-28vh] md:w-[14vh] lg:h-[44vh] lg:w-[30vh] lg:mx-2'>
                <img className='w-full h-full object-cover rounded-2xl opacity-100' src="https://dl.imgdrop.io/file/aed8b140-8472-4813-922b-7ce35ef93c9e/2024/08/27/IMG-20240825-WA000406fc4474d78c1884.md.jpeg" alt="" />
            </div>
            <div className='border-4 mb-4 border-white rounded-3xl h-[26vh] w-[20vh] md:h-[h-28vh] md:w-[14vh] lg:h-[44vh] lg:w-[30vh] lg:mx-2'>
                <img className='w-full h-full object-cover rounded-2xl opacity-100' src="https://dl.imgdrop.io/file/aed8b140-8472-4813-922b-7ce35ef93c9e/2024/08/27/IMG-20240825-WA0005d259f476181818dc.md.jpeg" alt="" />
            </div>
        </div>
        <div className="Card hidden sm:hidden md:block lg:block mx-2 mt-[-40px]">
            <div className='border-4 mb-4 border-white rounded-3xl h-[26vh] w-[20vh] md:h-[h-28vh] md:w-[14vh] lg:h-[44vh] lg:w-[30vh] lg:mx-2'>
                <img className='w-full h-full object-cover rounded-2xl opacity-100' src="https://dl.imgdrop.io/file/aed8b140-8472-4813-922b-7ce35ef93c9e/2024/08/27/IMG-20240825-WA0000008dfb6748998cac.md.jpeg" alt="" />
            </div>
            <div className='border-4 mb-4 border-white rounded-3xl h-[26vh] w-[20vh] md:h-[h-28vh] md:w-[14vh] lg:h-[44vh] lg:w-[30vh] lg:mx-2'>
                <img className='w-full h-full object-cover rounded-2xl opacity-100' src="https://dl.imgdrop.io/file/aed8b140-8472-4813-922b-7ce35ef93c9e/2024/08/27/IMG-20240825-WA00015628790defcdb0ff.md.jpeg" alt="" />
            </div>
        </div>
        <div className="Cards mx-2 mt-[-40px]">
            <div className='border-4 mb-4 border-white rounded-3xl h-[26vh] w-[20vh] md:h-[h-28vh] md:w-[14vh] lg:h-[44vh] lg:w-[30vh] lg:mx-2'>
                <img className='w-full h-full object-cover rounded-2xl opacity-100' src="https://cdn.prod.website-files.com/62451d7a6e48bc35f488aa25/6254d1fd3432896eb2fc6a0d_5-p-800.jpeg" alt="" />
            </div>
            <div className='border-4 mb-4 border-white rounded-3xl h-[26vh] w-[20vh] md:h-[h-28vh] md:w-[14vh] lg:h-[44vh] lg:w-[30vh] lg:mx-2'>
                <img className='w-full h-full object-cover rounded-2xl opacity-100' src="https://cdn.prod.website-files.com/62451d7a6e48bc35f488aa25/6266c4901d6b88335fc3823f_IMG_8463-p-800.jpeg" alt="" />
            </div>
        </div>
        <div className="Card hidden sm:hidden md:block lg:block mx-2 mt-[-40px]">
            <div className='border-4 mb-4 border-white rounded-3xl h-[26vh] w-[20vh] md:h-[h-28vh] md:w-[14vh] lg:h-[44vh] lg:w-[30vh] lg:mx-2'>
                <img className='w-full h-full object-cover rounded-2xl opacity-100' src="https://dl.imgdrop.io/file/aed8b140-8472-4813-922b-7ce35ef93c9e/2024/08/27/IMG-20240825-WA000226ed01d5f56c7b85.md.jpeg" alt="" />
            </div>
            <div className='border-4 mb-4 border-white rounded-3xl h-[26vh] w-[20vh] md:h-[h-28vh] md:w-[14vh] lg:h-[44vh] lg:w-[30vh] lg:mx-2'>
                <img className='w-full h-full object-cover rounded-2xl opacity-100' src="https://cdn.prod.website-files.com/62451d7a6e48bc35f488aa25/640969678291c66c64fe64f5_324127437_521917473337017_1327542431294520685_n-p-800.jpg" alt="" />
            </div>
        </div>
    </div>
  )
}

export default Cont


// {images.map((src, index) => (
//     <div key={index} className={`border-4 mb-4 my-16 border-white m-2 rounded-3xl h-[26vh] w-[20vh] md:h-[h-28vh] md:w-[14vh] lg:h-[44vh] lg:w-[30vh] lg:mx-2 ${index % 2 === 0 ? 'mt-0' : 'mt-[-40px] '} ${index % 1,3,5 === 0 ? 'mt-0' : 'mt-[-40px]'}`}>
//       <img className="w-full h-full object-cover rounded-2xl opacity-100" src={src} alt={` Image ${index + 1}`} />
//     </div>
//   ))}