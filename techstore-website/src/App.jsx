import "./App.css";
import {
  createBrowserRouter,
  RouterProvider,
  createRoutesFromElements,
  Route,
} from "react-router-dom";

// client
import Layout from "./components/Layout";
import Home from "./pages/client/Home";
import Contact from "./pages/client/Contact";
import ProductView from "./pages/client/Productview";
import Catalog from "./pages/client/Catalog";
import Favorites from "./pages/client/Favorites";
import Cart from "./pages/client/Cart";
import Order from "./pages/client/Order";
import PaymentInfo from "./pages/client/PaymentInfor";
import Voucher from "./pages/client/Voucher";
import Payment from "./pages/client/Payment";
import PaymentSuccess from "./pages/client/PaymentSuccess";
import WishList from "./pages/client/WishList";

import BankTransferInfo from "./pages/client/BankTransferInfo";
import RestorePassword from "./pages/client/RestorePassword";
import Otp from "./pages/client/Otp";
import RegisteredOTP from "./pages/client/RegisteredOTP";
import CatalogSearch from "./pages/client/CatalogSearch";
import CreateNewPassword from "./pages/client/CreateNewPassword";
import Purchase from "./pages/client/Purchase";
import Login from "./pages/client/Login";
import Register from "./pages/client/Register";
import User from "./pages/client/User";
import Edit from "./pages/client/EditProfile";
import UserHome from "./pages/client/UserHome";

// admin
// import AddCustomer from "./pages/admin/AddCustomer";
// import AddSalesperson from "./pages/admin/AddSalesperson";
// import SalespersonList from "./pages/admin/SalespersonList";
import Dashboard from "./pages/admin/Dashboard";
import Customers from "./pages/admin/Customers";
import AddProduct from "./pages/admin/AddProduct";
import ProductList from "./pages/admin/ProductList";
import AddCategory from "./pages/admin/AddCategory";
import CategoryList from "./pages/admin/CategoryList";
import AddBrand from "./pages/admin/AddBrand";
import BrandList from "./pages/admin/BrandList";
import AddColor from "./pages/admin/AddColor";
import ColorList from "./pages/admin/ColorList";
import AddCoupon from "./pages/admin/AddCoupon";
import CouponList from "./pages/admin/CouponList";
import Enquiries from "./pages/admin/Enquiries";
import Orders from "./pages/admin/Orders";
import ForgotPassword from "./pages/admin/ForgotPassword";
import ResetPassword from "./pages/admin/ResetPassword";
import ViewEnq from "./pages/admin/ViewEnq";
import ViewOrder from "./pages/admin/ViewOrder";
import AdminLogin from "./pages/admin/AdminLogin";
import AdminLayout from "./components/AdminLayout";
import CustomerDetails from "./pages/admin/CustomerDetails";
import EditOrder from "./pages/admin/EditOrder";

import RequireAuth from "./components/RequireAuth";
import React from "react";

const router = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route element={<RequireAuth allowedRoles="" />}>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="contact" element={<Contact />} />
          <Route path="search-product" element={<CatalogSearch />} />
          <Route path="purchase" element={<Purchase />} />
          <Route path="product-view/:slug" element={<ProductView />} />
          <Route path="catalog" element={<Catalog />} />
          <Route path="shopping-cart" element={<Cart />} />
          <Route path="forgot-password-otp" element={<Otp />} />
          <Route path="otp" element={<RegisteredOTP />} />
          <Route path="wishlist" element={<WishList />} />
          <Route path="forgot-password" element={<RestorePassword />} />
          <Route path="change-password" element={<CreateNewPassword />} />

          <Route path="login" element={<Login />} />
          <Route element={<RequireAuth allowedRoles="guest" />}>
            <Route path="register" element={<Register />} />
          </Route>
        </Route>
      </Route>
      <Route path="/admin-login" element={<AdminLogin />} />
      <Route element={<RequireAuth allowedRoles="admin" />}>
        <Route path="/admin" element={<AdminLayout />}>
          <Route index element={<Dashboard />} />
          {/* <Route path="customer" element={<AddCustomer />} />
          <Route path="customer/:id" element={<AddCustomer />} /> */}
          <Route path="customer-list" element={<Customers />} />
          <Route path="customer" element={<CustomerDetails />} />
          {/* <Route path="salesperson" element={<AddSalesperson />} /> */}
          {/* <Route path="salesperson/:id" element={<AddSalesperson />} />
          <Route path="list-salesperson" element={<SalespersonList />} /> */}
          <Route path="product" element={<AddProduct />} />
          <Route path="product/:id" element={<AddProduct />} />
          <Route path="list-product" element={<ProductList />} />
          <Route path="category" element={<AddCategory />} />
          <Route path="category/:id" element={<AddCategory />} />
          <Route path="list-category" element={<CategoryList />} />
          <Route path="brand" element={<AddBrand />} />
          <Route path="brand/:id" element={<AddBrand />} />
          <Route path="list-brand" element={<BrandList />} />
          <Route path="color" element={<AddColor />} />
          <Route path="color/:id" element={<AddColor />} />
          <Route path="list-color" element={<ColorList />} />
          <Route path="coupon-list" element={<CouponList />} />
          <Route path="coupon" element={<AddCoupon />} />
          <Route path="coupon/:id" element={<AddCoupon />} />
          <Route path="enquiries" element={<Enquiries />} />
          <Route path="order" element={<EditOrder />} />
          <Route path="order-list" element={<Orders />} />
          <Route path="forgot-password" element={<ForgotPassword />} />
          <Route path="reset-password" element={<ResetPassword />} />
          <Route path="enquiries/:id" element={<ViewEnq />} />
          <Route path="order/:id" element={<ViewOrder />} />
        </Route>
      </Route>
    </>
  )
);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
