import React from "react";
import { useDispatch } from "react-redux";
import { addToCart } from "../../redux/fetures/cartSlice";
import { FaCartPlus } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";

function BuyButton(data) {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleAddToCart = () => {
    dispatch(addToCart(data));
    toast.success("Added to cart!");
  };

  return (
    <div className="flex space-x-4 mt-4">
      {/* Add to Cart Button */}
      <button
        onClick={handleAddToCart}
        className="group relative inline-flex items-center justify-center overflow-hidden rounded-full border-2 border-purple-600 px-6 py-3 font-semibold text-purple-600 transition-all duration-300 ease-out hover:bg-purple-600 hover:text-white shadow-md"
      >
        <span className="absolute inset-0 flex items-center justify-center bg-purple-600 text-white duration-300 -translate-y-full group-hover:translate-y-0 ease-in-out">
          <FaCartPlus className="mr-2" size={20} />
          Added!
        </span>
        <span className="flex items-center transition-all duration-300 group-hover:translate-y-full">
          <FaCartPlus className="mr-2" size={20} />
          Add to Cart
        </span>
      </button>

      {/* Buy Now Button */}
      <button
        onClick={() => navigate("/checkout")}
        className="relative inline-block px-6 py-3 font-semibold text-white bg-gradient-to-r from-blue-500 to-purple-600 rounded-full hover:brightness-110 hover:shadow-lg transition-all duration-300"
      >
        Buy Now
      </button>
    </div>
  );
}

export default BuyButton;
