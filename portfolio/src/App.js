import react from "react";
import { BrowserRouter as Router } from "react-router-dom";

import NavbarX from "./common/Navbar";
import Routes from "./Routes";

function App() {
  return (
    <Router>
      <div className='App'>
        <NavbarX />
        <Routes />
      </div>
    </Router>
  );
}

export default App;
