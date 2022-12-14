import { useEffect } from "react";

//components
import { useNavigate } from "react-router-dom";

//redux
import { useDispatch, useSelector } from "react-redux";
import { checkoutActions } from "../../../redux/slices/checkoutSlice";
import { modalActions } from "../../../redux/slices/modalSlice";
import { getCustomerOrder } from "../../../redux/thunks/checkoutThunk";

//styles
import styles from "./CheckoutModalCard.module.scss";

const CheckoutModalCard = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const receipt = useSelector((state) => state.checkout.order.receipt);
  const order = useSelector((state) => state.checkout.order);

  const goToShippingPolicy = () => {
    dispatch(checkoutActions.setOrderReset());
    dispatch(modalActions.setCheckout(false));
    navigate("/shipping-policy", { replace: true });
  };

  const goToStore = () => {
    dispatch(checkoutActions.setOrderReset());
    dispatch(modalActions.setCheckout(false));
    navigate("/products", { replace: true });
  };

  useEffect(() => {
    dispatch(getCustomerOrder(receipt));
  }, [dispatch, receipt]);

  return (
    <div className={styles.container}>
      <div className={styles.card}>
        <h1>Order #{order.receipt}</h1>
        <p>
          Thank you {order.fullName} for your purchase. ${order.total} will be
          charged to your {order.creditCard.company} card #
          {order.creditCard.card}.
        </p>
        <p>
          Your order will be shipped to {order.address.street}{" "}
          {order.address.city}, {order.address.state} {order.address?.zip}. You
          have until your order has been shipped to change the shipping address.
        </p>
        <p>Your full order information will be sent to {order.email}.</p>
        <div className={styles.btnWrapper}>
          <button className={styles.btn} onClick={goToShippingPolicy}>
            Shipping Policy
          </button>
          <button className={styles.btn} onClick={goToStore}>
            Back To Shop
          </button>
        </div>
      </div>
    </div>
  );
};

export default CheckoutModalCard;
