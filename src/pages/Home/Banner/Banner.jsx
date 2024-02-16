
// import resume from '../../../assets/resume.pdf'
import { Typewriter } from 'react-simple-typewriter'
import bannerImg from '../../../assets/codingBanner.png'

const Banner = () => {
    return (
        <div className=' w-full flex flex-col-reverse gap-5 md:flex-row items-center justify-between'>
            <div className='relative w-full mb-10'>
                <img className='w-full h-[500px]' src={bannerImg} alt="" />
            </div>
            <div className="absolute">
                
                <div className="text-5xl text-white md:pl-20">
                    <h2 className="mb-2">Hi. I am</h2>
                    <h2>Shakib Ahmed <span className="text-[#DE1945] font-bold">JOY</span></h2>
                    <p className='text-4xl mt-3 '>
                        I am a  <span style={{ color: '#DE1945', fontWeight: 'bold' }}>
                            {/* Style will be inherited from the parent element */}
                            <Typewriter
                                words={['FRONTEND DEVELOPER','REACT DEVELOPER', 'MERN STACK DEVELOPER']}
                                loop={1000}
                                cursor
                                cursorStyle='|'
                                typeSpeed={100}
                                deleteSpeed={80}
                                delaySpeed={1000}
                               
                            />
                        </span>
                    </p>
                </div>
                <div className="md:pl-20 flex justify-center md:justify-start my-10">
                    <button className="border-2 border-[#DE1945] rounded-md px-3 py-3 text-xl text-white hover:bg-[#DE1945]"><a href="/resume.pdf" download>Dowloaod Resume</a></button>
                </div>

            </div>
            <div>
                {/* <img className='h-[400px] ' src={img} alt="" /> */}
            </div>

        </div>
    );
};

export default Banner;