//components
import Brand from "./Brand/Brand";

//styles
import styles from "./NavBar.module.scss";

const NavBar = () => {
  return (
    <div className={styles.container}>
      <Brand />
    </div>
  );
};

export default NavBar;
