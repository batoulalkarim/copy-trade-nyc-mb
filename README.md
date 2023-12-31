# Fair Trade

Launch ERC-20 tokens with Uniswap V4 and protect your token holders with Fair Trade.

## Authors

Mehran Hydary (mehran@castle.link) and Batoul Alkarim

## Overview

Fair Trade is a Uniswap V4 pool that launches tokens with safety guarantees for future token holders and traders. By leveraging Uniswap V4 hooks, projects can safely raise ETH, distribute tokens, pool liquidity, and put time-locks on tokens.

### Benefits

1. Instead of raising funds for a new token or project using Excel or a hot wallet, deploy Fair Trade and track liquidity raised for the project on the blockchain.
2. Once the project creator is ready to launch the token (target ETH is raised), user calls `launch` which will launch an ERC 20 token, distribute this token to initial liquidity providers, lock the token + ETH raised in a Uniswap V4 pool and then trading can begin.
3. For the first year, trading can take place for anyone that is not flagged as a "funder" and the initial liquidity pool is locked.

### Mechanism

1. Hooks used: `beforeInitialize`, `afterInitialize`, `beforeModifyPosition`, `beforeSwap`
2. ERC20 base is `Solady`
3. Deployment is loosely outlined in `test/FairTrade.t.sol`

### Usage

To use this hook:

-   Deploy the `FairTrade` contract (set a name, symbol, and decimals for your token)
-   Ask your liquidity / fund providers to call `depositEth`. If your providers want to quit before your token launches, they can call `quit`
-   Once you raise your target amount, call `launch`. This function will kick off a token deployment, pool initialization, and token distribution with Uniswap V4 hooks (`beforeInitialize` and `afterInitialize`)
-   After `launch`, LP and swap functions are available. Checks for who are trading the tokens are done in the `beforeSwap` and `beforeModifyPosition` Uniswap V4 hooks

#### Deployment

````
forge script script/FairTrade.s.sol \
    --rpc-url $CONDUIT_TESTNET_URL \
    --private-key $PK \
    --broadcast
```

#### Bonus

This set of contracts also has a Next JS app ready. Features are listed below. This app is targeting users that are new to crypto so we've integrated with Privy and created a simple Next JS app.

1. Login with Twitter via Privy
2. Simple flow to take in token data before fundraising kicks off
3. Once fundraising is kicked off, user has a simple swap box available for other users to buy / sell the new token

### Todo

-   [ ] Write tests to validate swapping and modifying position capabilities
-   [ ] Make fields more dynamic (unlockTime, initialPrice, ethAmount for initial funders, supporting multiple deposits per funder, support other ERC20 token types, mintTokenAmount, fee, tickSpacing)
-   [ ] Secure the contracts (check the ownership, ensure functions cannot be tampered with, reentrancy, etc.)
-   [ ] Deploy contracts (on Mainnet, Scroll, Arbitrum, Polygon, etc.)
-   [ ] Connect front end

### License

This project is licensed under the AGPL-3.0-only

### Disclaimer

This is experimental software and is provided on an "as is" and "as available" basis. We do not give any warranties and will not be liable for any loss incurred through use of this codebase.

````
