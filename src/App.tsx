import React from "react";
import "./App.css";
import { Tile } from "./Tile";
import { handleGetData } from "./firebase";

function App() {
  handleGetData();
  const numberOfTiles = 16;
  return (
    <div className="AppContainer">
      <div className="App">
        {[...Array(numberOfTiles)].map((x, i) => (
          <Tile key={i} />
        ))}
      </div>
    </div>
  );
}

export default App;
