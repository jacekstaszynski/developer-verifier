import React, { useContext, useState } from "react";
import Example from "./components/Example";
import { ethers } from "ethers";
import { ICtx, initialState, StoreContext } from "./utils/store";
import { Router } from "react-router-dom";
import Web3 from "web3";
import Navbar from "./components/Navbar";

const App = () => {
  const [state, setState] = useState(initialState);

  return (
    <div>
      <StoreContext.Provider value={{ state, setState }}>
        <Navbar />
        <Example />
      </StoreContext.Provider>
    </div>
  );
};

export default App;
