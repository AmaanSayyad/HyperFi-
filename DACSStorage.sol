
// SPDX-License-Identifier: MIT
pragma solidity ^0.8.20;

contract DACSStorage {
    struct APYData {
        string exchangeName;
        uint256 apy;
        uint256 timestamp;
    }

    mapping(bytes32 => APYData) public apyRecords;
    address public owner;

    event APYStored(string exchangeName, uint256 apy, uint256 timestamp);

    modifier onlyOwner() {
        require(msg.sender == owner, "Caller is not the owner");
        _;
    }

    constructor() {
        owner = msg.sender;
    }

    function storeAPY(string memory exchangeName, uint256 apy, uint256 timestamp) external onlyOwner {
        bytes32 key = keccak256(abi.encodePacked(exchangeName, timestamp));
        apyRecords[key] = APYData({
            exchangeName: exchangeName,
            apy: apy,
            timestamp: timestamp
        });

        emit APYStored(exchangeName, apy, timestamp);
    }

    function getAPY(string memory exchangeName, uint256 timestamp) external view returns (APYData memory) {
        bytes32 key = keccak256(abi.encodePacked(exchangeName, timestamp));
        return apyRecords[key];
    }
}
