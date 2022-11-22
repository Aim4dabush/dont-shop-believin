import { useNavigate } from "react-router-dom";

//components
import {
  FaBoxOpen,
  FaHeart,
  FaShoppingBag,
  FaShoppingCart,
} from "react-icons/fa";
import { GoSignOut } from "react-icons/go";
import PageLink from "./PageLink/PageLink";

//redux
import { useDispatch, useSelector } from "react-redux";
import { authLogout } from "../../../redux/thunks/authThunk";

//styles
import styles from "./LinkList.module.scss";

const LinkList = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const isAuth = useSelector((state) => state.auth.user.token);
  const shopping = useSelector((state) => state.carts.shopping);
  const wish = useSelector((state) => state.carts.wish);

  const onClickHandler = () => {
    dispatch(authLogout());
    navigate("/", { replace: true });
  };

  return (
    <ul className={styles.list}>
      <PageLink link={"/products"}>
        <FaBoxOpen className={styles.icon} /> Products
      </PageLink>
      <PageLink link={"/wishlist"}>
        <FaHeart className={styles.icon} /> Wish List
        <span className={styles.size}>{wish.length}</span>
      </PageLink>
      <PageLink link={"/cart"}>
        <FaShoppingCart className={styles.icon} /> Cart
        <span className={styles.size}>{shopping.length}</span>
      </PageLink>
      <PageLink link={"/checkout"}>
        <FaShoppingBag className={styles.icon} /> Checkout
      </PageLink>
      {isAuth && (
        <li className={styles.logout} onClick={onClickHandler}>
          <GoSignOut className={styles.icon} /> Logout
        </li>
      )}
    </ul>
  );
};

export default LinkList;
