//redux
import { useSelector } from "react-redux";

//styles
import styles from "./CartQuantity.module.scss";

const CartQuantity = ({ title }) => {
  const quantity = useSelector((state) => state.carts.quantity);
  return (
    <div>
      <label htmlFor={title}>Quantity</label>
      <div>
        <button className={styles.btnOne}>-</button>
        <input
          className={styles.quantityInput}
          type="number"
          id={title}
          value={quantity}
          readonly
        />
        <button className={styles.btnTwo}>+</button>
      </div>
    </div>
  );
};

export default CartQuantity;
