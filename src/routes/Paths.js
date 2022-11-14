import { Routes, Route } from "react-router-dom";

//components
import App from "../App";
import Cart from "../pages/Cart/Cart";
import Checkout from "../pages/Checkout/Checkout";
import Login from "../pages/Login/Login";
import Products from "../pages/Products/Products";
import SignUp from "../pages/SignUp/SignUp";
import Welcome from "../pages/Welcome/Welcome";
import WishList from "../pages/WishList/WishList";

const Paths = () => {
  return (
    <Routes>
      <Route path="/" element={<App />}>
        <Route index element={<Welcome />} />
        <Route element={<Cart />} path="cart" />
        <Route element={<Checkout />} path="checkout" />
        <Route element={<Login />} path="login" />
        <Route element={<Products />} path="products" />
        <Route element={<SignUp />} path="signup" />
        <Route element={<WishList />} path="wishlist" />
      </Route>
    </Routes>
  );
};

export default Paths;
