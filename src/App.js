import React from "react";
import { check } from "./checkicon";
import "./styles.css";

const list = ["Title 1", "title 2", "Title 3", "Title 3", "Title 3"];

export default function App() {
  return (
    <div className="App">
      <h1>Hello CodeSandbox</h1>
      <h2>Start editing to see some magic happen!</h2>
      <ul>
        {list.map((e, index) => (
          <li>
            <span style={{ "--animation-order": index }}>{check}</span>
            {e}
          </li>
        ))}
      </ul>
    </div>
  );
}
