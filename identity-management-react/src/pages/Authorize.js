import React, { useState } from "react";
import "./style.css";
export default function Authorize({ signer }) {
  const [ad, setad] = useState();

  async function a() {
    console.log("aaaa");
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
        onSubmit={a}
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
