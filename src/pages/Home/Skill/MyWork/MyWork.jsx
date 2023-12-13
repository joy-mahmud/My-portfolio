
import foodFun from '../../../../assets/foodFun.png'
import parcelJet from '../../../../assets/parcelJet.png'
import eventCorp from '../../../../assets/eventCorp.png'
import { Link } from 'react-router-dom';
const MyWork = () => {
    return (
        <div className="mt-20 container mx-auto mb-20">
            <div className="mb-5">
                <h2 className=" text-center text-[#DE1945] text-4xl font-bold py-2">My Recent projects</h2>
            </div>
            <div className='grid grid-cols-1 lg:grid-cols-3'>
                <div className='flex flex-col justify-center gap-3 items-center mb-5'>
                    <img src={foodFun} className="w-[350px] h-[400px] hover:-translate-y-5 duration-500" alt="" />
                    <Link to='https://foodfun-5c49a.web.app/'><button className="border-2 border-[#DE1945] rounded-md px-3 py-2  text-xl hover:scale-110 duration-300 text-white hover:bg-[#DE1945]">Live Preview</button></Link>
                </div>
                <div className='flex flex-col justify-center gap-3 items-center mb-5'>
                    <img src={parcelJet} className="w-[350px] h-[400px] hover:-translate-y-5 duration-500" alt="" />
                    <Link to='https://parcel-jet.web.app/'><button className="border-2 border-[#DE1945] rounded-md px-3 py-2  text-xl hover:scale-110 duration-300 text-white hover:bg-[#DE1945]">Live Preview</button></Link>
                </div>
                <div className='flex flex-col  justify-center gap-3 items-center mb-5'>
                    <img src={eventCorp} className="w-[350px] h-[400px] hover:-translate-y-5 duration-500" alt="" />
                    <Link to='https://react-event-management-9dca3.web.app'><button className="border-2 border-[#DE1945] rounded-md px-3 py-2 hover:scale-110 duration-300  text-xl text-white hover:bg-[#DE1945]">Live Preview</button></Link>
                </div>
            </div>
        </div>
    );
};

export default MyWork;