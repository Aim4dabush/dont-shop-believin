//components
import { FaAngleDoubleLeft, FaAngleDoubleRight } from "react-icons/fa";
import { NavLink } from "react-router-dom";

//styles
import styles from "./NavigationButtons.module.scss";

const NavigationButtons = () => {
  return (
    <div className={styles.btnWrapper}>
      <NavLink className={styles.btn} to={"/products"}>
        <FaAngleDoubleLeft /> Back To Products
      </NavLink>
      <NavLink className={styles.btn} to={"/cart"}>
        Go To Cart
        <FaAngleDoubleRight />
      </NavLink>
    </div>
  );
};

export default NavigationButtons;
