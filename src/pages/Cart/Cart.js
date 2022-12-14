import { useEffect } from "react";

//components
import CartCard from "../../Components/Cart/CartCard/CartCard";
import CartSummary from "../../Components/Cart/CartSummary/CartSummary";

//redux
import { useDispatch, useSelector } from "react-redux";
import { getShoppingCart } from "../../redux/thunks/cartsThunk";

//styles
import styles from "./Cart.module.scss";

const Cart = () => {
  const dispatch = useDispatch();
  const shoppingCart = useSelector((state) => state.carts.shoppingCart);
  const user = useSelector((state) => state.auth.user.id);

  useEffect(() => {
    //get shopping cart data from firebase
    const unsub = dispatch(getShoppingCart(user));

    return () => unsub;
  }, [dispatch, user]);

  return (
    <div
      className={`${styles.container} ${
        shoppingCart.length <= 3 && styles.height
      }`}
    >
      <h1>Cart</h1>
      <div className={styles.mainWrapper}>
        <div className={styles.productsWrapper}>
          {Array.isArray(shoppingCart) &&
            shoppingCart.map((item) => {
              return <CartCard key={item.id} product={item} />;
            })}
        </div>
        {shoppingCart.length !== 0 && <CartSummary />}
      </div>
    </div>
  );
};

export default Cart;
