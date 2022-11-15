//components
import FooterBrand from "./FooterBrand/FooterBrand";
import FooterMedia from "./FooterMedia/FooterMedia";
import FooterPolicies from "./FooterPolicies/FooterPolicies";

//styles
import styles from "./Footer.module.scss";

const Footer = () => {
  return (
    <div className={styles.container}>
      <FooterBrand />
      <FooterPolicies />
      <FooterMedia />
    </div>
  );
};

export default Footer;
