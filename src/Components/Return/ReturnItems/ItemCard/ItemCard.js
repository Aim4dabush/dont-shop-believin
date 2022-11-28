//components
import ItemImage from "./ItemImage/ItemImage";

//styles
import styles from "./ItemCard.module.scss";

const ItemCard = () => {
  return (
    <div className={styles.card}>
      <ItemImage />
      <div className={styles.infoWrapper}>
        <p>title</p>
        <p>quantity</p>
        <p>price</p>
        <p>subTotal</p>
      </div>
    </div>
  );
};

export default ItemCard;
