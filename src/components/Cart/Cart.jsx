import React, { useMemo } from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import CartItem from "./CartItem";

function Cart() {
  const { cartItem } = useSelector((state) => state.cart);
  console.log("cartItem:", cartItem);

  const totalAmountINR = useMemo(() => {
    const usdTotal = cartItem.reduce(
      (total, item) => total + item.price * item.quantity,
      0
    );
    return Math.floor(usdTotal * 80);
  }, [cartItem]);

  if (cartItem.length === 0) {
    return (
      <div className="text-center py-16">
        <h2 className="text-3xl font-bold text-gray-100 mb-4">
          🛒 Your cart is empty!
        </h2>
        <Link
          to="/"
          className="text-blue-500 font-semibold hover:text-blue-700"
        >
          Continue Shopping
        </Link>
      </div>
    );
  }

  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold text-white mb-6">
        Shopping Cart ({cartItem.length})
      </h1>

      <div className="rounded-lg shadow-md bg-gray-800">
        <div className="divide-y divide-gray-700">
          {cartItem.map((item) => (
            <CartItem key={item.id} {...item} />
          ))}
        </div>

        <div className="p-6 border-t border-gray-700">
          <div className="flex justify-between items-center mb-4">
            <span className="text-lg text-white font-semibold">Total:</span>
            <span className="text-2xl font-bold text-green-400">
              ₹{totalAmountINR.toLocaleString("en-IN")}
            </span>
          </div>
          <Link
            to="/checkout"
            className="block w-full text-center bg-blue-500 hover:bg-blue-600 text-white font-semibold py-3 rounded-lg transition duration-200"
          >
            Proceed to Checkout
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Cart;
