import { Fragment } from "react";
import ReactDOM from "react-dom";

//components
import Card from "./Card/Card";
import Overlay from "./Overlay/Overlay";

//redux
import { useSelector } from "react-redux";

const Notification = () => {
  const isShown = useSelector((state) => state.notify.notification.isShown);

  return (
    <Fragment>
      {isShown &&
        ReactDOM.createPortal(<Card />, document.getElementById("notify"))}
      {isShown &&
        ReactDOM.createPortal(<Overlay />, document.getElementById("overlay"))}
    </Fragment>
  );
};

export default Notification;
