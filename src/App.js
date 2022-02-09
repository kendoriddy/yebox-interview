import React, { useState } from "react";
import data from "./data.json";
import "./App.css";

function App() {
  const [searchTerm, setSearchTerm] = useState("");

  return (
    <div className="App">
      <input type="search" name="search" className="input-field" id="search" onChange={e => setSearchTerm(e.target.value)} />


      {data
        .filter((val) => {
          if (searchTerm === "") {
            return val;
          } else if (val.first_name.toLowerCase().includes(searchTerm.toLowerCase())) {
            return val;
          }
        })
        .map((val, key) => {
          return <div className="values">{val.name}</div>;
        })}

    </div>
  );
}

export default App;
