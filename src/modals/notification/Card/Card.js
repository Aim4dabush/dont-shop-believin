import { useNavigate } from "react-router-dom";

//redux
import { useDispatch, useSelector } from "react-redux";
import { modalActions } from "../../../redux/slices/modalSlice";

//styles
import styles from "./Card.module.scss";

const Card = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const notification = useSelector((state) => state.modal.notification);

  const onClickHandler = () => {
    if (notification.status === "Success") {
      dispatch(modalActions.setNotificationReset());
      navigate("/login", { replace: true });
    } else {
      dispatch(modalActions.setNotificationReset());
    }
  };

  return (
    <div className={styles.container}>
      <h3>{notification.status}</h3>
      <p>{notification.message}</p>
      <button className={styles.btn} onClick={onClickHandler}>
        Close
      </button>
    </div>
  );
};

export default Card;
