// SPDX-License-Identifier: MIT
pragma solidity ^0.8.20;

import "./DACSStorage.sol";  // DACS Storage contract on Xenea

contract APYAggregator {
    struct ExchangeAPY {
        string exchangeName;
        uint256 apy;
        uint256 timestamp;
    }

    ExchangeAPY[] public apys;

    address public owner;
    DACSStorage public dacsStorage;

    event APYUpdated(string exchangeName, uint256 apy, uint256 timestamp);

    modifier onlyOwner() {
        require(msg.sender == owner, "Caller is not the owner");
        _;
    }

    constructor(address _dacsStorage) {
        owner = msg.sender;
        dacsStorage = DACSStorage(_dacsStorage);
    }

    function updateAPY(string memory exchangeName, uint256 apy) external onlyOwner {
        ExchangeAPY memory newApy = ExchangeAPY({
            exchangeName: exchangeName,
            apy: apy,
            timestamp: block.timestamp
        });
        apys.push(newApy);
        dacsStorage.storeAPY(exchangeName, apy, block.timestamp);

        emit APYUpdated(exchangeName, apy, block.timestamp);
    }

    function getLatestAPYs() external view returns (ExchangeAPY[] memory) {
        return apys;
    }

    function getAPYByExchange(string memory exchangeName) external view returns (uint256, uint256) {
        for (uint i = apys.length; i > 0; i--) {
            if (keccak256(abi.encodePacked(apys[i-1].exchangeName)) == keccak256(abi.encodePacked(exchangeName))) {
                return (apys[i-1].apy, apys[i-1].timestamp);
            }
        }
        return (0, 0);  // Return 0 if no APY found for the exchange
    }
}

