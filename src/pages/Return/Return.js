//components
import ReturnItems from "../../Components/Return/ReturnItems/ReturnItems";
import ReturnSummary from "../../Components/Return/ReturnSummary/ReturnSummary";
import SearchForm from "../../Components/Return/SearchForm/SearchForm";

//redux
import { useSelector } from "react-redux";

//styles
import styles from "./Return.module.scss";

const Return = () => {
  const order = useSelector((state) => state.checkout.order);

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Return</h1>
      <SearchForm />
      {order.receipt && (
        <div className={styles.orderWrapper}>
          <ReturnSummary />
          <ReturnItems />
        </div>
      )}
    </div>
  );
};

export default Return;
