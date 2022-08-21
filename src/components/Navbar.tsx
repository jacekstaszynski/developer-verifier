import { FC, useContext } from "react";
import Web3 from "web3";
import { ICtx, StoreContext } from "../utils/store";
import SmartContract from "../abis/DeveloperVerifier.json";

const Navbar: FC = () => {
  const ctx = useContext(StoreContext);
  const { state, setState } = ctx;

  const disconnectWallet = () => {
    // window.ethereum.eth.currentProvider.disconnect();
  };
  const connectToWallet = async (ctx: ICtx): Promise<void> => {
    if (window.ethereum) {
      window.ethereum.request({ method: "eth_requestAccounts" });
      try {
        await window.ethereum.request({ method: "eth_requestAccounts" });
        const isUnlocked = await window.ethereum._metamask.isUnlocked();
        if (!isUnlocked) throw new Error("Wallet Locked!");
        state.web3?.setProvider(window.ethereum);
        const account = ((await state.web3?.eth.getAccounts()) ?? [""])[0];
        setState((state) => ({ ...state, account, connected: true }));
        const netId = await state.web3?.eth.net.getId();
        if (netId !== 5777) alert("wrong network");
      } catch (e) {
        console.error(e);
        alert("connection error");
      }
    } else alert("wallet not detected");
  };
  return (
    <div>
      <button
        onClick={async () => {
          connectToWallet(ctx);
        }}
      >
        Connect Wallet
      </button>
      <button
        onClick={async () => {
          disconnectWallet();
        }}
      >
        Disconnect Wallet
      </button>
    </div>
  );
};

export default Navbar;
