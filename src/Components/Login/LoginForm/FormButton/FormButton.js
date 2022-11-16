//styles
import styles from "./FormButton.module.scss";

const FormButton = () => {
  return (
    <button className={styles.btn} type="submit">
      Login
    </button>
  );
};

export default FormButton;
