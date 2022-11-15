//components
import { NavLink } from "react-router-dom";

//styles
import styles from "./PageLink.module.scss";

const PageLink = ({ children, link }) => {
  return (
    <li>
      <NavLink className={styles.navLink} to={link}>
        {children}
      </NavLink>
    </li>
  );
};

export default PageLink;
