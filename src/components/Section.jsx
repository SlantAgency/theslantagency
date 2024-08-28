import React from 'react'
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import ScrollTrigger from 'gsap/dist/ScrollTrigger';
gsap.registerPlugin(ScrollTrigger);

const Section = () => {
  useGSAP(() => {
    const t1 = gsap.timeline({
        scrollTrigger: {
          trigger: ".Boys",
          markers: false,
          start: "top 120",
          end: "bottom 10",
          scrub: 2,
        }
      })
      t1.from(".girls", {
        y: 200,
        opacity: 1,
        duration: 1,
        scrub: 2,
      })  

      const t2 = gsap.timeline({
        scrollTrigger: {
          trigger: ".girls2",
          markers: false,
          start: "top 220",
          end: "bottom 0",
          scrub: 4,
        }
      })
      t2.from(".girls2", {
        y: -200,
        opacity: 1,
        duration: 1,
        scrub: 2,
      })    
    })
  return (
    <div id='about' className='Boys w-full min-h-screen bg-white'>
      <div className="Left relative bg-hero-transparent h-full md:flex">
                <div className="twf-container text-center md:mx-2 md:mt-[10vh]">
                    <h1
                        data-w-id="e04cfbbc-c687-cf90-d90b-4e76b4810bd1"
                        className="text-zinc-700 text-4xl sm:text-6xl font-bold text-center md:text-start lg:mx-28 tracking-tighter leading-snug pt-[10vh] pb-6 sm:pb-12"
                    >
                        Who&nbsp;We&nbsp;Are
                        <br />
                    </h1>
                    <p
                        data-w-id="0bb43f52-8070-3db7-bdc7-a1cf88bc3ce8"
                        className="paragraph-4 text-zinc-500 text-base lg:text-lg font-semibold mb-8 tracking-tighter text-center md:text-start lg:ml-28"
                    >
                        The Heights Agency is a market-leading management and marketing company for OnlyFans creators. We partner with passionate creators to help them enhance their online presence and monetize their audience. We're experts at viral social media marketing and have helped our creators earn millions of dollars.  
                    </p>
                </div>
                <div className='sm:relative'>
                  <img className='girls sm:relative z-10 w-44 h-48 mx-8 mt-[10vh] rounded-3xl border-2 border-black sm:w-56 sm:h-80 sm:mx-28 md:mr-[48vh] md:h-[60vh] md:w-[36vh] md:mt-[32vh] lg:mr-[110vh] lg:w-[42vh] lg:mt-[10vh] lg:h-[60vh]' src="https://cdn.prod.website-files.com/62451d7a6e48bc35f488aa25/6266c5ce21cef787f00e7e1a_5E148421-8059-4243-90CE-A266A1E53A99-p-500.jpeg" alt="" />
                  <img className='girls2 absolute z-5 w-44 h-48 mx-24 mt-[-6vh] rounded-3xl border-2 border-black sm:w-56 sm:h-60 sm:mx-64 sm:mt-[-39vh] md:h-[54vh] md:w-[34vh] md:mt-[-80vh] lg:w-[38vh] lg:h-[54vh] lg:mt-[-50vh] lg:mx-[48vh]' src="https://cdn.prod.website-files.com/62451d7a6e48bc35f488aa25/6266dc1ceb8d4878b6b5f8e6_426_n-p-500.jpeg" alt="" />
                </div>
      </div>
    </div>
  )
}

export default Section