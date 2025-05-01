import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import useFetchproduct from "../../hooks/useFetchData.jsx";
import BuyButton from "../ui/BuyButton.jsx";
import Loading from "../Loading.jsx";

function ProductDetail() {
  const [product, setProduct] = useState(null);
  const { id } = useParams();
  const { data, loading, error } = useFetchproduct(
    `https://dummyjson.com/products/${id}`
  );

  useEffect(() => {
    if (data) {
      setProduct(data);
    }
  }, [data]);

  if (loading) return <Loading />;
  if (error)
    return (
      <p className="text-center text-red-400">Error loading product details.</p>
    );

  return (
    <section className="bg-gradient-to-b from-gray-900 via-gray-800 to-gray-900 text-white py-12 px-4 min-h-screen">
      <div className="max-w-screen-xl mx-auto flex flex-col md:flex-row gap-10">
        {/* Product Images */}
        <div className="md:w-1/2 space-y-6 flex flex-col items-center">
          <img
            src={product?.thumbnail}
            alt={product?.title}
            className="rounded-xl border border-gray-600 p-3 shadow-2xl w-full max-w-md h-[300px] object-cover transition-transform hover:scale-105"
          />
          <div className="grid grid-cols-3 gap-3">
            {product?.images?.map((image, index) => (
              <img
                key={index}
                src={image}
                alt={`${product?.title} ${index + 1}`}
                className="w-24 h-24 object-cover rounded-lg border border-gray-600 shadow hover:scale-110 transition-transform duration-300"
              />
            ))}
          </div>
        </div>

        {/* Product Details */}
        <div className="md:w-1/2 space-y-6">
          <h1 className="text-4xl font-extrabold bg-gradient-to-r from-purple-400 via-pink-500 to-yellow-400 bg-clip-text text-transparent">
            {product?.title}
          </h1>
          <h2 className="text-xl italic text-gray-400">by {product?.brand}</h2>
          <p className="text-gray-300">{product?.description}</p>

          <p className="text-2xl font-bold text-green-400">
            ₹{Math.floor(product?.price * 80)}
          </p>

          {/* Details */}
          <div className="grid grid-cols-2 gap-4 text-sm text-gray-400 border-t border-gray-700 pt-4">
            <p>
              <span className="text-white font-medium">Category:</span>{" "}
              {product?.category}
            </p>
            <p>
              <span className="text-white font-medium">Rating:</span>{" "}
              {Math.floor(product?.rating)} / 5
            </p>
            <p>
              <span className="text-white font-medium">Stock:</span>{" "}
              {product?.stock}
            </p>
            <p>
              <span className="text-white font-medium">SKU:</span>{" "}
              {product?.sku}
            </p>
            <p>
              <span className="text-white font-medium">Weight:</span>{" "}
              {product?.weight}g
            </p>
            <p>
              <span className="text-white font-medium">Dimensions:</span>{" "}
              {product?.dimensions?.width} x {product?.dimensions?.height} x{" "}
              {product?.dimensions?.depth} cm
            </p>
            <p>
              <span className="text-white font-medium">Warranty:</span>{" "}
              {product?.warrantyInformation}
            </p>
            <p>
              <span className="text-white font-medium">Shipping:</span>{" "}
              {product?.shippingInformation}
            </p>
            <p>
              <span className="text-white font-medium">Availability:</span>{" "}
              {product?.availabilityStatus}
            </p>
            <p>
              <span className="text-white font-medium">Return:</span>{" "}
              {product?.returnPolicy}
            </p>
            <p>
              <span className="text-white font-medium">Min Order:</span>{" "}
              {product?.minimumOrderQuantity}
            </p>
          </div>

          {/* Buy Button */}
          <div className="mt-4">
            <BuyButton {...product} />
          </div>

          {/* Reviews */}
          <h3 className="text-2xl font-bold mt-10 border-b border-gray-700 pb-2">
            Customer Reviews
          </h3>
          <div className="space-y-4">
            {product?.reviews?.map((review, index) => (
              <div
                key={index}
                className="bg-gray-800 p-4 rounded-lg shadow hover:bg-gray-700 transition"
              >
                <p className="text-yellow-400 font-semibold">
                  ⭐ {review.rating} / 5
                </p>
                <p className="text-gray-300">{review.comment}</p>
                <p className="text-gray-500 text-sm">
                  By: {review.reviewerName}
                </p>
                <p className="text-gray-500 text-sm">
                  Date: {new Date(review.date).toLocaleDateString()}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default ProductDetail;
