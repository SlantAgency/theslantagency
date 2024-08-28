import React from 'react';
const mm = gsap.matchMedia();
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import ScrollTrigger from 'gsap/dist/ScrollTrigger';
gsap.registerPlugin(ScrollTrigger);
import { useInView } from 'react-intersection-observer';

const Serve = () => {
    const { ref: cardRef1, inView: cardInView1 } = useInView({ triggerOnce: true });
    const { ref: cardRef2, inView: cardInView2 } = useInView({ triggerOnce: true });
    const { ref: cardRef3, inView: cardInView3 } = useInView({ triggerOnce: true });
    const { ref: cardRef4, inView: cardInView4 } = useInView({ triggerOnce: true });
    const { ref: cardRef5, inView: cardInView5 } = useInView({ triggerOnce: true });
    useGSAP(() => {
        mm.add("(min-width: 768px)", () => { 
        const t3 = gsap.timeline({
            scrollTrigger: {
              trigger: ".Child",
              markers: false,
              start: "top 20",
              end: "bottom 10",
              scrub: 0.2,
            }
          })
          t3.fromTo(".Child2", { y: 0 }, { y: 900, duration: 10 });
        }),
        mm.add("(min-width: 1024px)", () => { 
        const t3 = gsap.timeline({
            scrollTrigger: {
              trigger: ".Child",
              markers: false,
              start: "top 20",
              end: "bottom 10",
              scrub: 0.2,
            }
          })
          t3.fromTo(".Child2", { y: 0 }, { y: 800, duration: 10 });
        })
        mm.add("(min-width: 1600px)", () => { 
            const t4 = gsap.timeline({
                scrollTrigger: {
                  trigger: ".Child",
                  markers: false,
                  start: "top 20",
                  end: "bottom 10",
                  scrub: 0.3,
                }
              })
              t4.fromTo(".Child2", { y: 300 }, { y: 1500, duration: 10 });
            })
        return () => mm.kill(); // Clean up the matchMedia instance
    })
    return (
        <div id='services' className='w-full h-full'>
            <div className="Child Left relative bg-hero-transparent md:flex md:items-center md:justify-center mt-[8vh] z-10">
                <div className="Child2 twf-container px-4 text-center md:text-start md:mx-4 lg:mx-32">
                    <h1
                        data-w-id="e04cfbbc-c687-cf90-d90b-4e76b4810bd1"
                        className="text-white text-4xl font-bold mb-6 text-center sm:text-6xl lg:text-6xl md:mt-[-75vh] lg:mt-[-70vh] leading-snug"
                    >
                        What&nbsp;we&nbsp;Do
                        <br />
                    </h1>
                    <p
                        data-w-id="0bb43f52-8070-3db7-bdc7-a1cf88bc3ce8"
                        className="paragraph-4 text-white text-lg font-semibold mb-8 tracking-tighter text-center md:text-start"
                    >
                        360° Degree Talent Development
                    </p>
                    <button className='text-lg sm:text-xl border rounded-full px-6 py-2 text-white bg-black hover:text-black hover:bg-white transition duration-300'>Learn More</button>
                </div>
                {/* right side  */}
                <div className="Right flex flex-col items-center lg:pt-10 lg:pr-4">
                    <div
                        ref={cardRef1}
                        className={`wwd-right-card bg-black rounded-lg shadow-lg transition-opacity duration-500 ${
                            cardInView1 ? 'opacity-100' : 'opacity-0'
                        }`}
                    >
                        <div className="wwd-right-card-icons sm:flex">
                            <img src="https://cdn.prod.website-files.com/62451d7a6e48bc35f488aa25/62651618c0c11b78c8e1437d_ic-marketing.svg" loading="lazy" alt="" className="image-3 w-32 sm:w-80 md:w-[60vh] lg:w-[44vh] lg:ml-36 lg:mt-[-6vh] mx-auto sm:mx-4 sm:mt-[-4vh] md:mt-[-8vh] 3xl:w-[32vh] 3xl:mt-[2vh] 3xl:mr-[2vh]"/>
                            <div className="wwd-right-card-desc">
                                <h1 className="heading-6 text-2xl sm:text-3xl font-bold m-4 text-center sm:text-start sm:mx-4 3xl:mt-[4vh] 3xl:text-5xl">Marketing</h1>
                                <p className="paragraph-6 lg:mr-32 text-center sm:text-start mx-4 sm:mx-4 text-zinc-400">
                                    We pick the best platforms to generate the highest ROI. This includes using Tiktok, Instagram, Twitter, and Reddit to strategically convert to your OnlyFans. We have the network and strategies to grow our clients and reach their target audience.
                                </p>
                            </div>
                        </div>
                    </div>
                    <div
                        ref={cardRef2}
                        className={`wwd-right-card bg-black p-4 rounded-lg shadow-lg transition-opacity duration-500 ${
                            cardInView2 ? 'opacity-100' : 'opacity-0'
                        }`}
                    >
                        <div className="wwd-right-card-icons sm:flex">
                            <img src="https://cdn.prod.website-files.com/62451d7a6e48bc35f488aa25/626516183cc56bf420fc7a37_ic-customer-acquisition.svg" loading="lazy" alt="" className="image-3 w-32 sm:w-80 md:w-[60vh] lg:w-[45vh] lg:ml-36 lg:mt-[-12vh] mx-auto sm:mx-4 sm:mt-[-10vh] md:mt-[-16vh] 3xl:w-[32vh] 3xl:mt-[2vh] 3xl:mr-[2vh]"/>
                            <div className="wwd-right-card-desc">
                                <h1 className="heading-6 text-2xl sm:text-3xl font-bold m-4 text-center sm:text-start sm:mx-4 3xl:mt-[6vh] 3xl:text-5xl">Custom Acquisition</h1>
                                <p className="paragraph-6 lg:mr-32 text-center sm:text-start sm:mx-4 text-zinc-400">
                                We develop individual relationships with your fans to convert them into paying customers. We handle all incoming messages and are experts at converting your fans into spenders using tested scripts and upsell techniques that we've developed throughout the years.
                                </p>
                            </div>
                        </div>
                    </div>
                    <div
                        ref={cardRef3}
                        className={`wwd-right-card bg-black p-4 rounded-lg shadow-lg transition-opacity duration-500 ${
                            cardInView3 ? 'opacity-100' : 'opacity-0'
                        }`}
                    >
                        <div className="wwd-right-card-icons sm:flex">
                            <img src="https://cdn.prod.website-files.com/62451d7a6e48bc35f488aa25/6265161830a5c2882ce8b460_ic-content-management.svg" loading="lazy" alt="" className="image-3 w-32 sm:w-80 md:w-[70vh] lg:w-[45vh] lg:ml-36 lg:mt-[-12vh] mx-auto sm:mx-4 sm:mt-[-10vh] md:mt-[-16vh] 3xl:w-[36vh] 3xl:mt-[2vh] 3xl:mr-14"/>
                            <div className="wwd-right-card-desc">
                                <h1 className="heading-6 text-2xl sm:text-3xl font-bold m-4 text-center sm:text-start sm:mx-4 2xl:text-5xl lg:mx-8 3xl:mt-[4vh] 3xl:text-5xl">Content Management</h1>
                                <p className="paragraph-6 lg:mr-32 text-center sm:text-start sm:mx-4 text-zinc-400 lg:mx-8">
                                All you need to do is provide us with your content, and we'll handle the rest! To maximize revenue, we have an entire team of copywriters, content managers, and writers who are responsible for posting, upselling in messages, and daily fan interaction. Our objective is to significantly enhance our clients' reach, impressions, and revenue.
                                </p>
                            </div>
                        </div>
                    </div>
                    <div
                        ref={cardRef4}
                        className={`wwd-right-card bg-black p-4 rounded-lg shadow-lg transition-opacity duration-500 ${
                            cardInView4 ? 'opacity-100' : 'opacity-0'
                        }`}
                    >
                        <div className="wwd-right-card-icons sm:flex">
                            <img src="https://cdn.prod.website-files.com/62451d7a6e48bc35f488aa25/62651619776abb2ef36e59d7_ic-social-media.svg" loading="lazy" alt="" className="image-3 w-32 sm:w-32 md:w-[28vh] lg:w-[23vh] lg:ml-36 lg:mt-[-2vh] mx-auto sm:mx-4 sm:mt-[1vh] md:mt-[-2vh] 3xl:w-[20vh] 3xl:mt-[2vh] 3xl:ml-[-10vh] 3xl:mr-[3vh]"/>
                            <div className="wwd-right-card-desc">
                                <h1 className="heading-6 text-2xl sm:text-3xl font-bold m-4 text-center sm:text-start sm:mx-4 3xl:mt-[4vh] 3xl:text-5xl">Social Media Management</h1>
                                <p className="paragraph-6 lg:mr-32 text-center sm:text-start sm:mx-4 text-zinc-400">
                                In order to maximize our clients' earning and growth potential, we advise and, in some cases, manage their social media for them.
                                </p>
                            </div>
                        </div>
                    </div>
                    <div
                        ref={cardRef5}
                        className={`wwd-right-card bg-black p-4 rounded-lg shadow-lg transition-opacity duration-500 ${
                            cardInView5 ? 'opacity-100' : 'opacity-0'
                        }`}
                    >
                        <div className="wwd-right-card-icons sm:flex">
                            <img src="https://cdn.prod.website-files.com/62451d7a6e48bc35f488aa25/6482dbea60f9ba2ad75affd4_sd.jpg" loading="lazy" alt="" className="image-3 w-36 sm:w-20 sm:h-28 sm:mx-2 md:w-[13vh] lg:w-20 lg:h-28 lg:ml-36 lg:mx-4 sm:mt-[2vh] lg:mt-4 md:h-28 md:mt-[2vh] mx-auto 3xl:w-[36vh] 3xl:h-[18vh] 3xl:mt-[3vh] 3xl:mr-4"/>
                            <div className="wwd-right-card-desc">
                                <h1 className="heading-6 text-2xl sm:text-3xl font-bold m-4 text-center sm:text-start sm:mx-6 3xl:mt-[4vh] 3xl:text-5xl">Leak Protection</h1>
                                <p className="paragraph-6 lg:mr-32 text-center sm:text-start sm:mx-6 text-zinc-400">
                                Our software crawls the internet 24/7 for brand copyright infringements. We submit DMCA takedown notices to social media platforms, hosting sites, tube sites, search engines, and ISPs that are hosting your stolen content to make sure your content is always protected.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Serve;
