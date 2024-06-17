import { LuPenTool } from "react-icons/lu";
import { TiThumbsOk } from "react-icons/ti";
import { BsArrow90DegLeft } from "react-icons/bs";

const Quality = () => {
    return (
        <div className="pt-28 w-[80%] mx-auto">
            <div className="flex gap-6 justify-center">
                <div className="hover:shadow-2xl p-10 w-[33%]">
                    <span className="text-4xl flex justify-center p-2 text-center"><LuPenTool /></span>
                    <h1 className="text-bold my-4 text-black font-semibold text-center">BEST DEAL ONLINE</h1>
                    <p className="text-gray-400 text-center">Discount off the weekly rate for monthly</p>
                </div>

                <div className="hover:shadow-2xl p-10 w-[33%]">
                    <span className="text-4xl flex justify-center p-2 text-center"><TiThumbsOk /></span>
                    <h1 className="text-bold my-4 text-black font-semibold text-center">TOP QUALITY</h1>
                    <p className="text-gray-400 text-center">Service Quality and Customer Satisfaction</p>
                </div>

                <div className="hover:shadow-2xl p-10 w-[33%]">
                    <span className="text-4xl flex justify-center p-2 text-center"><BsArrow90DegLeft /></span>
                    <h1 className="text-bold my-4 text-black font-semibold text-center">15 DAYS RETURN</h1>
                    <p className="text-gray-400 text-center">Cancel and return your order within 15 days</p>
                </div>
            </div>
        </div>
    )
}

export default Quality