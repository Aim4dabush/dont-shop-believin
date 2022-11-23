import { Fragment } from "react";
import ReactDOM from "react-dom";

//components
import NotifyModalCard from "./NotifyModalCard/NotifyModalCard";
import NotifyOverlay from "./NotifyOverlay/NotifyOverlay";

//redux
import { useSelector } from "react-redux";

const Notification = () => {
  const isShown = useSelector((state) => state.modal.notification.isShown);

  return (
    <Fragment>
      {isShown &&
        ReactDOM.createPortal(
          <NotifyModalCard />,
          document.getElementById("notify")
        )}
      {isShown &&
        ReactDOM.createPortal(
          <NotifyOverlay />,
          document.getElementById("overlay")
        )}
    </Fragment>
  );
};

export default Notification;
