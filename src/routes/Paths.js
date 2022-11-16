import { Routes, Route } from "react-router-dom";

//components
import App from "../App";
import Cart from "../pages/Cart/Cart";
import Checkout from "../pages/Checkout/Checkout";
import Login from "../pages/Login/Login";
import PrivacyPolicy from "../pages/PrivacyPolicy/PrivacyPolicy";
import ProductDetail from "../pages/ProductDetail/ProductDetail";
import Products from "../pages/Products/Products";
import Register from "../pages/Register/Register";
import Return from "../pages/Return/Return";
import ShippingPolicy from "../pages/ShippingPolicy/ShippingPolicy";
import Welcome from "../pages/Welcome/Welcome";
import WishList from "../pages/WishList/WishList";

//redux
import { useSelector } from "react-redux";

const Paths = () => {
  const isAuth = useSelector((state) => state.auth.user.isAuth);

  return (
    <Routes>
      <Route path="/" element={<App />}>
        <Route index element={<Welcome />} />
        {isAuth && <Route element={<Cart />} path="cart" />}
        {isAuth && <Route element={<Checkout />} path="checkout" />}
        <Route element={<Login />} path="login" />
        <Route element={<PrivacyPolicy />} path="privacy-policy" />
        {isAuth && (
          <Route element={<Products />} path="products">
            <Route element={<ProductDetail />} path="products/:id" />
          </Route>
        )}
        <Route element={<Return />} path="return" />
        <Route element={<ShippingPolicy />} path="shipping-policy" />
        <Route element={<Register />} path="register" />
        {isAuth && <Route element={<WishList />} path="wishlist" />}
        <Route element={<Welcome />} path="*" />
      </Route>
    </Routes>
  );
};

export default Paths;
