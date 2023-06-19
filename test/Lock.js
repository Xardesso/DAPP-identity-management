const { expect } = require("chai");
const { ethers } = require("hardhat");

describe("IdentityManagement", function () {
  let IdentityManagement;

  let identityManagement;
  let owner;
  let authorizedEntity;

  beforeEach(async function () {
    const identity = await ethers.deployContract("IdentityManagement");
    [owner, authorizedEntity] = await ethers.getSigners();
  });

  it("should register an identity", async function () {
    const name = "John Doe";
    const age = "30";
    const nationality = "USA";
    const height = "180cm";
    await identityManagement
      .connect(owner)
      .registerIdentity(name, age, nationality, height);

    const values = {
      gasLimit: 1000000,
    };
    const identity = await identityManagement.getIdentity(
      owner.address,
      values
    );

    expect(identity).to.deep.equal([name, age, nationality, height]);
  });

  it("should grant authorization", async function () {
    await identityManagement
      .connect(owner)
      .grantAuthorization(authorizedEntity.address);
    const values = {
      gasLimit: 1000000,
    };
    const isAuthorized = await identityManagement.showAuthorization(
      authorizedEntity.address,
      values
    );

    expect(isAuthorized).to.be.true;
  });

  it("should revoke authorization", async function () {
    const values = {
      gasLimit: 1000000,
    };
    await identityManagement
      .connect(owner)
      .grantAuthorization(authorizedEntity.address, values);
    await identityManagement
      .connect(owner)
      .revokeAuthorization(authorizedEntity.address, values);

    const isAuthorized = await identityManagement.showAuthorization(
      authorizedEntity.address,
      values
    );

    expect(isAuthorized).to.be.false;
  });

  it("should get identity for authorized entity", async function () {
    const name = "John Doe";
    const age = "30";
    const nationality = "USA";
    const height = "180cm";
    const values = {
      gasLimit: 1000000,
    };
    await identityManagement
      .connect(owner)
      .registerIdentity(name, age, nationality, height, values);
    await identityManagement
      .connect(owner)
      .grantAuthorization(authorizedEntity.address, values);

    const identity = await identityManagement
      .connect(authorizedEntity)
      .getIdentity(owner.address, values);

    expect(identity).to.deep.equal([name, age, nationality, height]);
  });

  it("should fail to get identity for unauthorized entity", async function () {
    const values = {
      gasLimit: 1000000,
    };
    await identityManagement
      .connect(owner)
      .registerIdentity("John Doe", "30", "USA", "180cm", values);

    await expect(
      identityManagement
        .connect(authorizedEntity)
        .getIdentity(owner.address, values)
    ).to.be.revertedWith("Unauthorized entity");
  });
});
