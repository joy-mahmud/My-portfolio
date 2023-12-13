import { FaCopyright } from "react-icons/fa";


const Footer = () => {
    return (
        <div className="bg-black p-2 flex items-center justify-center gap-2">
            <FaCopyright className="text-white"></FaCopyright>
            <p className="text-white"> All rights reserved by Joy.2023</p>
        </div>
    );
};

export default Footer;