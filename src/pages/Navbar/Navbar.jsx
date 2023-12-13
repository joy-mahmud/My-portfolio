
const Navbar = () => {
    return (
        <div className=" bg-black py-5 px-2">
            <div className="flex justify-between container mx-auto items-center">
                <h2 className="text-[#DE1945] font-bold text-5xl uppercase">Joy<span className="text-white">.</span></h2>
                <ul className="flex gap-5 text-white text-2xl font-semibold">
                    <li>Home</li>
                    <li>About</li>
                    <li>Contact</li>
                </ul>
            </div>
        </div>
    );
};

export default Navbar;