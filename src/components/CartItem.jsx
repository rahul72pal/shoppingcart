import { useDispatch } from "react-redux";
import { remove } from "../redux/Slices/CartSlice";
import { toast } from "react-hot-toast";


const CartItem = ({ item, itemIndex }) => {
  const dispatch = useDispatch();

  const removefromcart = ()=>{
    dispatch(remove(item.id));
    toast.success("Remove item")
  }

  return (
   

      <div className="flex flex-wrap w-[40%] h-[600px] border-2 border-gray-500 m-4 mt-6 items-center justify-center rounded-lg">
        <div className="w-[200px] mb-5 mt-3">
          <img src={item.image} className="w-[200px]" />
        </div>

        <div className="">
          <h1 className="text-center font-semibold text-lg ">{item.title}</h1>
          <h1 className="text-sm text-center ml-3 mr-3 text-gray-500">{item.description}</h1>
          <div>
            <p className="text-center text-green-500 font-bold mb-4">$ {item.price}</p>
            <div onClick={removefromcart} className=" text-center text-white " >
              <span className="bg-slate-900 mb-4 py-2 px-3 rounded-lg cursor-pointer ">Removed</span>
            </div>
          </div>
        </div>
      </div>


  );
};

export default CartItem;
