// SPDX-License-Identifier: AGPL-3.0-only
pragma solidity ^0.8.19;

import {Test} from "forge-std/Test.sol";

import {PoolManager} from "v4-core/PoolManager.sol";
import {IPoolManager} from "v4-core/interfaces/IPoolManager.sol";
import {PoolKey} from "v4-core/types/PoolKey.sol";

// Tests from Uniswap
import {PoolModifyPositionTest} from "v4-core/test/PoolModifyPositionTest.sol";
import {PoolSwapTest} from "v4-core/test/PoolSwapTest.sol";
import {PoolDonateTest} from "v4-core/test/PoolDonateTest.sol";

// Mocks and libraries from Uniswap
import {TestERC20} from "v4-core/test/TestERC20.sol";
import {TickMath} from "v4-core/libraries/TickMath.sol";

/// @title HookTest - a contract to initial test helpers; minimal initialization of V4 (setup pools and provision liquidity)
contract HookTest is Test {
    PoolManager manager;
    PoolModifyPositionTest modifyPositionRouter;
    PoolSwapTest swapRouter;
    PoolDonateTest donateRouter;
    TestERC20 token0;
    TestERC20 token1;

    uint160 public constant MIN_PRICE_LIMIT = TickMath.MIN_SQRT_RATIO + 1;
    uint160 public constant MAX_PRICE_LIMIT = TickMath.MAX_SQRT_RATIO - 1;

    function initHookTestEnv() public {
        uint256 amount = 2 ** 128;
        TestERC20 _tokenA = new TestERC20(amount);
        TestERC20 _tokenB = new TestERC20(amount);

        // pools alphabetically sort tokens by address
        // so align `token0` with `pool.token0` for consistency
        if (address(_tokenA) < address(_tokenB)) {
            token0 = _tokenA;
            token1 = _tokenB;
        } else {
            token0 = _tokenB;
            token1 = _tokenA;
        }

        /// @dev 500000 is the gas limit
        manager = new PoolManager(500000);

        // Helpers for interacting with the pool
        modifyPositionRouter = new PoolModifyPositionTest(
            IPoolManager(address(manager))
        );
        swapRouter = new PoolSwapTest(IPoolManager(address(manager)));
        donateRouter = new PoolDonateTest(IPoolManager(address(manager)));

        // Approve for liquidity provision
        token0.approve(address(modifyPositionRouter), amount);
        token1.approve(address(modifyPositionRouter), amount);

        // Approve for swapping
        token0.approve(address(swapRouter), amount);
        token1.approve(address(swapRouter), amount);
    }

    function swap(
        PoolKey memory key,
        int256 amountSpecified,
        bool zeroForOne
    ) internal {
        IPoolManager.SwapParams memory params = IPoolManager.SwapParams({
            zeroForOne: zeroForOne,
            amountSpecified: amountSpecified,
            sqrtPriceLimitX96: zeroForOne ? MIN_PRICE_LIMIT : MAX_PRICE_LIMIT
        });

        PoolSwapTest.TestSettings memory testSettings = PoolSwapTest
            .TestSettings({withdrawTokens: true, settleUsingTransfer: true});

        swapRouter.swap(key, params, testSettings);
    }
}
