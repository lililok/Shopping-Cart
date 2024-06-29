import App from "./routes/App";
import Shop from "./routes/Shop";
import Cart from "./routes/Shop";
import ErrorPage from "./routes/ErrorPage";

const routes = [
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorPage />,
  },
  {
    path: "shop",
    element: <Shop />,
  },
  {
    path: "cart",
    element: <Cart />,
  },
];

export default routes;