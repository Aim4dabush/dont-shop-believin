//component
import { GiShop } from "react-icons/gi";
import { NavLink } from "react-router-dom";

//styles
import styles from "./FooterBrand.module.scss";

const FooterBrand = () => {
  return (
    <NavLink className={styles.brand}>
      <GiShop className={styles.icon} /> Don't Shop Believin
    </NavLink>
  );
};

export default FooterBrand;
