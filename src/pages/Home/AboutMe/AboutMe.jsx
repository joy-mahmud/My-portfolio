
import img from '../../../assets/joy.png'
const AboutMe = () => {
    return (
        <div id='about' className=' lg:ml-20 mx-2'>
           <div className=' lg:w-3/4  flex flex-col-reverse md:flex-row gap-10'>
            <img  className="bg-[#344966] rounded-md hover:scale-105 duration-300" src={img} alt="" />
            <div>
                <h2 className='text-4xl font-bold text-[#DE1945] mb-7'>About Me</h2>
                <h2 className='text-2xl text-white mb-2'>Shakib Ahmed Joy</h2>
                <p className='text-white'>I am a front end developer. I  am currently working as mern stack developer. My well known technologies are html, css, javascript, tailwind,express js,mongo db, firebase,figma. I have completed my Bsc. in computer science and engineering from islamic university kustia, bangladesh. Now I am doing in Msc  in computer science.  I have already done some mern stack projects.</p>
            </div>
            </div> 
        </div>
    );
};

export default AboutMe;