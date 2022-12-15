//components
import ItemCard from "./ItemCard/ItemCard";

//redux
import { useSelector } from "react-redux";

//styles
import styles from "./ReturnItems.module.scss";

const ReturnItems = () => {
  const order = useSelector((state) => state.checkout.order);

  return (
    <div className={styles.container}>
      <h3 className={styles.title}>Return Items</h3>
      {order.items.map((item) => {
        return <ItemCard key={item.id} product={item} />;
      })}
    </div>
  );
};

export default ReturnItems;
