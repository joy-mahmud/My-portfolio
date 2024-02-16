
//import img from '../../../assets/joyBgRemodved.png'

import htmlIcon from '../../../assets/HTML.svg'
import cssIcon from '../../../assets/CSS.svg'
import javascriptIcon from '../../../assets/JavaScript.svg'
import tailIcon from '../../../assets/TailwindCSS-Dark.svg'
import reactIcon from '../../../assets/React-Dark.svg'
import expressIcon from '../../../assets/ExpressJS-Dark.svg'
import mongoIcon from '../../../assets/MongoDB.svg'
import firebaseIcon from '../../../assets/Firebase-Dark.svg'
import { useEffect } from "react";
import AOs from 'aos';
import 'aos/dist/aos.css'; // Import AOS CSS
const Skill = () => {
    useEffect(() => {
        AOs.init({

            offset: 150,
            duration: 1000,

        });
    }, []);
    return (
        <div className=" mt-10 lg:mt-20 mx-2">
            <div className=" container mx-auto">
                <div className="mb-5">
                    <h2 className=" text-center text-[#DE1945] text-4xl font-bold py-2">My Skills</h2>
                </div>
              
                    
                    
                        {/* <p>HTML</p>
                        <progress className="progress progress-error w-56 mb-2" value={90} max="100"></progress>
                        <p>CSS</p>
                        <progress className="progress progress-error w-56 mb-2" value="70" max="100"></progress>
                        <p>TAILWIND</p>
                        <progress className="progress progress-error w-56 mb-2" value="65" max="100"></progress>
                        <p>JAVASCRIPT</p>
                        <progress className="progress progress-error w-56 mb-2" value="60" max="100"></progress>
                        <p>REACT</p>
                        <progress className="progress progress-error w-56 mb-2" value="70" max="100"></progress> */}
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3 text-white overflow-hidden w-full">
                            <div data-aos="flip-left" className="flex gap-2 p-2 hover:-translate-y-1 duration-500 items-end border-[2px] rounded-md border-[#344966] lg:w-full">

                                <img className="w-[60px]" src={htmlIcon} alt="" />
                                <div className="w-full">
                                    <p>HTML</p>
                                    <progress className="progress progress-error w-56 mb-2" value={90} max="100"></progress>
                                </div>
                            </div>
                            <div data-aos="flip-left"  className="flex gap-2 p-2 hover:-translate-y-1 duration-500 items-end border-[2px] rounded-md border-[#344966] lg:w-full">

                                <img className="w-[60px]" src={cssIcon} alt="" />
                                <div>
                                    <p>CSS</p>
                                    <progress className="progress progress-error w-56 mb-2" value="80" max="100"></progress>
                                </div>
                            </div>
                            <div data-aos="flip-left"  className="flex gap-2 p-2 hover:-translate-y-1 duration-500 items-end border-[2px] rounded-md border-[#344966] lg:w-full">

                                <img className="w-[60px]" src={javascriptIcon} alt="" />
                                <div>
                                    <p>JAVASCRIPT</p>
                                    <progress className="progress progress-error w-56 mb-2" value="80" max="100"></progress>
                                </div>
                            </div>
                            <div data-aos="flip-left"  className="flex gap-2 p-2 hover:-translate-y-1 duration-500 items-end border-[2px] rounded-md border-[#344966] lg:w-full">

                                <img className="w-[60px]" src={tailIcon} alt="" />
                                <div>
                                    <p>TAILWIND CSS</p>
                                    <progress className="progress progress-error w-56 mb-2" value="60" max="100"></progress>
                                </div>
                            </div>
                            <div data-aos="flip-left"  className="flex gap-2 p-2 hover:-translate-y-1 duration-500 items-end border-[2px] rounded-md border-[#344966] lg:w-full">

                                <img className="w-[60px]" src={reactIcon} alt="" />
                                <div>
                                    <p>REACT</p>
                                    <progress className="progress progress-error w-56 mb-2" value="70" max="100"></progress>
                                </div>
                            </div>
                            <div data-aos="flip-left"  className="flex gap-2 p-2 hover:-translate-y-1 duration-500 items-end border-[2px] rounded-md border-[#344966] lg:w-full">

                                <img className="w-[60px]" src={expressIcon} alt="" />
                                <div>
                                    <p>EXPRESS JS</p>
                                    <progress className="progress progress-error w-56 mb-2" value="50" max="100"></progress>
                                </div>
                            </div>
                            <div data-aos="flip-left"  className="flex gap-2 p-2 hover:-translate-y-1 duration-500 items-end border-[2px] rounded-md border-[#344966] lg:w-full">

                                <img className="w-[60px]" src={mongoIcon} alt="" />
                                <div>
                                    <p>MONGO DB</p>
                                    <progress className="progress progress-error w-56 mb-2" value="50" max="100"></progress>
                                </div>
                            </div>
                            <div data-aos="flip-left"  className="flex gap-2 p-2 hover:-translate-y-1 duration-500 items-end border-[2px] rounded-md border-[#344966] lg:w-full ">

                                <img className="w-[60px]" src={firebaseIcon} alt="" />
                                <div>
                                    <p>FIREBASE</p>
                                    <progress className="progress progress-error w-56 mb-2" value="60" max="100"></progress>
                                </div>
                            </div>

                        </div>

                    </div>
                    {/* education section */}
                    
                </div>
        
    );
};

export default Skill;