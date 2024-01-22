import * as React from "react";
import * as ReactDOM from "react-dom/client";
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import { Provider } from "react-redux";
import Home from "./pages/Home";
import Products from "./pages/Products";
import store from './configureStore'

const router = createBrowserRouter([
  {
    path: "/",
    element:<Home />,
  },
  {
    path: "/products",
    element:<Products />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  </React.StrictMode>
);