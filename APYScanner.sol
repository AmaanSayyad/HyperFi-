// SPDX-License-Identifier: MIT
pragma solidity ^0.8.20;

import "./APYAggregator.sol";

contract APYScanner {
    APYAggregator public apyAggregator;

    struct ExchangePowerIndex {
        string exchangeName;
        uint256 apy;
        uint256 powerIndex;
    }

    ExchangePowerIndex[] public rankedExchanges;

    event ExchangesRanked(ExchangePowerIndex[] rankedExchanges);

    constructor(address _apyAggregatorAddress) {
        apyAggregator = APYAggregator(_apyAggregatorAddress);
    }

    function rankExchanges() external {
        APYAggregator.ExchangeAPY[] memory apys = apyAggregator.getLatestAPYs();
        delete rankedExchanges;

        for (uint i = 0; i < apys.length; i++) {
            uint256 powerIndex = calculatePowerIndex(apys[i].apy);
            rankedExchanges.push(ExchangePowerIndex({
                exchangeName: apys[i].exchangeName,
                apy: apys[i].apy,
                powerIndex: powerIndex
            }));
        }

        // Sort exchanges based on power index in descending order
        for (uint i = 0; i < rankedExchanges.length; i++) {
            for (uint j = i + 1; j < rankedExchanges.length; j++) {
                if (rankedExchanges[j].powerIndex > rankedExchanges[i].powerIndex) {
                    ExchangePowerIndex memory temp = rankedExchanges[i];
                    rankedExchanges[i] = rankedExchanges[j];
                    rankedExchanges[j] = temp;
                }
            }
        }

        emit ExchangesRanked(rankedExchanges);
    }

    function calculatePowerIndex(uint256 apy) internal pure returns (uint256) {
        return apy;
    }

    function getRankedExchanges() external view returns (ExchangePowerIndex[] memory) {
        return rankedExchanges;
    }
}

