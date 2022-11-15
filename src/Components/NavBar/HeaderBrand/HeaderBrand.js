//components
import { NavLink } from "react-router-dom";
import { GiShop } from "react-icons/gi";

//styles
import styles from "./HeaderBrand.module.scss";

const HeaderBrand = () => {
  return (
    <NavLink className={styles.brand} to="/products">
      <GiShop className={styles.icon} /> Don't Shop Believin
    </NavLink>
  );
};

export default HeaderBrand;
