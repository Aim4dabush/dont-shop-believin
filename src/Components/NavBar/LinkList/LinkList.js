//components
import {
  FaBoxOpen,
  FaHeart,
  FaShoppingBag,
  FaShoppingCart,
} from "react-icons/fa";
import { GoSignOut } from "react-icons/go";
import PageLink from "./PageLink/PageLink";

//styles
import styles from "./LinkList.module.scss";

const LinkList = () => {
  return (
    <ul className={styles.list}>
      <PageLink link={"/products"}>
        <FaBoxOpen className={styles.icon} /> Products
      </PageLink>
      <PageLink link={"/wishlist"}>
        <FaHeart className={styles.icon} /> Wish List
      </PageLink>
      <PageLink link={"/cart"}>
        <FaShoppingCart className={styles.icon} /> Cart
      </PageLink>
      <PageLink link={"/checkout"}>
        <FaShoppingBag className={styles.icon} /> Checkout
      </PageLink>
      <li className={styles.logout}>
        <GoSignOut className={styles.icon} /> Logout
      </li>
    </ul>
  );
};

export default LinkList;
