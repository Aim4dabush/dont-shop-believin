//components
import { NavLink } from "react-router-dom";

//styles
import styles from "./PolicyLink.module.scss";

const PolicyLink = ({ children, link }) => {
  return (
    <li className={styles.item}>
      <NavLink className={styles.navLink} to={link}>
        {children}
      </NavLink>
    </li>
  );
};

export default PolicyLink;
