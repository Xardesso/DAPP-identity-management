import { ethers } from "ethers";
import React, { useState } from "react";

export default function Wallet() {
  const [address, setAddress] = useState();

  async function connectWallet() {
    if (window.ethereum) {
      const provider = new ethers.providers.Web3Provider(window.ethereum);
      const signer = provider.getSigner();
      const address = await signer.getAddress();
      setAddress(address);
    } else {
      alert("Please install a web3 provider like Metamask");
    }
  }

  return (
    <div>
      {address ? (
        <p>Connected: {address}</p>
      ) : (
        <button onClick={connectWallet}>Connect Wallet</button>
      )}
    </div>
  );
}
