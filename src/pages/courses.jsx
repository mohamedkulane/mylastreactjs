import { useState } from "react";
import Course from "../components/course";
import Data from "../components/data"

 export default function Courses(){
    const [search, setSearch]=useState("")
    const [category,setcategory]=useState("")
    const filteredData=Data.filter((xog)=>{
        const courses=xog.title.toLowerCase().includes(search.toLowerCase()) || xog.category.toLowerCase().includes(search.toLowerCase()) 
        const selectedCategory=category? xog.category===category:true
        return courses && selectedCategory

    })
    
    return <>
    <div className="mt-32 text-center">
        <div className="relative -z-10">
        <input value={search} onChange={(e)=> setSearch(e.target.value)} type="text"  className="lg:w-96 w-80 rounded-2xl py-3 pl-2 mb-5 bg-orange-50 outline-none ring-2 hover:ring-red-500 " placeholder="search Here"/><i className="fa-solid fa-magnifying-glass text-3xl text-gray-300 absolute top-2 right-[460px]"></i>
        <i className="fa-solid fa-x text-3xl absolute top-1 text-gray-300 bg-gray-500 hidden py-1 rounded-lg right-[460px]"></i>
       </div>
        <div className="flex flex-wrap gap-6 lg:ml-[16rem] ml-12">
            <div className="bg-orange-50 text-black  pl-2 pt-1 w-20 h-10 rounded-md text-2xl font-semibold">
                <input name="category"  value={""} onChange={(e)=>setcategory("")} type="radio" /> All
            </div>
            <div className="bg-orange-50 text-black  pl-2 pt-1 w-40 h-10 rounded-md text-2xl font-semibold">
                <input name="category" value={"marketing"} onChange={(e)=>setcategory("marketing")} type="radio" /> Marketing
            </div>
            <div className="bg-orange-50 text-black  pl-2 pt-1 w-24 h-10 rounded-md text-2xl font-semibold">
                <input name="category" value={"skill"} onChange={(e)=>setcategory("skill")} type="radio" /> Skill
            </div>
            <div className="bg-orange-50 text-black w-40 pl-2 pt-1 h-10 rounded-md text-2xl font-semibold">
                <input name="category" value={"programing"} onChange={(e)=>setcategory("programing")} type="radio" /> Progreming
            </div>
            <div className="bg-orange-50 text-black  pl-2 pt-1 w-40 h-10 rounded-md text-2xl font-semibold">
                <input name="category" value={"computer"} onChange={(e)=>setcategory("computer")} type="radio" /> Computer
            </div>
        </div>
    </div>
    
    
    
    
    
    
    <div className="grid lg:grid-cols-3 grid-cols-1 mt-10 gap-4 ml-2 mb-20">
        {
        filteredData.length>0?    filteredData.map((items)=>{
                return  <Course lessons={items}/>
            }):
        <p className="text-5xl  mt-10 font-semibold">ther's no data</p>
        }
       
    </div>
    </>
}
