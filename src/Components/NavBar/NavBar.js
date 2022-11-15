//components
import Brand from "./Brand/Brand";
import LinkList from "./LinkList/LinkList";

//styles
import styles from "./NavBar.module.scss";

const NavBar = () => {
  return (
    <div className={styles.container}>
      <Brand />
      <LinkList />
    </div>
  );
};

export default NavBar;
