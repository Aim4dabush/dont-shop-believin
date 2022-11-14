import { Fragment } from "react";

//components
import { Outlet } from "react-router-dom";

function App() {
  return (
    <Fragment>
      <header></header>
      <main>
        <Outlet />
      </main>
    </Fragment>
  );
}

export default App;
