//components
import ItemCard from "./ItemCard/ItemCard";

//styles
import styles from "./ReturnItems.module.scss";

const ReturnItems = () => {
  return (
    <div className={styles.container}>
      <h3 className={styles.title}>Return Items</h3>
      <ItemCard />
    </div>
  );
};

export default ReturnItems;
