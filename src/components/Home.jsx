import React from "react";
// import HeroImage from "../assets/heroImage.png";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";
import { Link } from "react-scroll";
import './home.css';

const Home = () => {
  return (
    <div
      name="home"
      className="Section_top h-screen w-full  home"
    >
      <div className=" max-w-screen-lg mx-auto flex flex-col items-center justify-center h-full px-4 md:flex-row">
      {/* <div className="small-screen hidden">
          <img
            src={HeroImage}
            alt="profile"
            className="	 mx-auto w-2/3 md:w-full "
          /> 
        </div> */}
        <div className="flex flex-col justify-center h-full">
          <h2 className=" autotyping text-4xl sm:text-7xl font-bold">
         Welcom TO Boyinatech
          </h2>
          
          <p className="text-yellow-500 py-4 max-w-md flex-row items-center justify-center">
          We have a team of professional web developers and mobile app developers providing enterprise solutions globally. Our web development and mobile application development company evolve with the advancement in technology with all the expertise to build a reliable, scalable and stable product.
          </p>

          <div className="portfolio-btn">
            <Link
              to="portfolio"
              smooth
              duration={500}
              className="group text-white w-fit px-6 py-3 my-2 flex items-center rounded-md bg-gradient-to-r from-cyan-500 to-blue-500 cursor-pointer"
            >
              Services
              <span className="group-hover:rotate-90 duration-300">
                <MdOutlineKeyboardArrowRight size={25} className="ml-1" />
              </span>
            </Link>
          </div>
        </div>
        {/* <div className="big-screen shadow-2xl">
           <img
            src={HeroImage}
            alt="profile"
            className="rounded-full mx-auto w-2/3 md:w-full"
          /> 
        </div> */}
        
      </div>
    </div>
  );
};

export default Home;
