//components
import CartCard from "../../Components/Cart/CartCard/CartCard";
import CartSummary from "../../Components/Cart/CartSummary/CartSummary";

//redux
import { useSelector } from "react-redux";

//styles
import styles from "./Cart.module.scss";

const Cart = () => {
  const shoppingCart = useSelector((state) => state.carts.shoppingCart);

  return (
    <div className={styles.container}>
      <h1>Cart</h1>
      <div className={styles.mainWrapper}>
        <div className={styles.productsWrapper}>
          {Array.isArray(shoppingCart) &&
            shoppingCart.map((item) => {
              return <CartCard key={item.id} product={item} />;
            })}
        </div>
        <CartSummary />
      </div>
    </div>
  );
};

export default Cart;
