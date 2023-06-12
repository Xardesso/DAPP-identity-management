const ethers = require("ethers");

async function main() {
  // Deploy Contract1
  const Contract1Factory = await ethers.getContractFactory(
    "IdentityManagement"
  );
  const contract1 = await Contract1Factory.deploy();

  console.log("Contract1 main deployed to:", contract1.address);
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
