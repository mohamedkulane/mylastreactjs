import { useDispatch, useSelector } from "react-redux";
import { addCart } from "../redux/reducer/cart";


function Cartpage(){
    const items=useSelector((e)=>e.cart.items)

 
    return<>
    <div className="mt-32 lg:ml-40 ml-0 gap-5 grid lg:grid-cols-2 grid-cols-1 lg:w-[60rem] w-full bg-pink-200 h-auto p-5">
    {
        items.map((data) => {
            return <div className="lg:w-[400px] w-[350px] h-40 bg-gray-100 pt-4 pl-4 rounded-lg">
                <div className="flex justify-around px-4 gap-3">
                    <img className="w-20 h-20 rounded-lg" src={data.image} alt="" />
                  
                     <h2 className="text-xl font-semibold">{data.title}</h2>
                 </div>             
                     <div className="flex justify-between px-4 mt-4">
                        <h1 className="font-semibold text-2xl">${data.price}</h1>
                        <button   className="bg-gray-400 text-black px-5 py-2 rounded-xl">remove</button>

                     </div>
                   
               
            </div>
    })
    }
    </div>
    </>

}
export default Cartpage;