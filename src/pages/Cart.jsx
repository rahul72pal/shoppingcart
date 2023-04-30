import { useSelector } from "react-redux";
import { Link } from "react-router-dom/dist";
import CartItem from "../components/CartItem";
import { useEffect, useState } from "react";

const Cart = () => {

  const { cart } = useSelector((state) => state);
  console.log("Printing the card " + cart);
  const [totalamount, settotalamount] = useState(0);

  useEffect(() => {
    settotalamount(cart && cart.reduce((acc, curr) => acc + curr.price, 0));
  }, [cart]);

  return (
    <div className="w-[100%] h-[100%] flex justify-center items-center">
      {
        cart && cart.length > 0 ?
          (
            <div className="flex w-[100vw]">
              <div className="w-full flex flex-wrap">
                {
                  cart.map((item, index) => {
                    return <CartItem key={item.id} item={item} itemIndex={index} />
                  })
                }
              </div>

              <div className="w-[60%] h-[100vh] mr-[100px] ml-0 pl-0 border-2 border-gray-500 rounded-md my-3 mx-3 flex flex-col  justify-center items-center">
                <div className=" mx-auto my-6 ">
                  <div className=" text-2xl text-center font-semibold">Your Card</div>
                  <div className="text-xl ml-2 mb-6 text-gray-800">Summary</div>
                  <p>
                    <span className=" font-bold text-emerald-500 p-3 ">Total Items : {cart.length}</span>
                  </p>
                </div>

                <div>
                  <p className="text-lg font-semibold">Total amount: <span className="text-green-500">${totalamount}</span></p>
                  <button className="bg-slate-800 text-white py-3 px-4 ml-4 mt-6 rounded-md">Checkout Now</button>
                </div>
              </div>


            </div>
          ) :
          (
            <div>
              <h1 className="text-3xl font-semibold mt-7 pb-3
              ">Card Empty</h1>
              <Link to="/"><button className="m-7 p-3
              bg-slate-900 text-white rounded-md">Shope Now</button></Link>
            </div>
          )
      }
    </div>
  );
};

export default Cart;
