export const POOL_MODIFY_POSITION_TEST_ABI = [
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
						internalType: 'int24',
						name: 'tickLower',
						type: 'int24',
					},
					{
						internalType: 'int24',
						name: 'tickUpper',
						type: 'int24',
					},
					{
						internalType: 'int256',
						name: 'liquidityDelta',
						type: 'int256',
					},
				],
				internalType: 'struct IPoolManager.ModifyPositionParams',
				name: 'params',
				type: 'tuple',
			},
		],
		name: 'modifyPosition',
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
