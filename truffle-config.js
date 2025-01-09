module.exports = {
  networks: {
      development: {
          host: "127.0.0.1", // Dirección local
          port: 8545,        // Puerto de Ganache
          network_id: "*"    // Cualquier red
      }
  },
  compilers: {
      solc: {
          version: "0.8.0", // Versión del compilador Solidity
      }
  }
};
