import React from "react";
import { removeItemCart, updateQuantity } from "../../redux/fetures/cartSlice";
import { useDispatch } from "react-redux";
import { BsTrash2 } from "react-icons/bs";
import { BiMinusCircle, BiPlusCircle } from "react-icons/bi";
import toast from "react-hot-toast";

function CartItem({ id, thumbnail, title, quantity, price }) {
  const dispatch = useDispatch();

  const handleDecrease = () => {
    if (quantity > 1) {
      dispatch(updateQuantity({ productId: id, quantity: quantity - 1 }));
    } else {
      toast.error("Minimum quantity is 1");
    }
  };

  const handleIncrease = () => {
    dispatch(updateQuantity({ productId: id, quantity: quantity + 1 }));
  };

  const handleRemove = () => {
    dispatch(removeItemCart(id));
    toast.success(`${title} removed from cart`);
  };

  return (
    <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 p-4 border-b border-gray-700">
      {/* Image & Title */}
      <div className="flex items-center gap-4 flex-1">
        <img
          src={thumbnail}
          alt={title}
          className="h-20 w-20 object-cover rounded-md"
        />
        <div>
          <h3 className="text-lg font-semibold text-white">{title}</h3>
          <p className="text-gray-300">
            ₹{Math.floor(price * 75)} x {quantity} = ₹
            {Math.floor(price * 75 * quantity)}
          </p>
        </div>
      </div>

      {/* Quantity & Actions */}
      <div className="flex items-center gap-4">
        <button
          onClick={handleDecrease}
          className="text-white hover:text-gray-400"
        >
          <BiMinusCircle className="h-6 w-6" />
        </button>
        <span className="text-white font-medium">{quantity}</span>
        <button
          onClick={handleIncrease}
          className="text-white hover:text-gray-400"
        >
          <BiPlusCircle className="h-6 w-6" />
        </button>
        <button
          onClick={handleRemove}
          className="text-red-500 hover:text-red-700"
        >
          <BsTrash2 className="h-5 w-5" />
        </button>
      </div>
    </div>
  );
}

export default CartItem;
