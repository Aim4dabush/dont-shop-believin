import ReactDOM from "react-dom";

//components
import Card from "./Card/Card";
import Overlay from "./Overlay/Overlay";

//redux
import { useSelector } from "react-redux";

//styles
import styles from "./Notification.module.scss";

const Notification = () => {
  const isShown = useSelector((state) => state.notify.notification.isShown);

  return (
    <div className={styles.container}>
      {isShown &&
        ReactDOM.createPortal(<Card />, document.getElementById("notify"))}
      {isShown &&
        ReactDOM.createPortal(<Overlay />, document.getElementById("overlay"))}
    </div>
  );
};

export default Notification;
