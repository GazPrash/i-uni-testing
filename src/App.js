import "./App.css";
import HomeContent from "./Components/HomeContent";
import Navbar from "./Components/Navbar";
import Sidebar from "./Components/Sidebar";
import Login from "./Components/Login";

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Sidebar2 from "./Components/Sidebar2";

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <div className="container my-5">
          <div className="row my-2">
            <div className="col-xs-9 col-sm-9 col-md-9 col-lg-9">
              <Switch>
                <Route exact path="/">
                  <HomeContent />
                </Route>
                <Route exact path="/login">
                  <Login />
                </Route>
              </Switch>
            </div>
            <div className="col-xs-3 col-sm-3 col-md-3 col-lg-3">
              <Switch>
                <Route exact path="/">
                  <Sidebar />
                </Route>
                <Route exact path="/login">
                  <Sidebar2 />
                </Route>
              </Switch>
            </div>
          </div>
        </div>
      </Router>
    </>
  );
}

export default App;
