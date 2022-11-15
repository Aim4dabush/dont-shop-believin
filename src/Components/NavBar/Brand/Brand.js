//components
import { NavLink } from "react-router-dom";

//styles
import styles from "./Brand.module.scss";

const Brand = () => {
  return (
    <NavLink className={styles.brand} to="/products">
      Don't Shop Believin
    </NavLink>
  );
};

export default Brand;
