/* eslint-disable react/no-direct-mutation-state */

import React, { useState } from "react";
import "./style.css";
import { Navigate, useNavigate } from "react-router-dom";
import Wallet from "../components/Wallet";
import { sp } from "../components/Wallet";
const { ethers } = require("ethers");
export default function RegisterIdentity() {
  const navigate = useNavigate();

  let conadd = "0x3deBa8dB8489eA083719f83692eD7c323Df90278";
  const [name, setName] = useState();
  const [age, setAge] = useState();
  const [nationality, setNationality] = useState();
  const [height, setHeight] = useState();
  const register = async () => {
    const contractArtifacts = require("./artifacts/contracts/Identity.sol/IdentityManagement.json");
    const contractABI = contractArtifacts.abi;
    var x = sp();
    var address = x[0];
    var signer = x[1];
    var provider = x[2];
    if (signer === undefined) {
      window.alert("Connect wallet");
    } else {
      if (name === undefined) {
        window.alert("Enter name");
      } else {
        if (age === undefined) {
          window.alert("Enter age");
        } else {
          if (nationality === undefined) {
            window.alert("Enter Nationality");
          } else {
            if (height === undefined) {
              alert("Enter Height");
            } else {
              const contract = new ethers.Contract(conadd, contractABI, signer);

              const values = {
                gasLimit: 1000000,
              };
              try {
                const tx = await contract.registerIdentity(
                  name,
                  age,
                  nationality,
                  height,
                  values
                );

                const receipt = await tx.wait();
                console.log(receipt.status);

                if (receipt.status === 1) {
                  window.alert("Transaction successful!");
                  console.log("sucess");
                  navigate("/authorize");
                }
              } catch (error) {
                window.alert("Transaction Failed!");
              }
            }
          }
        }
      }
    }
  };

  return (
    <div className="main">
      <div style={{ alignItems: "right", float: "right" }}>
        <Wallet></Wallet>
      </div>
      <div
        style={{
          height: "97px",
          width: "1900px",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <center>
          <h1>Identify Yourself</h1>
        </center>
      </div>
      <center>
        <form
          style={{
            textAlign: "center",
            width: "200px",
            height: "545px",
            margin: "100px",
          }}
        >
          <input placeholder="Name" onChange={(e) => setName(e.target.value)} />
          <input
            type="number"
            placeholder="Age"
            onChange={(e) => setAge(e.target.value)}
          />
          <input
            placeholder="Nationality"
            onChange={(e) => setNationality(e.target.value)}
          />
          <input
            placeholder="Height"
            type="number"
            onChange={(e) => setHeight(e.target.value)}
          />
          <button
            type="button"
            onClick={register}
            style={{ marginTop: "10px" }}
          >
            Register
          </button>
        </form>
      </center>
      <footer style={{ textAlign: "center", paddingBottom: "20px" }}>
        Marcin Letowski
      </footer>
    </div>
  );
}
