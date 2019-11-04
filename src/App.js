import React, { useState } from "react";
import "./App.css";
import MasterHead from "./component/MasterHead";
import About from "./component/About";
import Portfolio from "./component/Portolio"
import { Nav, Button } from "react-bootstrap";

function App() {
  const [userSee, setUserSee] = useState(MasterHead);
  return (
    <div className="App">
      <Nav
        className="navbar navbar-expand-lg navbar-light fixed-top py-3"
        id="mainNav"
      >
        <div className="container">
          <a className="navbar-brand" onClick={() => setUserSee(MasterHead)}>
            Viktor Nguyen
          </a>
          <Button
            className="navbar-toggler navbar-toggler-right"
            style={{ backgroundColor: "white" }}
            type="button"
            data-toggle="collapse"
            data-target="#navbarResponsive"
            aria-controls="navbarResponsive"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </Button>
          <div className="collapse navbar-collapse" id="navbarResponsive">
            <ul className="navbar-nav ml-auto my-2 my-lg-0">
              <li className="nav-item">
                <a className="nav-link" onClick={()=> setUserSee(MasterHead)}>Home</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" onClick={() => setUserSee(About)}>
                  About
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" onClick={() => setUserSee(Portfolio)}>Portfolio</a>
              </li>
            </ul>
          </div>
        </div>
      </Nav>
      {userSee}
    </div>
  );
}

export default App;
