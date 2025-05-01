import { Suspense } from "react";
import { lazy } from "react";
import { useNavigate } from "react-router-dom";
import Loading from "../components/Loading";
import "animate.css";

const ProductList = lazy(() => import("../components/ProductList/ProductList"));

function Home() {
  const navigate = useNavigate();

  const handleShopNowClick = () => {
    navigate("#our-products");
  };

  return (
    <div className="h-full w-full px-4">
      <section className="bg-gradient-to-r from-purple-600 via-blue-600 to-green-300 text-white py-32 shadow-lg">
        <div className="mx-auto max-w-screen-xl px-4 lg:flex lg:h-screen lg:items-center">
          <div className="mx-auto max-w-3xl text-center">
            <h1 className="bg-gradient-to-r from-yellow-400 via-red-500 to-pink-600 bg-clip-text text-5xl font-extrabold text-transparent sm:text-6xl animate__animated animate__fadeIn">
              Welcome to ShoppyGlobe.
              <span className="sm:block text-lg font-light mt-2 opacity-80">
                {" "}
                Your One-Stop Shop for Everything!{" "}
              </span>
            </h1>

            <p className="mx-auto mt-4 max-w-xl sm:text-lg text-gray-200 leading-relaxed">
              Discover a wide range of products at unbeatable prices. Shop now
              and enjoy amazing deals and discounts! We offer the best deals for
              everyone.
            </p>

            <div className="mt-8 flex flex-wrap justify-center gap-4">
              <button
                onClick={handleShopNowClick}
                className="cursor-pointer block w-full rounded-lg border-2 border-transparent bg-gradient-to-r from-blue-500 to-indigo-500 px-12 py-4 text-lg font-semibold text-white transition-all duration-500 hover:bg-transparent hover:text-blue-600 hover:border-blue-600 focus:ring-4 focus:ring-blue-300 sm:w-auto transform hover:scale-105"
              >
                Shop Now
              </button>
            </div>
          </div>
        </div>
      </section>

      <h2
        id="our-products"
        className="text-center text-4xl sm:text-6xl font-extrabold mb-12 bg-gradient-to-r from-purple-600 via-blue-600 to-green-300 bg-clip-text text-transparent shadow-md transform animate__animated animate__fadeIn"
      >
        Our Products
      </h2>

      <Suspense fallback={<Loading />}>
        <ProductList />
      </Suspense>
    </div>
  );
}

export default Home;
