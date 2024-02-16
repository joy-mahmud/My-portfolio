
import foodFun from '../../../../assets/foodFun.png'
import parcelJet from '../../../../assets/parcelJet.png'
import eventCorp from '../../../../assets/eventCorp.png'
import { Link } from 'react-router-dom';
import AOs from 'aos';
import 'aos/dist/aos.css'; // Import AOS CSS
import { useEffect } from 'react';
const MyWork = () => {
    useEffect(() => {
        AOs.init({

            offset: 300,
            duration: 1000,

        });
    }, []);
    return (
        <div className="mt-20 container mx-auto mb-20">
            <div className="mb-5">
                <h2 className=" text-center text-[#DE1945] text-4xl font-bold py-2">My Recent projects</h2>
            </div>
            <div className='grid grid-cols-1 lg:grid-cols-3 gap-5'>
                <div data-aos="fade-right" className='flex flex-col justify-center gap-3 mb-5 bg-[#344966] rounded-b-md'>
                    <div className='overflow-hidden'>

                        <img src={foodFun} className=" h-[250px] hover:scale-110 duration-500" alt="" />

                    </div>

                    <p className=' text-white text-3xl font-bold ml-2'>Food fun</p>
                    <div className='p-2 flex justify-center'>
                        <Link to='https://foodfun-5c49a.web.app/'><button className="border-2 border-[#DE1945] rounded-md px-3 py-2  text-xl hover:scale-110 duration-300 text-white hover:bg-[#DE1945]">Live Preview</button></Link>
                    </div>
                </div>
                <div data-aos="fade-up" className='flex flex-col justify-center gap-3  mb-5 bg-[#344966] rounded-b-md'>
                    <div className='overflow-hidden'>
                        <img src={parcelJet} className="h-[250px] hover:scale-110 duration-500" alt="" />

                    </div>
                    <p className=' text-white text-3xl font-bold ml-2'>Parcel Jet</p>
                    <div className='p-2 flex justify-center'>
                        <Link to='https://parcel-jet.web.app/'><button className="border-2 border-[#DE1945] rounded-md px-3 py-2  text-xl hover:scale-110 duration-300 text-white hover:bg-[#DE1945]">Live Preview</button></Link>
                    </div>
                </div>
                <div data-aos="fade-left" className='flex flex-col  justify-start gap-3 mb-5 bg-[#344966] rounded-b-md'>
                    <div className='overflow-hidden'>
                        <img src={eventCorp} className="h-[250px] hover:scale-110 duration-500" alt="" />

                    </div>
                    <p className=' text-white text-3xl font-bold ml-2'>EventCorp Pro</p>
                    <div className='p-2 flex items-center justify-center'>

                        <Link to='https://react-event-management-9dca3.web.app'><button className="border-2 border-[#DE1945] rounded-md px-3 py-2 hover:scale-110 duration-300  text-xl text-white hover:bg-[#DE1945]">Live Preview</button></Link>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default MyWork;