import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import { motion } from "framer-motion";
import {
  decrementQuantity,
  deleteItem,
  incrementQuantity,
  resetCart,
} from "../redux/amazonSlice";
import { emptyCart } from "../assets";
import { Link } from "react-router-dom";

const Cart = () => {
  const dispatch = useDispatch();
  const products = useSelector((state) => state.amazon.products);
  const [totalPrice, setTotalPrice] = useState("");

  useEffect(() => {
    let total = 0;
    products.map((item) => {
      total += item.price * item.quantity;
      return setTotalPrice(total.toFixed(2));
    });
  }, [products]);

  return (
    <div className="w-full bg-gray-100 p-4">
      {products.length > 0 ? (
        <div className="container mx-auto h-auto flex flex-col md:flex-row justify-between ">
          <div className="w-full h-full bg-white mb-3 md:mr-2 basis-[79%]  px-4 ">
            <div className="font-titleFont flex items-center justify-between border-b-[1px] border-b-gray-400 py-3">
              <h2 className="text-2xl mdl:text-3xl font-medium">
                Shopping Cart
              </h2>
              <h4 className="text-xl font-normal">Subtotal</h4>
            </div>
            {/* ========== Products Start Here ========== */}
            <div>
              {products.map((item) => (
                <div
                  key={item.id}
                  className="w-full flex items-center border-b-[1px] border-b-gray-300 p-4 "
                >
                  <div className="w-full flex items-center justify-between">
                    <div className="w-1/5 mr-2 ">
                      <img
                        className="w-full h-44 object-contain"
                        src={item.image}
                        alt="ProductsImg"
                      />
                    </div>
                    <div className="w-3/5 mdl:w-4/5 ">
                      <h2 className="font-semibold text-sm mdl:text-lg">
                        {item.title}
                      </h2>
                      <p className="text-xs mdl:text-sm pr-4">
                        {item.description.substring(0, 200)}
                      </p>
                      <p className="text-sm mdl:text-base">
                        Price Unit:{" "}
                        <span className="font-semibold">${item.price}</span>
                      </p>
                      <div className="flex items-center justify-center w-24 bg-[#F0F2F2] py-1 text-center drop-shadow-lg rounded-md">
                        <p className="mr-1">Qty:</p>
                        <p
                          onClick={() => dispatch(decrementQuantity(item.id))}
                          className="mr-1 bg-gray-200 px-1 cursor-pointer hover:bg-gray-400 rounded-md duration-300"
                        >
                          -
                        </p>
                        <p className="mr-1">{item.quantity}</p>
                        <p
                          onClick={() => dispatch(incrementQuantity(item.id))}
                          className="bg-gray-200 cursor-pointer px-1 hover:bg-gray-400 rounded-md duration-300"
                        >
                          +
                        </p>
                      </div>
                      <button
                        onClick={() => dispatch(deleteItem(item.id))}
                        className="bg-red-500 text-white w-36 py-1 rounded-lg mt-2 hover:bg-red-700 active:bg-red-900"
                      >
                        Delete item
                      </button>
                    </div>
                    <div>
                      <p className="font-semibold text-sm mdl:text-lg font-titleFont">
                        ${item.price * item.quantity}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            <div className="w-full py-2">
              <button
                onClick={() => dispatch(resetCart())}
                className="px-10 py-2 bg-red-500 hover:bg-red-600 active:bg-red-500 text-white rounded-lg font-titleFont font-semibold text-lg tracking-wide "
              >
                Clear Cart
              </button>
            </div>
          </div>
          {/* ========= Proceed to Pay ========== */}
          <div className="w-full h-52 flex items-center justify-center flex-col bg-white basis-[20%] p-4 ">
            <div>
              <p className="flex items-start text-sm">
                <span className="bg-white text-green-400 mr-1 rounded-full">
                  <CheckCircleIcon />
                </span>
                Your order qualifies for FREE Shipping Choose this option
                checkout. See details...
              </p>
            </div>
            <div>
              <p className="font-semibold px-10 py-1 flex items-center justify-between">
                Total:{" "}
                <span className="font-semibold text-lg ml-2">
                  ${totalPrice}
                </span>
              </p>
            </div>
            <button className="w-full font-titleFont font-medium text-base bg-gradient-to-tr from-yellow-400 to-yellow-200 border hover:from-yellow-300 hover:to-yellow-500 hover:border-yellow-700 active:bg-gradient-to-bl active:from-yellow-400 active:to-yellow-500 duration-200 py-1.5 mt-3 rounded-md">
              Proceed to Pay
            </button>
          </div>
        </div>
      ) : (
        <motion.div
          initial={{ y: 70, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.5, duration: 0.5 }}
          className="flex items-center justify-center py-10"
        >
          <div>
            <img
              className="w-80 rounded-lg mx-auto p-4"
              src={emptyCart}
              alt="emptyCart"
            />
          </div>
          <div className="w-96 p-4 bg-white flex flex-col items-center rounded-md shadow-lg ml-4">
            <h1 className="font-titleFont text-lg mdl:text-xl font-semibold">
              Your Cart feels lonely.
            </h1>
            <p className="text-xs mdl:text-sm text-center">
              Your shopping cart lives to serve. Give it purpose - fill it with
              books, electronics, videos, etc. and make it happy.
            </p>
            <Link to="/">
              <button className="mt-6 bg-yellow-400 rounded-md cursor-pointer hover:bg-yellow-500 active:bg-yellow-700 px-3 mdl:px-8 py-2 font-titleFont font-semibold text-sm mdl:text-lg">
                Continue Shopping
              </button>
            </Link>
          </div>
        </motion.div>
      )}
    </div>
  );
};

export default Cart;
