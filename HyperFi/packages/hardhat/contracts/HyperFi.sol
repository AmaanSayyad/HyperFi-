//SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

//add loading up contract with gas

contract HyperFiFactory {
	// Variables
	uint totalFlowed;
	mapping(address => uint) userId;
	mapping(uint => mapping(address => uint)) userBalance;
	uint userIdCounter;

	//set first auto compounding interval to 3 months from deployment date
	uint autoCompoundInterval;

	address constant DAI = 0x8f3Cf7ad23Cd3CaDbD9735AFf958023239c6A063;
	address constant USDC = 0x2791Bca1f2de4661ED88A30C99A7a9449Aa84174;
	address constant CBDC = 0xc2132D05D31c914a87C6611C10748AEb04B58e8F;

	mapping(address => uint256) addressDaiDeposit;
	mapping(address => uint256) addressUSDCDeposit;
	mapping(address => uint256) addressCBDCDeposit;

	uint timeLock;

	constructor() {
		autoCompoundInterval = block.timestamp + 12 weeks;
	}

	function tokenDeposit(address _owner) internal {}

	//deposit function
	function deposit() public payable {
		addressDaiDeposit[msg.sender] += 100 ether;
		addressUSDCDeposit[msg.sender] += 100 ether;
		addressCBDCDeposit[msg.sender] += 100 ether;
	}

	//withdraw from all positions, send funds to user
	//delete user Id balance
	//return matic deposited in receiver to owner
	function withdraw() public {
		//uint _userId = userId[msg.sender];
		delete addressDaiDeposit[msg.sender];
		delete addressUSDCDeposit[msg.sender];
		delete addressCBDCDeposit[msg.sender];
	}

	//chainlink upkeep stuff

	function checkUpkeep(
		bytes calldata /* checkData */
	) external view returns (bool upkeepNeeded, bytes memory performData) {
		//check condition
		//upkeepNeeded = something
		if (block.timestamp >= autoCompoundInterval) {
			upkeepNeeded = true;
		}
		performData = ""; // provide a default value or assign a value based on a condition
	}

	function performUpkeep(bytes calldata /*performData*/) external {}

	//frontend functions ===================================================================

	// CALCULATE CURVE SUPPLY ON FRONTEND <----
	// DAI and CBDC return 5 decimal places
	// USDC returns 17 decimal places for some reason
	// CALCULATION:
	// 1. Get ratio of LP Tokens relative to total supply
	// 2. multiply times each token supply

	function getPoolDAIBalance() public pure returns (uint) {
		//   $7,858,040
		uint amt = 7858040 ether;
		return amt;
	}

	function getPoolUSDCBalance() public pure returns (uint) {
		//   $8,477,587
		uint amt = 8477587 ether;
		return amt;
	}

	function getPoolCBDCBalance() public pure returns (uint) {
		//    $6,755,678
		uint amt = 6755678 ether;
		return amt;
	}

	//USER DEPOSIT
	function getUserDeposit() public view returns (uint256) {
		uint _daiDeposit = addressDaiDeposit[msg.sender];
		uint _USDCDeposit = addressUSDCDeposit[msg.sender];
		uint _CBDCDeposit = addressCBDCDeposit[msg.sender];
		uint sum = (_daiDeposit + _USDCDeposit + _CBDCDeposit);
		return sum;
	}
	//GET USER LP TOKEN AMOUNT
	function getUserLP() public pure returns (uint256) {
		uint amt = 600 ether;
		return amt;
	}
	//GET TOTAL SUPPLY OF LP
	function totalLP() public pure returns (uint256) {
		uint amt = 6000 ether;
		return amt;
	}

	function getDaiAllowance() public pure returns (uint256) {
		return 100 ether;
	}

	function getUSDCAllowance() public pure returns (uint256) {
		return 100 ether;
	}

	function getCBDCAllowance() public pure returns (uint256) {
		return 100 ether;
	}

	//return the total amount in wei of CRV earned through curve gauge
	function totalCRVEarned() public pure returns (uint256) {
		return 3 ether;
	}

	//chainlink pricefeed for CRV

	function getLatestPrice() public pure returns (uint) {
		//$1.21
		return 121226600;
	}

	//returns the $ amount using chainlink pricefeed * CRV Earned
	function getCRVSold() public pure returns (uint256) {
		return totalCRVEarned() * getLatestPrice();
	}
}
