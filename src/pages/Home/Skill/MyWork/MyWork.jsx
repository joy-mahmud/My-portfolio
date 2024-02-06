
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
            <div className='grid grid-cols-1 lg:grid-cols-3 gap-5'>
                <div className='flex flex-col justify-center gap-3 items-center mb-5'>
                    <div className=' rounded-md '>
                        
                            <img src={foodFun} className=" hover:shadow-[#b6b0b2] hover:rounded-md hover:shadow-lg h-[250px] hover:-translate-y-4 duration-500" alt="" />
                       
                        <p className='text-justify text-white'>This is the food ordering websites for a hotel where users can add their own food and order foods.compete food ordering functionality like add to cart remove from cart , increasing or decreasing quantities etc.Firebase login registration system.Secure api by jwt with browser cookies.User can book tables for a particular date with a particular number of quests.users can add their own foods and update their details</p>
                    </div>
                    <Link to='https://foodfun-5c49a.web.app/'><button className="border-2 border-[#DE1945] rounded-md px-3 py-2  text-xl hover:scale-110 duration-300 text-white hover:bg-[#DE1945]">Live Preview</button></Link>
                </div>
                <div className='flex flex-col justify-center gap-3 items-center mb-5'>
                    <div>
                        <img src={parcelJet} className="hover:shadow-[#b6b0b2] hover:rounded-md hover:shadow-lg h-[250px] hover:-translate-y-4 duration-500" alt="" />
                        <p className='text-white'>The complete online parcel delivery management system.There are three different types of user role. The admin role, delivery men role, general user role. They have the different dashboards to perform different tasks.Stripe payment gateway integrated to pay for the delivery.data fetching with tanstack query for better user performance.Different types of filtering system included . filter by date range and other filtering system available.</p>
                    </div>
                    <Link to='https://parcel-jet.web.app/'><button className="border-2 border-[#DE1945] rounded-md px-3 py-2  text-xl hover:scale-110 duration-300 text-white hover:bg-[#DE1945]">Live Preview</button></Link>
                </div>
                <div className='flex flex-col  justify-center gap-3 items-center mb-5'>
                    <div>
                        <img src={eventCorp} className="hover:shadow-[#b6b0b2] hover:rounded-md hover:shadow-lg h-[250px] hover:-translate-y-4 duration-500" alt="" />
                        <p className='text-white'>This an event management website. In this website firebase authentication system has been used for user login registration. In the home page different types of events are presented as card form. By clicking on details button user can view details of the particular event.There are different routes such as gallary, services,blogs. Users can login and register and the profile pic is shown in the heading section.</p>
                    </div>
                    <Link to='https://react-event-management-9dca3.web.app'><button className="border-2 border-[#DE1945] rounded-md px-3 py-2 hover:scale-110 duration-300  text-xl text-white hover:bg-[#DE1945]">Live Preview</button></Link>
                </div>
            </div>
        </div>
    );
};

export default MyWork;