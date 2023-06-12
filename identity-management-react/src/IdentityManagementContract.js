import { ethers } from "ethers";

const contractAddress = "CONTRACT_ADDRESS"; // Replace with the actual contract address
const contractABI = [
  // Add the contract's ABI here
];

const provider = new ethers.providers.JsonRpcProvider("https://ETH_NODE_URL"); // Replace with the URL of an Ethereum node

const contract = new ethers.Contract(contractAddress, contractABI, provider);

export default contract;
