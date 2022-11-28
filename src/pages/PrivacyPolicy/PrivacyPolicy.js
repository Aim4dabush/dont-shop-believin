//styles
import styles from "./PrivacyPolicy.module.scss";

const PrivacyPolicy = () => {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Privacy Policy</h1>
      <ul>
        <li>
          <h3>What information we collect?</h3>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus
            delectus omnis perferendis, sit dolorem nesciunt doloribus numquam
            aliquam voluptate ex, praesentium nemo quo laudantium deserunt
            quaerat mollitia illo ipsa in?
          </p>
        </li>
        <li>
          <h3>How we use your information?</h3>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis sit
            architecto, illo quae modi numquam assumenda eveniet ullam
            voluptatibus sunt, ex, temporibus possimus exercitationem. Dolorum,
            facere minima? Eius quasi aliquam facere quis. Quas, earum mollitia
            nobis tempore consequatur laboriosam veniam.
          </p>
        </li>
        <li>
          <h3>What information we share?</h3>
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit.
            Cupiditate, ipsa hic, commodi dolorem reiciendis eligendi nulla
            ullam laudantium placeat iusto porro, voluptates repellendus
            perspiciatis adipisci nesciunt delectus voluptatibus ab officia?
          </p>
        </li>
      </ul>
    </div>
  );
};

export default PrivacyPolicy;
