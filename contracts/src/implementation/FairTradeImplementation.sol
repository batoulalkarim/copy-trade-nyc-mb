// SPDX-License-Identifier: AGPL-3.0-only
pragma solidity ^0.8.19;

import {FairTrade} from "../FairTrade.sol";

import {BaseHook} from "periphery-next/BaseHook.sol";
import {IPoolManager} from "@uniswap/v4-core/contracts/interfaces/IPoolManager.sol";
import {Hooks} from "@uniswap/v4-core/contracts/libraries/Hooks.sol";

contract FairTradeImplementation is FairTrade {
    constructor(
        IPoolManager poolManager,
        FairTrade addressToEtch,
        string memory name,
        string memory symbol,
        uint8 decimals
    ) FairTrade(poolManager, name, symbol, decimals) {
        Hooks.validateHookAddress(addressToEtch, getHooksCalls());
    }

    // make this a no-op in testing
    function validateHookAddress(BaseHook _this) internal pure override {}
}
