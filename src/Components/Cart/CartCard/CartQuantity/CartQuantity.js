//styles
import styles from "./CartQuantity.module.scss";

const CartQuantity = ({ quantity, setItemQuantity, title }) => {
  const onClickHandler = (command) => {
    if (command === "increase") {
      setItemQuantity((prev) => (prev = prev + 1));
    } else {
      setItemQuantity((prev) => (prev = prev - 1));
    }
  };

  return (
    <div>
      <label htmlFor={title}>Quantity</label>
      <div>
        <button
          className={styles.btnOne}
          onClick={() => onClickHandler("decrease")}
        >
          -
        </button>
        <input
          className={styles.quantityInput}
          type="number"
          id={title}
          value={quantity}
          readonly
        />
        <button
          className={styles.btnTwo}
          onClick={() => onClickHandler("increase")}
        >
          +
        </button>
      </div>
    </div>
  );
};

export default CartQuantity;
