//redux
import { useDispatch, useSelector } from "react-redux";
import { modalActions } from "../../../redux/slices/modalSlice";
import { deleteOrder } from "../../../redux/thunks/checkoutThunk";

//styles
import styles from "./ReturnSummary.module.scss";

const ReturnSummary = () => {
  const dispatch = useDispatch();
  const order = useSelector((state) => state.checkout.order);

  //refunds customers order
  const returnOrderHandler = () => {
    dispatch(deleteOrder(order.receipt));
    dispatch(
      modalActions.setReturnOrder({
        status: "Success",
        message: `Your ${order.creditCard.company} #${order.creditCard.card} has been refunded`,
        isShown: true,
      })
    );
  };

  return (
    <div className={styles.container}>
      <h3 className={styles.title}>Return Summary</h3>
      <hr />
      <p className={styles.info}>Receipt: #{order.receipt}</p>
      <hr />
      <p className={styles.info}>
        Credit Card: {order.creditCard.company} #{order.creditCard.card}
      </p>
      <hr />
      <p className={styles.info}>Number Items: {order.items?.length}</p>
      <hr />
      <p className={styles.info}>Order Total: ${order.total}</p>
      <hr />
      <button className={styles.btn} onClick={returnOrderHandler}>
        Refund Order
      </button>
    </div>
  );
};

export default ReturnSummary;
