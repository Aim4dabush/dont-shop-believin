import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

//components
import { FaFlagCheckered } from "react-icons/fa";

//redux
import { useDispatch, useSelector } from "react-redux";
import { checkoutActions } from "../../../redux/slices/checkoutSlice";

//styles
import styles from "./CartSummary.module.scss";

const CartSummary = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const shoppingCart = useSelector((state) => state.carts.shoppingCart);
  const total = useSelector((state) => state.checkout.order.total);

  const onClickHandler = () => {
    dispatch(checkoutActions.setTotal(total));
    navigate("/checkout", { replace: true });
  };

  useEffect(() => {
    if (shoppingCart.length > 1) {
      let total = shoppingCart.reduce((value, item) => {
        return value + item.subTotal;
      }, 0);

      dispatch(checkoutActions.setTotal(total));
    } else {
      let total = shoppingCart[0]?.quantity * shoppingCart[0]?.price;
      dispatch(checkoutActions.setTotal(total));
    }
  }, [dispatch, shoppingCart]);

  return (
    <div className={styles.summary}>
      <h4>Summary</h4>
      {Array.isArray(shoppingCart) &&
        shoppingCart.map((item) => {
          return (
            <div className={styles.wrapper} key={item.id}>
              <p className={styles.title}>{item.title}</p>
              <p className={styles.subTotal}>SubTotal: ${item.subTotal}</p>
            </div>
          );
        })}
      <hr />
      <p>Total: ${total ? total : 0}</p>
      <button className={styles.btn} onClick={onClickHandler}>
        <FaFlagCheckered /> Checkout
      </button>
    </div>
  );
};

export default CartSummary;
