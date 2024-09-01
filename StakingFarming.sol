// SPDX-License-Identifier: MIT
pragma solidity ^0.8.20;

import "@openzeppelin/contracts/token/ERC20/IERC20.sol";
import "./Voting.sol"; //Voting contract implementing VPoW

contract StakingFarming {

    struct Stake {
        uint256 amount;
        uint256 timestamp;
        uint256 rewardDebt;
    }

    mapping(address => Stake) public stakes;
    mapping(address => uint256) public rewards;
    mapping(address => bool) public hasVoted;

    uint256 public totalStaked;
    uint256 public rewardPerTokenStored;
    uint256 public lastUpdateTime;
    uint256 public rewardRate;

    address public owner;
    IERC20 public stakingToken;
    IERC20 public rewardToken;

    Voting public votingContract;

    event Staked(address indexed user, uint256 amount);
    event Withdrawn(address indexed user, uint256 amount);
    event RewardPaid(address indexed user, uint256 reward);
    event VoteCast(address indexed user, uint256 proposalId);

    modifier onlyOwner() {
        require(msg.sender == owner, "Caller is not the owner");
        _;
    }

    constructor(address _stakingToken, address _rewardToken, uint256 _rewardRate, address _votingContract) {
        owner = msg.sender;
        stakingToken = IERC20(_stakingToken);
        rewardToken = IERC20(_rewardToken);
        rewardRate = _rewardRate;
        votingContract = Voting(_votingContract);
    }

    function stake(uint256 amount) external updateReward(msg.sender) {
        require(amount > 0, "Cannot stake 0");
        totalStaked += amount;
        stakes[msg.sender].amount += amount;
        stakes[msg.sender].timestamp = block.timestamp;

        stakingToken.transferFrom(msg.sender, address(this), amount);
        emit Staked(msg.sender, amount);
    }

    function withdraw(uint256 amount) external updateReward(msg.sender) {
        require(amount > 0, "Cannot withdraw 0");
        require(stakes[msg.sender].amount >= amount, "Withdraw amount exceeds staked amount");

        totalStaked -= amount;
        stakes[msg.sender].amount -= amount;

        stakingToken.transfer(msg.sender, amount);
        emit Withdrawn(msg.sender, amount);
    }

    function getReward() external updateReward(msg.sender) {
        uint256 reward = rewards[msg.sender];
        require(reward > 0, "No rewards available");

        rewards[msg.sender] = 0;
        rewardToken.transfer(msg.sender, reward);
        emit RewardPaid(msg.sender, reward);
    }

    function castVote(uint256 proposalId) external updateReward(msg.sender) {
        require(!hasVoted[msg.sender], "Already voted");
        require(stakes[msg.sender].amount > 0, "Must have a stake to vote");

        votingContract.vote(proposalId, msg.sender);
        hasVoted[msg.sender] = true;

        emit VoteCast(msg.sender, proposalId);
    }

    modifier updateReward(address account) {
        rewardPerTokenStored = rewardPerToken();
        lastUpdateTime = block.timestamp;

        if (account != address(0)) {
            rewards[account] += earned(account);
            stakes[account].rewardDebt = rewardPerTokenStored;
        }
        _;
    }

    function rewardPerToken() public view returns (uint256) {
        if (totalStaked == 0) {
            return rewardPerTokenStored;
        }
        return rewardPerTokenStored + ((block.timestamp - lastUpdateTime) * rewardRate / totalStaked);
    }

    function earned(address account) public view returns (uint256) {
        return stakes[account].amount * (rewardPerToken() - stakes[account].rewardDebt) / 1e18;
    }
}
