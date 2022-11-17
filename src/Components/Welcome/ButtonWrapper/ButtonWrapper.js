//components
import { NavLink } from "react-router-dom";

//styles
import styles from "./ButtonWrapper.module.scss";

const ButtonWrapper = () => {
  return (
    <div className={styles.buttonWrapper}>
      <NavLink className={styles.btn} to={"/register"}>
        Register
      </NavLink>
      <NavLink className={styles.btn} to={"/login"}>
        Login
      </NavLink>
    </div>
  );
};

export default ButtonWrapper;
