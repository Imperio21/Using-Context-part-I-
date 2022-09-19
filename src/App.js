import React from "react";

import { AuthContext } from "./providers/auth";

function App() {
  const { user } = React.useContext(AuthContext);

  return (
    <div className="App">
      <h1 style={{ color: user.color }}>{user.name}</h1>
    </div>
  );
}

export default App;
