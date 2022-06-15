import React from "react";
import Header from "./components/Header";
// import About from "./components/About";

const App = () => {
  return (
    <div className="app">
      <Header title="Tasks Tracker" />

      {/* <About /> */}
    </div>
  );
};

/**
class App extends React.Component {
  render() {
    return (
      <div className="App">
        <Header title="Tasks Tracker" />
      </div>
    );
  }
}
*/

export default App;
