import { toast } from "react-hot-toast";
import { useDispatch, useSelector } from "react-redux";
import { add, remove } from "../redux/Slices/CartSlice";

const Product = ({ post }) => {
  const { cart } = useSelector((state) => state);
  console.log("print cart in product " + cart);
  console.log(cart);
  const dispatch = useDispatch();

  const addToCart = () => {
    dispatch(add(post));
    toast.success("Item added");
    console.log("added");
  }

  const removefromcart = () => {
    dispatch(remove(post.id));
    toast.error("item remove");
  }

  return (
    <div className="flex flex-col items-center justify-between hover:scale-110 transition duration-300 hover:shadow-[0px_20px_20px_10px_#00000024] gap-3 p-4 mt-10 ml-5  rounded-md border border-gray-700  ">
      <div className="" >
        <div className="text-center">
          <p className="text-xl font-semibold truncate w-40 mt-1">{post.title.slice(0, 12) + ("...")}</p>
        </div>
        <div>
          <p className="w-40 text-gray-400 font-normal text-[10px] text-left mt-4 mb-3 ">{post.description.split(" ").slice(0, 10).join(" ") + "..."}</p>
        </div>
        <div className="h-[180px]">
          <img src={post.image} className="h-full w-full" />
        </div>

        <div className="flex  justify-between gap-x-6 mt-4 items-center ">
          <div>
            <p className="py-1 font-semibold text-green-500">${post.price}</p>
          </div>

          {
            cart && cart.some((p) => p.id === post.id) ?
              (
                <button onClick={removefromcart}
                className="border-2 border-black px-2 py-1 rounded-full hover:bg-gray-500 hover:text-white text-sm">REMOVE ITEM</button>
              ) :
              (
                <button onClick={addToCart}
                className="border-2 border-black px-2 py-1 rounded-full hover:bg-gray-500 hover:text-white text-sm"
                >ADD TO CART</button>
              )
          }
        </div>

      </div>
    </div>
  );
};


export default Product;
