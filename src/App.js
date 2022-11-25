import { Fragment } from "react";

//components
import CheckoutModal from "./modals/checkout/CheckoutModal";
import DetailModal from "./modals/productDetail/DetailModal";
import Footer from "./Components/Footer/Footer";
import NavBar from "./Components/NavBar/NavBar";
import Notification from "./modals/notification/Notification";
import { Outlet } from "react-router-dom";

function App() {
  return (
    <Fragment>
      <CheckoutModal />
      <DetailModal />
      <Notification />
      <header>
        <NavBar />
      </header>
      <main>
        <Outlet />
      </main>
      <footer>
        <Footer />
      </footer>
    </Fragment>
  );
}

export default App;
