//components
import { GiShop } from "react-icons/gi";
import { NavLink } from "react-router-dom";

//styles
import styles from "./Welcome.module.scss";

const Welcome = () => {
  return (
    <section className={styles.container}>
      <div className={styles.card}>
        <GiShop className={styles.icon} />
        <h2 className={styles.title}>Don't Shop Believin</h2>
        <p className={styles.message}>
          Don't be strangers waitin up and down the boulevard or shadows
          searchin in the night. Live to find the emotion somewhere in the
          night. Before you{" "}
          <span className={styles.brand}>Don't Shop Believin</span>, please{" "}
          <NavLink className={styles.link} to="/signup">
            sign-up
          </NavLink>{" "}
          for your free account. If you already have an account you can login{" "}
          <NavLink className={styles.link} to="/login">
            here
          </NavLink>
          .
        </p>
      </div>
    </section>
  );
};

export default Welcome;
