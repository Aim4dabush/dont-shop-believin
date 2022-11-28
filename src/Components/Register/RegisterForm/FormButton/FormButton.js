//components
import { GiArchiveRegister } from "react-icons/gi";

//styles
import styles from "./FormButton.module.scss";

const FormButton = () => {
  return (
    <button className={styles.btn} type="submit">
      <GiArchiveRegister />
      Register
    </button>
  );
};

export default FormButton;
