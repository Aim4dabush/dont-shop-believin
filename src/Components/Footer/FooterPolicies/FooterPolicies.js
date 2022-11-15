//components
import PolicyLink from "./PolicyLink/PolicyLink";

//styles
import styles from "./FooterPolicies.module.scss";

const FooterPolicies = () => {
  return (
    <ul className={styles.listWrapper}>
      <PolicyLink link={"/return"}>Return</PolicyLink>
      <PolicyLink link={"/privacy-policy"}>Privacy Policy</PolicyLink>
      <PolicyLink link={"/shipping-policy"}>Shipping Policy</PolicyLink>
    </ul>
  );
};

export default FooterPolicies;
