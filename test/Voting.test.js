const VoterRegistration = artifacts.require("VoterRegistration");
const Voting = artifacts.require("Voting");

contract("Voting System", (accounts) => {
    it("Debería registrar un votante", async () => {
        const voterRegistration = await VoterRegistration.deployed();
        await voterRegistration.registerVoter(accounts[1], { from: accounts[0] });
        const isRegistered = await voterRegistration.isRegistered(accounts[1]);
        assert(isRegistered, "El votante no fue registrado correctamente");
    });

    it("Debería permitir votar", async () => {
        const voting = await Voting.deployed();
        await voting.vote(0, { from: accounts[1] }); // Votar por el primer candidato
        const votes = await voting.getCandidateVotes(0);
        assert.equal(votes.toNumber(), 1, "El voto no fue registrado correctamente");
    });

    it("Debería prevenir el doble voto", async () => {
        const voting = await Voting.deployed();
        try {
            await voting.vote(0, { from: accounts[1] }); // Intentar votar de nuevo
            assert.fail("El votante pudo votar dos veces");
        } catch (error) {
            assert(error.message.includes("Ya has votado"), "El error esperado no ocurrió");
        }
    });
});
