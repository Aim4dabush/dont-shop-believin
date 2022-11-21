import { useRef } from "react";

//styles
import styles from "./DetailForm.module.scss";

const DetailForm = () => {
  const quantity = useRef();

  return (
    <form>
      <div className={styles.inputControl}>
        <label htmlFor="quantity">Quantity</label>
        <div>
          <button className={styles.quantityOne}>-</button>
          <input
            className={styles.quantityInput}
            type="number"
            ref={quantity}
            id="quantity"
            defaultValue={1}
          />
          <button className={styles.quantityTwo}>+</button>
        </div>
      </div>
    </form>
  );
};

export default DetailForm;
