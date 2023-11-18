import { createBrowserRouter } from "react-router-dom";
import Root from "../layout/mainlayOut/Root";
import Error from "../layout/errorPage/Error";
import Home from "../pages/home/home/Home";
import Menu from "../pages/menu/menu/Menu";
import OrderPage from "../pages/orderFood/order/OrderPage";
import Sign_In from "../pages/login_page/login/Sign_In";
import SignUp from "../pages/SignUpPage/SignUp";
import Secret from "../pages/shared/secretPage/Secret";
import PrivateRoutes from "./PrivateRoutes";
import Dashboard from "../layout/DashboardLayout/Dashboard";
import Cart from "../pages/DashboardPage/cartPage/Cart";
import AllUsers from "../pages/DashboardPage/allUsersDashboardPage/AllUsers";
import AddItems from "../pages/DashboardPage/AddItemsAdminPanelPage/AddItems";
import AdminRoutes from "./adminRoutesSection/AdminRoutes";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    errorElement: <Error></Error>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "menu",
        element: <Menu></Menu>,
      },
      {
        path: "order/:category",
        element: (
          <PrivateRoutes>
            <OrderPage></OrderPage>
          </PrivateRoutes>
        ),
      },
      {
        path: "login",
        element: <Sign_In></Sign_In>,
      },
      {
        path: "signUp",
        element: <SignUp></SignUp>,
      },
      {
        path: "secret",
        element: (
          <PrivateRoutes>
            <Secret></Secret>
          </PrivateRoutes>
        ),
      },
    ],
  },
  {
    path: "dashboard",
    element: (
      <PrivateRoutes>
        <Dashboard></Dashboard>
      </PrivateRoutes>
    ),
    children: [
      // normal users routes
      {
        path: "cart",
        element: <Cart></Cart>,
      },
      // admin user only routes
      {
        path: "addItems",
        element: (
          // secure the admin panel using adminRoutes
          <AdminRoutes>
            <AddItems></AddItems>
          </AdminRoutes>
        ),
      },
      {
        path: "allUsers",
        element: (
          // secure the admin panel using adminRoutes
          <AdminRoutes>
            <AllUsers></AllUsers>
          </AdminRoutes>
        ),
      },
    ],
  },
]);
