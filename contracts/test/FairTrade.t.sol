// SPDX-License-Identifier: AGPL-3.0-only
pragma solidity ^0.8.19;

import {Test, console2} from "forge-std/Test.sol";
import {GasSnapshot} from "forge-gas-snapshot/GasSnapshot.sol";
import {IHooks} from "@uniswap/v4-core/contracts/interfaces/IHooks.sol";
import {Hooks} from "@uniswap/v4-core/contracts/libraries/Hooks.sol";
import {TickMath} from "@uniswap/v4-core/contracts/libraries/TickMath.sol";
import {IPoolManager} from "@uniswap/v4-core/contracts/interfaces/IPoolManager.sol";
import {CurrencyLibrary, Currency} from "@uniswap/v4-core/contracts/types/Currency.sol";
import {PoolKey} from "@uniswap/v4-core/contracts/types/PoolKey.sol";
import {PoolId, PoolIdLibrary} from "@uniswap/v4-core/contracts/types/PoolId.sol";
import {Deployers} from "@uniswap/v4-core/test/foundry-tests/utils/Deployers.sol";
import {SimpleHookTest} from "./utils/SimpleHookTest.sol";
import {FairTrade} from "../src/FairTrade.sol";
import {HookMiner} from "./utils/HookMiner.sol";
import {FairTradeImplementation} from "../src/implementation/FairTradeImplementation.sol";

contract FairTradeTest is SimpleHookTest, Deployers, GasSnapshot {
    using PoolIdLibrary for PoolKey;
    using CurrencyLibrary for Currency;

    FairTrade public hook;
    PoolKey poolKey;
    PoolId poolId;

    function setUp() public {
        SimpleHookTest.initHookTestEnv();

        // Deploy hook to an address with correct flags
        uint160 flags = uint160(
            Hooks.BEFORE_INITIALIZE_FLAG |
                Hooks.AFTER_INITIALIZE_FLAG |
                Hooks.BEFORE_MODIFY_POSITION_FLAG |
                Hooks.AFTER_MODIFY_POSITION_FLAG |
                Hooks.BEFORE_SWAP_FLAG | // Not sure if we're gonna use this yet
                Hooks.AFTER_SWAP_FLAG // Not sure we're gonna use this yet
        );

        (address hookAddress, bytes32 salt) = HookMiner.find(
            address(this),
            flags,
            0,
            type(FairTrade).creationCode,
            abi.encode(address(manager))
        );

        hook = new FairTrade{salt: salt}(IPoolManager(address(manager)));
        require(
            address(hook) == hookAddress,
            "FairTradeTest: Hook address mismatch"
        );

        FairTradeImplementation impl = new FairTradeImplementation(
            manager,
            hook
        );
        (, bytes32[] memory writes) = vm.accesses(address(impl));
        vm.etch(address(hook), address(impl).code);
        // for each storage key that was written during the hook implementation, copy the value over
        unchecked {
            for (uint256 i = 0; i < writes.length; i++) {
                bytes32 slot = writes[i];
                vm.store(address(hook), slot, vm.load(address(impl), slot));
            }
        }
    }

    function testDepositEth() public {
        hook.depositEth{value: 0.1 ether}();
        assertTrue(hook.isFunder(address(this)), "Not a funder");
    }

    function testFailDepositOnlyOnce() public {
        hook.depositEth{value: 0.1 ether}();
        hook.depositEth{value: 0.1 ether}();
    }

    function testFailDepositWrongAmount() public {
        hook.depositEth{value: 0.2 ether}();
    }
}
