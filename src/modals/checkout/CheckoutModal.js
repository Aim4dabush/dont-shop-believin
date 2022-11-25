import { Fragment } from "react";
import ReactDOM from "react-dom";

//components
import CheckoutModalCard from "./CheckoutModalCard/CheckoutModalCard";
import CheckoutOverlay from "./CheckoutOverlay/CheckoutOverlay";

//redux
import { useSelector } from "react-redux";

const CheckoutModal = () => {
  const isShown = useSelector((state) => state.modal.checkout.isShown);

  return (
    <Fragment>
      {isShown &&
        ReactDOM.createPortal(
          <CheckoutOverlay />,
          document.getElementById("overlay")
        )}
      {isShown &&
        ReactDOM.createPortal(
          <CheckoutModalCard />,
          document.getElementById("checkout")
        )}
    </Fragment>
  );
};

export default CheckoutModal;
