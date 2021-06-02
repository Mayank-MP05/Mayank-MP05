import react from "react";
import { BrowserRouter as Router } from "react-router-dom";
import Routes from "./Routes";

function App() {
  return (
    <Router>
      <div className='App'>
        This is the Simple App
        <hr />
        <Routes />
      </div>
    </Router>
  );
}

export default App;
