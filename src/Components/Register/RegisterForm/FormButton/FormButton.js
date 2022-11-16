//styles
import styles from "./FormButton.module.scss";

const FormButton = () => {
  return (
    <button className={styles.btn} type="submit">
      Register
    </button>
  );
};

export default FormButton;
