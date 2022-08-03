import React, { useState } from "react";
import Example from "./components/Example";
import { ethers } from "ethers";

const App = () => {
  const [hasMetamask, setHasMetamask] = useState(false);
  return (
    <div>
      <Example />
    </div>
  );
};

export default App;
