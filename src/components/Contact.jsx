import {useRef} from 'react';
import emailjs from '@emailjs/browser';

const Contact = () => {
    const form = useRef()

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm('service_x2765yd',
            'template_bnvzidm', form.current,
            'yDP5SNr43f_34zCO1')
            .then((result) => {
                console.log(result.text);
            }, (error) => {
                console.log(error.text);
            });
            e.target.reset();
    };

  return (
    <section>
        <div id='contact' className="w-full h-screen bg-white text-black">
            <div className='h-full'>
                <div className='text-center text-[3.5vh] sm:text-5xl pt-20 '>
                <h2>
                    Ready to take your career <br />
                    <span className='font-bold'>To the next level?</span>
                    <p className='text-[1.9vh] mt-[1.5vh] mb-[3vh]'>We want to hear from you! Fill out the form below</p>
            <button className='border-2 border-black bg-black text-center text-white text-lg py-3 px-8 rounded-full hover:text-black hover:bg-white transition duration-300'>Contact Us</button>
                </h2>
                </div>
            
            <form ref={form} onSubmit={sendEmail} className='flex-row sm:mx-44 md:mx-[40vh] lg:mx-[69vh] 3xl:py-12'>
                <div className=''>
                <h5 className='mt-2 mx-3 text-base'>Name</h5>
                <input className='border-2 w-[40vh] lg:w-[70vh] 3xl:w-[40vh] 3xl:my-[0.6vh] h-10 rounded-full border-gray-400 flex mx-3 px-2' type="text"
                placeholder='Full Name' name='user_name' required />

                <h5 className='mt-2 mx-3 text-base'>Phone Number</h5>
                <input className='border-2 w-[40vh] lg:w-[70vh] 3xl:w-[40vh] 3xl:my-[0.6vh] h-10 rounded-full border-gray-400 flex mx-3 px-2' type="tel"
                placeholder='123-456-7890' name='user_number' pattern="\d{10}" maxLength="10" minLength="10" required />
                
                <h5 className='mt-2 mx-3 text-base'>Instagram Handle</h5>
                <input className='border-2 w-[40vh] lg:w-[70vh] 3xl:w-[40vh] 3xl:my-[0.6vh] h-10 rounded-full border-gray-400 flex mx-3 px-2' type="text"
                placeholder='@theslantagency' name='user_ig' required />

                <h5 className='mt-2 mx-3 text-base'>Twitter handle</h5>
                <input className='border-2 w-[40vh] lg:w-[70vh] 3xl:w-[40vh] 3xl:my-[0.6vh] h-10 rounded-full border-gray-400 flex mx-3 px-2' type="text"
                placeholder='@theslantagency' name='user_tw' required />

                <h5 className='mt-2 mx-3 text-base'>Email address</h5>
                <input className='border-2 w-[40vh] lg:w-[70vh] 3xl:w-[40vh] 3xl:my-[0.6vh] h-10 rounded-full border-gray-400 flex mx-4 px-2' type="email"
                placeholder='Email' name='user_email' required />
                </div>

                <button type='submit' className='border-2 border-gray-500 text-lg py-2 px-4 mx-4 my-2 rounded-full hover:bg-black hover:text-white transition duration-300'>Send Message</button>

            </form>
            </div>
        </div>
    </section>
  )
}

export default Contact