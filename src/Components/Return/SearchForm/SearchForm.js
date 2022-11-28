import { useRef } from "react";

//hooks
import { useValidation } from "../../../hooks/useValidation";

//redux
import { useDispatch } from "react-redux";
import { getCustomerOrder } from "../../../redux/thunks/checkoutThunk";

//styles
import styles from "./SearchForm.module.scss";

const SearchForm = () => {
  const dispatch = useDispatch();
  const receipt = useRef();
  const {
    error: receiptError,
    isValid: receiptValid,
    value: receiptValue,
    handleOnBlur: receiptOnBlur,
    handleOnChange: receiptOnChange,
    reset: receiptReset,
  } = useValidation((value) => value.trim() !== "");

  let formIsValid = false;

  if (receiptValid) {
    formIsValid = true;
  }

  const getOrderHandler = (e) => {
    e.preventDefault();
    if (formIsValid) {
      dispatch(getCustomerOrder(receipt.current.value));
      receiptReset();
    }
  };

  const receiptClassName = receiptError ? styles.error : null;

  return (
    <form onSubmit={getOrderHandler} className={styles.form}>
      <div>
        <input
          className={`${styles.formInput} ${receiptClassName}`}
          id="receipt"
          ref={receipt}
          type="text"
          value={receiptValue}
          onBlur={receiptOnBlur}
          onChange={receiptOnChange}
        />
        {receiptError && (
          <p className={styles.textError}>Please enter a receipt!</p>
        )}
      </div>
      <button className={styles.btn}>Search Order</button>
    </form>
  );
};

export default SearchForm;
