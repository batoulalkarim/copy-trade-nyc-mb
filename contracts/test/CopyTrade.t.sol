// SPDX-License-Identifier: AGPL-3.0-only
pragma solidity ^0.8.19;

import {Test, console2} from "forge-std/Test.sol";
import {GasSnapshot} from "forge-gas-snapshot/GasSnapshot.sol";
import {CopyTrade} from "../src/CopyTrade.sol";
import {IHooks} from "@uniswap/v4-core/contracts/interfaces/IHooks.sol";
import {Hooks} from "@uniswap/v4-core/contracts/libraries/Hooks.sol";
import {TickMath} from "@uniswap/v4-core/contracts/libraries/TickMath.sol";
import {IPoolManager} from "@uniswap/v4-core/contracts/interfaces/IPoolManager.sol";
import {CurrencyLibrary, Currency} from "@uniswap/v4-core/contracts/types/Currency.sol";
import {PoolKey} from "@uniswap/v4-core/contracts/types/PoolKey.sol";
import {PoolId, PoolIdLibrary} from "@uniswap/v4-core/contracts/types/PoolId.sol";
import {Deployers} from "@uniswap/v4-core/test/foundry-tests/utils/Deployers.sol";
import {HookTest} from "./utils/HookTest.sol";
import {CopyTrade} from "../src/CopyTrade.sol";
import {HookMiner} from "./utils/HookMiner.sol";

contract CopyTradeTest is HookTest, Deployers, GasSnapshot {
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
