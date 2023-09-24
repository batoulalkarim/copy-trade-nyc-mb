// SPDX-License-Identifier: AGPL-3.0-only
pragma solidity ^0.8.19;

import {BaseHook} from "periphery-next/BaseHook.sol";

import {Hooks} from "@uniswap/v4-core/contracts/libraries/Hooks.sol";
import {IHooks} from "@uniswap/v4-core/contracts/interfaces/IHooks.sol";
import {IPoolManager} from "@uniswap/v4-core/contracts/interfaces/IPoolManager.sol";
import {PoolKey} from "@uniswap/v4-core/contracts/types/PoolKey.sol";
import {PoolId, PoolIdLibrary} from "@uniswap/v4-core/contracts/types/PoolId.sol";
import {BalanceDelta} from "@uniswap/v4-core/contracts/types/BalanceDelta.sol";
import {CurrencyLibrary, Currency} from "@uniswap/v4-core/contracts/types/Currency.sol";
import {TickMath} from "@uniswap/v4-core/contracts/libraries/TickMath.sol";

import {Ownable} from "solady/auth/Ownable.sol";
import {FairTradeERC20} from "./FairTradeERC20.sol";

// Will be official V4 later:
import {PoolModifyPositionTest} from "@uniswap/v4-core/contracts/test/PoolModifyPositionTest.sol";
import {PoolSwapTest} from "@uniswap/v4-core/contracts/test/PoolSwapTest.sol";

import "forge-std/Test.sol";

// Need to get information re. token

contract FairTrade is BaseHook, Ownable {
    using PoolIdLibrary for PoolKey;
    using CurrencyLibrary for Currency;

    // LP unlocked one year from launch
    uint256 public unlockTime = block.timestamp + 365 days;

    PoolModifyPositionTest modifyPositionRouter;
    PoolSwapTest swapRouter;

    // poolKey and poolId are the pool key and pool id for the pool
    PoolKey poolKey;
    PoolId poolId;

    // SQRT_RATIO_1_1 is the Q notation for sqrtPriceX96 where price = 1
    // i.e. sqrt(1) * 2^96
    // This is used as the initial price for the pool
    // as we add equal amounts of token0 and token1 to the pool during setUp
    uint160 constant SQRT_RATIO_1_1 = 79228162514264337593543950336;

    // Pool will be created with ETH and a new token
    string internal name;
    string internal symbol;
    uint8 internal decimals;

    // Need funders
    address public tokenAddress = address(0);
    mapping(address => bool) public isFunder;
    address[] fundingAddresses = new address[](0);

    constructor(
        IPoolManager _poolManager,
        string memory _name,
        string memory _symbol,
        uint8 _decimals
    ) BaseHook(_poolManager) {
        _initializeOwner(msg.sender);
        name = _name;
        symbol = _symbol;
        decimals = _decimals;
    }

    function getHooksCalls() public pure override returns (Hooks.Calls memory) {
        return
            Hooks.Calls({
                beforeInitialize: true,
                afterInitialize: true,
                beforeModifyPosition: true,
                afterModifyPosition: false,
                beforeSwap: true,
                afterSwap: false,
                beforeDonate: false,
                afterDonate: false
            });
    }

    // Use this function to fund the token
    function depositEth() public payable {
        require(
            address(tokenAddress) == address(0),
            "FairTrade: Token already set"
        );
        require(msg.value > 0, "FairTrade: No ETH sent");
        require(msg.value == 0.1 ether, "FairTrade: Must send 0.1 ETH");
        require(!isFunder[msg.sender], "FairTrade: Already funded");
        isFunder[msg.sender] = true;
        fundingAddresses.push(msg.sender);
    }

    // If token has not launched yet, user can quit
    function quit() public {
        require(isFunder[msg.sender], "FairTrade: Not a funder");
        require(
            address(tokenAddress) == address(0),
            "FairTrade: Token already set"
        );
        isFunder[msg.sender] = false;
        payable(msg.sender).transfer(0.1 ether);
    }

    function transferOwnership(
        address newOwner
    ) public payable override onlyOwner {
        require(
            block.timestamp >= unlockTime,
            "FairTrade: Ownership cannot change yet"
        );
        assembly {
            if iszero(shl(96, newOwner)) {
                mstore(0x00, 0x7448fbae) // `NewOwnerIsZeroAddress()`.
                revert(0x1c, 0x04)
            }
        }
        _setOwner(newOwner);
    }

    function launch() public onlyOwner {
        require(
            address(tokenAddress) == address(0),
            "FairTrade: Token already set"
        );
        require(address(this).balance > 0, "FairTrade: No ETH sent");

        FairTradeERC20 token = new FairTradeERC20(name, symbol, decimals);
        tokenAddress = address(token);

        _initializePool();
    }

    function _mintTokensToFunders() private {
        console.log("mintTokensToFunders");
        for (uint256 i = 0; i < fundingAddresses.length; i++) {
            if (isFunder[fundingAddresses[i]]) {
                FairTradeERC20(tokenAddress).mint(
                    fundingAddresses[i],
                    1000 ether
                );
            }
        }
    }

    function _initializePool() private {
        console.log("initializePool");
        // Need to launch the pool
        // Deploy the test-versions of modifyPositionRouter and swapRouter
        modifyPositionRouter = new PoolModifyPositionTest(
            IPoolManager(address(poolManager))
        );
        swapRouter = new PoolSwapTest(IPoolManager(address(poolManager)));

        poolKey = PoolKey({
            currency0: CurrencyLibrary.NATIVE,
            currency1: Currency.wrap(address(tokenAddress)),
            fee: 3000,
            tickSpacing: 60,
            hooks: IHooks(address(this))
        });

        poolId = poolKey.toId();
        poolManager.initialize(poolKey, SQRT_RATIO_1_1, abi.encode(""));
    }

    function _addLiquidityToPool() private {
        console.log("addLiquidityToPool");
        // Mint tokens
        // Note: Not sure what dis value gonna be yet... maybe we should let the user specify
        FairTradeERC20(tokenAddress).mint(address(this), 1000 ether);
        FairTradeERC20(tokenAddress).approve(
            address(modifyPositionRouter),
            1000 ether
        );

        uint256 ethBalance = address(this).balance;
        modifyPositionRouter.modifyPosition{value: ethBalance / 10}(
            poolKey,
            IPoolManager.ModifyPositionParams(-60, 60, 10 ether)
        );

        // modifyPositionRouter.modifyPosition{value: ethBalance / 10}(
        //     poolKey,
        //     IPoolManager.ModifyPositionParams(-120, 120, 10 ether)
        // );

        // modifyPositionRouter.modifyPosition{value: ethBalance / 2}(
        //     poolKey,
        //     IPoolManager.ModifyPositionParams(
        //         TickMath.minUsableTick(60),
        //         TickMath.maxUsableTick(60),
        //         50 ether
        //     )
        // );
        // Approve tokens to be used by the position router
        // Modify the positions with the pool key (i.e. add liquidity at different points)
        // Approve  tokens to be swapped through the swap router
        FairTradeERC20(tokenAddress).approve(address(swapRouter), 1000 ether);
    }

    // Note: Add function later to lock ETH for Milady NFTX

    function beforeInitialize(
        address,
        PoolKey calldata,
        uint160,
        bytes calldata
    ) external override returns (bytes4) {
        _mintTokensToFunders();
        return BaseHook.beforeInitialize.selector;
    }

    function afterInitialize(
        address,
        PoolKey calldata,
        uint160,
        int24,
        bytes calldata
    ) external override returns (bytes4) {
        _addLiquidityToPool();
        return BaseHook.afterInitialize.selector;
    }

    function beforeModifyPosition(
        address,
        PoolKey calldata,
        IPoolManager.ModifyPositionParams calldata,
        bytes calldata
    ) external override returns (bytes4) {
        console.log("beforeModifyPosition");
        if (msg.sender == owner()) {
            require(
                block.timestamp >= unlockTime,
                "FairTrade: Owner cannot change LP yet"
            );
        }
        // Figure out what to call here so that owner does not remove LP and dump
        return BaseHook.beforeModifyPosition.selector;
    }

    function beforeSwap(
        address,
        PoolKey calldata,
        IPoolManager.SwapParams calldata,
        bytes calldata
    ) external override returns (bytes4) {
        console.log("beforeSwap");
        if (isFunder[msg.sender]) {
            require(
                block.timestamp >= unlockTime,
                "FairTrade: Funders cannot trade yet"
            );
        }
        return BaseHook.beforeSwap.selector;
    }
}
