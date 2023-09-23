// SPDX-License-Identifier: AGPL-3.0-only
pragma solidity ^0.8.19;

import {Test, console2} from "lib/forge-std/src/Test.sol";
import {CopyTrade} from "../src/CopyTrade.sol";

contract CopyTradeTest is Test {
    CopyTrade public copyTrade;

    function setUp() public {
        copyTrade = new CopyTrade();
    }
}
