import { useState } from "react"
import { useSelector } from "react-redux"
import { Link } from "react-router-dom"

function Header(){
    const items=useSelector((e)=> e.cart.items)
    const [isopen,setisopen]=useState(false)

    function handleIsopen(){
        if(isopen===false){
                setisopen(true)
        }else{
            setisopen(false)
        }
    }
    return <>
    <div id="Header" className="flex items-center justify-between py-3 lg:px-10 px-6 bg-[#222831] text-[#DFD0B8] fixed top-0 left-0 w-full">
        <h1 className="text-4xl font-bold">NextMind.</h1>
            <ul className="lg:flex md:flex hidden gap-12 items-center text-xl font-semibold cursor-pointer ">
               <Link to="/"> <li className="hover:text-[hsl(34,47%,52%)] text-[#948979] hover:scale-110 duration-300">Home</li></Link>
               <Link to="/Courses"> <li className="hover:text-[hsl(34,47%,52%)] hover:scale-110 duration-300">Courses</li></Link>
                <li id="link" className="hover:text-[hsl(34,47%,52%)] hover:scale-110 duration-300">Pages
                    <div id="box" className="w-56 pl-2 h-52 bg-[#DFD0B8] text-black rounded-md pt-3 hidden">
                        <a href="#"><h1 className="text-xl font-semibold hover:text-blue-600 hover:bg-green-50  hover:py-3 hover:pl-2 mt-3 hover:border-l-2 hover:border-green-500 ">Affiliate program</h1></a>
                        <a href="#"><h2 className="text-xl font-semibold hover:text-blue-600 hover:bg-green-50  hover:py-3 hover:pl-2 mt-3 hover:border-l-2 hover:border-green-500">Affiliate Portal</h2></a>
                       <a href="#"> <h2 className="text-xl font-semibold hover:text-blue-600 hover:bg-green-50  hover:py-3 hover:pl-2 mt-3 hover:border-l-2 hover:border-green-500">FAQ</h2></a>
                       <a href="#"> <h2 className="text-xl font-semibold hover:text-blue-600 hover:bg-green-50  hover:py-3 hover:pl-2 mt-3 hover:border-l-2 hover:border-green-500">Become an instructor </h2></a>
                    </div>
                </li>
                <Link to="/about"><li className="hover:text-[hsl(34,47%,52%)] hover:scale-110 duration-300">About</li></Link>
                <Link to="/contact"><li className="hover:text-[hsl(34,47%,52%)] hover:scale-110 duration-300">Contact</li></Link>
            </ul>
        <div className="relative flex gap-6 items-center ">
       <Link to="/cartpage"> <i className="fa-solid fa-shopping-cart text-3xl hover:text-[hsl(34,47%,52%)] "> <span className="text-2xl font-semibold absolute  lg:right-[140px] right-[26px] lg:-top-3 -top-4">({items.length})</span></i></Link>
       <i onClick={handleIsopen} className="fa-solid fa-bars text-4xl -mr-4 lg:hidden"></i>
        <button className="bg-[#393E46] px-10 py-2 ml-3 lg:flex md:flex hidden rounded-sm text-[#DFD0B8] text-xl font-semibold hover:bg-[hsl(218,17%,16%)] hover:scale-105 duration-300">Login</button>
        
        </div>
    </div>
    {/* mobile view */}
    <div style={{display:isopen===true?"block":""}} className="w-full h-52 hidden bg-[#222831] mt-16 text-center text-[#DFD0B8] transition-all duration-300">
        <ul className="  text-xl font-semibold cursor-pointer pt-3 ">
               <Link to="/"> <li className="hover:bg-[hsl(34,47%,52%)] py-1 hover:text-[#222831] hover:scale-110 duration-300">Home</li></Link>
               <Link to="/Courses"> <li className="hover:bg-[hsl(34,47%,52%)] py-1 hover:text-[#222831] hover:scale-110 duration-300">Courses</li></Link>
                <li className="hover:bg-[hsl(34,47%,52%)] hover:text-[#222831] py-1 hover:scale-110 duration-300">pages</li>
                 <Link to="/about"><li className="hover:bg-[hsl(34,47%,52%)] py-1 hover:text-[#222831] hover:scale-110 duration-300">About</li></Link>
                <Link to="/contact"><li className="hover:bg-[hsl(34,47%,52%)] py-1 hover:text-[#222831] hover:scale-110 duration-300">Contact</li></Link>
        </ul>
    
    </div>
  
    </>
}
export default Header