// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.0;

contract Voting {
    // Estructura de datos para un candidato
    struct Candidate {
        string name;
        uint voteCount;
    }

    // Lista de candidatos
    Candidate[] public candidates;

    // Mapping para evitar que un votante emita más de un voto
    mapping(address => bool) public hasVoted;

    // Dirección del administrador del contrato
    address public admin;

    // Constructor: Se ejecuta al desplegar el contrato
    constructor(string[] memory candidateNames) {
        admin = msg.sender; // Define al administrador
        for (uint i = 0; i < candidateNames.length; i++) {
            candidates.push(Candidate(candidateNames[i], 0));
        }
    }

    // Función para emitir un voto
    function vote(uint candidateIndex) external {
        require(!hasVoted[msg.sender], "Ya has votado");
        require(candidateIndex < candidates.length, "Indice de candidato invalido");

        hasVoted[msg.sender] = true; // Marca al votante como que ya votó
        candidates[candidateIndex].voteCount++; // Incrementa el conteo del candidato
    }

    // Función para obtener el total de votos de un candidato
    function getCandidateVotes(uint candidateIndex) external view returns (uint) {
        require(candidateIndex < candidates.length, "Indice de candidato invalido");
        return candidates[candidateIndex].voteCount;
    }

    // Función para obtener la lista de candidatos
    function getCandidates() external view returns (Candidate[] memory) {
        return candidates;
    }
}
