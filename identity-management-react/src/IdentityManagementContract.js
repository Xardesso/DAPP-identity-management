import { ethers } from "ethers";

const contractAddress = "CONTRACT_ADDRESS"; // Replace with the actual contract address
const contractArtifacts = require("./artifacts/contracts/realesate.sol/BidContract.json");
const contractABI = contractArtifacts.abi;

const provider = new ethers.providers.JsonRpcProvider("https://ETH_NODE_URL"); // Replace with the URL of an Ethereum node

const contract = new ethers.Contract(contractAddress, contractABI, provider);

export default contract;
