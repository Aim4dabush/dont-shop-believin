//components
import { NavLink } from "react-router-dom";

//redux
import { useSelector } from "react-redux";

//styles
import styles from "./PageLink.module.scss";

const PageLink = ({ children, link }) => {
  const isAuth = useSelector((state) => state.auth.user.token);

  return (
    <li>
      {isAuth && (
        <NavLink className={styles.navLink} to={link}>
          {children}
        </NavLink>
      )}
    </li>
  );
};

export default PageLink;
