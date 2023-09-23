// SPDX-License-Identifier: AGPL-3.0-only
pragma solidity ^0.8.19;

import {BaseHook} from "periphery-next/BaseHook.sol";
import {IPoolManager} from "v4-core/interfaces/IPoolManager.sol";
import {PoolId, PoolIdLibrary} from "v4-core/types/PoolId.sol";

contract CopyTrade is BaseHook {
    using PoolIdLibrary for PoolId;

    uint256 public beforeSwapCount;

    constructor(IPoolManager _poolManager) BaseHook(_poolManager) {}

    function getHooksCalls() public pure override returns (Hooks.Calls memory) {
        return
            Hooks.Calls({
                beforeInitialize: false,
                afterInitialize: false,
                beforeModifyPosition: false,
                afterModifyPosition: false,
                beforeSwap: false,
                afterSwap: true, // Start with just this
                beforeDonate: false,
                afterDonate: false
            });
    }

    function afterSwap(
        address,
        PoolKey calldata,
        IPoolManager.SwapParams calldata,
        BalanceDelta,
        bytes calldata
    ) external override returns (bytes4) {
        beforeSwapCount++;
        return BaseHook.beforeSwap.selector;
    }
}
