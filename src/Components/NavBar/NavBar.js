//components
import HeaderBrand from "./HeaderBrand/HeaderBrand";
import LinkList from "./LinkList/LinkList";

//styles
import styles from "./NavBar.module.scss";

const NavBar = () => {
  return (
    <div className={styles.container}>
      <HeaderBrand />
      <LinkList />
    </div>
  );
};

export default NavBar;
