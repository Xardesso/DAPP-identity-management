import React, { useState } from "react";
import "./style.css";
export default function authorize({ signer }) {
  const [ad, setad] = useState();

  async function register() {
    // Here you would call your smart contract function, using signer
  }

  return (
    <div
      className="main"
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
      }}
    >
      <div
        style={{
          height: "97px",
          width: "1800pxpx",
          textAlign: "center",
        }}
      >
        <h1>Authorize</h1>
      </div>
      <form
        onSubmit={authorize}
        style={{
          textAlign: "center",
          width: "200px",
          height: "495px",
          margin: "150px",
        }}
      >
        <input placeholder="address" onChange={(e) => setad(e.target.value)} />
        <button type="submit" style={{ marginTop: "10px" }}>
          Authorize
        </button>
      </form>
      <footer style={{ textAlign: "center", marginBottom: "20px" }}>
        Marcin Letowski
      </footer>
    </div>
  );
}
