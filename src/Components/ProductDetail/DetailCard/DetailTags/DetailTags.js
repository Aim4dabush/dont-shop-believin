//styles
import styles from "./DetailTags.module.scss";

const DetailTags = ({ brand, category }) => {
  return (
    <div className={styles.tagWrapper}>
      <p>
        Tags: Brand({brand}) Category({category})
      </p>
    </div>
  );
};

export default DetailTags;
