import React, { Component } from "react";
import NavBar from "./components/NavBar";
import Repositories from "./components/Repositories";

class App extends Component {
  render() {
    return (
      <div>
        <NavBar />
        <Repositories params="baba" />
      </div>
    );
  }
}

export default App;
