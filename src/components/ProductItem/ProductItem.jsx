import React from "react";
import { FaStar } from "react-icons/fa";
import { Link } from "react-router";
import BuyButton from "../ui/BuyButton.jsx";

function ProductItem(data) {
  return (
    <section className="bg-gradient-to-br from-slate-800 to-slate-900 w-72 min-h-[20rem] overflow-hidden text-white rounded-2xl shadow-lg p-4 mx-auto hover:-translate-y-1 hover:shadow-2xl transition-transform duration-300">
      <Link to={`/product/${data?.id}`}>
        {/* Image */}
        <div className="relative pb-[90%] rounded-xl overflow-hidden">
          <img
            src={data.thumbnail}
            alt={data.title}
            className="absolute inset-0 w-full h-full object-cover transform transition-transform duration-500 hover:scale-110"
            loading="lazy"
          />
          {data.discountPercentage > 0 && (
            <div className="absolute top-2 right-2 bg-red-600 text-white px-2 py-1 rounded-full text-xs font-bold shadow-sm">
              {Math.round(data.discountPercentage)}% OFF
            </div>
          )}
        </div>

        {/* Info */}
        <div className="mt-4 flex flex-col gap-1">
          <h3 className="text-lg font-bold h-12 overflow-hidden">
            {data?.title}
          </h3>
          <div className="flex items-center gap-2 text-sm text-yellow-400">
            <FaStar className="h-4 w-4" />
            <span>{data?.rating}</span>
            <span className="text-gray-400">| {data?.stock} in stock</span>
          </div>
          <p className="text-gray-400 text-xs italic mt-1">{data?.category}</p>
        </div>

        {/* Price */}
        <div className="mt-3 text-right">
          <p className="text-xl font-extrabold text-green-400">
            ₹{Math.floor(data?.price * 80)}
          </p>
        </div>
      </Link>

      {/* Action */}
      <div className="mt-3">
        <BuyButton {...data} />
      </div>
    </section>
  );
}

export default ProductItem;
