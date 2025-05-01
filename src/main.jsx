import { StrictMode, lazy, Suspense } from "react";
import { createRoot } from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Provider } from "react-redux";
import store from "./redux/store.js";
import "./index.css";

import App from "./App.jsx";
import Home from "./pages/Home.jsx";
import Loading from "./components/Loading.jsx";

// Lazy-loaded components
const Cart = lazy(() => import("./components/Cart/Cart.jsx"));
const Checkout = lazy(() => import("./pages/Chechout.jsx"));
const NotFound = lazy(() => import("./components/NotFound/NotFound.jsx"));
// const ProductDetail = lazy(() =>
//   import("./components/ProductDetail/ProductDetail.jsx")
// );
const ProductDetail = lazy(() =>
  import("./components/ProductDetail/ProductDetail.jsx")
);

const routes = createBrowserRouter([
  {
    path: "",
    element: <App />,
    children: [
      {
        path: "",
        element: <Home />,
      },
      {
        path: "/product/:id",
        element: (
          <Suspense fallback={<Loading />}>
            <ProductDetail />
          </Suspense>
        ),
      },
      {
        path: "/cart",
        element: (
          <Suspense fallback={<Loading />}>
            <Cart />
          </Suspense>
        ),
      },
      {
        path: "/checkout",
        element: (
          <Suspense fallback={<Loading />}>
            <Checkout />
          </Suspense>
        ),
      },
    ],
    errorElement: (
      <Suspense fallback={<Loading />}>
        <NotFound />
      </Suspense>
    ),
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Provider store={store}>
      <RouterProvider router={routes} />
    </Provider>
  </StrictMode>
);
