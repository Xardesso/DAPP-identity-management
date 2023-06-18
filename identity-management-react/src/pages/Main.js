import React, { useState } from "react";
import "./style.css";
import { useNavigate } from "react-router-dom";

export default function RegisterIdentity({ signer }) {
  const navigate = useNavigate();

  const [name, setName] = useState();
  const [age, setAge] = useState();
  const [nationality, setNationality] = useState();
  const [height, setHeight] = useState();
  const register = () => {
    navigate("/authorize");
  };

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
        <h1>Identify Yourself</h1>
      </div>
      <form
        onSubmit={register}
        style={{
          textAlign: "center",
          width: "200px",
          height: "495px",
          margin: "150px",
        }}
      >
        <input placeholder="Name" onChange={(e) => setName(e.target.value)} />
        <input placeholder="Age" onChange={(e) => setAge(e.target.value)} />
        <input
          placeholder="Nationality"
          onChange={(e) => setNationality(e.target.value)}
        />
        <input
          placeholder="Height"
          onChange={(e) => setHeight(e.target.value)}
        />
        <button type="submit" style={{ marginTop: "10px" }}>
          Register
        </button>
      </form>
      <footer style={{ textAlign: "center", marginBottom: "20px" }}>
        Marcin Letowski
      </footer>
    </div>
  );
}
