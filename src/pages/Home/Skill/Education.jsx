import { useEffect } from "react";
import { FaBook, FaGraduationCap } from "react-icons/fa";
import AOs from 'aos';
import 'aos/dist/aos.css'; // Import AOS CSS
const Education = () => {
    useEffect(() => {
        AOs.init({

            offset: 150,
            duration: 1000,

        });
    }, []);
    return (
        <div className="text-white mt-10 container mx-auto">
            <h2 className="text-center text-[#DE1945] text-4xl font-bold py-2">Education</h2><br />
            <div className=" border-2 border-[#344966] p-20 w-full rounded-md grid grid-cols-1 md:grid-cols-3 ">
                <div data-aos="zoom-in" className="flex flex-col items-center justify-center">
                    <div className=" border-2 rounded-full w-[100px] h-[100px] flex items-center justify-center"><FaGraduationCap className="text-5xl" />

                    </div>
                    <h2 className="text-4xl font-bold">Bachelor</h2>
                    <p>2017-2022</p>
                    <h2 className="flex text-xl gap-2 items-center"> <p>computer science and Eng.</p>  </h2>
                    <p className="mb-5">Islamic University Kustia,Bangladesh.</p>
                </div>

                <div data-aos="zoom-in" className="flex flex-col items-center justify-center">
                    <div className=" border-2 rounded-full w-[100px] h-[100px] flex items-center justify-center"><FaGraduationCap className="text-5xl" />

                    </div>
                    <h2 className="text-4xl font-bold">Masters</h2>
                    <p>2023-2024</p>
                    <h2 className="flex text-xl gap-2 items-center"> <p>computer science and Eng.</p>  </h2>
                    <p className="mb-5">Islamic University Kustia,Bangladesh.</p>
                </div>
                <div data-aos="zoom-in" className="flex flex-col items-center justify-center">
                    <div className=" border-2 rounded-full w-[100px] h-[100px] flex items-center justify-center"><FaBook className="text-5xl" />

                    </div>
                    <h2 className="text-4xl font-bold">HSC</h2>
                    <p>2013-2015</p>
                    <h2 className="flex text-xl gap-2 items-center"> <p>Govt. KC college</p>  </h2>
                    
                </div>
            </div>



        </div>
    );
};

export default Education;