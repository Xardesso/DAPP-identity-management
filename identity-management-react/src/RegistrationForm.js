import React, { useState } from "react";
import contract from "./IdentityManagementContract";

function RegistrationForm() {
  const [name, setName] = useState("");
  const [age, setAge] = useState("");
  const [nationality, setNationality] = useState("");
  const [height, setHeight] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const signer = contract.connect(wallet); // Replace 'wallet' with your connected Ethereum wallet
      const transaction = await signer.registerIdentity(
        name,
        age,
        nationality,
        height
      );
      await transaction.wait();
      console.log("Identity registered successfully!");
    } catch (error) {
      console.error("Failed to register identity:", error);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Name:
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
      </label>
      <label>
        Age:
        <input
          type="text"
          value={age}
          onChange={(e) => setAge(e.target.value)}
        />
      </label>
      <label>
        Nationality:
        <input
          type="text"
          value={nationality}
          onChange={(e) => setNationality(e.target.value)}
        />
      </label>
      <label>
        Height:
        <input
          type="text"
          value={height}
          onChange={(e) => setHeight(e.target.value)}
        />
      </label>
      <button type="submit">Register Identity</button>
    </form>
  );
}

export default RegistrationForm;
