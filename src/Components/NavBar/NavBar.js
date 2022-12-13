import { useState } from "react";

//components
import HeaderBrand from "./HeaderBrand/HeaderBrand";
import LinkList from "./LinkList/LinkList";
import { FaBars } from "react-icons/fa";

//styles
import styles from "./NavBar.module.scss";

const NavBar = () => {
  const [showLinks, setShowLinks] = useState(false);
  const showLinksHandler = () => {
    setShowLinks((prev) => (prev = !prev));
  };
  return (
    <div className={styles.container}>
      <HeaderBrand />
      {showLinks && <LinkList />}
      <FaBars className={styles.bars} onClick={showLinksHandler} />
    </div>
  );
};

export default NavBar;
