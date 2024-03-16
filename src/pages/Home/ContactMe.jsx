import { FaPhone, FaTelegram } from "react-icons/fa";
import { IoIosMail } from "react-icons/io";
import emailjs from '@emailjs/browser';
import { useRef } from "react";
const ContactMe = () => {
    const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_edxgm3o', 'template_zzhanm7', form.current, 'HzBQ4UNihgPzQs0ZM')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
  };
    return (
        <div id="contact" className="flex flex-col md:flex-row gap-2 lg:px-28 mb-20 mx-2">
            <div className="text-white lg:w-[45%]">
                <h2 className="text-4xl font-semibold mb-3">Contact me</h2>
                <div className="flex gap-2 items-center mb-3"><IoIosMail className="text-2xl text-[#DE1945]"/><p>joymahmudiucse@gmail.com</p></div>
                <div className="flex gap-2 items-center mb-3"> <FaPhone className="text-2xl text-[#DE1945]"></FaPhone><p>01926126586</p></div>
               <div className="flex gap-2 items-center "><FaTelegram className="text-2xl text-[#DE1945]"></FaTelegram><p>01303518477</p></div>
                
            </div>
            <div className="md:w-[55%]">
            <form ref={form} onSubmit={sendEmail} className="space-y-5">
                <input type="text" name="user_name" placeholder="Your name" className="px-2 py-2 w-full rounded-md bg-[#344966] text-white"/>
                <input type="email" name="user_email" placeholder="Your Email" className="px-2 py-2 w-full rounded-md bg-[#344966] text-white"/>
                <textarea name="message" id="" placeholder="Write your message here"  className="p-2 w-full rounded-md bg-[#344966] text-white" rows="4"></textarea>
                <button type="submit" className="px-5 py-2 rounded-md bg-[#DE1945] text-white hover:scale-110 duration-300">Submit</button>
                </form>
            </div>
        </div>
    );
};

export default ContactMe;