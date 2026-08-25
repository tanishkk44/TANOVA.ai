import React from "react";
import Chart from "./Chart";
import AI from "./AI";

const markets = ["BTCUSDT","EURUSD","AUDUSD","NZDUSD","GBPUSD","USDCAD","USDCHF"];

function Dashboard() {
  const [selected, setSelected] = React.useState("BTCUSDT");

  return (
    <div className="dashboard">
      <h1>LEDTRADEE Dashboard</h1>

      <div className="market-list">
        {markets.map(m => (
          <button key={m} onClick={() => setSelected(m)}>
            {m}
          </button>
        ))}
      </div>

      <Chart symbol={selected} />
      <AI symbol={selected} />
    </div>
  );
}

export default Dashboard;