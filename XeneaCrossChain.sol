// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

interface IXeneaBridge {
    function initiateBridge(address token, address recipient, uint256 amount) external;
    function getBridgeStatus(uint256 bridgeId) external view returns (bool success, uint256 amountTransferred);
}

// Main contract
contract XeneaCrossChain {
    address public owner;
    IXeneaBridge public xeneaBridge;

    // Event to log bridge operations
    event BridgeInitiated(address indexed token, address indexed recipient, uint256 amount, uint256 bridgeId);
    event BridgeStatusChecked(uint256 bridgeId, bool success, uint256 amountTransferred);

    constructor(address _xeneaBridgeAddress) {
        owner = msg.sender;
        xeneaBridge = IXeneaBridge(_xeneaBridgeAddress);
    }

    modifier onlyOwner() {
        require(msg.sender == owner, "Only owner can perform this action");
        _;
    }

    // Function to initiate a bridge operation
    function initiateBridge(address token, address recipient, uint256 amount) external onlyOwner {
        uint256 bridgeId = _generateBridgeId(token, recipient, amount); // Generate a unique ID for the bridge operation

        // Call the Xenea bridge to initiate the cross-chain transfer
        xeneaBridge.initiateBridge(token, recipient, amount);

        // Emit an event for the bridge initiation
        emit BridgeInitiated(token, recipient, amount, bridgeId);
    }

    // Function to check the status of a bridge operation
    function checkBridgeStatus(uint256 bridgeId) external returns (bool success, uint256 amountTransferred) {
    (success, amountTransferred) = xeneaBridge.getBridgeStatus(bridgeId);

    // Emit an event for the bridge status check
    emit BridgeStatusChecked(bridgeId, success, amountTransferred);
    }

    // Utility function to generate a bridge ID
    function _generateBridgeId(address token, address recipient, uint256 amount) internal returns (uint256) {
    return uint256(keccak256(abi.encodePacked(token, recipient, amount, block.timestamp)));
}
}
