import React, { useState } from "react";
import "./style.css";
export default function Info({ signer }) {
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
          width: "500px",
          textAlign: "center",
        }}
      >
        <h1>Show information</h1>
      </div>
      <form
        onSubmit={a}
        style={{
          textAlign: "center",
          width: "200px",
          height: "200px",
          marginTop: "60px",
        }}
      >
        <input placeholder="address" onChange={(e) => setad(e.target.value)} />
        <button type="submit" style={{ marginTop: "10px" }}>
          Show info
        </button>
      </form>
      <div
        style={{
          height: "97px",
          width: "500px",
          textAlign: "center",
          marginTop: "100px",
          marginBottom: "338px",
        }}
      >
        <input placeholder="address" disabled />
        <input placeholder="address" disabled />
        <input placeholder="address" disabled />
        <input placeholder="address" disabled />
        <button style={{ marginTop: "10px" }}>Revoke Authorize </button>
      </div>

      <footer style={{ textAlign: "center", marginBottom: "20px" }}>
        Marcin Letowski
      </footer>
    </div>
  );
}
