import { useState } from "react";

//components
import HeaderBrand from "./HeaderBrand/HeaderBrand";
import LinkList from "./LinkList/LinkList";
import { FaBars } from "react-icons/fa";

//redux
import { useSelector } from "react-redux";

//styles
import styles from "./NavBar.module.scss";

const NavBar = () => {
  const isAuth = useSelector((state) => state.auth.user.token);
  const [showLinks, setShowLinks] = useState(false);
  const showLinksHandler = () => {
    setShowLinks((prev) => (prev = !prev));
  };
  return (
    <div className={styles.container}>
      <HeaderBrand />
      <LinkList showLinks={showLinks} />
      {isAuth && <FaBars className={styles.bars} onClick={showLinksHandler} />}
    </div>
  );
};

export default NavBar;
