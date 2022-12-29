import React, { useState, useCallback } from "react";
import NavMenu from "./components/NavMenu";
import QueryForm from "./components/QueryForm";
import Canvas from "./components/Canvas";

import "./assets/App.css";

const App = () => {
  const [data, setData] = useState(null);
  const [chosenChart, setChosenChart] = useState("Network Diagram");
  const [chosenTopic, setChosenTopic] = useState("Computer Science");

  const onQuerySubmit = useCallback(
    (resource, chart, topic) => {
      setData(resource);
      setChosenChart(chart);
      setChosenTopic(topic);
    },
    [setData, setChosenChart, setChosenTopic]
  );

  return (
    <>
      <NavMenu />
      <QueryForm onQuerySubmit={onQuerySubmit} />
      <Canvas data={data} chosenChart={chosenChart} chosenTopic={chosenTopic} />
    </>
  );
};

export default App;
