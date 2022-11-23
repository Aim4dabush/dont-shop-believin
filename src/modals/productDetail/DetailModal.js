import { Fragment } from "react";
import ReactDOM from "react-dom";

//component
import DetailModalCard from "./DetailModalCard/DetailModalCard";
import DetailOverlay from "./DetailOverlay/DetailOverlay";

//redux
import { useSelector } from "react-redux";

const DetailModal = () => {
  const isShown = useSelector((state) => state.modal.productDetail.isShown);
  return (
    <Fragment>
      {isShown &&
        ReactDOM.createPortal(
          <DetailOverlay />,
          document.getElementById("overlay")
        )}
      {isShown &&
        ReactDOM.createPortal(
          <DetailModalCard />,
          document.getElementById("detail")
        )}
    </Fragment>
  );
};

export default DetailModal;
