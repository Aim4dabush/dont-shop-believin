//components
import { FaFacebookSquare, FaInstagram, FaTwitter } from "react-icons/fa";
import MediaLink from "./MediaLink/MediaLink";

//styles
import styles from "./FooterMedia.module.scss";

const FooterMedia = () => {
  return (
    <ul className={styles.listWrapper}>
      <MediaLink link="https://www.instagram.com/">
        <FaInstagram className={styles.icon} /> Instagram
      </MediaLink>
      <MediaLink link="https://www.facebook.com/">
        <FaFacebookSquare className={styles.icon} /> Facebook
      </MediaLink>
      <MediaLink link="https://www.twitter.com">
        <FaTwitter className={styles.icon} /> Twitter
      </MediaLink>
    </ul>
  );
};

export default FooterMedia;
