import { useNavigate } from "react-router-dom";

//redux
import { useDispatch, useSelector } from "react-redux";
import { checkoutActions } from "../../../redux/slices/checkoutSlice";

//styles
import styles from "./CartSummary.module.scss";

const CartSummary = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const shoppingCart = useSelector((state) => state.carts.shopping.cart);

  const total = shoppingCart.reduce((value, item) => {
    return value + item.subTotal;
  }, 0);

  const onClickHandler = () => {
    dispatch(checkoutActions.setTotal(total));
    navigate("/checkout", { replace: true });
  };

  return (
    <div className={styles.summary}>
      <h4>Summary</h4>
      {Array.isArray(shoppingCart) &&
        shoppingCart.map((item) => {
          return (
            <div className={styles.wrapper} key={item.id}>
              <p className={styles.title}>{item.title}</p>
              <p className={styles.subTotal}>SubTotal: ${item.subTotal}</p>
              <hr />
            </div>
          );
        })}
      <p>Total: ${total}</p>
      <button className={styles.btn} onClick={onClickHandler}>
        Checkout
      </button>
    </div>
  );
};

export default CartSummary;
