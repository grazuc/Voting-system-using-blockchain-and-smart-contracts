// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.0;

contract VoterRegistration {
    // Mapping para almacenar direcciones de votantes registrados
    mapping(address => bool) public voters;

    // Dirección del administrador del contrato
    address public admin;

    // Constructor: Se ejecuta una vez al desplegar el contrato
    constructor() {
        admin = msg.sender; // El administrador será la cuenta que despliega el contrato
    }

    // Función para registrar un votante (solo el administrador puede llamar)
    function registerVoter(address voter) external {
        require(msg.sender == admin, "Solo el administrador puede registrar votantes");
        require(!voters[voter], "El votante ya esta registrado");
        voters[voter] = true; // Marca al votante como registrado
    }

    // Función para verificar si un votante está registrado
    function isRegistered(address voter) external view returns (bool) {
        return voters[voter];
    }
}
