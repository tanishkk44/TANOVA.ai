import React, { useEffect } from "react";

function Chart({ symbol }) {
  useEffect(() => {
    document.getElementById("chart").innerHTML = `
      <iframe 
        src="https://s.tradingview.com/widgetembed/?symbol=${symbol}&interval=15&theme=dark"
        width="100%" height="400">
      </iframe>
    `;
  }, [symbol]);

  return <div id="chart"></div>;
}

export default Chart;