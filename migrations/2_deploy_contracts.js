const ConvertLib = artifacts.require("ConvertLib");
const MetaCoin = artifacts.require("MetaCoin");
const SimpleStorage = artifacts.require("SimpleStorage");
const DeveloperVerifier = artifacts.require("DeveloperVerifier");

module.exports = function (deployer) {
  //  deployer.deploy(ConvertLib);
  //  deployer.link(ConvertLib, MetaCoin);
  //  deployer.deploy(MetaCoin);
  //  deployer.deploy(SimpleStorage)
  deployer.deploy(DeveloperVerifier);
};
