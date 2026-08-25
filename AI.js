import React, { useEffect, useState } from "react";

function AI({ symbol }) {
  const [data, setData] = useState(null);

  useEffect(() => {
    fetch(`http://localhost:5000/ai-signal/${symbol}`)
      .then(res => res.json())
      .then(setData);
  }, [symbol]);

  if (!data) return <p>Loading AI...</p>;

  return (
    <div className="ai-box">
      <h3>AI Suggestion</h3>
      <p>Symbol: {data.symbol}</p>
      <p>Signal: {data.signal}</p>
      <p>Entry: {data.entry}</p>
      <p>Exit: {data.exit}</p>
    </div>
  );
}

export default AI;