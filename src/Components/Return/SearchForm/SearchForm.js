import { useRef } from "react";

//styles
import styles from "./SearchForm.module.scss";

const SearchForm = () => {
  const receipt = useRef();
  return (
    <form className={styles.form}>
      <input
        className={styles.formInput}
        type="text"
        id="receipt"
        ref={receipt}
      />
      <button className={styles.btn}>Search Order</button>
    </form>
  );
};

export default SearchForm;
