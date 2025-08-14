import { useDispatch } from "react-redux"
import { addCart } from "../redux/reducer/cart"

function Course({lessons}){
    const dispatch=useDispatch()
    function handleDispatch(){
        dispatch(addCart(lessons))
    }
    return <>
    <div id="all" className="lg:w-[370px] overflow-hidden w-[380px] h-[30rem] p-2  shadow-lg bg-white  shadow-gray-200 rounded-md  ">
        <img className="w-[350px] h-[200px]" src={lessons.image} alt="" />
        <div className="flex gap-12 text-2xl mt-2">
            <div className="text-yellow-500">
            <i className="fa-solid fa-star"></i>
            <i className="fa-solid fa-star"></i>
            <i className="fa-solid fa-star"></i>
            <i className="fa-solid fa-star"></i>
            <i className="fa-solid fa-star text-gray-400"></i>
            </div>
            <p className="font-semibold">(4.6)</p>
        </div>
        <div >
            <h1 className="text-3xl font-semibold">{lessons.title}</h1>
            <div className="flex gap-2 items-center">
            <img className="w-10 h-10 rounded-full" src="https://i.pinimg.com/736x/eb/76/a4/eb76a46ab920d056b02d203ca95e9a22.jpg" alt="" />
            <h1 className="text-xl font-bold">Mohamed kulane</h1>
            </div>
        </div>
        <hr className="w-full border-[1px] border-gray-200 mb-3 mt-6" />
        <div className="flex justify-between items-center">
        <h1 className="text-3xl font-semibold">${lessons.price}</h1>
        <button onClick={handleDispatch} className="border-2 border-[#222831] hover:border-[#DFD0B8] text-gray-400 rounded-lg px-7 py-3 text-xl "><i className="fa-solid fa-shopping-cart text-blue-500 mr-3"></i>Buy Now</button>
        </div>
    </div>
    </>
}
export default Course