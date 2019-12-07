import React from "react";
import ReactDOM from "react-dom";
import Components from "./components.js";

import "./styles.css";

const data = {
  content: {
    body: [
      {
        _uid: "BUY6Drn9e1",
        component: "foo",
        headline: "Foo"
      },
      {
        _uid: "gJZoSLkfZV",
        component: "bar",
        title: "Bar"
      },
      {
        _uid: "X1JAfdsZxy",
        component: "foo",
        headline: "Another headline"
      }
    ]
  }
};

function App() {
  return (
    <div className="App">
      <h1>Hello React</h1>
      {data.content.body.map(block => Components(block))}
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
