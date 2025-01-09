require("dotenv").config();
const HDWalletProvider = require("@truffle/hdwallet-provider");

module.exports = {
    networks: {
        development: {
            host: "127.0.0.1",
            port: 8545,
            network_id: "*"
        },
        holeskyInfura: {
            provider: () => new HDWalletProvider(
                process.env.MNEMONIC,
                `https://holesky.infura.io/v3/${process.env.INFURA_PROJECT_ID}`
            ),
            network_id: 17000,
            gas: 8000000,
            gasPrice: 30000000000,
            timeoutBlocks: 300,
            skipDryRun: true
        },
        sepoliaInfura: {
            provider: () => new HDWalletProvider(
                process.env.MNEMONIC, // Frase secreta de tu billetera
                `https://sepolia.infura.io/v3/${process.env.INFURA_PROJECT_ID}` // URL de Infura
            ),
            network_id: 11155111, // ID de Sepolia
            gas: 8000000, // Límite de gas
            gasPrice: 30000000000, // Precio del gas (30 Gwei)
            timeoutBlocks: 300, // Bloques para esperar la confirmación
            skipDryRun: true
        },holeskyAlchemy: {
            provider: () => new HDWalletProvider(
                process.env.MNEMONIC, // Frase secreta de tu billetera
                `https://eth-holesky.g.alchemy.com/v2/${process.env.ALCHEMY_API_KEY}` // URL de Alchemy
            ),
            network_id: 17000, // ID de Sepolia
            gas: 8000000, // Límite de gas
            gasPrice: 30000000000, // Precio del gas (30 Gwei)
            timeoutBlocks: 300, // Bloques para esperar la confirmación
            skipDryRun: true
        },
        sepoliaAlchemy: {
            provider: () => new HDWalletProvider(
                process.env.MNEMONIC, // Frase secreta de tu billetera
                `https://eth-sepolia.g.alchemy.com/v2/${process.env.ALCHEMY_API_KEY}` // URL de Alchemy
            ),
            network_id: 11155111, // ID de Sepolia
            gas: 8000000, // Límite de gas
            gasPrice: 30000000000, // Precio del gas (30 Gwei)
            timeoutBlocks: 300, // Bloques para esperar la confirmación
            skipDryRun: true
        }
    },
    compilers: {
        solc: {
            version: "0.8.0"
        }
    }
};
