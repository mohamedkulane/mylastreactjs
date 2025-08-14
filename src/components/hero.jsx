import { Link } from "react-router-dom";
import back from "../Assets/back.png"
function Hero() {
  return (
    <>
      <div className="block ">
        <div style={{backgroundImage:`url(${back})`}} className="min-h-screen text-purple-900 bg-cover bg-center w-full lg:pt-40 pt-32 lg:pl-10 pl-4 ">
            <div className="lg:w-[56%] w-full ">
          <h1 className="lg:text-5xl text-3xl font-bold">Learn Anywhere  Anytime | <span className="text-[#DFD0B8] font-sans">Unlock Your Potential</span></h1>
          <p className="lg:mt-4 mt-6 text-xl mb-8 ">
            Access high-quality courses, expert instructors, and interactive
            learning tools designed to help you gain skills and achieve your
            goals — all from the comfort of your home.F
          </p>
          <button className="bg-[#DFD0B8] text-[#393E46] lg:px-11 px-5 py-3 rounded-md text-xl animate-bounce hover:bg-purple-600 hover:text-white ">Start Learning</button>
         <Link to="/Courses"> <button className="bg-transparent border-2 border-purple-600 text-black lg:ml-4 ml-1 lg:px-11 px-5 py-3 rounded-md text-xl hover:-translate-y-4 hover:scale-105 duration-300">Browse Courses</button></Link>
        </div>
        </div>
      </div>
    </>
  );
}
export default Hero;
