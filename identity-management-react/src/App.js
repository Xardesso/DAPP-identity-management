import React from "react";
import { useState } from "react";
const ethers = require("ethers");

let provider;

if (window.ethereum) {
  console.log("check");
  const provider = new ethers.providers.Web3Provider(window.ethereum);
  const add = await provider.send("eth_requestAccounts", []);
  console.log(add);
  try {
    // Request account access if needed
    await window.ethereum.enable();
  } catch (error) {
    console.error(error);
  }
} else {
  console.log(
    "Non-Ethereum browser detected. You should consider trying MetaMask!"
  );
}
const contractAddress = "0x90B07d58FbAfbd0B348D3021392631241382765e";
const contractArtifacts = require("./artifacts/contracts/Identity.sol/IdentityManagement.json");
const contractABI = contractArtifacts.abi;
const contract = new ethers.Contract(contractAddress, contractABI, provider);

const App = () => {
  const [name, setName] = useState("");
  const [age, setAge] = useState("");
  const [nationality, setNationality] = useState("");
  const [height, setHeight] = useState("");

  const handleRegister = async () => {
    if (!provider) return;
    const signer = provider.getSigner();
    const contractWithSigner = contract.connect(signer);

    try {
      const tx = await contractWithSigner.registerIdentity(
        name,
        age,
        nationality,
        height
      );
      console.log("Transaction submitted: ", tx);
    } catch (err) {
      console.error("Error: ", err);
    }
  };

  return (
    <div>
      <input
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
        placeholder="Name"
      />
      <input
        type="text"
        value={age}
        onChange={(e) => setAge(e.target.value)}
        placeholder="Age"
      />
      <input
        type="text"
        value={nationality}
        onChange={(e) => setNationality(e.target.value)}
        placeholder="Nationality"
      />
      <input
        type="text"
        value={height}
        onChange={(e) => setHeight(e.target.value)}
        placeholder="Height"
      />
      <button onClick={handleRegister}>Register</button>
    </div>
  );
};

export default App;
