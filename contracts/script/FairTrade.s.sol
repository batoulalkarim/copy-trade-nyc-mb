// SPDX-License-Identifier: AGPL-3.0-only
pragma solidity ^0.8.19;

import {Script, console2} from "forge-std/Script.sol";

import {FairTrade} from "../src/FairTrade.sol";

import {HookMiner} from "../test/utils/HookMiner.sol";
import {Hooks} from "@uniswap/v4-core/contracts/libraries/Hooks.sol";
import {IPoolManager} from "@uniswap/v4-core/contracts/interfaces/IPoolManager.sol";

contract FairTradeScript is Script {
    address constant CREATE2_DEPLOYER =
        address(0x4e59b44847b379578588920cA78FbF26c0B4956C);

    IPoolManager manager =
        IPoolManager(payable(0xDc64a140Aa3E981100a9becA4E685f962f0cF6C9));
    FairTrade public hook;

    function setUp() public {}

    function run() public {
        uint160 flags = uint160(
            Hooks.BEFORE_INITIALIZE_FLAG |
                Hooks.AFTER_INITIALIZE_FLAG |
                Hooks.BEFORE_MODIFY_POSITION_FLAG |
                Hooks.BEFORE_SWAP_FLAG // Not sure if we're gonna use this yet
        );

        (address hookAddress, bytes32 salt) = HookMiner.find(
            CREATE2_DEPLOYER,
            flags,
            1000,
            type(FairTrade).creationCode,
            abi.encode(address(manager), "Test Token", "TEST", 18) // Note: Change these later
        );
        vm.startBroadcast();
        hook = new FairTrade{salt: salt}(
            IPoolManager(address(manager)),
            "Test Token",
            "TEST",
            18
        );

        require(
            address(hook) == hookAddress,
            "FairTradeTest: Hook address mismatch"
        );

        vm.stopBroadcast();
    }
}
