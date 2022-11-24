//styles
import styles from "./ShippingInput.module.scss";

const ShippingInput = ({
  children,
  controlStyleOne,
  controlStyleTwo,
  error,
  errorMessage,
  errorStyle,
  handleOnBlur,
  handleOnChange,
  inputRef,
  inputStyleOne,
  inputStyleTwo,
  id,
  type,
  value,
}) => {
  return (
    <div
      className={`${controlStyleOne} ${
        controlStyleTwo ? controlStyleTwo : null
      }`}
    >
      <label htmlFor={id}>{children}</label>
      <input
        className={`${inputStyleOne} ${
          inputStyleTwo ? inputStyleTwo : null
        } ${errorStyle}`}
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

export default ShippingInput;
