require("dotenv").config();
const HDWalletProvider = require("@truffle/hdwallet-provider");
const MNEMONIC = process.env.MNEMONIC;
const PROJECT_ID = process.env.PROJECT_ID;
const API_KEY = process.env.API_KEY;
module.exports = {
  contracts_directory: "./contracts/",
  contracts_build_directory: "./src/abis/",
  networks: {
    development: {
      host: "127.0.0.1",
      port: 7545,
      network_id: "*", // Match any network id
    },
    mumbai: {
      provider: () =>
        new HDWalletProvider(
          MNEMONIC,
          `https://polygon-mumbai.g.alchemy.com/v2/${API_KEY}`,
        ),
      network_id: 80001,
      confirmations: 2,
      timeoutBlocks: 200,
      skipDryRun: false,
    },
    reopsten: {
      provider: () =>
        new HDWalletProvider(
          MNEMONIC,
          `https://ropsten.infura.io/v3/${PROJECT_ID}`,
        ),
      network_id: 3, // Ropsten's id
      gas: 5500000, // Ropsten has a lower block limit than mainnet
      confirmations: 2, // # of confs to wait between deployments. (default: 0)
      timeoutBlocks: 200, // # of blocks before a deployment times out  (minimum/default: 50)
      skipDryRun: true,
    },
  },
  compilers: {
    solc: {
      version: "0.8.1", // solidity version
      settings: {
        optimizer: {
          enabled: true, // Default: false
          runs: 200, // Default: 200
        },
      },
    },
  },
};
