//redux
import { useDispatch, useSelector } from "react-redux";
import { notifyActions } from "../../../redux/slices/notifySlice";

//styles
import styles from "./Card.module.scss";

const Card = () => {
  const dispatch = useDispatch();
  const notification = useSelector((state) => state.notify.notification);

  const onClickHandler = () => {
    dispatch(
      notifyActions.setNotification({
        status: null,
        message: null,
        isShown: false,
      })
    );
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
