export const POOL_DONATE_TEST_ABI = [
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
				internalType: 'uint256',
				name: 'amount0',
				type: 'uint256',
			},
			{
				internalType: 'uint256',
				name: 'amount1',
				type: 'uint256',
			},
		],
		name: 'donate',
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
]
