import { useNavigate } from "react-router-dom";

//redux
import { useDispatch, useSelector } from "react-redux";
import { modalActions } from "../../../redux/slices/modalSlice";

//styles
import styles from "./DetailModalCard.module.scss";

const DetailModalCard = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const productDetail = useSelector((state) => state.modal.productDetail);

  const continueShoppingHandler = () => {
    dispatch(modalActions.setProductDetailReset());
    navigate("/products", { replace: true });
  };

  const cartHandler = () => {
    if (productDetail.title === "cart") {
      navigate("/cart", { replace: true });
    } else {
      navigate("/wishlist", { replace: true });
    }
    dispatch(modalActions.setProductDetailReset());
  };

  return (
    <div className={styles.container}>
      <div className={styles.card}>
        <p>
          Would you like to continue shopping or go to {productDetail.title}?
        </p>
        <div className={styles.buttonWrapper}>
          <button className={styles.btn} onClick={continueShoppingHandler}>
            Continue Shopping
          </button>
          <button className={styles.btn} onClick={cartHandler}>
            {productDetail.title}
          </button>
        </div>
      </div>
    </div>
  );
};

export default DetailModalCard;
