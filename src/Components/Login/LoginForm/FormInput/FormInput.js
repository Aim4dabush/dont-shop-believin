//styles
import styles from "./FormInput.module.scss";

const FormInput = ({ children, id, inputRef }) => {
  return (
    <div className={styles.inputControl}>
      <label htmlFor={id}>{children}</label>
      <input className={styles.inputStyle} id={id} ref={inputRef} type={id} />
    </div>
  );
};

export default FormInput;
