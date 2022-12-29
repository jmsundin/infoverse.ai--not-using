import { useState, useCallback } from "react";
import VisNetworkGraph from "./VisNetworkGraph";

import VisNetworkParams from "../helpers/VisNetworkParams";

const Canvas = (props) => {
  const data = props.data;
  const [networkNodes, setNetwortNodes] = useState([]);
  const chart = props.chart;
  const chosenTopic = props.chosenTopic;
  const chosenProperty = props.chosenProperty;

  const getNodes = useCallback((a) => {
    setNetwortNodes(a);
  }, []);

  const chartHandler = (chart) => {
    switch (chart) {
      case "Network Diagram":
        return (
          <VisNetworkGraph
            data={data}
            options={VisNetworkParams.options}
            events={VisNetworkParams.events}
            getNodes={getNodes}
            width={window.innerWidth}
            height={window.innerHeight}
          />
        );
    }
  };

  return <div className="Canvas">{chartHandler(chart)}</div>;
};

export default Canvas;