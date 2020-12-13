import { Address } from 'symbol-sdk';
import {
	AccountInfoDto,
	Block,
	BlockReceiptsArgs,
	BlockStatementsResolutionsAddressArgs,
	BlockStatementsResolutionsMosaicArgs,
	BlockTransactionsArgs,
	MeshContext,
	QueryBlockArgs,
	ResolutionStatementPage,
	Resolvers,
	TransactionPage,
	TransactionStatementPage,
} from '../generated/mesh';

export const resolvers: Resolvers = {
	Query: {
		block: async (root: undefined, args: QueryBlockArgs, { Symbol }: MeshContext): Promise<Block> => {
			const blockInfo = await Symbol.api.getBlockByHeight({
				height: args.height,
			});

			return {
				meta: blockInfo.meta,
				block: blockInfo.block,
			};
		},
	},
	Block: {
		signerAccount: async (parent: Block, args: undefined, { Symbol }: MeshContext): Promise<AccountInfoDto> => {
			const signerAccountInfo = await Symbol.api.getAccountInfo({
				accountId: parent.block.signerPublicKey,
			});

			return signerAccountInfo;
		},
		beneficiaryAccount: async (
			parent: Block,
			args: undefined,
			{ Symbol }: MeshContext,
		): Promise<AccountInfoDto> => {
			const beneficiaryAccountInfo = await Symbol.api.getAccountInfo({
				accountId: Address.createFromEncoded(parent.block.beneficiaryAddress).plain(),
			});

			return beneficiaryAccountInfo;
		},
		transactions: async (
			parent: Block,
			args: BlockTransactionsArgs,
			{ Symbol }: MeshContext,
		): Promise<TransactionPage> => {
			const transactions = await Symbol.api.searchConfirmedTransactions({
				pageSize: args.pageInfo?.pageSize || 10,
				pageNumber: args.pageInfo?.pageNumber || 1,
				height: parent.block.height,
			});

			return transactions;
		},
		statementsResolutionsAddress: async (
			parent: Block,
			args: BlockStatementsResolutionsAddressArgs,
			{ Symbol }: MeshContext,
		): Promise<ResolutionStatementPage> => {
			const addressResolutionStatements = await Symbol.api.searchAddressResolutionStatements({
				pageSize: args.pageInfo?.pageSize || 10,
				pageNumber: args.pageInfo?.pageNumber || 1,
				height: parent.block.height,
			});

			return addressResolutionStatements;
		},
		statementsResolutionsMosaic: async (
			parent: Block,
			args: BlockStatementsResolutionsMosaicArgs,
			{ Symbol }: MeshContext,
		): Promise<ResolutionStatementPage> => {
			const addressResolutionStatements = await Symbol.api.searchMosaicResolutionStatements({
				pageSize: args.pageInfo?.pageSize || 10,
				pageNumber: args.pageInfo?.pageNumber || 1,
				height: parent.block.height,
			});

			return addressResolutionStatements;
		},
		receipts: async (
			parent: Block,
			args: BlockReceiptsArgs,
			{ Symbol }: MeshContext,
		): Promise<TransactionStatementPage> => {
			const addressResolutionStatements = await Symbol.api.searchReceipts({
				pageSize: args.pageInfo?.pageSize || 10,
				pageNumber: args.pageInfo?.pageNumber || 1,
				height: parent.block.height,
			});

			return addressResolutionStatements;
		},
	},
};
