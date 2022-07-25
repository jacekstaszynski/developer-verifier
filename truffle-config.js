require("dotenv").config();
const HDWalletProvider = require("@truffle/hdwallet-provider");
const MNEMONIC = process.env.MNEMONIC;

module.exports = {
  contracts_directory: "./contracts/",
  contracts_build_directory: "./abis/",
  networks: {
    development: {
      host: "localhost",
      port: 7545,
      network_id: "*", // Match any network id
      gas: 5000000,
    },
    mumbai: {
      provider: () =>
        new HDWalletProvider(MNEMONIC, `https://rpc-mumbai.maticvigil.com`),
      network_id: 80001,
      confirmations: 2,
      timeoutBlocks: 200,
      skipDryRun: false,
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
