export const POOL_SWAP_TEST_ABI = [
	{
		inputs: [
			{
				internalType: 'contract IPoolManager',
				name: '_manager',
				type: 'address',
			},
		],
		stateMutability: 'nonpayable',
		type: 'constructor',
	},
	{
		inputs: [],
		name: 'ERC20TransferFailed',
		type: 'error',
	},
	{
		inputs: [],
		name: 'NativeTransferFailed',
		type: 'error',
	},
	{
		inputs: [
			{
				internalType: 'bytes',
				name: 'rawData',
				type: 'bytes',
			},
		],
		name: 'lockAcquired',
		outputs: [
			{
				internalType: 'bytes',
				name: '',
				type: 'bytes',
			},
		],
		stateMutability: 'nonpayable',
		type: 'function',
	},
	{
		inputs: [],
		name: 'manager',
		outputs: [
			{
				internalType: 'contract IPoolManager',
				name: '',
				type: 'address',
			},
		],
		stateMutability: 'view',
		type: 'function',
	},
	{
		inputs: [
			{
				components: [
					{
						internalType: 'Currency',
						name: 'currency0',
						type: 'address',
					},
					{
						internalType: 'Currency',
						name: 'currency1',
						type: 'address',
					},
					{
						internalType: 'uint24',
						name: 'fee',
						type: 'uint24',
					},
					{
						internalType: 'int24',
						name: 'tickSpacing',
						type: 'int24',
					},
					{
						internalType: 'contract IHooks',
						name: 'hooks',
						type: 'address',
					},
				],
				internalType: 'struct PoolKey',
				name: 'key',
				type: 'tuple',
			},
			{
				components: [
					{
						internalType: 'bool',
						name: 'zeroForOne',
						type: 'bool',
					},
					{
						internalType: 'int256',
						name: 'amountSpecified',
						type: 'int256',
					},
					{
						internalType: 'uint160',
						name: 'sqrtPriceLimitX96',
						type: 'uint160',
					},
				],
				internalType: 'struct IPoolManager.SwapParams',
				name: 'params',
				type: 'tuple',
			},
			{
				components: [
					{
						internalType: 'bool',
						name: 'withdrawTokens',
						type: 'bool',
					},
					{
						internalType: 'bool',
						name: 'settleUsingTransfer',
						type: 'bool',
					},
				],
				internalType: 'struct PoolSwapTest.TestSettings',
				name: 'testSettings',
				type: 'tuple',
			},
		],
		name: 'swap',
		outputs: [
			{
				internalType: 'BalanceDelta',
				name: 'delta',
				type: 'int256',
			},
		],
		stateMutability: 'payable',
		type: 'function',
	},
]
