import { Fragment } from "react";
import { Outlet } from "react-router-dom";

//components
import NavBar from "./Components/NavBar/NavBar";

function App() {
  return (
    <Fragment>
      <header>
        <NavBar />
      </header>
      <main>
        <Outlet />
      </main>
    </Fragment>
  );
}

export default App;
