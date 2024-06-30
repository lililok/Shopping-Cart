import Main from "./routes/Main.jsx";
import Shop from "./routes/Shop";
import Cart from "./routes/Cart";
import ErrorPage from "./routes/ErrorPage";
import Banner from "./parts/Banner.jsx";

const routes = [
  {
    path: "/",
    element: <Main />,
    children: [
      {
        path: "/",
        element: <Banner />,
      },
      {
        path: "shop",
        element: <Shop />,
      },
      {
        path: "cart",
        element: <Cart />,
      },
    ],
    errorElement: <ErrorPage />, 
  },
];

export default routes;