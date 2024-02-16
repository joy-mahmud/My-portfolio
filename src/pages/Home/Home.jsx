import Navbar from "../Navbar/Navbar";

import AboutMe from "./AboutMe/AboutMe";
import Banner from "./Banner/Banner";
import ContactMe from "./ContactMe";
import Footer from "./Footer/Footer";
import Education from "./Skill/Education";
import MyWork from "./Skill/MyWork/MyWork";
import Skill from "./Skill/Skill";


const Home = () => {
    return (
        <div className="bg-[#0D1821] min-h-screen overflow-x-hidden">
           
           <Navbar></Navbar> 
           <Banner></Banner>
           <AboutMe></AboutMe>
           <Skill></Skill>
           <Education></Education>
           <MyWork></MyWork>
           <ContactMe></ContactMe>
           <Footer></Footer>
        </div>
    );
};

export default Home;