//styles
import styles from "./PaymentInput.module.scss";

const PaymentInput = ({
  children,
  controlStyle,
  error,
  errorMessage,
  errorStyle,
  handleOnBlur,
  handleOnChange,
  id,
  inputRef,
  inputStyle,
  type,
  value,
}) => {
  return (
    <div className={controlStyle}>
      <label htmlFor={id}>{children}</label>
      <input
        className={`${inputStyle} ${errorStyle}`}
        id={id}
        name={id}
        onBlur={handleOnBlur}
        onChange={handleOnChange}
        ref={inputRef}
        type={type}
        value={value}
      />
      {error && <p className={styles.error}>{errorMessage}</p>}
    </div>
  );
};

export default PaymentInput;
