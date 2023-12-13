
//import img from '../../../assets/joyBgRemodved.png'
import { FaBook, FaGraduationCap } from "react-icons/fa";
import htmlIcon from '../../../assets/HTML.svg'
import cssIcon from '../../../assets/CSS.svg'
import javascriptIcon from '../../../assets/JavaScript.svg'
import tailIcon from '../../../assets/TailwindCSS-Dark.svg'
import reactIcon from '../../../assets/React-Dark.svg'
import expressIcon from '../../../assets/ExpressJS-Dark.svg'
import mongoIcon from '../../../assets/MongoDB.svg'
import firebaseIcon from '../../../assets/Firebase-Dark.svg'

const Skill = () => {
    return (
        <div className=" mt-10 lg:mt-20 mx-2">
            <div className=" container mx-auto">
                <div className="mb-5">
                    <h2 className=" text-center text-[#DE1945] text-4xl font-bold py-2">Skills and Education</h2>
                </div>
                <div className="flex flex-col md:flex-row justify-start lg:ml-20 ">
                    <div className="text-white w-[60%] mr-5 mb-5">
                        <h2 className="text-4xl font-semibold mb-5 border-b-2 inline-block border-b-[#DE1945]">Skills</h2>
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
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                            <div className="flex gap-2 p-2 hover:-translate-y-1 duration-500 items-end border-[2px] rounded-md border-[#344966] w-[400px] lg:w-full">

                                <img className="w-[60px]" src={htmlIcon} alt="" />
                                <div className="w-full">
                                    <p>HTML</p>
                                    <progress className="progress progress-error w-56 mb-2" value={90} max="100"></progress>
                                </div>
                            </div>
                            <div className="flex gap-2 p-2 hover:-translate-y-1 duration-500 items-end border-[2px] rounded-md border-[#344966]  w-[400px] lg:w-full">

                                <img className="w-[60px]" src={cssIcon} alt="" />
                                <div>
                                    <p>CSS</p>
                                    <progress className="progress progress-error w-56 mb-2" value="80" max="100"></progress>
                                </div>
                            </div>
                            <div className="flex gap-2 p-2 hover:-translate-y-1 duration-500 items-end border-[2px] rounded-md border-[#344966]  w-[400px] lg:w-full">

                                <img className="w-[60px]" src={javascriptIcon} alt="" />
                                <div>
                                    <p>JAVASCRIPT</p>
                                    <progress className="progress progress-error w-56 mb-2" value="80" max="100"></progress>
                                </div>
                            </div>
                            <div className="flex gap-2 p-2 hover:-translate-y-1 duration-500 items-end border-[2px] rounded-md border-[#344966]  w-[400px] lg:w-full">

                                <img className="w-[60px]" src={tailIcon} alt="" />
                                <div>
                                    <p>TAILWIND CSS</p>
                                    <progress className="progress progress-error w-56 mb-2" value="60" max="100"></progress>
                                </div>
                            </div>
                            <div className="flex gap-2 p-2 hover:-translate-y-1 duration-500 items-end border-[2px] rounded-md border-[#344966] w-[400px] lg:w-full">

                                <img className="w-[60px]" src={reactIcon} alt="" />
                                <div>
                                    <p>REACT</p>
                                    <progress className="progress progress-error w-56 mb-2" value="70" max="100"></progress>
                                </div>
                            </div>
                            <div className="flex gap-2 p-2 hover:-translate-y-1 duration-500 items-end border-[2px] rounded-md border-[#344966] w-[400px] lg:w-full">

                                <img className="w-[60px]" src={expressIcon} alt="" />
                                <div>
                                    <p>EXPRESS JS</p>
                                    <progress className="progress progress-error w-56 mb-2" value="50" max="100"></progress>
                                </div>
                            </div>
                            <div className="flex gap-2 p-2 hover:-translate-y-1 duration-500 items-end border-[2px] rounded-md border-[#344966] w-[400px] lg:w-full">

                                <img className="w-[60px]" src={mongoIcon} alt="" />
                                <div>
                                    <p>MONGO DB</p>
                                    <progress className="progress progress-error w-56 mb-2" value="50" max="100"></progress>
                                </div>
                            </div>
                            <div className="flex gap-2 p-2 hover:-translate-y-1 duration-500 items-end border-[2px] rounded-md border-[#344966] w-[400px] lg:w-full ">

                                <img className="w-[60px]" src={firebaseIcon} alt="" />
                                <div>
                                    <p>FIREBASE</p>
                                    <progress className="progress progress-error w-56 mb-2" value="60" max="100"></progress>
                                </div>
                            </div>

                        </div>

                    </div>
                    {/* education section */}
                    <div className="text-white lg:w-[40%]">
                        <h2 className="text-4xl font-semibold border-b-2 border-b-[#DE1945] inline-block mb-5">Education</h2><br />
                        <div className=" border-2 border-[#344966] p-2 w-full rounded-md">
                            <div className="flex items-center gap-2"><div className=" border-2 rounded-full w-[30px] h-[30px] flex items-center justify-center"><FaGraduationCap /></div>
                                <h2 className="text-2xl">Bachelor</h2></div>

                            <div className="ml-10">
                                <h2 className="flex text-xl gap-2 items-center"> <p>Bsc. in CSE</p>  </h2>
                                <p className="mb-5">Islamic University Kustia,Bangladesh.</p>
                            </div>
                            <div className="flex items-center gap-2"><div className=" border-2 rounded-full w-[30px] h-[30px] flex items-center justify-center"><FaBook /></div>
                                <h2 className="text-2xl">HSC</h2>
                            </div>
                            <div className="ml-10">
                                <h2 className="flex text-xl gap-2 items-center"> <p>2015</p>  </h2>
                                <p className="mb-5">Govt. KC college, jhenaidah</p>
                            </div>
                        </div>



                    </div>
                </div>
            </div>
        </div>
    );
};

export default Skill;