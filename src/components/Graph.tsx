import React, { useState, useEffect } from "react";
import cytoscape from "cytoscape";
const cola = require("cytoscape-cola");
cytoscape.use(cola);

function Graph() {
  const containerId = "cy";
  
  const containerStyle = {
    height: 800,
    width: 800,
    margin: "auto",
    border: "1px solid",
  };

  useEffect(() => {
    const containerEle = document.getElementById(containerId);

    fetch("/data.json")
      .then((res: any) => res.json())
      .then((json: any) => {
        const cy = cytoscape({
          elements: json,
          container: containerEle,
          layout: {
            name: "cola",
          },
          style: [
            {
              selector: "node",
              style: {
                label: "data(name)",
                "text-valign": "center",
                "text-halign": "left",
                width: 16,
                height: 16,
              },
            },
            {
              selector: "edge",
              style: {
                width: 1,
                "curve-style": "straight",
                "target-arrow-shape": "triangle",
              },
            },
          ],
        });
      });
  });

  return <div id={containerId} style={containerStyle}></div>;
}

export default Graph;
