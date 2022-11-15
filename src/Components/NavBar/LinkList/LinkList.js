//components
import PageLink from "./PageLink/PageLink";

//styles
import styles from "./LinkList.module.scss";

const LinkList = () => {
  return (
    <ul className={styles.list}>
      <PageLink link={"/products"}>Products</PageLink>
      <PageLink link={"/wishlist"}>Wish List</PageLink>
      <PageLink link={"/cart"}>Cart</PageLink>
      <PageLink link={"/checkout"}>Checkout</PageLink>
      <PageLink link={"/login"}>Login</PageLink>
    </ul>
  );
};

export default LinkList;
