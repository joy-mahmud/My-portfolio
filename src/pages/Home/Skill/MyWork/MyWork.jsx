
import { Link } from 'react-router-dom';
import './style.css'
import AOs from 'aos';
import 'aos/dist/aos.css'; // Import AOS CSS
import { useEffect } from 'react';
import donation from "../../../../assets/donation.jpg"
import bistro from "../../../../assets/bistro.jpg"
import parcel from "../../../../assets/parcel.jpg"
import event from "../../../../assets/event.jpg"
import roadBeast from "../../../../assets/roadBeast.jpg"
import foodFun from "../../../../assets/foodFun.jpg"

const MyWork = () => {
    const cards = [
        { name: 'Bistro Boss', image: bistro, link: "https://bistro-boss-6e041.web.app/", description: 'Bistro boss is compelete ecommerce site for a delicious food ordering with visually appealing website.' },
        { name: "parcel-jet", image: parcel, link: "https://parcel-jet.web.app/", description: "Parcel jet is complete parcel delivery management system where user can book parcels and admin can control all delivery process" },
        { name: "Event-corp", image: event, link: "https://react-event-management-9dca3.web.app", description: "This is a event management service provider website where there are different types of services" },
        { name: "Road-beast", image: roadBeast, link: "https://brand-shop-ca560.web.app/", description: "Road Beast is car selling e commerce website with the different brands for selling their cars" },
        { name: "Donation camp", image: donation, link: "https://wakeful-shoes.surge.sh/", description: "Donation camp is a website where people can donate their money assets or other goods for helping people" },
        { name: "Food Fun", image: foodFun, link: "https://foodfun-5c49a.web.app/", description: "Fod fun is a place for ordering delicious foods and on site table booking system for the customers." }
    ]
    useEffect(() => {
        AOs.init({

            offset: 300,
            duration: 1000,

        });
    }, []);
    return (
        <div id='portfolio' className="mt-20 mb-20">
            <div className="mb-5">
                <h2 className=" text-center text-[#DE1945] text-4xl font-bold py-2">My Recent projects</h2>
            </div>
            <div className='flex justify-center'>
                <div className='grid grid-cols-3 gap-10 px-16'>
                    {
                        cards.map((item, idx) => <div key={idx} className="card main_container">
                            <div className="line">

                            </div>
                            <div className='imgBox absolute inset-[3px]'>
                                <img className='w-full h-full' src={item.image} alt="" />

                            </div>

                            <div className='absolute flex flex-col gap-3 px-3 items-center bottom-0 right-0 h-0 w-full overlay_container duration-700 overflow-hidden'>
                                <h2 className='damion-regular text-white text-5xl font-bold mt-12 mb-4 text-center'>{item.name}</h2>
                                <p className='text-white text-2xl damion-regular text-justify'>{item.description}</p>
                                <Link to={item.link}> <button className="border-2 mt-5 border-[#DE1945] rounded-md px-4 py-1  text-xl duration-500 text-white hover:bg-[#DE1945]">Preview</button></Link>

                            </div>
                        </div>


                        )

                    }
                </div>
            </div>

        </div>
    );
};

export default MyWork;