import React, { useEffect, useState } from "react";
import contract from "./IdentityManagementContract";
import axios from "axios";

function Identity() {
  const [name, setName] = useState("");
  const [age, setAge] = useState("");
  const [nationality, setNationality] = useState("");
  const [height, setHeight] = useState("");

  useEffect(() => {
    const fetchIdentity = async () => {
      try {
        const response = await axios.get("https://ETH_NODE_URL/getIdentity", {
          params: {
            user: "USER_ADDRESS", // Replace with the user's Ethereum address
          },
        });
        const { name, age, nationality, height } = response.data;
        setName(name);
        setAge(age);
        setNationality(nationality);
        setHeight(height);
      } catch (error) {
        console.error("Failed to fetch identity:", error);
      }
    };

    fetchIdentity();
  }, []);

  return (
    <div>
      <h2>Identity Information:</h2>
      <p>Name: {name}</p>
      <p>Age: {age}</p>
      <p>Nationality: {nationality}</p>
      <p>Height: {height}</p>
    </div>
  );
}

export default Identity;
