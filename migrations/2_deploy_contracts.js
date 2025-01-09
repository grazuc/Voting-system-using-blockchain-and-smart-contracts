const VoterRegistration = artifacts.require("VoterRegistration");
const Voting = artifacts.require("Voting");

module.exports = async function (deployer) {
    // Desplegar el contrato de registro de votantes
    await deployer.deploy(VoterRegistration);

    // Lista de candidatos para la votación
    const candidates = ["Candidato 1", "Candidato 2", "Candidato 3"];
    await deployer.deploy(Voting, candidates);
};
