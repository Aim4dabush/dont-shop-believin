import { Fragment } from "react";
import { Outlet } from "react-router-dom";

//components
import Footer from "./Components/Footer/Footer";
import NavBar from "./Components/NavBar/NavBar";
import Notification from "./modals/notification/Notification";

function App() {
  return (
    <Fragment>
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
