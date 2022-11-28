import { useNavigate } from "react-router-dom";

//redux
import { useDispatch, useSelector } from "react-redux";
import { modalActions } from "../../../redux/slices/modalSlice";

//styles
import styles from "./ReturnModalCard.module.scss";

const ReturnModalCard = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const returnOrder = useSelector((state) => state.modal.returnOrder);

  const onClickHandler = () => {
    if (returnOrder.status === "Success") {
      dispatch(modalActions.setReturnOrderReset());
      navigate("/products", { replace: true });
    } else {
      dispatch(modalActions.setReturnOrderReset());
    }
  };
  return (
    <div className={styles.container}>
      <h3>{returnOrder.status}</h3>
      <p>{returnOrder.message}</p>
      <button className={styles.btn} onClick={onClickHandler}>
        Close
      </button>
    </div>
  );
};

export default ReturnModalCard;
