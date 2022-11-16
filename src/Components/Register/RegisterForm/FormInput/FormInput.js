//styles
import styles from "./FormInput.module.scss";

const FormInput = ({
  children,
  classStyle,
  error,
  errorMessage,
  handleOnBlur,
  handleOnChange,
  id,
  inputRef,
  value,
}) => {
  return (
    <div className={styles.inputControl}>
      <label htmlFor={id}>{children}</label>
      <input
        className={`${styles.inputStyle} ${classStyle}`}
        id={id}
        onBlur={handleOnBlur}
        onChange={handleOnChange}
        ref={inputRef}
        value={value}
        type={id}
      />
      {error && <p className={styles.errorMessage}>{errorMessage}</p>}
    </div>
  );
};

export default FormInput;
