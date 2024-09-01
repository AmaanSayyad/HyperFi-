// SPDX-License-Identifier: MIT
pragma solidity ^0.8.20;

contract Voting {
    struct Proposal {
        uint256 id;
        string description;
        uint256 voteCount;
        uint256 deadline;
        bool executed;
    }

    mapping(uint256 => Proposal) public proposals;
    mapping(address => mapping(uint256 => bool)) public hasVoted;

    uint256 public proposalCount;
    address public owner;

    event ProposalCreated(uint256 id, string description, uint256 deadline);
    event Voted(uint256 id, address voter, uint256 voteCount);
    event ProposalExecuted(uint256 id, string description);

    modifier onlyOwner() {
        require(msg.sender == owner, "Caller is not the owner");
        _;
    }

    constructor() {
        owner = msg.sender;
    }

    function createProposal(string memory description, uint256 duration) external onlyOwner {
        proposalCount++;
        uint256 id = proposalCount;
        proposals[id] = Proposal({
            id: id,
            description: description,
            voteCount: 0,
            deadline: block.timestamp + duration,
            executed: false
        });

        emit ProposalCreated(id, description, block.timestamp + duration);
    }

    function vote(uint256 proposalId, address voter) external {
        require(block.timestamp <= proposals[proposalId].deadline, "Voting period has ended");
        require(!hasVoted[voter][proposalId], "Already voted");

        proposals[proposalId].voteCount++;
        hasVoted[voter][proposalId] = true;

        emit Voted(proposalId, voter, proposals[proposalId].voteCount);
    }

    function executeProposal(uint256 proposalId) external onlyOwner {
        require(block.timestamp > proposals[proposalId].deadline, "Voting period not yet ended");
        require(!proposals[proposalId].executed, "Proposal already executed");

        proposals[proposalId].executed = true;

        emit ProposalExecuted(proposalId, proposals[proposalId].description);
        // Execute proposal logic here
    }

    function getProposal(uint256 proposalId) external view returns (Proposal memory) {
        return proposals[proposalId];
    }
}

