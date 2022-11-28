//components
import { GiArchiveRegister } from "react-icons/gi";
import { GoSignIn } from "react-icons/go";
import { NavLink } from "react-router-dom";

//styles
import styles from "./ButtonWrapper.module.scss";

const ButtonWrapper = () => {
  return (
    <div className={styles.buttonWrapper}>
      <NavLink className={styles.btn} to={"/register"}>
        <GiArchiveRegister />
        Register
      </NavLink>
      <NavLink className={styles.btn} to={"/login"}>
        <GoSignIn /> Login
      </NavLink>
    </div>
  );
};

export default ButtonWrapper;
