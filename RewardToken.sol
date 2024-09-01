
// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

import "@openzeppelin/contracts/token/ERC20/ERC20.sol";

contract RewardToken is ERC20 {
    constructor(address initialOwner) ERC20("RewardToken", "RWD") {
        _mint(initialOwner, 500000 * 10 ** decimals());
    }
   
    function burn(uint256 amount) external {
        _burn(msg.sender, amount);
    }
}
