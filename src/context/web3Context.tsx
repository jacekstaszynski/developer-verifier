import { ethers } from "ethers";

const provider =
  typeof window == "undefined" || !window.ethereum
    ? null
    : new ethers.providers.Web3Provider(window.ethereum);
