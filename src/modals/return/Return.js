import { Fragment } from "react";
import ReactDOM from "react-dom";

//components
import ReturnModalCard from "./ReturnModalCard/ReturnModalCard";
import ReturnOverlay from "./ReturnOverlay/ReturnOverlay";

//redux
import { useSelector } from "react-redux";

const Return = () => {
  const isShown = useSelector((state) => state.modal.returnOrder.isShown);

  return (
    <Fragment>
      {isShown &&
        ReactDOM.createPortal(
          <ReturnModalCard />,
          document.getElementById("return")
        )}
      {isShown &&
        ReactDOM.createPortal(
          <ReturnOverlay />,
          document.getElementById("overlay")
        )}
    </Fragment>
  );
};

export default Return;
