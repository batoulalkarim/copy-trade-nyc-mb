// SPDX-License-Identifier: AGPL-3.0-only
pragma solidity ^0.8.19;

import {Test, console2} from "forge-std/Test.sol";
import {CopyTrade} from "../src/CopyTrade.sol";
import {IHooks} from "v4-core/interfaces/IHooks.sol";
import {Hooks} from "v4-core/libraries/Hooks.sol";
import {TickMath} from "v4-core/libraries/TickMath.sol";
import {IPoolManager} from "v4-core/interfaces/IPoolManager.sol";
import {PoolKey} from "v4-core/types/PoolKey.sol";
import {PoolId, PoolIdLibrary} from "v4-core/types/PoolId.sol";
import {CurrencyLibrary, Currency} from "v4-core/types/Currency.sol";
import {HookTest} from "./utils/HookTest.sol";
import {CopyTrade} from "../src/CopyTrade.sol";
import {HookMiner} from "./utils/HookMiner.sol";

// Test import from uniswap-v4-core tests
import {Deployers} from "@uniswap/v4-core/test/foundry-tests/utils/Deployers.sol";

contract CopyTradeTest is Test {
    using PoolIdLibrary for PoolKey;
    using CurrencyLibrary for Currency;

    CopyTrade public copyTrade;
    PoolKey poolKey;
    PoolId poolId;

    function setUp() public {
        HookTest.initHookTestEnv();

        // Deploy hook to an address with correct flags
        uint160 flags = uint160(Hooks.BEFORE_SWAP_FLAG | Hooks.AFTER_SWAP_FLAG);

        (address hookAddress, bytes32 salt) = HookMiner.find(
            address(this),
            flags,
            0,
            type(CopyTrade).creationCode,
            abi.encode(address(manager))
        );

        copyTrade = new CopyTrade{salt: salt}(IPoolManager(address(manager)));
        require(
            address(copyTrade) == hookAddress,
            "CopyTradeTest: Hook address mismatch"
        );

        // Now create the pool
    }
}
