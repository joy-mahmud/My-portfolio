import img from '../../../assets/Joyremovebg-preview.png'
// import resume from '../../../assets/resume.pdf'
const Banner = () => {


    return (
        <div className='bg-[#0D1821] w-full flex flex-col-reverse gap-5 md:flex-row items-center justify-between'>
            <div className="">
                <div className="text-5xl text-white md:pl-20">
                    <h2 className="mb-2">Hi. I am</h2>
                    <h2>Shakib Ahmed <span className="text-[#DE1945]">Joy</span></h2>
                    <p className='text-[18px] mt-3 '>
                        Frontend developer. <br /> Currently working on mern stack development
                    </p>
                </div>
                <div className="md:pl-20 flex justify-center md:justify-start my-10">
                    <button className="border-2 border-[#DE1945] rounded-md px-3 py-3 text-xl text-white hover:bg-[#DE1945]"><a href="/resume.pdf" download>Dowloaod Resume</a></button>
                </div>

            </div>
            <div>
                <img className='h-[400px] ' src={img} alt="" />
            </div>

        </div>
    );
};

export default Banner;