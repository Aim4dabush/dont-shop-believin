//redux
import { useDispatch, useSelector } from "react-redux";
import { cartsActions } from "../../../../redux/slices/cartsSlice";

//styles
import styles from "./WishQuantity.module.scss";

const WishQuantity = ({ title }) => {
  const dispatch = useDispatch();
  const quantity = useSelector((state) => state.carts.quantity);

  const onClickHandler = (command) => {
    if (command === "increase") {
      dispatch(cartsActions.setIncrement(1));
    } else {
      dispatch(cartsActions.setDecrement(1));
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
          readOnly
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

export default WishQuantity;
