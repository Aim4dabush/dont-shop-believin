//redux
import { useSelector } from "react-redux";

//styles
import styles from "./CartSummary.module.scss";

const CartSummary = () => {
  const shoppingCart = useSelector((state) => state.carts.shopping.cart);

  const total = shoppingCart.reduce((value, item) => {
    return value + item.subTotal;
  }, 0);

  return (
    <div className={styles.summary}>
      <h4>Summary</h4>
      {Array.isArray(shoppingCart) &&
        shoppingCart.map((item) => {
          return (
            <div className={styles.wrapper} key={item.id}>
              <p className={styles.title}>{item.title}</p>
              <p className={styles.subTotal}>SubTotal: ${item.subTotal}</p>
              <hr />
            </div>
          );
        })}
      <p>Total: ${total}</p>
      <button className={styles.btn}>Checkout</button>
    </div>
  );
};

export default CartSummary;
