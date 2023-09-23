// SPDX-License-Identifier: AGPL-3.0-only
pragma solidity ^0.8.19;

import {BaseHook} from "periphery-next/BaseHook.sol";

import {Hooks} from "@uniswap/v4-core/contracts/libraries/Hooks.sol";
import {IPoolManager} from "@uniswap/v4-core/contracts/interfaces/IPoolManager.sol";
import {PoolKey} from "@uniswap/v4-core/contracts/types/PoolKey.sol";
import {PoolId, PoolIdLibrary} from "@uniswap/v4-core/contracts/types/PoolId.sol";
import {BalanceDelta} from "@uniswap/v4-core/contracts/types/BalanceDelta.sol";

import "forge-std/Test.sol";

// Need to get information re. token

contract FairTrade is BaseHook {
    using PoolIdLibrary for PoolId;

    // Pool will be created with ETH and a new token
    address public token = address(0);
    mapping(address => bool) public isFunder;

    constructor(IPoolManager _poolManager) BaseHook(_poolManager) {}

    function getHooksCalls() public pure override returns (Hooks.Calls memory) {
        return
            Hooks.Calls({
                beforeInitialize: true,
                afterInitialize: true,
                beforeModifyPosition: true,
                afterModifyPosition: true,
                beforeSwap: true,
                afterSwap: true,
                beforeDonate: false,
                afterDonate: false
            });
    }

    function depositEth() public payable {
        require(address(token) == address(0), "FairTrade: Token already set");
        require(msg.value > 0, "FairTrade: No ETH sent");
        require(msg.value == 0.1 ether, "FairTrade: Must send 0.1 ETH");
        require(!isFunder[msg.sender], "FairTrade: Already funded");
        isFunder[msg.sender] = true;
    }

    // function beforeInitialize(
    //     address,
    //     PoolKey calldata,
    //     IPoolManager.SwapParams calldata,
    //     BalanceDelta,
    //     bytes calldata
    // ) external override returns (bytes4) {
    //     return BaseHook.beforeInitialize.selector;
    // }

    // function afterInitialize(
    //     address,
    //     PoolKey calldata,
    //     IPoolManager.SwapParams calldata,
    //     BalanceDelta,
    //     bytes calldata
    // ) external override returns (bytes4) {
    //     return BaseHook.afterInitialize.selector;
    // }

    // function beforeModifyPosition(
    //     address,
    //     PoolKey calldata,
    //     IPoolManager.SwapParams calldata,
    //     BalanceDelta,
    //     bytes calldata
    // ) external override returns (bytes4) {
    //     return BaseHook.beforeModifyPosition.selector;
    // }

    // function afterModifyPosition(
    //     address,
    //     PoolKey calldata,
    //     IPoolManager.SwapParams calldata,
    //     BalanceDelta,
    //     bytes calldata
    // ) external override returns (bytes4) {
    //     return BaseHook.afterModifyPosition.selector;
    // }

    // function beforeSwap(
    //     address,
    //     PoolKey calldata,
    //     IPoolManager.SwapParams calldata,
    //     BalanceDelta,
    //     bytes calldata
    // ) external override returns (bytes4) {
    //     return BaseHook.beforeSwap.selector;
    // }

    // function afterSwap(
    //     address,
    //     PoolKey calldata,
    //     IPoolManager.SwapParams calldata,
    //     BalanceDelta,
    //     bytes calldata
    // ) external override returns (bytes4) {
    //     return BaseHook.afterSwap.selector;
    // }
}
