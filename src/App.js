import { Fragment } from "react";

//components
import Footer from "./Components/Footer/Footer";
import NavBar from "./Components/NavBar/NavBar";
import Notification from "./modals/notification/Notification";
import { Outlet } from "react-router-dom";
import DetailModal from "./modals/productDetail/DetailModal";

function App() {
  return (
    <Fragment>
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
