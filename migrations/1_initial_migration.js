const Suncoin = artifacts.require("./Suncoin.sol");

module.exports = function (deployer) {
  deployer.deploy(Suncoin);
};
