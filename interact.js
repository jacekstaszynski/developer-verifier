const { ethers } = require("ethers");
const contract = require("./src/abis/HelloWorld.json");
const { networks } = require("./truffle-config");
const CONTRACT_ADDRESS = process.env.CONTRACT_ADDRESS;
const PRIVATE_KEY = process.env.PRIVATE_KEY;
const API_KEY = process.env.API_KEY;

console.log(JSON.stringify(contract.abi));

const alchemyProvider = new ethers.providers.AlchemyProvider(
  (network = "maticmum"),
  API_KEY,
);

const signer = new ethers.Wallet(PRIVATE_KEY, alchemyProvider);

const helloWorldContract = new ethers.Contract(
  CONTRACT_ADDRESS,
  contract.abi,
  signer,
);

async function main() {
  const message = await helloWorldContract.sayHello();
  console.log(message);
}
main();
