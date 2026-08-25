import React from "react";
import Login from "./Login";
import Dashboard from "./Dashboard";

function App() {
  const [user, setUser] = React.useState(null);

  return (
    <div>
      {user ? <Dashboard /> : <Login setUser={setUser} />}
    </div>
  );
}

export default App;