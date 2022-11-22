//redux
import { useDispatch, useSelector } from "react-redux";
import { cartsActions } from "../../../../redux/slices/cartsSlice";

//styles
import styles from "./DetailQuantity.module.scss";

const DetailQuantity = () => {
  const dispatch = useDispatch();
  const quantity = useSelector((state) => state.carts.quantity);

  const quantityChangeHandler = (count) => {
    if (count === "increase") {
      dispatch(cartsActions.setIncrement(1));
    } else {
      dispatch(cartsActions.setDecrement(1));
    }
  };

  // const onChangeHandler = () => {
  //   dispatch(cartsActions.setIncrement(0));
  // };

  return (
    <div className={styles.inputControl}>
      <label htmlFor="quantity">Quantity</label>
      <div>
        <button
          className={styles.quantityOne}
          onClick={() => quantityChangeHandler("decrease")}
        >
          -
        </button>
        <input
          className={styles.quantityInput}
          id="quantity"
          type="number"
          value={quantity}
          readOnly
        />
        <button
          className={styles.quantityTwo}
          onClick={() => quantityChangeHandler("increase")}
        >
          +
        </button>
      </div>
    </div>
  );
};

export default DetailQuantity;
