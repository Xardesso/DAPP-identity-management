import { useState } from "react";
import React from "react";
const { ethers } = require("ethers");
var signer;
var provider;
var address;
export default function Wallet() {
  const [ad, setad] = useState("");

  async function connectWallet() {
    provider = new ethers.providers.Web3Provider(window.ethereum);
    address = await provider.send("eth_requestAccounts", []);
    signer = provider.getSigner();
    setad(address);
    sp();
  }

  return (
    <div>
      {ad ? (
        <p>Connected: {ad}</p>
      ) : (
        <button onClick={connectWallet}>Connect Wallet</button>
      )}
    </div>
  );
}
export function sp() {
  console.log(address);
  console.log(signer);
  console.log(provider);
  return [address, signer, provider];
}
