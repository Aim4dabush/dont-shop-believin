import { Fragment } from "react";
import ReactDOM from "react-dom";

//component
import Card from "./Card/Card";
import Overlay from "./Overlay/Overlay";

//redux
import { useSelector } from "react-redux";

const DetailModal = () => {
  const isShown = useSelector((state) => state.modal.productDetail.isShown);
  return (
    <Fragment>
      {isShown &&
        ReactDOM.createPortal(<Overlay />, document.getElementById("overlay"))}
      {isShown &&
        ReactDOM.createPortal(<Card />, document.getElementById("detail"))}
    </Fragment>
  );
};

export default DetailModal;
