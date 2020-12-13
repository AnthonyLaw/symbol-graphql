import { GraphQLResolveInfo, GraphQLScalarType, GraphQLScalarTypeConfig } from 'graphql';
export type Maybe<T> = T | null;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type RequireFields<T, K extends keyof T> = { [X in Exclude<keyof T, K>]?: T[X] } & { [P in K]-?: NonNullable<T[P]> };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  JSON: any;
};

export type Query = {
  /**
   * Returns the account information.
   * 
   * Equivalent to GET /accounts/{accountId}
   */
  getAccountInfo?: Maybe<AccountInfoDto>;
  /**
   * Returns the account merkle information.
   * 
   * Equivalent to GET /accounts/{accountId}/merkle
   */
  getAccountInfoMerkle?: Maybe<MerkleStateInfoDto>;
  /**
   * Returns the multisig account information.
   * 
   * Equivalent to GET /account/{address}/multisig
   */
  getAccountMultisig?: Maybe<MultisigAccountInfoDto>;
  /**
   * Returns the multisig account graph.
   * 
   * Equivalent to GET /account/{address}/multisig/graph
   */
  getAccountMultisigGraph?: Maybe<Array<Maybe<MultisigAccountGraphInfoDto>>>;
  /**
   * Returns the multisig account merkle information.
   * 
   * Equivalent to GET /account/{address}/multisig/merkle
   */
  getAccountMultisigMerkle?: Maybe<MerkleStateInfoDto>;
  /**
   * Returns the account restrictions for a given address.
   * 
   * Equivalent to GET /restrictions/account/{address}
   */
  getAccountRestrictions?: Maybe<AccountRestrictionsInfoDto>;
  /**
   * Returns the account restrictions merkle for a given address.
   * 
   * Equivalent to GET /restrictions/account/{address}/merkle
   */
  getAccountRestrictionsMerkle?: Maybe<MerkleStateInfoDto>;
  /**
   * Gets a block from the chain that has the given height.
   * 
   * Equivalent to GET /blocks/{height}
   */
  getBlockByHeight?: Maybe<BlockInfoDto>;
  /**
   * Returns the current information of the blockchain.
   * 
   * The higher the score, the better the chain.
   * During synchronization, nodes try to get the best blockchain in the network.
   * 
   * The score for a block is derived from its difficulty and the time (in seconds) that has elapsed since the last block:
   * 
   *     block score = difficulty − time elapsed since last block
   * 
   * 
   * Equivalent to GET /chain/info
   */
  getChainInfo?: Maybe<ChainInfoDto>;
  /**
   * Returns confirmed transaction information given a transactionId or hash.
   * 
   * Equivalent to GET /transactions/confirmed/{transactionId}
   */
  getConfirmedTransaction?: Maybe<TransactionInfoDto>;
  /**
   * Gets finalization proof for the greatest height associated with the given epoch.
   * 
   * Equivalent to GET /finalization/proof/epoch/{epoch}
   */
  getFinalizationProofAtEpoch?: Maybe<FinalizationProofDto>;
  /**
   * Gets finalization proof at the given height.
   * 
   * Equivalent to GET /finalization/proof/height/{height}
   */
  getFinalizationProofAtHeight?: Maybe<FinalizationProofDto>;
  /**
   * Gets the hash lock for a given hash.
   * 
   * Equivalent to GET /lock/hash/{hash}
   */
  getHashLock?: Maybe<HashLockInfoDto>;
  /**
   * Gets the hash lock merkle for a given hash.
   * 
   * Equivalent to GET /lock/hash/{hash}/merkle
   */
  getHashLockMerkle?: Maybe<MerkleStateInfoDto>;
  /**
   * Returns the merkle path for a receipt statement or resolution linked to a block.
   * The merkle path is the minimum number of nodes needed to calculate the merkle root.
   * 
   * Steps to calculate the merkle root:
   * 1. proofHash = hash (leaf).
   * 2. Concatenate proofHash with the first unprocessed item from the merklePath list as follows:
   * * a) If item.position == left -> proofHash = sha_256(item.hash + proofHash).
   * * b) If item.position == right -> proofHash = sha_256(proofHash+ item.hash).
   * 3. Repeat 2. for every item in the merklePath list.
   * 4. Compare if the calculated proofHash equals the one recorded in the
   * block header (block.receiptsHash) to verify if the statement was linked with the block.
   * 
   * 
   * Equivalent to GET /blocks/{height}/statements/{hash}/merkle
   */
  getMerkleReceipts?: Maybe<MerkleProofInfoDto>;
  /**
   * Returns the merkle path for a transaction included in a block.
   * The merkle path is the minimum number of nodes needed to calculate the merkle root.
   * 
   * Steps to calculate the merkle root:
   * 1. proofHash = hash (leaf).
   * 2. Concatenate proofHash with the first unprocessed item from the merklePath list as follows:
   * * a) If item.position == left -> proofHash = sha_256(item.hash + proofHash).
   * * b) If item.position == right -> proofHash = sha_256(proofHash+ item.hash).
   * 3. Repeat 2. for every item in the merklePath list.
   * 4. Compare if the calculated proofHash equals the one recorded in the
   * block header (block.transactionsHash) to verify if the transaction was included in the block.
   * 
   * 
   * Equivalent to GET /blocks/{height}/transactions/{hash}/merkle
   */
  getMerkleTransaction?: Maybe<MerkleProofInfoDto>;
  /**
   * Gets the metadata for a given composite hash.
   * 
   * Equivalent to GET /metadata/{compositeHash}
   */
  getMetadata?: Maybe<MetadataInfoDto>;
  /**
   * Gets the metadata merkle for a given composite hash.
   * 
   * Equivalent to GET /metadata/{compositeHash}/merkle
   */
  getMetadataMerkle?: Maybe<MerkleStateInfoDto>;
  /**
   * Gets the mosaic definition for a given mosaic identifier.
   * 
   * Equivalent to GET /mosaics/{mosaicId}
   */
  getMosaic?: Maybe<MosaicInfoDto>;
  /**
   * Gets the mosaic definition merkle for a given mosaic identifier.
   * 
   * Equivalent to GET /mosaics/{mosaicId}/merkle
   */
  getMosaicMerkle?: Maybe<MerkleStateInfoDto>;
  /**
   * Returns the mosaic restrictions for a composite hash.
   * 
   * Equivalent to GET /restrictions/mosaic/{compositeHash}
   */
  getMosaicRestrictions?: Maybe<MosaicRestrictionDto>;
  /**
   * Returns the mosaic restrictions merkle for a given composite hash.
   * 
   * Equivalent to GET /restrictions/mosaic/{compositeHash}/merkle
   */
  getMosaicRestrictionsMerkle?: Maybe<MerkleStateInfoDto>;
  /**
   * Gets the namespace for a given namespace identifier.
   * 
   * Equivalent to GET /namespaces/{namespaceId}
   */
  getNamespace?: Maybe<NamespaceInfoDto>;
  /**
   * Gets the namespace merkle for a given namespace identifier.
   * 
   * Equivalent to GET /namespaces/{namespaceId}/merkle
   */
  getNamespaceMerkle?: Maybe<MerkleStateInfoDto>;
  /**
   * Returns the content from a catapult-server network configuration file (resources/config-network.properties).
   * To enable this feature, the REST setting "network.propertiesFilePath" must define where the file is located.
   * This is adjustable via the configuration file (rest/resources/rest.json) per REST instance.
   * 
   * 
   * Equivalent to GET /network/properties
   */
  getNetworkProperties?: Maybe<NetworkConfigurationDto>;
  /**
   * Returns the current network type.
   * 
   * Equivalent to GET /network
   */
  getNetworkType?: Maybe<NetworkTypeDto>;
  /**
   * Supplies information regarding the connection and services status.
   * 
   * Equivalent to GET /node/health
   */
  getNodeHealth?: Maybe<NodeHealthInfoDto>;
  /**
   * Supplies additional information about the application running on a node.
   * 
   * Equivalent to GET /node/info
   */
  getNodeInfo?: Maybe<NodeInfoDto>;
  /**
   * Gets the list of peers visible by the node.
   * 
   * Equivalent to GET /node/peers
   */
  getNodePeers?: Maybe<Array<Maybe<NodeInfoDto>>>;
  /**
   * Returns storage information about the node.
   * 
   * Equivalent to GET /node/storage
   */
  getNodeStorage?: Maybe<StorageInfoDto>;
  /**
   * Gets the node time at the moment the reply was sent and received.
   * 
   * Equivalent to GET /node/time
   */
  getNodeTime?: Maybe<NodeTimeDto>;
  /**
   * Returns partial transaction information given a transactionId or hash.
   * 
   * Equivalent to GET /transactions/partial/{transactionId}
   */
  getPartialTransaction?: Maybe<TransactionInfoDto>;
  /**
   * Returns the estimated effective rental fees for namespaces and mosaics.
   * This endpoint is only available if the REST instance has access to catapult-server ``resources/config-network.properties`` file.
   * To activate this feature, add the setting "network.propertiesFilePath" in the configuration file (rest/resources/rest.json).
   * 
   * 
   * Equivalent to GET /network/fees/rental
   */
  getRentalFees?: Maybe<RentalFeesDto>;
  /**
   * Gets the hash lock for a given composite hash.
   * 
   * Equivalent to GET /lock/secret/{compositeHash}
   */
  getSecretLock?: Maybe<SecretLockInfoDto>;
  /**
   * Gets the hash lock merkle for a given composite hash.
   * 
   * Equivalent to GET /lock/secret/{compositeHash}/merkle
   */
  getSecretLockMerkle?: Maybe<MerkleStateInfoDto>;
  /**
   * Returns the version of the running catapult-rest component.
   * 
   * Equivalent to GET /node/server
   */
  getServerInfo?: Maybe<ServerInfoDto>;
  /**
   * Returns the average, median, highest and lower fee multiplier over the last "numBlocksTransactionFeeStats".
   * The setting "numBlocksTransactionFeeStats" is adjustable via the configuration file (rest/resources/rest.json) per REST instance.
   * 
   * 
   * Equivalent to GET /network/fees/transaction
   */
  getTransactionFees?: Maybe<TransactionFeesDto>;
  /**
   * Returns the transaction status for a given hash.
   * 
   * Equivalent to GET /transactionStatus/{hash}
   */
  getTransactionStatus?: Maybe<TransactionStatusDto>;
  /**
   * Returns unconfirmed transaction information given a transactionId or hash.
   * 
   * Equivalent to GET /transactions/unconfirmed/{transactionId}
   */
  getUnconfirmedTransaction?: Maybe<TransactionInfoDto>;
  /**
   * Returns array of unlocked account public keys.
   * 
   * Equivalent to GET /node/unlockedaccount
   */
  getUnlockedAccount?: Maybe<UnlockedAccountDto>;
  /**
   * Returns an array of account restrictions.
   * 
   * Equivalent to GET /restrictions/account
   */
  searchAccountRestrictions?: Maybe<AccountRestrictionsPage>;
  /**
   * Gets an array of accounts.
   * 
   * Equivalent to GET /accounts
   */
  searchAccounts?: Maybe<AccountPage>;
  /**
   * Gets an array of address resolution statements.
   * 
   * Equivalent to GET /statements/resolutions/address
   */
  searchAddressResolutionStatements?: Maybe<ResolutionStatementPage>;
  /**
   * Gets an array of bocks.
   * 
   * Equivalent to GET /blocks
   */
  searchBlocks?: Maybe<BlockPage>;
  /**
   * Returns an array of confirmed transactions.
   * If a transaction was announced with an alias rather than an address, the address that will be considered when querying is the one that
   * was resolved from the alias at confirmation time.
   * 
   * 
   * Equivalent to GET /transactions/confirmed
   */
  searchConfirmedTransactions?: Maybe<TransactionPage>;
  /**
   * Returns an array of hash locks.
   * 
   * Equivalent to GET /lock/hash
   */
  searchHashLock?: Maybe<HashLockPage>;
  /**
   * Returns an array of metadata.
   * 
   * Equivalent to GET /metadata
   */
  searchMetadataEntries?: Maybe<MetadataPage>;
  /**
   * Gets an array of mosaic resolution statements.
   * 
   * Equivalent to GET /statements/resolutions/mosaic
   */
  searchMosaicResolutionStatements?: Maybe<ResolutionStatementPage>;
  /**
   * Returns an array of mosaic restrictions.
   * 
   * Equivalent to GET /restrictions/mosaic
   */
  searchMosaicRestrictions?: Maybe<MosaicRestrictionsPage>;
  /**
   * Gets an array of mosaics.
   * 
   * Equivalent to GET /mosaics
   */
  searchMosaics?: Maybe<MosaicPage>;
  /**
   * Gets an array of namespaces.
   * 
   * Equivalent to GET /namespaces
   */
  searchNamespaces?: Maybe<NamespacePage>;
  /**
   * Returns an array of partial transactions.
   * 
   * Equivalent to GET /transactions/partial
   */
  searchPartialTransactions?: Maybe<TransactionPage>;
  /**
   * Gets an array of transaction statements.
   * 
   * Equivalent to GET /statements/transaction
   */
  searchReceipts?: Maybe<TransactionStatementPage>;
  /**
   * Returns an array of secret locks.
   * 
   * Equivalent to GET /lock/secret
   */
  searchSecretLock?: Maybe<SecretLockPage>;
  /**
   * Returns an array of unconfirmed transactions.
   * 
   * Equivalent to GET /transactions/unconfirmed
   */
  searchUnconfirmedTransactions?: Maybe<TransactionPage>;
  block?: Maybe<Block>;
};


export type QueryGetAccountInfoArgs = {
  accountId: Scalars['String'];
};


export type QueryGetAccountInfoMerkleArgs = {
  accountId: Scalars['String'];
};


export type QueryGetAccountMultisigArgs = {
  address: Scalars['String'];
};


export type QueryGetAccountMultisigGraphArgs = {
  address: Scalars['String'];
  limit?: Maybe<Scalars['Int']>;
};


export type QueryGetAccountMultisigMerkleArgs = {
  address: Scalars['String'];
};


export type QueryGetAccountRestrictionsArgs = {
  address: Scalars['String'];
};


export type QueryGetAccountRestrictionsMerkleArgs = {
  address: Scalars['String'];
};


export type QueryGetBlockByHeightArgs = {
  height: Scalars['String'];
};


export type QueryGetConfirmedTransactionArgs = {
  transactionId: Scalars['String'];
};


export type QueryGetFinalizationProofAtEpochArgs = {
  epoch: Scalars['Float'];
};


export type QueryGetFinalizationProofAtHeightArgs = {
  height: Scalars['String'];
};


export type QueryGetHashLockArgs = {
  hash: Scalars['String'];
};


export type QueryGetHashLockMerkleArgs = {
  hash: Scalars['String'];
};


export type QueryGetMerkleReceiptsArgs = {
  hash: Scalars['String'];
  height: Scalars['String'];
};


export type QueryGetMerkleTransactionArgs = {
  hash: Scalars['String'];
  height: Scalars['String'];
};


export type QueryGetMetadataArgs = {
  compositeHash: Scalars['String'];
};


export type QueryGetMetadataMerkleArgs = {
  compositeHash: Scalars['String'];
};


export type QueryGetMosaicArgs = {
  mosaicId: Scalars['String'];
};


export type QueryGetMosaicMerkleArgs = {
  mosaicId: Scalars['String'];
};


export type QueryGetMosaicRestrictionsArgs = {
  compositeHash: Scalars['String'];
};


export type QueryGetMosaicRestrictionsMerkleArgs = {
  compositeHash: Scalars['String'];
};


export type QueryGetNamespaceArgs = {
  namespaceId: Scalars['String'];
};


export type QueryGetNamespaceMerkleArgs = {
  namespaceId: Scalars['String'];
};


export type QueryGetNodePeersArgs = {
  limit?: Maybe<Scalars['Int']>;
};


export type QueryGetPartialTransactionArgs = {
  transactionId: Scalars['String'];
};


export type QueryGetSecretLockArgs = {
  compositeHash: Scalars['String'];
};


export type QueryGetSecretLockMerkleArgs = {
  compositeHash: Scalars['String'];
};


export type QueryGetTransactionStatusArgs = {
  hash: Scalars['String'];
};


export type QueryGetUnconfirmedTransactionArgs = {
  transactionId: Scalars['String'];
};


export type QuerySearchAccountRestrictionsArgs = {
  address?: Maybe<Scalars['String']>;
  offset?: Maybe<Scalars['String']>;
  order?: Maybe<Order>;
  pageNumber?: Maybe<Scalars['Int']>;
  pageSize?: Maybe<Scalars['Int']>;
};


export type QuerySearchAccountsArgs = {
  mosaicId?: Maybe<Scalars['String']>;
  offset?: Maybe<Scalars['String']>;
  order?: Maybe<Order>;
  orderBy?: Maybe<OrderBy>;
  pageNumber?: Maybe<Scalars['Int']>;
  pageSize?: Maybe<Scalars['Int']>;
};


export type QuerySearchAddressResolutionStatementsArgs = {
  height?: Maybe<Scalars['String']>;
  offset?: Maybe<Scalars['String']>;
  order?: Maybe<Order>;
  pageNumber?: Maybe<Scalars['Int']>;
  pageSize?: Maybe<Scalars['Int']>;
};


export type QuerySearchBlocksArgs = {
  beneficiaryAddress?: Maybe<Scalars['String']>;
  offset?: Maybe<Scalars['String']>;
  order?: Maybe<Order>;
  orderBy?: Maybe<OrderBy2>;
  pageNumber?: Maybe<Scalars['Int']>;
  pageSize?: Maybe<Scalars['Int']>;
  signerPublicKey?: Maybe<Scalars['String']>;
};


export type QuerySearchConfirmedTransactionsArgs = {
  address?: Maybe<Scalars['String']>;
  embedded?: Maybe<Scalars['Boolean']>;
  fromHeight?: Maybe<Scalars['String']>;
  fromTransferAmount?: Maybe<Scalars['String']>;
  height?: Maybe<Scalars['String']>;
  offset?: Maybe<Scalars['String']>;
  order?: Maybe<Order>;
  pageNumber?: Maybe<Scalars['Int']>;
  pageSize?: Maybe<Scalars['Int']>;
  recipientAddress?: Maybe<Scalars['String']>;
  signerPublicKey?: Maybe<Scalars['String']>;
  toHeight?: Maybe<Scalars['String']>;
  toTransferAmount?: Maybe<Scalars['String']>;
  transferMosaicId?: Maybe<Scalars['String']>;
  type?: Maybe<Array<Maybe<TransactionTypeEnum>>>;
};


export type QuerySearchHashLockArgs = {
  address?: Maybe<Scalars['String']>;
  offset?: Maybe<Scalars['String']>;
  order?: Maybe<Order>;
  pageNumber?: Maybe<Scalars['Int']>;
  pageSize?: Maybe<Scalars['Int']>;
};


export type QuerySearchMetadataEntriesArgs = {
  metadataType?: Maybe<MetadataType>;
  offset?: Maybe<Scalars['String']>;
  order?: Maybe<Order>;
  pageNumber?: Maybe<Scalars['Int']>;
  pageSize?: Maybe<Scalars['Int']>;
  scopedMetadataKey?: Maybe<Scalars['String']>;
  sourceAddress?: Maybe<Scalars['String']>;
  targetAddress?: Maybe<Scalars['String']>;
  targetId?: Maybe<Scalars['String']>;
};


export type QuerySearchMosaicResolutionStatementsArgs = {
  height?: Maybe<Scalars['String']>;
  offset?: Maybe<Scalars['String']>;
  order?: Maybe<Order>;
  pageNumber?: Maybe<Scalars['Int']>;
  pageSize?: Maybe<Scalars['Int']>;
};


export type QuerySearchMosaicRestrictionsArgs = {
  entryType?: Maybe<EntryType>;
  mosaicId?: Maybe<Scalars['String']>;
  offset?: Maybe<Scalars['String']>;
  order?: Maybe<Order>;
  pageNumber?: Maybe<Scalars['Int']>;
  pageSize?: Maybe<Scalars['Int']>;
  targetAddress?: Maybe<Scalars['String']>;
};


export type QuerySearchMosaicsArgs = {
  offset?: Maybe<Scalars['String']>;
  order?: Maybe<Order>;
  ownerAddress?: Maybe<Scalars['String']>;
  pageNumber?: Maybe<Scalars['Int']>;
  pageSize?: Maybe<Scalars['Int']>;
};


export type QuerySearchNamespacesArgs = {
  aliasType?: Maybe<AliasType>;
  level0?: Maybe<Scalars['String']>;
  offset?: Maybe<Scalars['String']>;
  order?: Maybe<Order>;
  ownerAddress?: Maybe<Scalars['String']>;
  pageNumber?: Maybe<Scalars['Int']>;
  pageSize?: Maybe<Scalars['Int']>;
  registrationType?: Maybe<RegistrationType>;
};


export type QuerySearchPartialTransactionsArgs = {
  address?: Maybe<Scalars['String']>;
  embedded?: Maybe<Scalars['Boolean']>;
  fromHeight?: Maybe<Scalars['String']>;
  fromTransferAmount?: Maybe<Scalars['String']>;
  height?: Maybe<Scalars['String']>;
  offset?: Maybe<Scalars['String']>;
  order?: Maybe<Order>;
  pageNumber?: Maybe<Scalars['Int']>;
  pageSize?: Maybe<Scalars['Int']>;
  recipientAddress?: Maybe<Scalars['String']>;
  signerPublicKey?: Maybe<Scalars['String']>;
  toHeight?: Maybe<Scalars['String']>;
  toTransferAmount?: Maybe<Scalars['String']>;
  transferMosaicId?: Maybe<Scalars['String']>;
  type?: Maybe<Array<Maybe<TransactionTypeEnum>>>;
};


export type QuerySearchReceiptsArgs = {
  artifactId?: Maybe<Scalars['String']>;
  height?: Maybe<Scalars['String']>;
  offset?: Maybe<Scalars['String']>;
  order?: Maybe<Order>;
  pageNumber?: Maybe<Scalars['Int']>;
  pageSize?: Maybe<Scalars['Int']>;
  receiptType?: Maybe<Array<Maybe<ReceiptTypeEnum>>>;
  recipientAddress?: Maybe<Scalars['String']>;
  senderAddress?: Maybe<Scalars['String']>;
  targetAddress?: Maybe<Scalars['String']>;
};


export type QuerySearchSecretLockArgs = {
  address?: Maybe<Scalars['String']>;
  offset?: Maybe<Scalars['String']>;
  order?: Maybe<Order>;
  pageNumber?: Maybe<Scalars['Int']>;
  pageSize?: Maybe<Scalars['Int']>;
  secret?: Maybe<Scalars['String']>;
};


export type QuerySearchUnconfirmedTransactionsArgs = {
  address?: Maybe<Scalars['String']>;
  embedded?: Maybe<Scalars['Boolean']>;
  fromHeight?: Maybe<Scalars['String']>;
  fromTransferAmount?: Maybe<Scalars['String']>;
  height?: Maybe<Scalars['String']>;
  offset?: Maybe<Scalars['String']>;
  order?: Maybe<Order>;
  pageNumber?: Maybe<Scalars['Int']>;
  pageSize?: Maybe<Scalars['Int']>;
  recipientAddress?: Maybe<Scalars['String']>;
  signerPublicKey?: Maybe<Scalars['String']>;
  toHeight?: Maybe<Scalars['String']>;
  toTransferAmount?: Maybe<Scalars['String']>;
  transferMosaicId?: Maybe<Scalars['String']>;
  type?: Maybe<Array<Maybe<TransactionTypeEnum>>>;
};


export type QueryBlockArgs = {
  height: Scalars['String'];
};

export type AccountInfoDto = {
  account: AccountDto;
  /** Internal resource identifier. */
  id: Scalars['String'];
};

export type AccountDto = {
  /**
   * * 0 - Unlinked.
   * * 1 - Balance-holding account that is linked to a remote harvester account.
   * * 2 - Remote harvester account that is linked to a balance-holding account.
   * * 3 - Remote harvester eligible account that is unlinked.
   */
  accountType: AccountTypeEnum;
  activityBuckets: Array<Maybe<ActivityBucketDto>>;
  /** Address expressed in hexadecimal base. */
  address: Scalars['String'];
  /** Height of the blockchain. */
  addressHeight: Scalars['String'];
  /** Probability of an account to harvest the next block. */
  importance: Scalars['String'];
  /** Height of the blockchain. */
  importanceHeight: Scalars['String'];
  /** Mosaic units owned. */
  mosaics: Array<Maybe<Mosaic>>;
  /** Public key. */
  publicKey: Scalars['String'];
  /** Height of the blockchain. */
  publicKeyHeight: Scalars['String'];
  supplementalPublicKeys: SupplementalPublicKeysDto;
  /** The version of the state */
  version: Scalars['Int'];
};

export enum AccountTypeEnum {
  _0 = 0,
  _1 = 1,
  _2 = 2,
  _3 = 3
}

/**
 * Supplementary data stored for importance recalculation.
 * At each importance recalculation, existing buckets are shifted, the working bucket is finalized and a new working bucket is created.
 * Each bucket influences at most five importance recalculations.
 */
export type ActivityBucketDto = {
  /** A number that allows uint 32 values. */
  beneficiaryCount: Scalars['Float'];
  /** Probability of an account to harvest the next block. */
  rawScore: Scalars['String'];
  /** Height of the blockchain. */
  startHeight: Scalars['String'];
  /** Absolute amount. An amount of 123456789 (absolute) for a mosaic with divisibility 6 means 123.456789 (relative). */
  totalFeesPaid: Scalars['String'];
};

export type Mosaic = {
  /** Absolute amount. An amount of 123456789 (absolute) for a mosaic with divisibility 6 means 123.456789 (relative). */
  amount: Scalars['String'];
  /** Mosaic identifier. */
  id: Scalars['String'];
};

export type SupplementalPublicKeysDto = {
  linked?: Maybe<AccountLinkPublicKeyDto>;
  node?: Maybe<AccountLinkPublicKeyDto>;
  voting?: Maybe<AccountLinkVotingKeysDto>;
  vrf?: Maybe<AccountLinkPublicKeyDto>;
};

export type AccountLinkPublicKeyDto = {
  publicKey: Scalars['String'];
};

export type AccountLinkVotingKeysDto = {
  publicKeys: Array<Maybe<AccountLinkVotingKeyDto>>;
};

export type AccountLinkVotingKeyDto = {
  /** Finalization Epoch */
  endEpoch: Scalars['Float'];
  publicKey: Scalars['String'];
  /** Finalization Epoch */
  startEpoch: Scalars['Float'];
};

/** The merkle path information clients can use to proof the state of the given entity. */
export type MerkleStateInfoDto = {
  /**
   * The hex information of the complete merkle tree as returned by server api.
   * More information can be found in chapter 4.3 of the catapult whitepaper.
   */
  raw: Scalars['String'];
  /** Merkle tree parsed from merkle tree raw. */
  tree: Array<Maybe<TreeListItem>>;
};

export type TreeListItem = {
  branchHash?: Maybe<Scalars['String']>;
  encodedPath?: Maybe<Scalars['JSON']>;
  leafHash?: Maybe<Scalars['String']>;
  /** Branch link bitmask. */
  linkMask?: Maybe<Scalars['String']>;
  /** Branch links (max 16). */
  links?: Maybe<Array<Maybe<MerkleTreeBranchLinkDto>>>;
  /** Nibble count. */
  nibbleCount?: Maybe<Scalars['Int']>;
  path?: Maybe<Scalars['JSON']>;
  /**
   * Type of Merkle tree node:
   * * 0 - Branch node.
   * * 255 - Leaf node.
   */
  type?: Maybe<Type>;
  /** Leaf value (sha256 hash). */
  value?: Maybe<Scalars['String']>;
};


/** Merkle tree branch link. */
export type MerkleTreeBranchLinkDto = {
  /** Branch link nibble bit index (hexadecimal). */
  bit: Scalars['String'];
  link: Scalars['String'];
};

export enum Type {
  _0 = 0,
  _255 = 255
}

export type MultisigAccountInfoDto = {
  multisig: MultisigDto;
};

export type MultisigDto = {
  /** Address expressed in hexadecimal base. */
  accountAddress: Scalars['String'];
  /** Addresses of the cosignatory accounts. */
  cosignatoryAddresses: Array<Maybe<Scalars['String']>>;
  /** A number that allows uint 32 values. */
  minApproval: Scalars['Float'];
  /** A number that allows uint 32 values. */
  minRemoval: Scalars['Float'];
  /** Multisig accounts where the account is cosignatory. */
  multisigAddresses: Array<Maybe<Scalars['String']>>;
  /** The version of the state */
  version: Scalars['Int'];
};

export type MultisigAccountGraphInfoDto = {
  /** Level of the multisig account. */
  level: Scalars['Int'];
  /** Array of multisig accounts for this level. */
  multisigEntries: Array<Maybe<MultisigAccountInfoDto>>;
};

export type AccountRestrictionsInfoDto = {
  accountRestrictions: AccountRestrictionsDto;
};

export type AccountRestrictionsDto = {
  /** Address expressed in hexadecimal base. */
  address: Scalars['String'];
  restrictions: Array<Maybe<AccountRestrictionDto>>;
  /** The version of the state */
  version: Scalars['Int'];
};

export type AccountRestrictionDto = {
  /**
   * Type of account restriction:
   * * 0x0001 (1 decimal) - Allow only incoming transactions from a given address.
   * * 0x0002 (2 decimal) - Allow only incoming transactions containing a given mosaic identifier.
   * * 0x4001 (16385 decimal) - Allow only outgoing transactions to a given address.
   * * 0x4004 (16388 decimal) - Allow only outgoing transactions with a given transaction type.
   * * 0x8001 (32769 decimal) - Block incoming transactions from a given address.
   * * 0x8002 (32770 decimal) - Block incoming transactions containing a given mosaic identifier.
   * * 0xC001 (49153 decimal) - Block outgoing transactions to a given address.
   * * 0xC004 (49156 decimal) - Block outgoing transactions with a given transaction type.
   */
  restrictionFlags: AccountRestrictionFlagsEnum;
  /** Address, mosaic id, or transaction type to restrict. */
  values: Array<Maybe<Scalars['JSON']>>;
};

export enum AccountRestrictionFlagsEnum {
  _1 = 1,
  _2 = 2,
  _16385 = 16385,
  _16388 = 16388,
  _32769 = 32769,
  _32770 = 32770,
  _49153 = 49153,
  _49156 = 49156
}

export type BlockInfoDto = {
  block: Scalars['JSON'];
  /** Internal resource identifier. */
  id: Scalars['String'];
  meta: BlockMetaDto;
};

export type BlockMetaDto = {
  generationHash: Scalars['String'];
  hash: Scalars['String'];
  stateHashSubCacheMerkleRoots: Array<Maybe<Scalars['String']>>;
  /** Number of statements (of any kind) present in this block. Bear in mind that some of them (like [resolution statements](https://docs.symbolplatform.com/concepts/receipt.html#resolution-statement)) are triggered by transactions present in the block, but in general, [transaction statements](https://docs.symbolplatform.com/concepts/receipt.html#transaction-statement) are not. */
  statementsCount: Scalars['Int'];
  /** Absolute amount. An amount of 123456789 (absolute) for a mosaic with divisibility 6 means 123.456789 (relative). */
  totalFee: Scalars['String'];
  /** Total number of [transactions](https://docs.symbolplatform.com/concepts/transaction.html) confirmed in this block, including *embedded* transactions (i.e. transactions contained within aggregate transactions). */
  totalTransactionsCount: Scalars['Int'];
  /** Number of [transactions](https://docs.symbolplatform.com/concepts/transaction.html) confirmed in this block. This does not count *embedded* transactions (i.e. transactions contained within aggregate transactions). */
  transactionsCount: Scalars['Int'];
};

export type ChainInfoDto = {
  /** Height of the blockchain. */
  height: Scalars['String'];
  latestFinalizedBlock: FinalizedBlockDto;
  /**
   * Score of the blockchain. During synchronization, nodes try to get the
   * blockchain with highest score in the network.
   */
  scoreHigh: Scalars['String'];
  /**
   * Score of the blockchain. During synchronization, nodes try to get the
   * blockchain with highest score in the network.
   */
  scoreLow: Scalars['String'];
};

export type FinalizedBlockDto = {
  /** Finalization Epoch */
  finalizationEpoch: Scalars['Float'];
  /** Finalization point */
  finalizationPoint: Scalars['Float'];
  hash: Scalars['String'];
  /** Height of the blockchain. */
  height: Scalars['String'];
};

export type TransactionInfoDto = {
  /** Internal resource identifier. */
  id: Scalars['String'];
  meta: Meta;
  transaction: Scalars['JSON'];
};

export type Meta = {
  aggregateHash?: Maybe<Scalars['String']>;
  /** Identifier of the aggregate transaction. */
  aggregateId?: Maybe<Scalars['String']>;
  hash?: Maybe<Scalars['String']>;
  /** Height of the blockchain. */
  height?: Maybe<Scalars['String']>;
  index?: Maybe<Scalars['JSON']>;
  merkleComponentHash?: Maybe<Scalars['String']>;
};

export type FinalizationProofDto = {
  /** Finalization Epoch */
  finalizationEpoch: Scalars['Float'];
  /** Finalization point */
  finalizationPoint: Scalars['Float'];
  hash: Scalars['String'];
  /** Height of the blockchain. */
  height: Scalars['String'];
  messageGroups: Array<Maybe<MessageGroup>>;
  version: Scalars['Int'];
};

export type MessageGroup = {
  hashes: Array<Maybe<Scalars['String']>>;
  /** Height of the blockchain. */
  height: Scalars['String'];
  signatures: Array<Maybe<BmTreeSignature>>;
  /**
   * Type of stage:
   * * 0 - Prevote.
   * * 1 - Precommit.
   * * 2 - Count.
   */
  stage: StageEnum;
};

export type BmTreeSignature = {
  bottom: ParentPublicKeySignaturePair;
  root: ParentPublicKeySignaturePair;
  top: ParentPublicKeySignaturePair;
};

export type ParentPublicKeySignaturePair = {
  /** Public key. */
  parentPublicKey: Scalars['String'];
  /** Entity's signature generated by the signer. */
  signature: Scalars['String'];
};

export enum StageEnum {
  _0 = 0,
  _1 = 1,
  _2 = 2
}

export type HashLockInfoDto = {
  id: Scalars['String'];
  lock: HashLockEntryDto;
};

export type HashLockEntryDto = {
  /** Absolute amount. An amount of 123456789 (absolute) for a mosaic with divisibility 6 means 123.456789 (relative). */
  amount: Scalars['String'];
  /** Height of the blockchain. */
  endHeight: Scalars['String'];
  hash: Scalars['String'];
  /** Mosaic identifier. */
  mosaicId: Scalars['String'];
  /** Address expressed in hexadecimal base. */
  ownerAddress: Scalars['String'];
  /**
   * Possible status of lock states:
   * * 0 - UNUSED.
   * * 1 - USED.
   */
  status: LockStatus;
  /** The version of the state */
  version: Scalars['Int'];
};

export enum LockStatus {
  _0 = 0,
  _1 = 1
}

export type MerkleProofInfoDto = {
  /** List of complementary merkle path items needed to recalculate the merkle root. */
  merklePath?: Maybe<Array<Maybe<MerklePathItemDto>>>;
};

/** Each merkle path item is composed of a hash, and a position relative to the proofHash being evaluated. */
export type MerklePathItemDto = {
  hash?: Maybe<Scalars['String']>;
  /** Position relative to the proofHash being evaluated. */
  position?: Maybe<PositionEnum>;
};

export enum PositionEnum {
  LEFT = 'left',
  RIGHT = 'right'
}

export type MetadataInfoDto = {
  id: Scalars['String'];
  metadataEntry: MetadataEntryDto;
};

export type MetadataEntryDto = {
  compositeHash: Scalars['String'];
  /**
   * Metadata type:
   * * 0 - Account.
   * * 1 - Mosaic.
   * * 2 - Namespace.
   */
  metadataType: MetadataTypeEnum;
  /** Metadata key scoped to source, target and type expressed. */
  scopedMetadataKey: Scalars['String'];
  /** Address expressed in hexadecimal base. */
  sourceAddress: Scalars['String'];
  /** Address expressed in hexadecimal base. */
  targetAddress: Scalars['String'];
  targetId?: Maybe<Scalars['JSON']>;
  /** Metadata value. */
  value: Scalars['String'];
  /** The version of the state */
  version: Scalars['Int'];
};

export enum MetadataTypeEnum {
  _0 = 0,
  _1 = 1,
  _2 = 2
}

export type MosaicInfoDto = {
  /** Internal resource identifier. */
  id: Scalars['String'];
  mosaic: MosaicDto;
};

export type MosaicDto = {
  /**
   * Determines up to what decimal place the mosaic can be divided.
   * Divisibility of 3 means that a mosaic can be divided into smallest parts of 0.001 mosaics.
   * The divisibility must be in the range of 0 and 6.
   */
  divisibility: Scalars['Int'];
  /** Duration expressed in number of blocks. */
  duration: Scalars['String'];
  /**
   * - 0x00 (none) - No flags present.
   * - 0x01 (supplyMutable) - Mosaic supports supply changes even when mosaic owner owns partial supply.
   * - 0x02 (transferable) - Mosaic supports transfers between arbitrary accounts. When not set, mosaic can only be transferred to and from mosaic owner.
   * - 0x04 (restrictable) - Mosaic supports custom restrictions configured by mosaic owner.
   */
  flags: Scalars['Int'];
  /** Mosaic identifier. */
  id: Scalars['String'];
  /** Address expressed in hexadecimal base. */
  ownerAddress: Scalars['String'];
  /** A number that allows uint 32 values. */
  revision: Scalars['Float'];
  /** Height of the blockchain. */
  startHeight: Scalars['String'];
  /** Absolute amount. An amount of 123456789 (absolute) for a mosaic with divisibility 6 means 123.456789 (relative). */
  supply: Scalars['String'];
  /** The version of the state */
  version: Scalars['Int'];
};

/** Generic Mosaic Restriction */
export type MosaicRestrictionDto = {
  /** Internal resource identifier. */
  id?: Maybe<Scalars['String']>;
  mosaicRestrictionEntry?: Maybe<Scalars['JSON']>;
};

export type NamespaceInfoDto = {
  /** Internal resource identifier. */
  id: Scalars['String'];
  meta: NamespaceMetaDto;
  namespace: NamespaceDto;
};

export type NamespaceMetaDto = {
  /** If true, the namespace is active. */
  active: Scalars['Boolean'];
  index: Scalars['Int'];
};

export type NamespaceDto = {
  alias: AliasDto;
  /** Level of the namespace. */
  depth: Scalars['Int'];
  /** Height of the blockchain. */
  endHeight: Scalars['String'];
  /** Namespace identifier. */
  level0: Scalars['String'];
  /** Namespace identifier. */
  level1?: Maybe<Scalars['String']>;
  /** Namespace identifier. */
  level2?: Maybe<Scalars['String']>;
  /** Address expressed in hexadecimal base. */
  ownerAddress: Scalars['String'];
  /** Namespace identifier. */
  parentId: Scalars['String'];
  /**
   * Type of namespace:
   * * 0 - Root namespace.
   * * 1 - Subnamespace.
   */
  registrationType: NamespaceRegistrationTypeEnum;
  /** Height of the blockchain. */
  startHeight: Scalars['String'];
  /** The version of the state */
  version: Scalars['Int'];
};

export type AliasDto = {
  /** Address expressed in hexadecimal base. */
  address?: Maybe<Scalars['String']>;
  /** Mosaic identifier. */
  mosaicId?: Maybe<Scalars['String']>;
  /**
   * Type of alias:
   * * 0 - No alias.
   * * 1 - Mosaic id alias.
   * * 2 - Addres alias.
   */
  type: AliasTypeEnum;
};

export enum AliasTypeEnum {
  _0 = 0,
  _1 = 1,
  _2 = 2
}

export enum NamespaceRegistrationTypeEnum {
  _0 = 0,
  _1 = 1
}

export type NetworkConfigurationDto = {
  /** Chain related configuration properties. */
  chain: ChainPropertiesDto;
  /** Network related configuration properties. */
  network: NetworkPropertiesDto;
  /** Plugin related configuration properties. */
  plugins: PluginsPropertiesDto;
};

/** Chain related configuration properties. */
export type ChainPropertiesDto = {
  /** Number of blocks between successive finalization attempts. */
  blockFinalizationInterval?: Maybe<Scalars['String']>;
  /** Targeted time between blocks. */
  blockGenerationTargetTime?: Maybe<Scalars['String']>;
  /** Number of blocks between cache pruning. */
  blockPruneInterval?: Maybe<Scalars['String']>;
  /** A higher value makes the network more biased. */
  blockTimeSmoothingFactor?: Maybe<Scalars['String']>;
  /** Mosaic id used as primary chain currency. */
  currencyMosaicId?: Maybe<Scalars['String']>;
  /** Default multiplier to use for dynamic fees. */
  defaultDynamicFeeMultiplier?: Maybe<Scalars['String']>;
  /** Set to true if block chain should calculate receipts so that state changes are fully verifiable at each block. */
  enableVerifiableReceipts?: Maybe<Scalars['Boolean']>;
  /** Set to true if block chain should calculate state hashes so that state is fully verifiable at each block. */
  enableVerifiableState?: Maybe<Scalars['Boolean']>;
  /** Percentage of the harvested fee that is collected by the beneficiary account. */
  harvestBeneficiaryPercentage?: Maybe<Scalars['String']>;
  /** Address encoded using a 32-character set. */
  harvestNetworkFeeSinkAddress?: Maybe<Scalars['String']>;
  /** Percentage of the harvested fee that is collected by the network. */
  harvestNetworkPercentage?: Maybe<Scalars['String']>;
  /** Mosaic id used to provide harvesting ability. */
  harvestingMosaicId?: Maybe<Scalars['String']>;
  /** Percentage of importance resulting from fee generation and beneficiary usage. */
  importanceActivityPercentage?: Maybe<Scalars['String']>;
  /** Number of blocks that should be treated as a group for importance purposes. */
  importanceGrouping?: Maybe<Scalars['String']>;
  /** Initial currency atomic units available in the network. */
  initialCurrencyAtomicUnits?: Maybe<Scalars['String']>;
  /** Maximum future time of a block that can be accepted. */
  maxBlockFutureTime?: Maybe<Scalars['String']>;
  /** Maximum number of blocks to use in a difficulty calculation. */
  maxDifficultyBlocks?: Maybe<Scalars['String']>;
  /** Maximum number of harvesting mosaic atomic units needed for an account to be eligible for harvesting. */
  maxHarvesterBalance?: Maybe<Scalars['String']>;
  /** Maximum atomic units (total-supply * 10 ^ divisibility) of a mosaic allowed in the network. */
  maxMosaicAtomicUnits?: Maybe<Scalars['String']>;
  /** Maximum number of blocks that can be rolled back. */
  maxRollbackBlocks?: Maybe<Scalars['String']>;
  /** Maximum lifetime a transaction can have before it expires. */
  maxTransactionLifetime?: Maybe<Scalars['String']>;
  /** Maximum number of transactions per block. */
  maxTransactionsPerBlock?: Maybe<Scalars['String']>;
  /** Maximum number of finalization rounds for which voting key can be registered. */
  maxVotingKeyLifetime?: Maybe<Scalars['String']>;
  /** Maximum number of voting keys that can be registered at once per account. */
  maxVotingKeysPerAccount?: Maybe<Scalars['String']>;
  /** Minimum number of harvesting mosaic atomic units needed for an account to be eligible for harvesting. */
  minHarvesterBalance?: Maybe<Scalars['String']>;
  /** Minimum number of harvesting mosaic atomic units needed for an account to be eligible for voting. */
  minVoterBalance?: Maybe<Scalars['String']>;
  /** Minimum number of finalization rounds for which voting key can be registered. */
  minVotingKeyLifetime?: Maybe<Scalars['String']>;
  /** Total whole importance units available in the network. */
  totalChainImportance?: Maybe<Scalars['String']>;
};

/** Network related configuration properties. */
export type NetworkPropertiesDto = {
  /** Nemesis epoch time adjustment. */
  epochAdjustment?: Maybe<Scalars['String']>;
  generationHashSeed?: Maybe<Scalars['String']>;
  /** Network identifier. */
  identifier?: Maybe<Scalars['String']>;
  /** Public key. */
  nemesisSignerPublicKey?: Maybe<Scalars['String']>;
  /** Node equality strategy. Defines if the identifier for the node must be its public key or host. */
  nodeEqualityStrategy?: Maybe<NodeIdentityEqualityStrategy>;
};

export enum NodeIdentityEqualityStrategy {
  HOST = 'host',
  PUBLIC_KEY = 'public-key'
}

/** Plugin related configuration properties. */
export type PluginsPropertiesDto = {
  accountlink?: Maybe<AccountKeyLinkNetworkPropertiesDto>;
  aggregate?: Maybe<AggregateNetworkPropertiesDto>;
  lockhash?: Maybe<HashLockNetworkPropertiesDto>;
  locksecret?: Maybe<SecretLockNetworkPropertiesDto>;
  metadata?: Maybe<MetadataNetworkPropertiesDto>;
  mosaic?: Maybe<MosaicNetworkPropertiesDto>;
  multisig?: Maybe<MultisigNetworkPropertiesDto>;
  namespace?: Maybe<NamespaceNetworkPropertiesDto>;
  restrictionaccount?: Maybe<AccountRestrictionNetworkPropertiesDto>;
  restrictionmosaic?: Maybe<MosaicRestrictionNetworkPropertiesDto>;
  transfer?: Maybe<TransferNetworkPropertiesDto>;
};

export type AccountKeyLinkNetworkPropertiesDto = {
  /** to trigger plugin load */
  dummy?: Maybe<Scalars['String']>;
};

export type AggregateNetworkPropertiesDto = {
  /** Set to true if bonded aggregates should be allowed. Set to false if bonded aggregates should be rejected. */
  enableBondedAggregateSupport?: Maybe<Scalars['Boolean']>;
  /** Set to true if cosignatures must exactly match component signers. Set to false if cosignatures should be validated externally. */
  enableStrictCosignatureCheck?: Maybe<Scalars['Boolean']>;
  /** Maximum lifetime a bonded transaction can have before it expires. */
  maxBondedTransactionLifetime?: Maybe<Scalars['String']>;
  /** Maximum number of cosignatures per aggregate. */
  maxCosignaturesPerAggregate?: Maybe<Scalars['String']>;
  /** Maximum number of transactions per aggregate. */
  maxTransactionsPerAggregate?: Maybe<Scalars['String']>;
};

export type HashLockNetworkPropertiesDto = {
  /** Amount that has to be locked per aggregate in partial cache. */
  lockedFundsPerAggregate?: Maybe<Scalars['String']>;
  /** Maximum number of blocks for which a hash lock can exist. */
  maxHashLockDuration?: Maybe<Scalars['String']>;
};

export type SecretLockNetworkPropertiesDto = {
  /** Maximum size of a proof in bytes. */
  maxProofSize?: Maybe<Scalars['String']>;
  /** Maximum number of blocks for which a secret lock can exist. */
  maxSecretLockDuration?: Maybe<Scalars['String']>;
  /** Minimum size of a proof in bytes. */
  minProofSize?: Maybe<Scalars['String']>;
};

export type MetadataNetworkPropertiesDto = {
  /** Maximum metadata value size. */
  maxValueSize?: Maybe<Scalars['String']>;
};

export type MosaicNetworkPropertiesDto = {
  /** Maximum mosaic divisibility. */
  maxMosaicDivisibility?: Maybe<Scalars['String']>;
  /** Maximum mosaic duration. */
  maxMosaicDuration?: Maybe<Scalars['String']>;
  /** Maximum number of mosaics that an account can own. */
  maxMosaicsPerAccount?: Maybe<Scalars['String']>;
  /** Mosaic rental fee. */
  mosaicRentalFee?: Maybe<Scalars['String']>;
  /** Address encoded using a 32-character set. */
  mosaicRentalFeeSinkAddress?: Maybe<Scalars['String']>;
};

export type MultisigNetworkPropertiesDto = {
  /** Maximum number of cosignatories per account. */
  maxCosignatoriesPerAccount?: Maybe<Scalars['String']>;
  /** Maximum number of accounts a single account can cosign. */
  maxCosignedAccountsPerAccount?: Maybe<Scalars['String']>;
  /** Maximum number of multisig levels. */
  maxMultisigDepth?: Maybe<Scalars['String']>;
};

export type NamespaceNetworkPropertiesDto = {
  /** Child namespace rental fee. */
  childNamespaceRentalFee?: Maybe<Scalars['String']>;
  /** Maximum number of children for a root namespace. */
  maxChildNamespaces?: Maybe<Scalars['String']>;
  /** Maximum namespace name size. */
  maxNameSize?: Maybe<Scalars['String']>;
  /** Maximum namespace depth. */
  maxNamespaceDepth?: Maybe<Scalars['String']>;
  /** Maximum namespace duration. */
  maxNamespaceDuration?: Maybe<Scalars['String']>;
  /** Minimum namespace duration. */
  minNamespaceDuration?: Maybe<Scalars['String']>;
  /** Grace period during which time only the previous owner can renew an expired namespace. */
  namespaceGracePeriodDuration?: Maybe<Scalars['String']>;
  /** Address encoded using a 32-character set. */
  namespaceRentalFeeSinkAddress?: Maybe<Scalars['String']>;
  /** Reserved root namespaces that cannot be claimed. */
  reservedRootNamespaceNames?: Maybe<Scalars['String']>;
  /** Root namespace rental fee per block. */
  rootNamespaceRentalFeePerBlock?: Maybe<Scalars['String']>;
};

export type AccountRestrictionNetworkPropertiesDto = {
  /** Maximum number of account restriction values. */
  maxAccountRestrictionValues?: Maybe<Scalars['String']>;
};

export type MosaicRestrictionNetworkPropertiesDto = {
  /** Maximum number of mosaic restriction values. */
  maxMosaicRestrictionValues?: Maybe<Scalars['String']>;
};

export type TransferNetworkPropertiesDto = {
  /** Maximum transaction message size. */
  maxMessageSize?: Maybe<Scalars['String']>;
};

export type NetworkTypeDto = {
  /** A short text describing the network. */
  description: Scalars['String'];
  /** Network name. */
  name: Scalars['String'];
};

export type NodeHealthInfoDto = {
  status: NodeHealthDto;
};

export type NodeHealthDto = {
  apiNode: NodeStatusEnum;
  db: NodeStatusEnum;
};

export enum NodeStatusEnum {
  UP = 'up',
  DOWN = 'down'
}

export type NodeInfoDto = {
  /** Node friendly name. */
  friendlyName: Scalars['String'];
  /** Node IP address. */
  host: Scalars['String'];
  networkGenerationHashSeed: Scalars['String'];
  networkIdentifier: Scalars['Int'];
  /** Public key. */
  nodePublicKey?: Maybe<Scalars['String']>;
  /** Port used for the communication. */
  port: Scalars['Int'];
  /** Public key. */
  publicKey: Scalars['String'];
  /**
   * Role of the node:
   * * 1 - Peer node.
   * * 2 - Api node.
   * * 3 - Peer Api node.
   * * 4 - Voting node.
   * * 5 - Peer Voting node.
   * * 6 - Api Voting node.
   * * 7 - Peer Api Voting node.
   */
  roles: RolesTypeEnum;
  /** Version of the application. */
  version: Scalars['Int'];
};

export enum RolesTypeEnum {
  _1 = 1,
  _2 = 2,
  _3 = 3,
  _4 = 4,
  _5 = 5,
  _6 = 6,
  _7 = 7
}

export type StorageInfoDto = {
  /** Number of accounts created. */
  numAccounts: Scalars['Int'];
  /** Number of blocks stored. */
  numBlocks: Scalars['Int'];
  /** Number of transactions stored. */
  numTransactions: Scalars['Int'];
};

export type NodeTimeDto = {
  communicationTimestamps: CommunicationTimestampsDto;
};

export type CommunicationTimestampsDto = {
  /** Number of seconds elapsed since the creation of the nemesis block. */
  receiveTimestamp?: Maybe<Scalars['String']>;
  /** Number of seconds elapsed since the creation of the nemesis block. */
  sendTimestamp?: Maybe<Scalars['String']>;
};

export type RentalFeesDto = {
  /** Absolute amount. An amount of 123456789 (absolute) for a mosaic with divisibility 6 means 123.456789 (relative). */
  effectiveChildNamespaceRentalFee: Scalars['String'];
  /** Absolute amount. An amount of 123456789 (absolute) for a mosaic with divisibility 6 means 123.456789 (relative). */
  effectiveMosaicRentalFee: Scalars['String'];
  /** Absolute amount. An amount of 123456789 (absolute) for a mosaic with divisibility 6 means 123.456789 (relative). */
  effectiveRootNamespaceRentalFeePerBlock: Scalars['String'];
};

export type SecretLockInfoDto = {
  id: Scalars['String'];
  lock: SecretLockEntryDto;
};

export type SecretLockEntryDto = {
  /** Absolute amount. An amount of 123456789 (absolute) for a mosaic with divisibility 6 means 123.456789 (relative). */
  amount: Scalars['String'];
  compositeHash: Scalars['String'];
  /** Height of the blockchain. */
  endHeight: Scalars['String'];
  /**
   * Algorithm used to hash the proof:
   * * 0 (Op_Sha3_256) - Proof is hashed using SHA3-256.
   * * 1 (Op_Hash_160) - Proof is hashed twice: first with SHA-256 and then with RIPEMD-160 (bitcoin's OP_HASH160).
   * * 2 (Op_Hash_256) - Proof is hashed twice with SHA3-256 (bitcoin's OP_HASH256).
   */
  hashAlgorithm: LockHashAlgorithmEnum;
  /** Mosaic identifier. */
  mosaicId: Scalars['String'];
  /** Address expressed in hexadecimal base. */
  ownerAddress: Scalars['String'];
  /** Address expressed in hexadecimal base. */
  recipientAddress: Scalars['String'];
  /** Secret. */
  secret: Scalars['String'];
  /**
   * Possible status of lock states:
   * * 0 - UNUSED.
   * * 1 - USED.
   */
  status: LockStatus;
  /** The version of the state */
  version: Scalars['Int'];
};

export enum LockHashAlgorithmEnum {
  _0 = 0,
  _1 = 1,
  _2 = 2
}

export type ServerInfoDto = {
  serverInfo: ServerDto;
};

export type ServerDto = {
  /** catapult-rest component version. */
  restVersion: Scalars['String'];
  /** catapult-sdk component version. */
  sdkVersion: Scalars['String'];
};

export type TransactionFeesDto = {
  /** Fee multiplier applied to transactions contained in block. */
  averageFeeMultiplier: Scalars['Float'];
  /** Fee multiplier applied to transactions contained in block. */
  highestFeeMultiplier: Scalars['Float'];
  /** Fee multiplier applied to transactions contained in block. */
  lowestFeeMultiplier: Scalars['Float'];
  /** Fee multiplier applied to transactions contained in block. */
  medianFeeMultiplier: Scalars['Float'];
};

export type TransactionStatusDto = {
  /**
   * List of status errors that can be returned via the status channel after announcing a transaction:
   * * Success
   * * Neutral
   * * Failure
   * * Failure_Core_Past_Deadline - Validation failed because the deadline passed.
   * * Failure_Core_Future_Deadline - Validation failed because the deadline is too far in the future.
   * * Failure_Core_Insufficient_Balance - Validation failed because the account has an insufficient balance.
   * * Failure_Core_Too_Many_Transactions - Validation failed because there are too many transactions in a block.
   * * Failure_Core_Nemesis_Account_Signed_After_Nemesis_Block - Validation failed because an entity originated from the nemesis account after the nemesis block.
   * * Failure_Core_Wrong_Network - Validation failed because the entity has the wrong network specified.
   * * Failure_Core_Invalid_Address - Validation failed because an address is invalid.
   * * Failure_Core_Invalid_Version - Validation failed because entity version is invalid.
   * * Failure_Core_Invalid_Transaction_Fee - Validation failed because a transaction fee is invalid.
   * * Failure_Core_Block_Harvester_Ineligible - Validation failed because a block was harvested by an ineligible harvester.
   * * Failure_Core_Zero_Address - Validation failed because an address is zero.
   * * Failure_Core_Zero_Public_Key - Validation failed because a public key is zero.
   * * Failure_Core_Nonzero_Internal_Padding - Validation failed because internal padding is nonzero.
   * * Failure_Core_Address_Collision - Validation failed because an address collision is detected.
   * * Failure_Core_Importance_Block_Mismatch - Validation failed because the block does not match the schema of an importance block.
   * * Failure_Core_Unexpected_Block_Type - Validation failed because the block type is unexpected.
   * * Failure_Core_Invalid_Link_Action - Validation failed because link action is invalid.
   * * Failure_Core_Link_Already_Exists - Validation failed because main account is already linked to another account.
   * * Failure_Core_Inconsistent_Unlink_Data - Validation failed because unlink data is not consistent with existing account link.
   * * Failure_Core_Invalid_Link_Range - Validation failed because link range is invalid.
   * * Failure_Core_Too_Many_Links - Validation failed because main account has too many links of the specified type.
   * * Failure_Hash_Already_Exists
   * * Failure_Signature_Not_Verifiable - Validation failed because the verification of the signature failed.
   * * Failure_AccountLink_Link_Already_Exists - Validation failed because main account is already linked to another account.
   * * Failure_AccountLink_Inconsistent_Unlink_Data - Validation failed because unlink data is not consistent with existing account link.
   * * Failure_AccountLink_Unknown_Link - Validation failed because main account is not linked to another account.
   * * Failure_AccountLink_Remote_Account_Ineligible - Validation failed because link is attempting to convert ineligible account to remote.
   * * Failure_AccountLink_Remote_Account_Signer_Prohibited - Validation failed because remote is not allowed to sign a transaction.
   * * Failure_AccountLink_Remote_Account_Participant_Prohibited - Validation failed because remote is not allowed to participate in the transaction.
   * * Failure_Aggregate_Too_Many_Transactions - Validation failed because aggregate has too many transactions.
   * * Failure_Aggregate_No_Transactions - Validation failed because aggregate does not have any transactions.
   * * Failure_Aggregate_Too_Many_Cosignatures - Validation failed because aggregate has too many cosignatures.
   * * Failure_Aggregate_Redundant_Cosignatures - Validation failed because redundant cosignatures are present.
   * * Failure_Aggregate_Ineligible_Cosignatories - Validation failed because at least one cosignatory is ineligible.
   * * Failure_Aggregate_Missing_Cosignatures - Validation failed because at least one required cosignature is missing.
   * * Failure_Aggregate_Transactions_Hash_Mismatch - Validation failed because the aggregate transactions hash does not match the calculated value.
   * * Failure_LockHash_Invalid_Mosaic_Id - Validation failed because lock does not allow the specified mosaic.
   * * Failure_LockHash_Invalid_Mosaic_Amount - Validation failed because lock does not allow the specified amount.
   * * Failure_LockHash_Hash_Already_Exists - Validation failed because hash is already present in cache.
   * * Failure_LockHash_Unknown_Hash - Validation failed because hash is not present in cache.
   * * Failure_LockHash_Inactive_Hash - Validation failed because hash is inactive.
   * * Failure_LockHash_Invalid_Duration - Validation failed because duration is too long.
   * * Failure_LockSecret_Invalid_Hash_Algorithm - Validation failed because hash algorithm for lock type secret is invalid.
   * * Failure_LockSecret_Hash_Already_Exists - Validation failed because hash is already present in cache.
   * * Failure_LockSecret_Proof_Size_Out_Of_Bounds - Validation failed because proof is too small or too large.
   * * Failure_LockSecret_Secret_Mismatch - Validation failed because secret does not match proof.
   * * Failure_LockSecret_Unknown_Composite_Key - Validation failed because composite key is unknown.
   * * Failure_LockSecret_Inactive_Secret - Validation failed because secret is inactive.
   * * Failure_LockSecret_Hash_Algorithm_Mismatch - Validation failed because hash algorithm does not match.
   * * Failure_LockSecret_Invalid_Duration - Validation failed because duration is too long.
   * * Failure_Metadata_Value_Too_Small - Validation failed because the metadata value is too small.
   * * Failure_Metadata_Value_Too_Large - Validation failed because the metadata value is too large.
   * * Failure_Metadata_Value_Size_Delta_Too_Large - Validation failed because the metadata value size delta is larger in magnitude than the value size.
   * * Failure_Metadata_Value_Size_Delta_Mismatch - Validation failed because the metadata value size delta does not match expected value based on the current state.
   * * Failure_Metadata_Value_Change_Irreversible - Validation failed because a metadata value change (truncation) is irreversible.
   * * Failure_Mosaic_Invalid_Duration - Validation failed because the duration has an invalid value.
   * * Failure_Mosaic_Invalid_Name - Validation failed because the name is invalid.
   * * Failure_Mosaic_Name_Id_Mismatch - Validation failed because the name and id don't match.
   * * Failure_Mosaic_Expired - Validation failed because the parent is expired.
   * * Failure_Mosaic_Owner_Conflict - Validation failed because the parent owner conflicts with the child owner.
   * * Failure_Mosaic_Id_Mismatch - Validation failed because the id is not the expected id generated from signer and nonce.
   * * Failure_Mosaic_Parent_Id_Conflict - Validation failed because the existing parent id does not match the supplied parent id.
   * * Failure_Mosaic_Invalid_Property - Validation failed because a mosaic property is invalid.
   * * Failure_Mosaic_Invalid_Flags - Validation failed because the mosaic flags are invalid.
   * * Failure_Mosaic_Invalid_Divisibility - Validation failed because the mosaic divisibility is invalid.
   * * Failure_Mosaic_Invalid_Supply_Change_Action - Validation failed because the mosaic supply change action is invalid.
   * * Failure_Mosaic_Invalid_Supply_Change_Amount - Validation failed because the mosaic supply change amount is invalid.
   * * Failure_Mosaic_Invalid_Id - Validation failed because the mosaic id is invalid.
   * * Failure_Mosaic_Modification_Disallowed - Validation failed because mosaic modification is not allowed.
   * * Failure_Mosaic_Modification_No_Changes - Validation failed because mosaic modification would not result in any changes.
   * * Failure_Mosaic_Supply_Immutable - Validation failed because the mosaic supply is immutable.
   * * Failure_Mosaic_Supply_Negative - Validation failed because the resulting mosaic supply is negative.
   * * Failure_Mosaic_Supply_Exceeded - Validation failed because the resulting mosaic supply exceeds the maximum allowed value.
   * * Failure_Mosaic_Non_Transferable - Validation failed because the mosaic is not transferable.
   * * Failure_Mosaic_Max_Mosaics_Exceeded - Validation failed because the credit of the mosaic would exceed the maximum of different mosaics an account is allowed to own.
   * * Failure_Mosaic_Required_Property_Flag_Unset - Validation failed because the mosaic has at least one required property flag unset.
   * * Failure_Multisig_Account_In_Both_Sets - Validation failed because account is specified to be both added and removed.
   * * Failure_Multisig_Multiple_Deletes - Validation failed because multiple removals are present.
   * * Failure_Multisig_Redundant_Modification - Validation failed because a modification is redundant.
   * * Failure_Multisig_Unknown_Multisig_Account - Validation failed because account is not in multisig cache.
   * * Failure_Multisig_Not_A_Cosignatory - Validation failed because account to be removed is not present.
   * * Failure_Multisig_Already_A_Cosignatory - Validation failed because account to be added is already a cosignatory.
   * * Failure_Multisig_Min_Setting_Out_Of_Range - Validation failed because new minimum settings are out of range.
   * * Failure_Multisig_Min_Setting_Larger_Than_Num_Cosignatories - Validation failed because min settings are larger than number of cosignatories.
   * * Failure_Multisig_Invalid_Modification_Action - Validation failed because the modification action is invalid.
   * * Failure_Multisig_Max_Cosigned_Accounts - Validation failed because the cosignatory already cosigns the maximum number of accounts.
   * * Failure_Multisig_Max_Cosignatories - Validation failed because the multisig account already has the maximum number of cosignatories.
   * * Failure_Multisig_Loop - Validation failed because a multisig loop is created.
   * * Failure_Multisig_Max_Multisig_Depth - Validation failed because the max multisig depth is exceeded.
   * * Failure_Multisig_Operation_Prohibited_By_Account - Validation failed because an operation is not permitted by a multisig account.
   * * Failure_Namespace_Invalid_Duration - Validation failed because the duration has an invalid value.
   * * Failure_Namespace_Invalid_Name - Validation failed because the name is invalid.
   * * Failure_Namespace_Name_Id_Mismatch - Validation failed because the name and id don't match.
   * * Failure_Namespace_Expired - Validation failed because the parent is expired.
   * * Failure_Namespace_Owner_Conflict - Validation failed because the parent owner conflicts with the child owner.
   * * Failure_Namespace_Id_Mismatch - Validation failed because the id is not the expected id generated from signer and nonce.
   * * Failure_Namespace_Invalid_Registration_Type - Validation failed because the namespace registration type is invalid.
   * * Failure_Namespace_Root_Name_Reserved - Validation failed because the root namespace has a reserved name.
   * * Failure_Namespace_Too_Deep - Validation failed because the resulting namespace would exceed the maximum allowed namespace depth.
   * * Failure_Namespace_Unknown_Parent - Validation failed because the namespace parent is unknown.
   * * Failure_Namespace_Already_Exists - Validation failed because the namespace already exists.
   * * Failure_Namespace_Already_Active - Validation failed because the namespace is already active.
   * * Failure_Namespace_Eternal_After_Nemesis_Block - Validation failed because an eternal namespace was received after the nemesis block.
   * * Failure_Namespace_Max_Children_Exceeded - Validation failed because the maximum number of children for a root namespace was exceeded.
   * * Failure_Namespace_Alias_Invalid_Action - Validation failed because alias action is invalid.
   * * Failure_Namespace_Unknown - Validation failed because namespace does not exist.
   * * Failure_Namespace_Alias_Already_Exists - Validation failed because namespace is already linked to an alias.
   * * Failure_Namespace_Unknown_Alias - Validation failed because namespace is not linked to an alias.
   * * Failure_Namespace_Alias_Inconsistent_Unlink_Type - Validation failed because unlink type is not consistent with existing alias.
   * * Failure_Namespace_Alias_Inconsistent_Unlink_Data - Validation failed because unlink data is not consistent with existing alias.
   * * Failure_Namespace_Alias_Invalid_Address - Validation failed because aliased address is invalid.
   * * Failure_RestrictionAccount_Invalid_Restriction_Flags - Validation failed because the account restriction flags are invalid.
   * * Failure_RestrictionAccount_Invalid_Modification_Action - Validation failed because a modification action is invalid.
   * * Failure_RestrictionAccount_Invalid_Modification_Address - Validation failed because a modification address is invalid.
   * * Failure_RestrictionAccount_Modification_Operation_Type_Incompatible - Validation failed because the operation type is incompatible. *Note*: This indicates that the existing restrictions have a different operation type than that specified in the notification.
   * * Failure_RestrictionAccount_Redundant_Modification - Validation failed because a modification is redundant.
   * * Failure_RestrictionAccount_Invalid_Modification - Validation failed because a value is not in the container.
   * * Failure_RestrictionAccount_Modification_Count_Exceeded - Validation failed because the transaction has too many modifications.
   * * Failure_RestrictionAccount_No_Modifications - Validation failed because the transaction has no modifications.
   * * Failure_RestrictionAccount_Values_Count_Exceeded - Validation failed because the resulting account restriction has too many values.
   * * Failure_RestrictionAccount_Invalid_Value - Validation failed because the account restriction value is invalid.
   * * Failure_RestrictionAccount_Address_Interaction_Prohibited - Validation failed because the addresses involved in the transaction are not allowed to interact.
   * * Failure_RestrictionAccount_Mosaic_Transfer_Prohibited - Validation failed because the mosaic transfer is prohibited by the recipient.
   * * Failure_RestrictionAccount_Operation_Type_Prohibited - Validation failed because the operation type is not allowed to be initiated by the signer.
   * * Failure_RestrictionMosaic_Invalid_Restriction_Type - Validation failed because the mosaic restriction type is invalid.
   * * Failure_RestrictionMosaic_Previous_Value_Mismatch - Validation failed because specified previous value does not match current value.
   * * Failure_RestrictionMosaic_Previous_Value_Must_Be_Zero - Validation failed because specified previous value is nonzero.
   * * Failure_RestrictionMosaic_Max_Restrictions_Exceeded - Validation failed because the maximum number of restrictions would be exceeded.
   * * Failure_RestrictionMosaic_Cannot_Delete_Nonexistent_Restriction - Validation failed because nonexistent restriction cannot be deleted.
   * * Failure_RestrictionMosaic_Unknown_Global_Restriction - Validation failed because required global restriction does not exist.
   * * Failure_RestrictionMosaic_Invalid_Global_Restriction - Validation failed because mosaic has invalid global restriction.
   * * Failure_RestrictionMosaic_Account_Unauthorized - Validation failed because account lacks proper permissions to move mosaic.
   * * Failure_Transfer_Message_Too_Large - Validation failed because the message is too large.
   * * Failure_Transfer_Out_Of_Order_Mosaics - Validation failed because mosaics are out of order.
   * * Failure_Chain_Unlinked - Validation failed because a block was received that did not link with the existing chain.
   * * Failure_Chain_Block_Not_Hit - Validation failed because a block was received that is not a hit.
   * * Failure_Chain_Block_Inconsistent_State_Hash - Validation failed because a block was received that has an inconsistent state hash.
   * * Failure_Chain_Block_Inconsistent_Receipts_Hash - Validation failed because a block was received that has an inconsistent receipts hash.
   * * Failure_Chain_Block_Invalid_Vrf_Proof - Validation failed because the Vrf proof is invalid.
   * * Failure_Chain_Block_Unknown_Signer - Validation failed because the block signer is unknown.
   * * Failure_Chain_Unconfirmed_Cache_Too_Full - Validation failed because the unconfirmed cache is too full.
   * * Failure_Consumer_Empty_Input - Validation failed because the consumer input is empty.
   * * Failure_Consumer_Block_Transactions_Hash_Mismatch - Validation failed because the block transactions hash does not match the calculated value.
   * * Neutral_Consumer_Hash_In_Recency_Cache - Validation failed because an entity hash is present in the recency cache.
   * * Failure_Consumer_Remote_Chain_Too_Many_Blocks - Validation failed because the chain part has too many blocks.
   * * Failure_Consumer_Remote_Chain_Improper_Link - Validation failed because the chain is internally improperly linked.
   * * Failure_Consumer_Remote_Chain_Duplicate_Transactions - Validation failed because the chain part contains duplicate transactions.
   * * Failure_Consumer_Remote_Chain_Unlinked - Validation failed because the chain part does not link to the current chain.
   * * Failure_Consumer_Remote_Chain_Difficulties_Mismatch - Validation failed because the remote chain difficulties do not match the calculated difficulties.
   * * Failure_Consumer_Remote_Chain_Score_Not_Better - Validation failed because the remote chain score is not better.
   * * Failure_Consumer_Remote_Chain_Too_Far_Behind - Validation failed because the remote chain is too far behind.
   * * Failure_Consumer_Remote_Chain_Too_Far_In_Future - Validation failed because the remote chain timestamp is too far in the future.
   * * Failure_Consumer_Batch_Signature_Not_Verifiable - Validation failed because the verification of the signature failed during a batch operation.
   * * Failure_Consumer_Remote_Chain_Improper_Importance_Link - Validation failed because the remote chain has an improper importance link.
   * * Failure_Extension_Partial_Transaction_Cache_Prune - Validation failed because the partial transaction was pruned from the temporal cache.
   * * Failure_Extension_Partial_Transaction_Dependency_Removed - Validation failed because the partial transaction was pruned from the temporal cache due to its dependency being removed.
   * * Failure_Extension_Read_Rate_Limit_Exceeded - Validation failed because socket read rate limit was exceeded.
   */
  code?: Maybe<TransactionStatusEnum>;
  /** Duration expressed in number of blocks. */
  deadline: Scalars['String'];
  /**
   * A transaction could be classified in the following groups:
   * * Unconfirmed: The transaction reached the P2P network. At this point, it is not guaranteed that the transaction will be included in a block.
   * * Confirmed: The transaction is included in a block.
   * * Partial: The transaction requires to be cosigned by other transaction participants in order to be included in a block.
   * * Failed: The transaction did not pass the network validation, and it was rejected.
   */
  group: TransactionGroupEnum;
  hash: Scalars['String'];
  /** Height of the blockchain. */
  height?: Maybe<Scalars['String']>;
};

export enum TransactionStatusEnum {
  SUCCESS = 'Success',
  NEUTRAL = 'Neutral',
  FAILURE = 'Failure',
  FAILURE_CORE_PAST_DEADLINE = 'Failure_Core_Past_Deadline',
  FAILURE_CORE_FUTURE_DEADLINE = 'Failure_Core_Future_Deadline',
  FAILURE_CORE_INSUFFICIENT_BALANCE = 'Failure_Core_Insufficient_Balance',
  FAILURE_CORE_TOO_MANY_TRANSACTIONS = 'Failure_Core_Too_Many_Transactions',
  FAILURE_CORE_NEMESIS_ACCOUNT_SIGNED_AFTER_NEMESIS_BLOCK = 'Failure_Core_Nemesis_Account_Signed_After_Nemesis_Block',
  FAILURE_CORE_WRONG_NETWORK = 'Failure_Core_Wrong_Network',
  FAILURE_CORE_INVALID_ADDRESS = 'Failure_Core_Invalid_Address',
  FAILURE_CORE_INVALID_VERSION = 'Failure_Core_Invalid_Version',
  FAILURE_CORE_INVALID_TRANSACTION_FEE = 'Failure_Core_Invalid_Transaction_Fee',
  FAILURE_CORE_BLOCK_HARVESTER_INELIGIBLE = 'Failure_Core_Block_Harvester_Ineligible',
  FAILURE_CORE_ZERO_ADDRESS = 'Failure_Core_Zero_Address',
  FAILURE_CORE_ZERO_PUBLIC_KEY = 'Failure_Core_Zero_Public_Key',
  FAILURE_CORE_NONZERO_INTERNAL_PADDING = 'Failure_Core_Nonzero_Internal_Padding',
  FAILURE_CORE_ADDRESS_COLLISION = 'Failure_Core_Address_Collision',
  FAILURE_CORE_IMPORTANCE_BLOCK_MISMATCH = 'Failure_Core_Importance_Block_Mismatch',
  FAILURE_CORE_UNEXPECTED_BLOCK_TYPE = 'Failure_Core_Unexpected_Block_Type',
  FAILURE_CORE_INVALID_LINK_ACTION = 'Failure_Core_Invalid_Link_Action',
  FAILURE_CORE_LINK_ALREADY_EXISTS = 'Failure_Core_Link_Already_Exists',
  FAILURE_CORE_INCONSISTENT_UNLINK_DATA = 'Failure_Core_Inconsistent_Unlink_Data',
  FAILURE_CORE_INVALID_LINK_RANGE = 'Failure_Core_Invalid_Link_Range',
  FAILURE_CORE_TOO_MANY_LINKS = 'Failure_Core_Too_Many_Links',
  FAILURE_HASH_ALREADY_EXISTS = 'Failure_Hash_Already_Exists',
  FAILURE_SIGNATURE_NOT_VERIFIABLE = 'Failure_Signature_Not_Verifiable',
  FAILURE_ACCOUNTLINK_LINK_ALREADY_EXISTS = 'Failure_AccountLink_Link_Already_Exists',
  FAILURE_ACCOUNTLINK_INCONSISTENT_UNLINK_DATA = 'Failure_AccountLink_Inconsistent_Unlink_Data',
  FAILURE_ACCOUNTLINK_UNKNOWN_LINK = 'Failure_AccountLink_Unknown_Link',
  FAILURE_ACCOUNTLINK_REMOTE_ACCOUNT_INELIGIBLE = 'Failure_AccountLink_Remote_Account_Ineligible',
  FAILURE_ACCOUNTLINK_REMOTE_ACCOUNT_SIGNER_PROHIBITED = 'Failure_AccountLink_Remote_Account_Signer_Prohibited',
  FAILURE_ACCOUNTLINK_REMOTE_ACCOUNT_PARTICIPANT_PROHIBITED = 'Failure_AccountLink_Remote_Account_Participant_Prohibited',
  FAILURE_AGGREGATE_TOO_MANY_TRANSACTIONS = 'Failure_Aggregate_Too_Many_Transactions',
  FAILURE_AGGREGATE_NO_TRANSACTIONS = 'Failure_Aggregate_No_Transactions',
  FAILURE_AGGREGATE_TOO_MANY_COSIGNATURES = 'Failure_Aggregate_Too_Many_Cosignatures',
  FAILURE_AGGREGATE_REDUNDANT_COSIGNATURES = 'Failure_Aggregate_Redundant_Cosignatures',
  FAILURE_AGGREGATE_INELIGIBLE_COSIGNATORIES = 'Failure_Aggregate_Ineligible_Cosignatories',
  FAILURE_AGGREGATE_MISSING_COSIGNATURES = 'Failure_Aggregate_Missing_Cosignatures',
  FAILURE_AGGREGATE_TRANSACTIONS_HASH_MISMATCH = 'Failure_Aggregate_Transactions_Hash_Mismatch',
  FAILURE_LOCKHASH_INVALID_MOSAIC_ID = 'Failure_LockHash_Invalid_Mosaic_Id',
  FAILURE_LOCKHASH_INVALID_MOSAIC_AMOUNT = 'Failure_LockHash_Invalid_Mosaic_Amount',
  FAILURE_LOCKHASH_HASH_ALREADY_EXISTS = 'Failure_LockHash_Hash_Already_Exists',
  FAILURE_LOCKHASH_UNKNOWN_HASH = 'Failure_LockHash_Unknown_Hash',
  FAILURE_LOCKHASH_INACTIVE_HASH = 'Failure_LockHash_Inactive_Hash',
  FAILURE_LOCKHASH_INVALID_DURATION = 'Failure_LockHash_Invalid_Duration',
  FAILURE_LOCKSECRET_INVALID_HASH_ALGORITHM = 'Failure_LockSecret_Invalid_Hash_Algorithm',
  FAILURE_LOCKSECRET_HASH_ALREADY_EXISTS = 'Failure_LockSecret_Hash_Already_Exists',
  FAILURE_LOCKSECRET_PROOF_SIZE_OUT_OF_BOUNDS = 'Failure_LockSecret_Proof_Size_Out_Of_Bounds',
  FAILURE_LOCKSECRET_SECRET_MISMATCH = 'Failure_LockSecret_Secret_Mismatch',
  FAILURE_LOCKSECRET_UNKNOWN_COMPOSITE_KEY = 'Failure_LockSecret_Unknown_Composite_Key',
  FAILURE_LOCKSECRET_INACTIVE_SECRET = 'Failure_LockSecret_Inactive_Secret',
  FAILURE_LOCKSECRET_HASH_ALGORITHM_MISMATCH = 'Failure_LockSecret_Hash_Algorithm_Mismatch',
  FAILURE_LOCKSECRET_INVALID_DURATION = 'Failure_LockSecret_Invalid_Duration',
  FAILURE_METADATA_VALUE_TOO_SMALL = 'Failure_Metadata_Value_Too_Small',
  FAILURE_METADATA_VALUE_TOO_LARGE = 'Failure_Metadata_Value_Too_Large',
  FAILURE_METADATA_VALUE_SIZE_DELTA_TOO_LARGE = 'Failure_Metadata_Value_Size_Delta_Too_Large',
  FAILURE_METADATA_VALUE_SIZE_DELTA_MISMATCH = 'Failure_Metadata_Value_Size_Delta_Mismatch',
  FAILURE_METADATA_VALUE_CHANGE_IRREVERSIBLE = 'Failure_Metadata_Value_Change_Irreversible',
  FAILURE_MOSAIC_INVALID_DURATION = 'Failure_Mosaic_Invalid_Duration',
  FAILURE_MOSAIC_INVALID_NAME = 'Failure_Mosaic_Invalid_Name',
  FAILURE_MOSAIC_NAME_ID_MISMATCH = 'Failure_Mosaic_Name_Id_Mismatch',
  FAILURE_MOSAIC_EXPIRED = 'Failure_Mosaic_Expired',
  FAILURE_MOSAIC_OWNER_CONFLICT = 'Failure_Mosaic_Owner_Conflict',
  FAILURE_MOSAIC_ID_MISMATCH = 'Failure_Mosaic_Id_Mismatch',
  FAILURE_MOSAIC_PARENT_ID_CONFLICT = 'Failure_Mosaic_Parent_Id_Conflict',
  FAILURE_MOSAIC_INVALID_PROPERTY = 'Failure_Mosaic_Invalid_Property',
  FAILURE_MOSAIC_INVALID_FLAGS = 'Failure_Mosaic_Invalid_Flags',
  FAILURE_MOSAIC_INVALID_DIVISIBILITY = 'Failure_Mosaic_Invalid_Divisibility',
  FAILURE_MOSAIC_INVALID_SUPPLY_CHANGE_ACTION = 'Failure_Mosaic_Invalid_Supply_Change_Action',
  FAILURE_MOSAIC_INVALID_SUPPLY_CHANGE_AMOUNT = 'Failure_Mosaic_Invalid_Supply_Change_Amount',
  FAILURE_MOSAIC_INVALID_ID = 'Failure_Mosaic_Invalid_Id',
  FAILURE_MOSAIC_MODIFICATION_DISALLOWED = 'Failure_Mosaic_Modification_Disallowed',
  FAILURE_MOSAIC_MODIFICATION_NO_CHANGES = 'Failure_Mosaic_Modification_No_Changes',
  FAILURE_MOSAIC_SUPPLY_IMMUTABLE = 'Failure_Mosaic_Supply_Immutable',
  FAILURE_MOSAIC_SUPPLY_NEGATIVE = 'Failure_Mosaic_Supply_Negative',
  FAILURE_MOSAIC_SUPPLY_EXCEEDED = 'Failure_Mosaic_Supply_Exceeded',
  FAILURE_MOSAIC_NON_TRANSFERABLE = 'Failure_Mosaic_Non_Transferable',
  FAILURE_MOSAIC_MAX_MOSAICS_EXCEEDED = 'Failure_Mosaic_Max_Mosaics_Exceeded',
  FAILURE_MOSAIC_REQUIRED_PROPERTY_FLAG_UNSET = 'Failure_Mosaic_Required_Property_Flag_Unset',
  FAILURE_MULTISIG_ACCOUNT_IN_BOTH_SETS = 'Failure_Multisig_Account_In_Both_Sets',
  FAILURE_MULTISIG_MULTIPLE_DELETES = 'Failure_Multisig_Multiple_Deletes',
  FAILURE_MULTISIG_REDUNDANT_MODIFICATION = 'Failure_Multisig_Redundant_Modification',
  FAILURE_MULTISIG_UNKNOWN_MULTISIG_ACCOUNT = 'Failure_Multisig_Unknown_Multisig_Account',
  FAILURE_MULTISIG_NOT_A_COSIGNATORY = 'Failure_Multisig_Not_A_Cosignatory',
  FAILURE_MULTISIG_ALREADY_A_COSIGNATORY = 'Failure_Multisig_Already_A_Cosignatory',
  FAILURE_MULTISIG_MIN_SETTING_OUT_OF_RANGE = 'Failure_Multisig_Min_Setting_Out_Of_Range',
  FAILURE_MULTISIG_MIN_SETTING_LARGER_THAN_NUM_COSIGNATORIES = 'Failure_Multisig_Min_Setting_Larger_Than_Num_Cosignatories',
  FAILURE_MULTISIG_INVALID_MODIFICATION_ACTION = 'Failure_Multisig_Invalid_Modification_Action',
  FAILURE_MULTISIG_MAX_COSIGNED_ACCOUNTS = 'Failure_Multisig_Max_Cosigned_Accounts',
  FAILURE_MULTISIG_MAX_COSIGNATORIES = 'Failure_Multisig_Max_Cosignatories',
  FAILURE_MULTISIG_LOOP = 'Failure_Multisig_Loop',
  FAILURE_MULTISIG_MAX_MULTISIG_DEPTH = 'Failure_Multisig_Max_Multisig_Depth',
  FAILURE_MULTISIG_OPERATION_PROHIBITED_BY_ACCOUNT = 'Failure_Multisig_Operation_Prohibited_By_Account',
  FAILURE_NAMESPACE_INVALID_DURATION = 'Failure_Namespace_Invalid_Duration',
  FAILURE_NAMESPACE_INVALID_NAME = 'Failure_Namespace_Invalid_Name',
  FAILURE_NAMESPACE_NAME_ID_MISMATCH = 'Failure_Namespace_Name_Id_Mismatch',
  FAILURE_NAMESPACE_EXPIRED = 'Failure_Namespace_Expired',
  FAILURE_NAMESPACE_OWNER_CONFLICT = 'Failure_Namespace_Owner_Conflict',
  FAILURE_NAMESPACE_ID_MISMATCH = 'Failure_Namespace_Id_Mismatch',
  FAILURE_NAMESPACE_INVALID_REGISTRATION_TYPE = 'Failure_Namespace_Invalid_Registration_Type',
  FAILURE_NAMESPACE_ROOT_NAME_RESERVED = 'Failure_Namespace_Root_Name_Reserved',
  FAILURE_NAMESPACE_TOO_DEEP = 'Failure_Namespace_Too_Deep',
  FAILURE_NAMESPACE_UNKNOWN_PARENT = 'Failure_Namespace_Unknown_Parent',
  FAILURE_NAMESPACE_ALREADY_EXISTS = 'Failure_Namespace_Already_Exists',
  FAILURE_NAMESPACE_ALREADY_ACTIVE = 'Failure_Namespace_Already_Active',
  FAILURE_NAMESPACE_ETERNAL_AFTER_NEMESIS_BLOCK = 'Failure_Namespace_Eternal_After_Nemesis_Block',
  FAILURE_NAMESPACE_MAX_CHILDREN_EXCEEDED = 'Failure_Namespace_Max_Children_Exceeded',
  FAILURE_NAMESPACE_ALIAS_INVALID_ACTION = 'Failure_Namespace_Alias_Invalid_Action',
  FAILURE_NAMESPACE_UNKNOWN = 'Failure_Namespace_Unknown',
  FAILURE_NAMESPACE_ALIAS_ALREADY_EXISTS = 'Failure_Namespace_Alias_Already_Exists',
  FAILURE_NAMESPACE_UNKNOWN_ALIAS = 'Failure_Namespace_Unknown_Alias',
  FAILURE_NAMESPACE_ALIAS_INCONSISTENT_UNLINK_TYPE = 'Failure_Namespace_Alias_Inconsistent_Unlink_Type',
  FAILURE_NAMESPACE_ALIAS_INCONSISTENT_UNLINK_DATA = 'Failure_Namespace_Alias_Inconsistent_Unlink_Data',
  FAILURE_NAMESPACE_ALIAS_INVALID_ADDRESS = 'Failure_Namespace_Alias_Invalid_Address',
  FAILURE_RESTRICTIONACCOUNT_INVALID_RESTRICTION_FLAGS = 'Failure_RestrictionAccount_Invalid_Restriction_Flags',
  FAILURE_RESTRICTIONACCOUNT_INVALID_MODIFICATION_ACTION = 'Failure_RestrictionAccount_Invalid_Modification_Action',
  FAILURE_RESTRICTIONACCOUNT_INVALID_MODIFICATION_ADDRESS = 'Failure_RestrictionAccount_Invalid_Modification_Address',
  FAILURE_RESTRICTIONACCOUNT_MODIFICATION_OPERATION_TYPE_INCOMPATIBLE = 'Failure_RestrictionAccount_Modification_Operation_Type_Incompatible',
  FAILURE_RESTRICTIONACCOUNT_REDUNDANT_MODIFICATION = 'Failure_RestrictionAccount_Redundant_Modification',
  FAILURE_RESTRICTIONACCOUNT_INVALID_MODIFICATION = 'Failure_RestrictionAccount_Invalid_Modification',
  FAILURE_RESTRICTIONACCOUNT_MODIFICATION_COUNT_EXCEEDED = 'Failure_RestrictionAccount_Modification_Count_Exceeded',
  FAILURE_RESTRICTIONACCOUNT_NO_MODIFICATIONS = 'Failure_RestrictionAccount_No_Modifications',
  FAILURE_RESTRICTIONACCOUNT_VALUES_COUNT_EXCEEDED = 'Failure_RestrictionAccount_Values_Count_Exceeded',
  FAILURE_RESTRICTIONACCOUNT_INVALID_VALUE = 'Failure_RestrictionAccount_Invalid_Value',
  FAILURE_RESTRICTIONACCOUNT_ADDRESS_INTERACTION_PROHIBITED = 'Failure_RestrictionAccount_Address_Interaction_Prohibited',
  FAILURE_RESTRICTIONACCOUNT_MOSAIC_TRANSFER_PROHIBITED = 'Failure_RestrictionAccount_Mosaic_Transfer_Prohibited',
  FAILURE_RESTRICTIONACCOUNT_OPERATION_TYPE_PROHIBITED = 'Failure_RestrictionAccount_Operation_Type_Prohibited',
  FAILURE_RESTRICTIONMOSAIC_INVALID_RESTRICTION_TYPE = 'Failure_RestrictionMosaic_Invalid_Restriction_Type',
  FAILURE_RESTRICTIONMOSAIC_PREVIOUS_VALUE_MISMATCH = 'Failure_RestrictionMosaic_Previous_Value_Mismatch',
  FAILURE_RESTRICTIONMOSAIC_PREVIOUS_VALUE_MUST_BE_ZERO = 'Failure_RestrictionMosaic_Previous_Value_Must_Be_Zero',
  FAILURE_RESTRICTIONMOSAIC_MAX_RESTRICTIONS_EXCEEDED = 'Failure_RestrictionMosaic_Max_Restrictions_Exceeded',
  FAILURE_RESTRICTIONMOSAIC_CANNOT_DELETE_NONEXISTENT_RESTRICTION = 'Failure_RestrictionMosaic_Cannot_Delete_Nonexistent_Restriction',
  FAILURE_RESTRICTIONMOSAIC_UNKNOWN_GLOBAL_RESTRICTION = 'Failure_RestrictionMosaic_Unknown_Global_Restriction',
  FAILURE_RESTRICTIONMOSAIC_INVALID_GLOBAL_RESTRICTION = 'Failure_RestrictionMosaic_Invalid_Global_Restriction',
  FAILURE_RESTRICTIONMOSAIC_ACCOUNT_UNAUTHORIZED = 'Failure_RestrictionMosaic_Account_Unauthorized',
  FAILURE_TRANSFER_MESSAGE_TOO_LARGE = 'Failure_Transfer_Message_Too_Large',
  FAILURE_TRANSFER_OUT_OF_ORDER_MOSAICS = 'Failure_Transfer_Out_Of_Order_Mosaics',
  FAILURE_CHAIN_UNLINKED = 'Failure_Chain_Unlinked',
  FAILURE_CHAIN_BLOCK_NOT_HIT = 'Failure_Chain_Block_Not_Hit',
  FAILURE_CHAIN_BLOCK_INCONSISTENT_STATE_HASH = 'Failure_Chain_Block_Inconsistent_State_Hash',
  FAILURE_CHAIN_BLOCK_INCONSISTENT_RECEIPTS_HASH = 'Failure_Chain_Block_Inconsistent_Receipts_Hash',
  FAILURE_CHAIN_BLOCK_INVALID_VRF_PROOF = 'Failure_Chain_Block_Invalid_Vrf_Proof',
  FAILURE_CHAIN_BLOCK_UNKNOWN_SIGNER = 'Failure_Chain_Block_Unknown_Signer',
  FAILURE_CHAIN_UNCONFIRMED_CACHE_TOO_FULL = 'Failure_Chain_Unconfirmed_Cache_Too_Full',
  FAILURE_CONSUMER_EMPTY_INPUT = 'Failure_Consumer_Empty_Input',
  FAILURE_CONSUMER_BLOCK_TRANSACTIONS_HASH_MISMATCH = 'Failure_Consumer_Block_Transactions_Hash_Mismatch',
  NEUTRAL_CONSUMER_HASH_IN_RECENCY_CACHE = 'Neutral_Consumer_Hash_In_Recency_Cache',
  FAILURE_CONSUMER_REMOTE_CHAIN_TOO_MANY_BLOCKS = 'Failure_Consumer_Remote_Chain_Too_Many_Blocks',
  FAILURE_CONSUMER_REMOTE_CHAIN_IMPROPER_LINK = 'Failure_Consumer_Remote_Chain_Improper_Link',
  FAILURE_CONSUMER_REMOTE_CHAIN_DUPLICATE_TRANSACTIONS = 'Failure_Consumer_Remote_Chain_Duplicate_Transactions',
  FAILURE_CONSUMER_REMOTE_CHAIN_UNLINKED = 'Failure_Consumer_Remote_Chain_Unlinked',
  FAILURE_CONSUMER_REMOTE_CHAIN_DIFFICULTIES_MISMATCH = 'Failure_Consumer_Remote_Chain_Difficulties_Mismatch',
  FAILURE_CONSUMER_REMOTE_CHAIN_SCORE_NOT_BETTER = 'Failure_Consumer_Remote_Chain_Score_Not_Better',
  FAILURE_CONSUMER_REMOTE_CHAIN_TOO_FAR_BEHIND = 'Failure_Consumer_Remote_Chain_Too_Far_Behind',
  FAILURE_CONSUMER_REMOTE_CHAIN_TOO_FAR_IN_FUTURE = 'Failure_Consumer_Remote_Chain_Too_Far_In_Future',
  FAILURE_CONSUMER_BATCH_SIGNATURE_NOT_VERIFIABLE = 'Failure_Consumer_Batch_Signature_Not_Verifiable',
  FAILURE_CONSUMER_REMOTE_CHAIN_IMPROPER_IMPORTANCE_LINK = 'Failure_Consumer_Remote_Chain_Improper_Importance_Link',
  FAILURE_EXTENSION_PARTIAL_TRANSACTION_CACHE_PRUNE = 'Failure_Extension_Partial_Transaction_Cache_Prune',
  FAILURE_EXTENSION_PARTIAL_TRANSACTION_DEPENDENCY_REMOVED = 'Failure_Extension_Partial_Transaction_Dependency_Removed',
  FAILURE_EXTENSION_READ_RATE_LIMIT_EXCEEDED = 'Failure_Extension_Read_Rate_Limit_Exceeded'
}

export enum TransactionGroupEnum {
  UNCONFIRMED = 'unconfirmed',
  CONFIRMED = 'confirmed',
  FAILED = 'failed',
  PARTIAL = 'partial'
}

export type UnlockedAccountDto = {
  unlockedAccount: Array<Maybe<Scalars['String']>>;
};

export type AccountRestrictionsPage = {
  /** Array of account restrictions. */
  data: Array<Maybe<AccountRestrictionsInfoDto>>;
  pagination: Pagination;
};

export type Pagination = {
  pageNumber: Scalars['Int'];
  pageSize: Scalars['Int'];
};

export enum Order {
  ASC = 'asc',
  DESC = 'desc'
}

export type AccountPage = {
  /** Array of accounts. */
  data: Array<Maybe<AccountInfoDto>>;
  pagination: Pagination;
};

export enum OrderBy {
  ID = 'id',
  BALANCE = 'balance'
}

export type ResolutionStatementPage = {
  /** Array of transaction address resolution statements. */
  data: Array<Maybe<ResolutionStatementInfoDto>>;
  pagination: Pagination;
};

/**
 * A resolution statement keeps the relation between a namespace alias used in a transaction
 * and the real address or mosaicId.
 */
export type ResolutionStatementInfoDto = {
  /** Internal resource identifier. */
  id: Scalars['String'];
  statement: ResolutionStatementDto;
};

export type ResolutionStatementDto = {
  /** Height of the blockchain. */
  height: Scalars['String'];
  /**
   * Array of resolution entries linked to the unresolved namespaceId.
   * It is an array instead of a single resolution entry since
   * within one block the resolution might change for different sources due to alias related transactions.
   */
  resolutionEntries: Array<Maybe<ResolutionEntryDto>>;
  unresolved: Scalars['JSON'];
};

export type ResolutionEntryDto = {
  resolved: Scalars['JSON'];
  /** Transaction that triggered the receipt. */
  source: SourceDto;
};

/** Transaction that triggered the receipt. */
export type SourceDto = {
  /** A number that allows uint 32 values. */
  primaryId: Scalars['Float'];
  /** A number that allows uint 32 values. */
  secondaryId: Scalars['Float'];
};

export type BlockPage = {
  /** Array of blocks. */
  data: Array<Maybe<BlockInfoDto>>;
  pagination: Pagination;
};

export enum OrderBy2 {
  ID = 'id',
  HEIGHT = 'height'
}

export type TransactionPage = {
  /** Array of transactions. */
  data: Array<Maybe<TransactionInfoDto>>;
  pagination: Pagination;
};

export enum TransactionTypeEnum {
  _16716 = 16716,
  _16963 = 16963,
  _16707 = 16707,
  _16972 = 16972,
  _16705 = 16705,
  _16961 = 16961,
  _16717 = 16717,
  _16973 = 16973,
  _16718 = 16718,
  _16974 = 16974,
  _17230 = 17230,
  _16708 = 16708,
  _16964 = 16964,
  _17220 = 17220,
  _16725 = 16725,
  _16712 = 16712,
  _16722 = 16722,
  _16978 = 16978,
  _16720 = 16720,
  _16976 = 16976,
  _17232 = 17232,
  _16721 = 16721,
  _16977 = 16977,
  _16724 = 16724
}

export type HashLockPage = {
  /** Array of hash locks. */
  data: Array<Maybe<HashLockInfoDto>>;
  pagination: Pagination;
};

export type MetadataPage = {
  /** Array of metadata entries. */
  data: Array<Maybe<MetadataInfoDto>>;
  pagination: Pagination;
};

export enum MetadataType {
  _0 = 0,
  _1 = 1,
  _2 = 2
}

export type MosaicRestrictionsPage = {
  /** Array of mosaic restrictions. */
  data: Array<Maybe<Data12ListItem>>;
  pagination: Pagination;
};

export type Data12ListItem = {
  /** Internal resource identifier. */
  id?: Maybe<Scalars['String']>;
  mosaicRestrictionEntry?: Maybe<Scalars['JSON']>;
};

export enum EntryType {
  _0 = 0,
  _1 = 1
}

export type MosaicPage = {
  /** Array of mosaics. */
  data: Array<Maybe<MosaicInfoDto>>;
  pagination: Pagination;
};

export type NamespacePage = {
  /** Array of namespaces. */
  data: Array<Maybe<NamespaceInfoDto>>;
  pagination: Pagination;
};

export enum AliasType {
  _0 = 0,
  _1 = 1,
  _2 = 2
}

export enum RegistrationType {
  _0 = 0,
  _1 = 1
}

export type TransactionStatementPage = {
  /** Array of transaction statements. */
  data: Array<Maybe<TransactionStatementInfoDto>>;
  pagination: Pagination;
};

/** Collection of receipts related to a transaction. */
export type TransactionStatementInfoDto = {
  /** Internal resource identifier. */
  id: Scalars['String'];
  statement: TransactionStatementDto;
};

export type TransactionStatementDto = {
  /** Height of the blockchain. */
  height: Scalars['String'];
  /** Array of receipts. */
  receipts: Array<Maybe<Scalars['JSON']>>;
  /** Transaction that triggered the receipt. */
  source: SourceDto;
};

export enum ReceiptTypeEnum {
  _4685 = 4685,
  _4942 = 4942,
  _8515 = 8515,
  _8776 = 8776,
  _9032 = 9032,
  _8786 = 8786,
  _9042 = 9042,
  _12616 = 12616,
  _12626 = 12626,
  _16717 = 16717,
  _16718 = 16718,
  _16974 = 16974,
  _20803 = 20803,
  _57667 = 57667,
  _61763 = 61763,
  _62019 = 62019
}

export type SecretLockPage = {
  /** Array of secret locks. */
  data: Array<Maybe<SecretLockInfoDto>>;
  pagination: Pagination;
};

export type Mutation = {
  /**
   * Announces a cosignature transaction to the network.
   * 
   * Equivalent to PUT /transactions/cosignature
   */
  announceCosignatureTransaction?: Maybe<AnnounceTransactionInfoDto>;
  /**
   * Announces an aggregate bonded transaction to the network.
   * 
   * Equivalent to PUT /transactions/partial
   */
  announcePartialTransaction?: Maybe<AnnounceTransactionInfoDto>;
  /**
   * Announces a transaction to the network.
   * The [catbuffer library](https://github.com/nemtech/catbuffer) defines the protocol to serialize and deserialize Symbol entities.
   * Catbuffers are integrated into [Symbol SDKs](https://nemtech.github.io/sdk.html).
   * It's recommended to use SDKs instead of calling the API endpoint directly to announce transactions.
   * 
   * 
   * Equivalent to PUT /transactions
   */
  announceTransaction?: Maybe<AnnounceTransactionInfoDto>;
  /**
   * Returns the account information for an array of accounts.
   * 
   * Equivalent to POST /accounts
   */
  getAccountsInfo?: Maybe<Array<Maybe<AccountInfoDto>>>;
  /**
   * Returns friendly names for accounts.
   * 
   * Equivalent to POST /namespaces/account/names
   */
  getAccountsNames?: Maybe<AccountsNamesDto>;
  /**
   * Returns confirmed transactions information for a given array of transactionIds.
   * 
   * Equivalent to POST /transactions/confirmed
   */
  getConfirmedTransactions?: Maybe<Array<Maybe<TransactionInfoDto>>>;
  /**
   * Gets an array of mosaic definition.
   * 
   * Equivalent to POST /mosaics
   */
  getMosaics?: Maybe<Array<Maybe<MosaicInfoDto>>>;
  /**
   * Returns friendly names for mosaics.
   * 
   * Equivalent to POST /namespaces/mosaic/names
   */
  getMosaicsNames?: Maybe<MosaicsNamesDto>;
  /**
   * Returns friendly names for namespaces.
   * 
   * Equivalent to POST /namespaces/names
   */
  getNamespacesNames?: Maybe<Array<Maybe<NamespaceNameDto>>>;
  /**
   * Returns partial transactions information for a given array of transactionIds.
   * 
   * Equivalent to POST /transactions/partial
   */
  getPartialTransactions?: Maybe<Array<Maybe<TransactionInfoDto>>>;
  /**
   * Returns an array of transaction statuses for a given array of transaction hashes.
   * 
   * Equivalent to POST /transactionStatus
   */
  getTransactionStatuses?: Maybe<Array<Maybe<TransactionStatusDto>>>;
  /**
   * Returns unconfirmed transactions information for a given array of transactionIds.
   * 
   * Equivalent to POST /transactions/unconfirmed
   */
  getUnconfirmedTransactions?: Maybe<Array<Maybe<TransactionInfoDto>>>;
};


export type MutationAnnounceCosignatureTransactionArgs = {
  cosignatureInput: CosignatureInput;
};


export type MutationAnnouncePartialTransactionArgs = {
  transactionPayloadInput: TransactionPayloadInput;
};


export type MutationAnnounceTransactionArgs = {
  transactionPayloadInput: TransactionPayloadInput;
};


export type MutationGetAccountsInfoArgs = {
  accountIdsInput?: Maybe<AccountIdsInput>;
  limit?: Maybe<Scalars['Int']>;
};


export type MutationGetAccountsNamesArgs = {
  namespacesAccountNamesInput: NamespacesAccountNamesInput;
};


export type MutationGetConfirmedTransactionsArgs = {
  limit?: Maybe<Scalars['Int']>;
  transactionIdsInput: TransactionIdsInput;
};


export type MutationGetMosaicsArgs = {
  limit?: Maybe<Scalars['Int']>;
  mosaicIdsInput: MosaicIdsInput;
};


export type MutationGetMosaicsNamesArgs = {
  mosaicIdsInput: MosaicIdsInput;
};


export type MutationGetNamespacesNamesArgs = {
  limit?: Maybe<Scalars['Int']>;
  namespaceIdsInput: NamespaceIdsInput;
};


export type MutationGetPartialTransactionsArgs = {
  limit?: Maybe<Scalars['Int']>;
  transactionIdsInput: TransactionIdsInput;
};


export type MutationGetTransactionStatusesArgs = {
  limit?: Maybe<Scalars['Int']>;
  transactionHashesInput: TransactionHashesInput;
};


export type MutationGetUnconfirmedTransactionsArgs = {
  limit?: Maybe<Scalars['Int']>;
  transactionIdsInput: TransactionIdsInput;
};

export type AnnounceTransactionInfoDto = {
  message: Scalars['String'];
};

export type CosignatureInput = {
  parentHash?: Maybe<Scalars['String']>;
  /** Entity's signature generated by the signer. */
  signature?: Maybe<Scalars['String']>;
  /** Public key. */
  signerPublicKey?: Maybe<Scalars['String']>;
  /** Cosignature version. */
  version?: Maybe<Scalars['String']>;
};

export type TransactionPayloadInput = {
  /** Transaction payload. */
  payload?: Maybe<Scalars['String']>;
};

export type AccountIdsInput = {
  /** Array of addresses. */
  addresses?: Maybe<Array<Maybe<Scalars['String']>>>;
  /** Array of public keys. */
  publicKeys?: Maybe<Array<Maybe<Scalars['String']>>>;
};

export type AccountsNamesDto = {
  /** Array of account names. */
  accountNames: Array<Maybe<AccountNamesDto>>;
};

export type AccountNamesDto = {
  /** Address expressed in hexadecimal base. */
  address: Scalars['String'];
  /** Account linked namespace names. */
  names: Array<Maybe<Scalars['String']>>;
};

export type NamespacesAccountNamesInput = {
  /** Array of addresses. */
  addresses?: Maybe<Array<Maybe<Scalars['String']>>>;
};

export type TransactionIdsInput = {
  /** Array of transaction identifiers. */
  transactionIds?: Maybe<Array<Maybe<Scalars['String']>>>;
};

export type MosaicIdsInput = {
  /** Array of mosaic identifiers. */
  mosaicIds?: Maybe<Array<Maybe<Scalars['String']>>>;
};

export type MosaicsNamesDto = {
  /** Array of mosaic names. */
  mosaicNames: Array<Maybe<MosaicNamesDto>>;
};

export type MosaicNamesDto = {
  /** Mosaic identifier. */
  mosaicId: Scalars['String'];
  /** Mosaic linked namespace names. */
  names: Array<Maybe<Scalars['String']>>;
};

export type NamespaceNameDto = {
  /** Namespace identifier. */
  id: Scalars['String'];
  /** Namespace name. */
  name: Scalars['String'];
  /** Namespace identifier. */
  parentId?: Maybe<Scalars['String']>;
};

export type NamespaceIdsInput = {
  /** Array of namespace identifiers. */
  namespaceIds?: Maybe<Array<Maybe<Scalars['String']>>>;
};

export type TransactionHashesInput = {
  /** Array of transaction hashes. */
  hashes?: Maybe<Array<Maybe<Scalars['String']>>>;
};

export type Block = {
  meta?: Maybe<BlockMetaDto>;
  block?: Maybe<BlockDto>;
  signerAccount?: Maybe<AccountInfoDto>;
  beneficiaryAccount?: Maybe<AccountInfoDto>;
  transactions?: Maybe<TransactionPage>;
  statementsResolutionsAddress?: Maybe<ResolutionStatementPage>;
  statementsResolutionsMosaic?: Maybe<ResolutionStatementPage>;
  receipts?: Maybe<TransactionStatementPage>;
};


export type BlockTransactionsArgs = {
  pageInfo?: Maybe<PageInfo>;
};


export type BlockStatementsResolutionsAddressArgs = {
  pageInfo?: Maybe<PageInfo>;
};


export type BlockStatementsResolutionsMosaicArgs = {
  pageInfo?: Maybe<PageInfo>;
};


export type BlockReceiptsArgs = {
  pageInfo?: Maybe<PageInfo>;
};

export type BlockDto = {
  size: Scalars['Int'];
  signature: Scalars['String'];
  signerPublicKey: Scalars['String'];
  version: Scalars['Int'];
  network: Scalars['Int'];
  type: Scalars['Int'];
  height: Scalars['String'];
  timestamp: Scalars['String'];
  difficulty: Scalars['String'];
  proofGamma: Scalars['String'];
  proofVerificationHash: Scalars['String'];
  proofScalar: Scalars['String'];
  previousBlockHash: Scalars['String'];
  transactionsHash: Scalars['String'];
  receiptsHash: Scalars['String'];
  stateHash: Scalars['String'];
  beneficiaryAddress: Scalars['String'];
  feeMultiplier: Scalars['Int'];
  votingEligibleAccountsCount?: Maybe<Scalars['Int']>;
  harvestingEligibleAccountsCount?: Maybe<Scalars['String']>;
  totalVotingBalance?: Maybe<Scalars['String']>;
  previousImportanceBlockHash?: Maybe<Scalars['String']>;
};

export type PageInfo = {
  pageSize?: Maybe<Scalars['Int']>;
  pageNumber?: Maybe<Scalars['Int']>;
};

export type RentalFee = {
  effectiveChildNamespaceRentalFee: Scalars['String'];
  effectiveMosaicRentalFee: Scalars['String'];
  effectiveRootNamespaceRentalFeePerBlock: Scalars['String'];
};

export type WithIndex<TObject> = TObject & Record<string, any>;
export type ResolversObject<TObject> = WithIndex<TObject>;

export type ResolverTypeWrapper<T> = Promise<T> | T;


export type LegacyStitchingResolver<TResult, TParent, TContext, TArgs> = {
  fragment: string;
  resolve: ResolverFn<TResult, TParent, TContext, TArgs>;
};

export type NewStitchingResolver<TResult, TParent, TContext, TArgs> = {
  selectionSet: string;
  resolve: ResolverFn<TResult, TParent, TContext, TArgs>;
};
export type StitchingResolver<TResult, TParent, TContext, TArgs> = LegacyStitchingResolver<TResult, TParent, TContext, TArgs> | NewStitchingResolver<TResult, TParent, TContext, TArgs>;
export type Resolver<TResult, TParent = {}, TContext = {}, TArgs = {}> =
  | ResolverFn<TResult, TParent, TContext, TArgs>
  | StitchingResolver<TResult, TParent, TContext, TArgs>;

export type ResolverFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => Promise<TResult> | TResult;

export type SubscriptionSubscribeFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => AsyncIterator<TResult> | Promise<AsyncIterator<TResult>>;

export type SubscriptionResolveFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => TResult | Promise<TResult>;

export interface SubscriptionSubscriberObject<TResult, TKey extends string, TParent, TContext, TArgs> {
  subscribe: SubscriptionSubscribeFn<{ [key in TKey]: TResult }, TParent, TContext, TArgs>;
  resolve?: SubscriptionResolveFn<TResult, { [key in TKey]: TResult }, TContext, TArgs>;
}

export interface SubscriptionResolverObject<TResult, TParent, TContext, TArgs> {
  subscribe: SubscriptionSubscribeFn<any, TParent, TContext, TArgs>;
  resolve: SubscriptionResolveFn<TResult, any, TContext, TArgs>;
}

export type SubscriptionObject<TResult, TKey extends string, TParent, TContext, TArgs> =
  | SubscriptionSubscriberObject<TResult, TKey, TParent, TContext, TArgs>
  | SubscriptionResolverObject<TResult, TParent, TContext, TArgs>;

export type SubscriptionResolver<TResult, TKey extends string, TParent = {}, TContext = {}, TArgs = {}> =
  | ((...args: any[]) => SubscriptionObject<TResult, TKey, TParent, TContext, TArgs>)
  | SubscriptionObject<TResult, TKey, TParent, TContext, TArgs>;

export type TypeResolveFn<TTypes, TParent = {}, TContext = {}> = (
  parent: TParent,
  context: TContext,
  info: GraphQLResolveInfo
) => Maybe<TTypes> | Promise<Maybe<TTypes>>;

export type IsTypeOfResolverFn<T = {}, TContext = {}> = (obj: T, context: TContext, info: GraphQLResolveInfo) => boolean | Promise<boolean>;

export type NextResolverFn<T> = () => Promise<T>;

export type DirectiveResolverFn<TResult = {}, TParent = {}, TContext = {}, TArgs = {}> = (
  next: NextResolverFn<TResult>,
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => TResult | Promise<TResult>;

/** Mapping between all available schema types and the resolvers types */
export type ResolversTypes = ResolversObject<{
  Query: ResolverTypeWrapper<{}>;
  AccountInfoDTO: ResolverTypeWrapper<AccountInfoDto>;
  AccountDTO: ResolverTypeWrapper<AccountDto>;
  AccountTypeEnum: AccountTypeEnum;
  ActivityBucketDTO: ResolverTypeWrapper<ActivityBucketDto>;
  Float: ResolverTypeWrapper<Scalars['Float']>;
  String: ResolverTypeWrapper<Scalars['String']>;
  Mosaic: ResolverTypeWrapper<Mosaic>;
  SupplementalPublicKeysDTO: ResolverTypeWrapper<SupplementalPublicKeysDto>;
  AccountLinkPublicKeyDTO: ResolverTypeWrapper<AccountLinkPublicKeyDto>;
  AccountLinkVotingKeysDTO: ResolverTypeWrapper<AccountLinkVotingKeysDto>;
  AccountLinkVotingKeyDTO: ResolverTypeWrapper<AccountLinkVotingKeyDto>;
  Int: ResolverTypeWrapper<Scalars['Int']>;
  MerkleStateInfoDTO: ResolverTypeWrapper<MerkleStateInfoDto>;
  TreeListItem: ResolverTypeWrapper<TreeListItem>;
  JSON: ResolverTypeWrapper<Scalars['JSON']>;
  MerkleTreeBranchLinkDTO: ResolverTypeWrapper<MerkleTreeBranchLinkDto>;
  Type: Type;
  MultisigAccountInfoDTO: ResolverTypeWrapper<MultisigAccountInfoDto>;
  MultisigDTO: ResolverTypeWrapper<MultisigDto>;
  MultisigAccountGraphInfoDTO: ResolverTypeWrapper<MultisigAccountGraphInfoDto>;
  AccountRestrictionsInfoDTO: ResolverTypeWrapper<AccountRestrictionsInfoDto>;
  AccountRestrictionsDTO: ResolverTypeWrapper<AccountRestrictionsDto>;
  AccountRestrictionDTO: ResolverTypeWrapper<AccountRestrictionDto>;
  AccountRestrictionFlagsEnum: AccountRestrictionFlagsEnum;
  BlockInfoDTO: ResolverTypeWrapper<BlockInfoDto>;
  BlockMetaDTO: ResolverTypeWrapper<BlockMetaDto>;
  ChainInfoDTO: ResolverTypeWrapper<ChainInfoDto>;
  FinalizedBlockDTO: ResolverTypeWrapper<FinalizedBlockDto>;
  TransactionInfoDTO: ResolverTypeWrapper<TransactionInfoDto>;
  Meta: ResolverTypeWrapper<Meta>;
  FinalizationProofDTO: ResolverTypeWrapper<FinalizationProofDto>;
  MessageGroup: ResolverTypeWrapper<MessageGroup>;
  BmTreeSignature: ResolverTypeWrapper<BmTreeSignature>;
  ParentPublicKeySignaturePair: ResolverTypeWrapper<ParentPublicKeySignaturePair>;
  StageEnum: StageEnum;
  HashLockInfoDTO: ResolverTypeWrapper<HashLockInfoDto>;
  HashLockEntryDTO: ResolverTypeWrapper<HashLockEntryDto>;
  LockStatus: LockStatus;
  MerkleProofInfoDTO: ResolverTypeWrapper<MerkleProofInfoDto>;
  MerklePathItemDTO: ResolverTypeWrapper<MerklePathItemDto>;
  PositionEnum: PositionEnum;
  MetadataInfoDTO: ResolverTypeWrapper<MetadataInfoDto>;
  MetadataEntryDTO: ResolverTypeWrapper<MetadataEntryDto>;
  MetadataTypeEnum: MetadataTypeEnum;
  MosaicInfoDTO: ResolverTypeWrapper<MosaicInfoDto>;
  MosaicDTO: ResolverTypeWrapper<MosaicDto>;
  MosaicRestrictionDTO: ResolverTypeWrapper<MosaicRestrictionDto>;
  NamespaceInfoDTO: ResolverTypeWrapper<NamespaceInfoDto>;
  NamespaceMetaDTO: ResolverTypeWrapper<NamespaceMetaDto>;
  Boolean: ResolverTypeWrapper<Scalars['Boolean']>;
  NamespaceDTO: ResolverTypeWrapper<NamespaceDto>;
  AliasDTO: ResolverTypeWrapper<AliasDto>;
  AliasTypeEnum: AliasTypeEnum;
  NamespaceRegistrationTypeEnum: NamespaceRegistrationTypeEnum;
  NetworkConfigurationDTO: ResolverTypeWrapper<NetworkConfigurationDto>;
  ChainPropertiesDTO: ResolverTypeWrapper<ChainPropertiesDto>;
  NetworkPropertiesDTO: ResolverTypeWrapper<NetworkPropertiesDto>;
  NodeIdentityEqualityStrategy: NodeIdentityEqualityStrategy;
  PluginsPropertiesDTO: ResolverTypeWrapper<PluginsPropertiesDto>;
  AccountKeyLinkNetworkPropertiesDTO: ResolverTypeWrapper<AccountKeyLinkNetworkPropertiesDto>;
  AggregateNetworkPropertiesDTO: ResolverTypeWrapper<AggregateNetworkPropertiesDto>;
  HashLockNetworkPropertiesDTO: ResolverTypeWrapper<HashLockNetworkPropertiesDto>;
  SecretLockNetworkPropertiesDTO: ResolverTypeWrapper<SecretLockNetworkPropertiesDto>;
  MetadataNetworkPropertiesDTO: ResolverTypeWrapper<MetadataNetworkPropertiesDto>;
  MosaicNetworkPropertiesDTO: ResolverTypeWrapper<MosaicNetworkPropertiesDto>;
  MultisigNetworkPropertiesDTO: ResolverTypeWrapper<MultisigNetworkPropertiesDto>;
  NamespaceNetworkPropertiesDTO: ResolverTypeWrapper<NamespaceNetworkPropertiesDto>;
  AccountRestrictionNetworkPropertiesDTO: ResolverTypeWrapper<AccountRestrictionNetworkPropertiesDto>;
  MosaicRestrictionNetworkPropertiesDTO: ResolverTypeWrapper<MosaicRestrictionNetworkPropertiesDto>;
  TransferNetworkPropertiesDTO: ResolverTypeWrapper<TransferNetworkPropertiesDto>;
  NetworkTypeDTO: ResolverTypeWrapper<NetworkTypeDto>;
  NodeHealthInfoDTO: ResolverTypeWrapper<NodeHealthInfoDto>;
  NodeHealthDTO: ResolverTypeWrapper<NodeHealthDto>;
  NodeStatusEnum: NodeStatusEnum;
  NodeInfoDTO: ResolverTypeWrapper<NodeInfoDto>;
  RolesTypeEnum: RolesTypeEnum;
  StorageInfoDTO: ResolverTypeWrapper<StorageInfoDto>;
  NodeTimeDTO: ResolverTypeWrapper<NodeTimeDto>;
  CommunicationTimestampsDTO: ResolverTypeWrapper<CommunicationTimestampsDto>;
  RentalFeesDTO: ResolverTypeWrapper<RentalFeesDto>;
  SecretLockInfoDTO: ResolverTypeWrapper<SecretLockInfoDto>;
  SecretLockEntryDTO: ResolverTypeWrapper<SecretLockEntryDto>;
  LockHashAlgorithmEnum: LockHashAlgorithmEnum;
  ServerInfoDTO: ResolverTypeWrapper<ServerInfoDto>;
  ServerDTO: ResolverTypeWrapper<ServerDto>;
  TransactionFeesDTO: ResolverTypeWrapper<TransactionFeesDto>;
  TransactionStatusDTO: ResolverTypeWrapper<TransactionStatusDto>;
  TransactionStatusEnum: TransactionStatusEnum;
  TransactionGroupEnum: TransactionGroupEnum;
  UnlockedAccountDTO: ResolverTypeWrapper<UnlockedAccountDto>;
  AccountRestrictionsPage: ResolverTypeWrapper<AccountRestrictionsPage>;
  Pagination: ResolverTypeWrapper<Pagination>;
  Order: Order;
  AccountPage: ResolverTypeWrapper<AccountPage>;
  OrderBy: OrderBy;
  ResolutionStatementPage: ResolverTypeWrapper<ResolutionStatementPage>;
  ResolutionStatementInfoDTO: ResolverTypeWrapper<ResolutionStatementInfoDto>;
  ResolutionStatementDTO: ResolverTypeWrapper<ResolutionStatementDto>;
  ResolutionEntryDTO: ResolverTypeWrapper<ResolutionEntryDto>;
  SourceDTO: ResolverTypeWrapper<SourceDto>;
  BlockPage: ResolverTypeWrapper<BlockPage>;
  OrderBy2: OrderBy2;
  TransactionPage: ResolverTypeWrapper<TransactionPage>;
  TransactionTypeEnum: TransactionTypeEnum;
  HashLockPage: ResolverTypeWrapper<HashLockPage>;
  MetadataPage: ResolverTypeWrapper<MetadataPage>;
  MetadataType: MetadataType;
  MosaicRestrictionsPage: ResolverTypeWrapper<MosaicRestrictionsPage>;
  Data12ListItem: ResolverTypeWrapper<Data12ListItem>;
  EntryType: EntryType;
  MosaicPage: ResolverTypeWrapper<MosaicPage>;
  NamespacePage: ResolverTypeWrapper<NamespacePage>;
  AliasType: AliasType;
  RegistrationType: RegistrationType;
  TransactionStatementPage: ResolverTypeWrapper<TransactionStatementPage>;
  TransactionStatementInfoDTO: ResolverTypeWrapper<TransactionStatementInfoDto>;
  TransactionStatementDTO: ResolverTypeWrapper<TransactionStatementDto>;
  ReceiptTypeEnum: ReceiptTypeEnum;
  SecretLockPage: ResolverTypeWrapper<SecretLockPage>;
  Mutation: ResolverTypeWrapper<{}>;
  AnnounceTransactionInfoDTO: ResolverTypeWrapper<AnnounceTransactionInfoDto>;
  CosignatureInput: CosignatureInput;
  TransactionPayloadInput: TransactionPayloadInput;
  AccountIdsInput: AccountIdsInput;
  AccountsNamesDTO: ResolverTypeWrapper<AccountsNamesDto>;
  AccountNamesDTO: ResolverTypeWrapper<AccountNamesDto>;
  NamespacesAccountNamesInput: NamespacesAccountNamesInput;
  TransactionIdsInput: TransactionIdsInput;
  MosaicIdsInput: MosaicIdsInput;
  MosaicsNamesDTO: ResolverTypeWrapper<MosaicsNamesDto>;
  MosaicNamesDTO: ResolverTypeWrapper<MosaicNamesDto>;
  NamespaceNameDTO: ResolverTypeWrapper<NamespaceNameDto>;
  NamespaceIdsInput: NamespaceIdsInput;
  TransactionHashesInput: TransactionHashesInput;
  Block: ResolverTypeWrapper<Block>;
  BlockDTO: ResolverTypeWrapper<BlockDto>;
  pageInfo: PageInfo;
  RentalFee: ResolverTypeWrapper<RentalFee>;
}>;

/** Mapping between all available schema types and the resolvers parents */
export type ResolversParentTypes = ResolversObject<{
  Query: {};
  AccountInfoDTO: AccountInfoDto;
  AccountDTO: AccountDto;
  ActivityBucketDTO: ActivityBucketDto;
  Float: Scalars['Float'];
  String: Scalars['String'];
  Mosaic: Mosaic;
  SupplementalPublicKeysDTO: SupplementalPublicKeysDto;
  AccountLinkPublicKeyDTO: AccountLinkPublicKeyDto;
  AccountLinkVotingKeysDTO: AccountLinkVotingKeysDto;
  AccountLinkVotingKeyDTO: AccountLinkVotingKeyDto;
  Int: Scalars['Int'];
  MerkleStateInfoDTO: MerkleStateInfoDto;
  TreeListItem: TreeListItem;
  JSON: Scalars['JSON'];
  MerkleTreeBranchLinkDTO: MerkleTreeBranchLinkDto;
  MultisigAccountInfoDTO: MultisigAccountInfoDto;
  MultisigDTO: MultisigDto;
  MultisigAccountGraphInfoDTO: MultisigAccountGraphInfoDto;
  AccountRestrictionsInfoDTO: AccountRestrictionsInfoDto;
  AccountRestrictionsDTO: AccountRestrictionsDto;
  AccountRestrictionDTO: AccountRestrictionDto;
  BlockInfoDTO: BlockInfoDto;
  BlockMetaDTO: BlockMetaDto;
  ChainInfoDTO: ChainInfoDto;
  FinalizedBlockDTO: FinalizedBlockDto;
  TransactionInfoDTO: TransactionInfoDto;
  Meta: Meta;
  FinalizationProofDTO: FinalizationProofDto;
  MessageGroup: MessageGroup;
  BmTreeSignature: BmTreeSignature;
  ParentPublicKeySignaturePair: ParentPublicKeySignaturePair;
  HashLockInfoDTO: HashLockInfoDto;
  HashLockEntryDTO: HashLockEntryDto;
  MerkleProofInfoDTO: MerkleProofInfoDto;
  MerklePathItemDTO: MerklePathItemDto;
  MetadataInfoDTO: MetadataInfoDto;
  MetadataEntryDTO: MetadataEntryDto;
  MosaicInfoDTO: MosaicInfoDto;
  MosaicDTO: MosaicDto;
  MosaicRestrictionDTO: MosaicRestrictionDto;
  NamespaceInfoDTO: NamespaceInfoDto;
  NamespaceMetaDTO: NamespaceMetaDto;
  Boolean: Scalars['Boolean'];
  NamespaceDTO: NamespaceDto;
  AliasDTO: AliasDto;
  NetworkConfigurationDTO: NetworkConfigurationDto;
  ChainPropertiesDTO: ChainPropertiesDto;
  NetworkPropertiesDTO: NetworkPropertiesDto;
  PluginsPropertiesDTO: PluginsPropertiesDto;
  AccountKeyLinkNetworkPropertiesDTO: AccountKeyLinkNetworkPropertiesDto;
  AggregateNetworkPropertiesDTO: AggregateNetworkPropertiesDto;
  HashLockNetworkPropertiesDTO: HashLockNetworkPropertiesDto;
  SecretLockNetworkPropertiesDTO: SecretLockNetworkPropertiesDto;
  MetadataNetworkPropertiesDTO: MetadataNetworkPropertiesDto;
  MosaicNetworkPropertiesDTO: MosaicNetworkPropertiesDto;
  MultisigNetworkPropertiesDTO: MultisigNetworkPropertiesDto;
  NamespaceNetworkPropertiesDTO: NamespaceNetworkPropertiesDto;
  AccountRestrictionNetworkPropertiesDTO: AccountRestrictionNetworkPropertiesDto;
  MosaicRestrictionNetworkPropertiesDTO: MosaicRestrictionNetworkPropertiesDto;
  TransferNetworkPropertiesDTO: TransferNetworkPropertiesDto;
  NetworkTypeDTO: NetworkTypeDto;
  NodeHealthInfoDTO: NodeHealthInfoDto;
  NodeHealthDTO: NodeHealthDto;
  NodeInfoDTO: NodeInfoDto;
  StorageInfoDTO: StorageInfoDto;
  NodeTimeDTO: NodeTimeDto;
  CommunicationTimestampsDTO: CommunicationTimestampsDto;
  RentalFeesDTO: RentalFeesDto;
  SecretLockInfoDTO: SecretLockInfoDto;
  SecretLockEntryDTO: SecretLockEntryDto;
  ServerInfoDTO: ServerInfoDto;
  ServerDTO: ServerDto;
  TransactionFeesDTO: TransactionFeesDto;
  TransactionStatusDTO: TransactionStatusDto;
  UnlockedAccountDTO: UnlockedAccountDto;
  AccountRestrictionsPage: AccountRestrictionsPage;
  Pagination: Pagination;
  AccountPage: AccountPage;
  ResolutionStatementPage: ResolutionStatementPage;
  ResolutionStatementInfoDTO: ResolutionStatementInfoDto;
  ResolutionStatementDTO: ResolutionStatementDto;
  ResolutionEntryDTO: ResolutionEntryDto;
  SourceDTO: SourceDto;
  BlockPage: BlockPage;
  TransactionPage: TransactionPage;
  HashLockPage: HashLockPage;
  MetadataPage: MetadataPage;
  MosaicRestrictionsPage: MosaicRestrictionsPage;
  Data12ListItem: Data12ListItem;
  MosaicPage: MosaicPage;
  NamespacePage: NamespacePage;
  TransactionStatementPage: TransactionStatementPage;
  TransactionStatementInfoDTO: TransactionStatementInfoDto;
  TransactionStatementDTO: TransactionStatementDto;
  SecretLockPage: SecretLockPage;
  Mutation: {};
  AnnounceTransactionInfoDTO: AnnounceTransactionInfoDto;
  CosignatureInput: CosignatureInput;
  TransactionPayloadInput: TransactionPayloadInput;
  AccountIdsInput: AccountIdsInput;
  AccountsNamesDTO: AccountsNamesDto;
  AccountNamesDTO: AccountNamesDto;
  NamespacesAccountNamesInput: NamespacesAccountNamesInput;
  TransactionIdsInput: TransactionIdsInput;
  MosaicIdsInput: MosaicIdsInput;
  MosaicsNamesDTO: MosaicsNamesDto;
  MosaicNamesDTO: MosaicNamesDto;
  NamespaceNameDTO: NamespaceNameDto;
  NamespaceIdsInput: NamespaceIdsInput;
  TransactionHashesInput: TransactionHashesInput;
  Block: Block;
  BlockDTO: BlockDto;
  pageInfo: PageInfo;
  RentalFee: RentalFee;
}>;

export type QueryResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['Query'] = ResolversParentTypes['Query']> = ResolversObject<{
  getAccountInfo?: Resolver<Maybe<ResolversTypes['AccountInfoDTO']>, ParentType, ContextType, RequireFields<QueryGetAccountInfoArgs, 'accountId'>>;
  getAccountInfoMerkle?: Resolver<Maybe<ResolversTypes['MerkleStateInfoDTO']>, ParentType, ContextType, RequireFields<QueryGetAccountInfoMerkleArgs, 'accountId'>>;
  getAccountMultisig?: Resolver<Maybe<ResolversTypes['MultisigAccountInfoDTO']>, ParentType, ContextType, RequireFields<QueryGetAccountMultisigArgs, 'address'>>;
  getAccountMultisigGraph?: Resolver<Maybe<Array<Maybe<ResolversTypes['MultisigAccountGraphInfoDTO']>>>, ParentType, ContextType, RequireFields<QueryGetAccountMultisigGraphArgs, 'address'>>;
  getAccountMultisigMerkle?: Resolver<Maybe<ResolversTypes['MerkleStateInfoDTO']>, ParentType, ContextType, RequireFields<QueryGetAccountMultisigMerkleArgs, 'address'>>;
  getAccountRestrictions?: Resolver<Maybe<ResolversTypes['AccountRestrictionsInfoDTO']>, ParentType, ContextType, RequireFields<QueryGetAccountRestrictionsArgs, 'address'>>;
  getAccountRestrictionsMerkle?: Resolver<Maybe<ResolversTypes['MerkleStateInfoDTO']>, ParentType, ContextType, RequireFields<QueryGetAccountRestrictionsMerkleArgs, 'address'>>;
  getBlockByHeight?: Resolver<Maybe<ResolversTypes['BlockInfoDTO']>, ParentType, ContextType, RequireFields<QueryGetBlockByHeightArgs, 'height'>>;
  getChainInfo?: Resolver<Maybe<ResolversTypes['ChainInfoDTO']>, ParentType, ContextType>;
  getConfirmedTransaction?: Resolver<Maybe<ResolversTypes['TransactionInfoDTO']>, ParentType, ContextType, RequireFields<QueryGetConfirmedTransactionArgs, 'transactionId'>>;
  getFinalizationProofAtEpoch?: Resolver<Maybe<ResolversTypes['FinalizationProofDTO']>, ParentType, ContextType, RequireFields<QueryGetFinalizationProofAtEpochArgs, 'epoch'>>;
  getFinalizationProofAtHeight?: Resolver<Maybe<ResolversTypes['FinalizationProofDTO']>, ParentType, ContextType, RequireFields<QueryGetFinalizationProofAtHeightArgs, 'height'>>;
  getHashLock?: Resolver<Maybe<ResolversTypes['HashLockInfoDTO']>, ParentType, ContextType, RequireFields<QueryGetHashLockArgs, 'hash'>>;
  getHashLockMerkle?: Resolver<Maybe<ResolversTypes['MerkleStateInfoDTO']>, ParentType, ContextType, RequireFields<QueryGetHashLockMerkleArgs, 'hash'>>;
  getMerkleReceipts?: Resolver<Maybe<ResolversTypes['MerkleProofInfoDTO']>, ParentType, ContextType, RequireFields<QueryGetMerkleReceiptsArgs, 'hash' | 'height'>>;
  getMerkleTransaction?: Resolver<Maybe<ResolversTypes['MerkleProofInfoDTO']>, ParentType, ContextType, RequireFields<QueryGetMerkleTransactionArgs, 'hash' | 'height'>>;
  getMetadata?: Resolver<Maybe<ResolversTypes['MetadataInfoDTO']>, ParentType, ContextType, RequireFields<QueryGetMetadataArgs, 'compositeHash'>>;
  getMetadataMerkle?: Resolver<Maybe<ResolversTypes['MerkleStateInfoDTO']>, ParentType, ContextType, RequireFields<QueryGetMetadataMerkleArgs, 'compositeHash'>>;
  getMosaic?: Resolver<Maybe<ResolversTypes['MosaicInfoDTO']>, ParentType, ContextType, RequireFields<QueryGetMosaicArgs, 'mosaicId'>>;
  getMosaicMerkle?: Resolver<Maybe<ResolversTypes['MerkleStateInfoDTO']>, ParentType, ContextType, RequireFields<QueryGetMosaicMerkleArgs, 'mosaicId'>>;
  getMosaicRestrictions?: Resolver<Maybe<ResolversTypes['MosaicRestrictionDTO']>, ParentType, ContextType, RequireFields<QueryGetMosaicRestrictionsArgs, 'compositeHash'>>;
  getMosaicRestrictionsMerkle?: Resolver<Maybe<ResolversTypes['MerkleStateInfoDTO']>, ParentType, ContextType, RequireFields<QueryGetMosaicRestrictionsMerkleArgs, 'compositeHash'>>;
  getNamespace?: Resolver<Maybe<ResolversTypes['NamespaceInfoDTO']>, ParentType, ContextType, RequireFields<QueryGetNamespaceArgs, 'namespaceId'>>;
  getNamespaceMerkle?: Resolver<Maybe<ResolversTypes['MerkleStateInfoDTO']>, ParentType, ContextType, RequireFields<QueryGetNamespaceMerkleArgs, 'namespaceId'>>;
  getNetworkProperties?: Resolver<Maybe<ResolversTypes['NetworkConfigurationDTO']>, ParentType, ContextType>;
  getNetworkType?: Resolver<Maybe<ResolversTypes['NetworkTypeDTO']>, ParentType, ContextType>;
  getNodeHealth?: Resolver<Maybe<ResolversTypes['NodeHealthInfoDTO']>, ParentType, ContextType>;
  getNodeInfo?: Resolver<Maybe<ResolversTypes['NodeInfoDTO']>, ParentType, ContextType>;
  getNodePeers?: Resolver<Maybe<Array<Maybe<ResolversTypes['NodeInfoDTO']>>>, ParentType, ContextType, RequireFields<QueryGetNodePeersArgs, never>>;
  getNodeStorage?: Resolver<Maybe<ResolversTypes['StorageInfoDTO']>, ParentType, ContextType>;
  getNodeTime?: Resolver<Maybe<ResolversTypes['NodeTimeDTO']>, ParentType, ContextType>;
  getPartialTransaction?: Resolver<Maybe<ResolversTypes['TransactionInfoDTO']>, ParentType, ContextType, RequireFields<QueryGetPartialTransactionArgs, 'transactionId'>>;
  getRentalFees?: Resolver<Maybe<ResolversTypes['RentalFeesDTO']>, ParentType, ContextType>;
  getSecretLock?: Resolver<Maybe<ResolversTypes['SecretLockInfoDTO']>, ParentType, ContextType, RequireFields<QueryGetSecretLockArgs, 'compositeHash'>>;
  getSecretLockMerkle?: Resolver<Maybe<ResolversTypes['MerkleStateInfoDTO']>, ParentType, ContextType, RequireFields<QueryGetSecretLockMerkleArgs, 'compositeHash'>>;
  getServerInfo?: Resolver<Maybe<ResolversTypes['ServerInfoDTO']>, ParentType, ContextType>;
  getTransactionFees?: Resolver<Maybe<ResolversTypes['TransactionFeesDTO']>, ParentType, ContextType>;
  getTransactionStatus?: Resolver<Maybe<ResolversTypes['TransactionStatusDTO']>, ParentType, ContextType, RequireFields<QueryGetTransactionStatusArgs, 'hash'>>;
  getUnconfirmedTransaction?: Resolver<Maybe<ResolversTypes['TransactionInfoDTO']>, ParentType, ContextType, RequireFields<QueryGetUnconfirmedTransactionArgs, 'transactionId'>>;
  getUnlockedAccount?: Resolver<Maybe<ResolversTypes['UnlockedAccountDTO']>, ParentType, ContextType>;
  searchAccountRestrictions?: Resolver<Maybe<ResolversTypes['AccountRestrictionsPage']>, ParentType, ContextType, RequireFields<QuerySearchAccountRestrictionsArgs, never>>;
  searchAccounts?: Resolver<Maybe<ResolversTypes['AccountPage']>, ParentType, ContextType, RequireFields<QuerySearchAccountsArgs, never>>;
  searchAddressResolutionStatements?: Resolver<Maybe<ResolversTypes['ResolutionStatementPage']>, ParentType, ContextType, RequireFields<QuerySearchAddressResolutionStatementsArgs, never>>;
  searchBlocks?: Resolver<Maybe<ResolversTypes['BlockPage']>, ParentType, ContextType, RequireFields<QuerySearchBlocksArgs, never>>;
  searchConfirmedTransactions?: Resolver<Maybe<ResolversTypes['TransactionPage']>, ParentType, ContextType, RequireFields<QuerySearchConfirmedTransactionsArgs, never>>;
  searchHashLock?: Resolver<Maybe<ResolversTypes['HashLockPage']>, ParentType, ContextType, RequireFields<QuerySearchHashLockArgs, never>>;
  searchMetadataEntries?: Resolver<Maybe<ResolversTypes['MetadataPage']>, ParentType, ContextType, RequireFields<QuerySearchMetadataEntriesArgs, never>>;
  searchMosaicResolutionStatements?: Resolver<Maybe<ResolversTypes['ResolutionStatementPage']>, ParentType, ContextType, RequireFields<QuerySearchMosaicResolutionStatementsArgs, never>>;
  searchMosaicRestrictions?: Resolver<Maybe<ResolversTypes['MosaicRestrictionsPage']>, ParentType, ContextType, RequireFields<QuerySearchMosaicRestrictionsArgs, never>>;
  searchMosaics?: Resolver<Maybe<ResolversTypes['MosaicPage']>, ParentType, ContextType, RequireFields<QuerySearchMosaicsArgs, never>>;
  searchNamespaces?: Resolver<Maybe<ResolversTypes['NamespacePage']>, ParentType, ContextType, RequireFields<QuerySearchNamespacesArgs, never>>;
  searchPartialTransactions?: Resolver<Maybe<ResolversTypes['TransactionPage']>, ParentType, ContextType, RequireFields<QuerySearchPartialTransactionsArgs, never>>;
  searchReceipts?: Resolver<Maybe<ResolversTypes['TransactionStatementPage']>, ParentType, ContextType, RequireFields<QuerySearchReceiptsArgs, never>>;
  searchSecretLock?: Resolver<Maybe<ResolversTypes['SecretLockPage']>, ParentType, ContextType, RequireFields<QuerySearchSecretLockArgs, never>>;
  searchUnconfirmedTransactions?: Resolver<Maybe<ResolversTypes['TransactionPage']>, ParentType, ContextType, RequireFields<QuerySearchUnconfirmedTransactionsArgs, never>>;
  block?: Resolver<Maybe<ResolversTypes['Block']>, ParentType, ContextType, RequireFields<QueryBlockArgs, 'height'>>;
}>;

export type AccountInfoDtoResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['AccountInfoDTO'] = ResolversParentTypes['AccountInfoDTO']> = ResolversObject<{
  account?: Resolver<ResolversTypes['AccountDTO'], ParentType, ContextType>;
  id?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type AccountDtoResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['AccountDTO'] = ResolversParentTypes['AccountDTO']> = ResolversObject<{
  accountType?: Resolver<ResolversTypes['AccountTypeEnum'], ParentType, ContextType>;
  activityBuckets?: Resolver<Array<Maybe<ResolversTypes['ActivityBucketDTO']>>, ParentType, ContextType>;
  address?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  addressHeight?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  importance?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  importanceHeight?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  mosaics?: Resolver<Array<Maybe<ResolversTypes['Mosaic']>>, ParentType, ContextType>;
  publicKey?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  publicKeyHeight?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  supplementalPublicKeys?: Resolver<ResolversTypes['SupplementalPublicKeysDTO'], ParentType, ContextType>;
  version?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type AccountTypeEnumResolvers = { _0: 'undefined', _1: 1, _2: 2, _3: 3 };

export type ActivityBucketDtoResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['ActivityBucketDTO'] = ResolversParentTypes['ActivityBucketDTO']> = ResolversObject<{
  beneficiaryCount?: Resolver<ResolversTypes['Float'], ParentType, ContextType>;
  rawScore?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  startHeight?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  totalFeesPaid?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type MosaicResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['Mosaic'] = ResolversParentTypes['Mosaic']> = ResolversObject<{
  amount?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  id?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type SupplementalPublicKeysDtoResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['SupplementalPublicKeysDTO'] = ResolversParentTypes['SupplementalPublicKeysDTO']> = ResolversObject<{
  linked?: Resolver<Maybe<ResolversTypes['AccountLinkPublicKeyDTO']>, ParentType, ContextType>;
  node?: Resolver<Maybe<ResolversTypes['AccountLinkPublicKeyDTO']>, ParentType, ContextType>;
  voting?: Resolver<Maybe<ResolversTypes['AccountLinkVotingKeysDTO']>, ParentType, ContextType>;
  vrf?: Resolver<Maybe<ResolversTypes['AccountLinkPublicKeyDTO']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type AccountLinkPublicKeyDtoResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['AccountLinkPublicKeyDTO'] = ResolversParentTypes['AccountLinkPublicKeyDTO']> = ResolversObject<{
  publicKey?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type AccountLinkVotingKeysDtoResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['AccountLinkVotingKeysDTO'] = ResolversParentTypes['AccountLinkVotingKeysDTO']> = ResolversObject<{
  publicKeys?: Resolver<Array<Maybe<ResolversTypes['AccountLinkVotingKeyDTO']>>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type AccountLinkVotingKeyDtoResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['AccountLinkVotingKeyDTO'] = ResolversParentTypes['AccountLinkVotingKeyDTO']> = ResolversObject<{
  endEpoch?: Resolver<ResolversTypes['Float'], ParentType, ContextType>;
  publicKey?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  startEpoch?: Resolver<ResolversTypes['Float'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type MerkleStateInfoDtoResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['MerkleStateInfoDTO'] = ResolversParentTypes['MerkleStateInfoDTO']> = ResolversObject<{
  raw?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  tree?: Resolver<Array<Maybe<ResolversTypes['TreeListItem']>>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type TreeListItemResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['TreeListItem'] = ResolversParentTypes['TreeListItem']> = ResolversObject<{
  branchHash?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  encodedPath?: Resolver<Maybe<ResolversTypes['JSON']>, ParentType, ContextType>;
  leafHash?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  linkMask?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  links?: Resolver<Maybe<Array<Maybe<ResolversTypes['MerkleTreeBranchLinkDTO']>>>, ParentType, ContextType>;
  nibbleCount?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  path?: Resolver<Maybe<ResolversTypes['JSON']>, ParentType, ContextType>;
  type?: Resolver<Maybe<ResolversTypes['Type']>, ParentType, ContextType>;
  value?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export interface JsonScalarConfig extends GraphQLScalarTypeConfig<ResolversTypes['JSON'], any> {
  name: 'JSON';
}

export type MerkleTreeBranchLinkDtoResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['MerkleTreeBranchLinkDTO'] = ResolversParentTypes['MerkleTreeBranchLinkDTO']> = ResolversObject<{
  bit?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  link?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type TypeResolvers = { _0: 'undefined', _255: 255 };

export type MultisigAccountInfoDtoResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['MultisigAccountInfoDTO'] = ResolversParentTypes['MultisigAccountInfoDTO']> = ResolversObject<{
  multisig?: Resolver<ResolversTypes['MultisigDTO'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type MultisigDtoResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['MultisigDTO'] = ResolversParentTypes['MultisigDTO']> = ResolversObject<{
  accountAddress?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  cosignatoryAddresses?: Resolver<Array<Maybe<ResolversTypes['String']>>, ParentType, ContextType>;
  minApproval?: Resolver<ResolversTypes['Float'], ParentType, ContextType>;
  minRemoval?: Resolver<ResolversTypes['Float'], ParentType, ContextType>;
  multisigAddresses?: Resolver<Array<Maybe<ResolversTypes['String']>>, ParentType, ContextType>;
  version?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type MultisigAccountGraphInfoDtoResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['MultisigAccountGraphInfoDTO'] = ResolversParentTypes['MultisigAccountGraphInfoDTO']> = ResolversObject<{
  level?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  multisigEntries?: Resolver<Array<Maybe<ResolversTypes['MultisigAccountInfoDTO']>>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type AccountRestrictionsInfoDtoResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['AccountRestrictionsInfoDTO'] = ResolversParentTypes['AccountRestrictionsInfoDTO']> = ResolversObject<{
  accountRestrictions?: Resolver<ResolversTypes['AccountRestrictionsDTO'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type AccountRestrictionsDtoResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['AccountRestrictionsDTO'] = ResolversParentTypes['AccountRestrictionsDTO']> = ResolversObject<{
  address?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  restrictions?: Resolver<Array<Maybe<ResolversTypes['AccountRestrictionDTO']>>, ParentType, ContextType>;
  version?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type AccountRestrictionDtoResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['AccountRestrictionDTO'] = ResolversParentTypes['AccountRestrictionDTO']> = ResolversObject<{
  restrictionFlags?: Resolver<ResolversTypes['AccountRestrictionFlagsEnum'], ParentType, ContextType>;
  values?: Resolver<Array<Maybe<ResolversTypes['JSON']>>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type AccountRestrictionFlagsEnumResolvers = { _1: 1, _2: 2, _16385: 16385, _16388: 16388, _32769: 32769, _32770: 32770, _49153: 49153, _49156: 49156 };

export type BlockInfoDtoResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['BlockInfoDTO'] = ResolversParentTypes['BlockInfoDTO']> = ResolversObject<{
  block?: Resolver<ResolversTypes['JSON'], ParentType, ContextType>;
  id?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  meta?: Resolver<ResolversTypes['BlockMetaDTO'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type BlockMetaDtoResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['BlockMetaDTO'] = ResolversParentTypes['BlockMetaDTO']> = ResolversObject<{
  generationHash?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  hash?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  stateHashSubCacheMerkleRoots?: Resolver<Array<Maybe<ResolversTypes['String']>>, ParentType, ContextType>;
  statementsCount?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  totalFee?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  totalTransactionsCount?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  transactionsCount?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type ChainInfoDtoResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['ChainInfoDTO'] = ResolversParentTypes['ChainInfoDTO']> = ResolversObject<{
  height?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  latestFinalizedBlock?: Resolver<ResolversTypes['FinalizedBlockDTO'], ParentType, ContextType>;
  scoreHigh?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  scoreLow?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type FinalizedBlockDtoResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['FinalizedBlockDTO'] = ResolversParentTypes['FinalizedBlockDTO']> = ResolversObject<{
  finalizationEpoch?: Resolver<ResolversTypes['Float'], ParentType, ContextType>;
  finalizationPoint?: Resolver<ResolversTypes['Float'], ParentType, ContextType>;
  hash?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  height?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type TransactionInfoDtoResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['TransactionInfoDTO'] = ResolversParentTypes['TransactionInfoDTO']> = ResolversObject<{
  id?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  meta?: Resolver<ResolversTypes['Meta'], ParentType, ContextType>;
  transaction?: Resolver<ResolversTypes['JSON'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type MetaResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['Meta'] = ResolversParentTypes['Meta']> = ResolversObject<{
  aggregateHash?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  aggregateId?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  hash?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  height?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  index?: Resolver<Maybe<ResolversTypes['JSON']>, ParentType, ContextType>;
  merkleComponentHash?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type FinalizationProofDtoResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['FinalizationProofDTO'] = ResolversParentTypes['FinalizationProofDTO']> = ResolversObject<{
  finalizationEpoch?: Resolver<ResolversTypes['Float'], ParentType, ContextType>;
  finalizationPoint?: Resolver<ResolversTypes['Float'], ParentType, ContextType>;
  hash?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  height?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  messageGroups?: Resolver<Array<Maybe<ResolversTypes['MessageGroup']>>, ParentType, ContextType>;
  version?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type MessageGroupResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['MessageGroup'] = ResolversParentTypes['MessageGroup']> = ResolversObject<{
  hashes?: Resolver<Array<Maybe<ResolversTypes['String']>>, ParentType, ContextType>;
  height?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  signatures?: Resolver<Array<Maybe<ResolversTypes['BmTreeSignature']>>, ParentType, ContextType>;
  stage?: Resolver<ResolversTypes['StageEnum'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type BmTreeSignatureResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['BmTreeSignature'] = ResolversParentTypes['BmTreeSignature']> = ResolversObject<{
  bottom?: Resolver<ResolversTypes['ParentPublicKeySignaturePair'], ParentType, ContextType>;
  root?: Resolver<ResolversTypes['ParentPublicKeySignaturePair'], ParentType, ContextType>;
  top?: Resolver<ResolversTypes['ParentPublicKeySignaturePair'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type ParentPublicKeySignaturePairResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['ParentPublicKeySignaturePair'] = ResolversParentTypes['ParentPublicKeySignaturePair']> = ResolversObject<{
  parentPublicKey?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  signature?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type StageEnumResolvers = { _0: 'undefined', _1: 1, _2: 2 };

export type HashLockInfoDtoResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['HashLockInfoDTO'] = ResolversParentTypes['HashLockInfoDTO']> = ResolversObject<{
  id?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  lock?: Resolver<ResolversTypes['HashLockEntryDTO'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type HashLockEntryDtoResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['HashLockEntryDTO'] = ResolversParentTypes['HashLockEntryDTO']> = ResolversObject<{
  amount?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  endHeight?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  hash?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  mosaicId?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  ownerAddress?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  status?: Resolver<ResolversTypes['LockStatus'], ParentType, ContextType>;
  version?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type LockStatusResolvers = { _0: 'undefined', _1: 1 };

export type MerkleProofInfoDtoResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['MerkleProofInfoDTO'] = ResolversParentTypes['MerkleProofInfoDTO']> = ResolversObject<{
  merklePath?: Resolver<Maybe<Array<Maybe<ResolversTypes['MerklePathItemDTO']>>>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type MerklePathItemDtoResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['MerklePathItemDTO'] = ResolversParentTypes['MerklePathItemDTO']> = ResolversObject<{
  hash?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  position?: Resolver<Maybe<ResolversTypes['PositionEnum']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type PositionEnumResolvers = { LEFT: 'left', RIGHT: 'right' };

export type MetadataInfoDtoResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['MetadataInfoDTO'] = ResolversParentTypes['MetadataInfoDTO']> = ResolversObject<{
  id?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  metadataEntry?: Resolver<ResolversTypes['MetadataEntryDTO'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type MetadataEntryDtoResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['MetadataEntryDTO'] = ResolversParentTypes['MetadataEntryDTO']> = ResolversObject<{
  compositeHash?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  metadataType?: Resolver<ResolversTypes['MetadataTypeEnum'], ParentType, ContextType>;
  scopedMetadataKey?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  sourceAddress?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  targetAddress?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  targetId?: Resolver<Maybe<ResolversTypes['JSON']>, ParentType, ContextType>;
  value?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  version?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type MetadataTypeEnumResolvers = { _0: 'undefined', _1: 1, _2: 2 };

export type MosaicInfoDtoResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['MosaicInfoDTO'] = ResolversParentTypes['MosaicInfoDTO']> = ResolversObject<{
  id?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  mosaic?: Resolver<ResolversTypes['MosaicDTO'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type MosaicDtoResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['MosaicDTO'] = ResolversParentTypes['MosaicDTO']> = ResolversObject<{
  divisibility?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  duration?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  flags?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  id?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  ownerAddress?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  revision?: Resolver<ResolversTypes['Float'], ParentType, ContextType>;
  startHeight?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  supply?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  version?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type MosaicRestrictionDtoResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['MosaicRestrictionDTO'] = ResolversParentTypes['MosaicRestrictionDTO']> = ResolversObject<{
  id?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  mosaicRestrictionEntry?: Resolver<Maybe<ResolversTypes['JSON']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type NamespaceInfoDtoResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['NamespaceInfoDTO'] = ResolversParentTypes['NamespaceInfoDTO']> = ResolversObject<{
  id?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  meta?: Resolver<ResolversTypes['NamespaceMetaDTO'], ParentType, ContextType>;
  namespace?: Resolver<ResolversTypes['NamespaceDTO'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type NamespaceMetaDtoResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['NamespaceMetaDTO'] = ResolversParentTypes['NamespaceMetaDTO']> = ResolversObject<{
  active?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  index?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type NamespaceDtoResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['NamespaceDTO'] = ResolversParentTypes['NamespaceDTO']> = ResolversObject<{
  alias?: Resolver<ResolversTypes['AliasDTO'], ParentType, ContextType>;
  depth?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  endHeight?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  level0?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  level1?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  level2?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  ownerAddress?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  parentId?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  registrationType?: Resolver<ResolversTypes['NamespaceRegistrationTypeEnum'], ParentType, ContextType>;
  startHeight?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  version?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type AliasDtoResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['AliasDTO'] = ResolversParentTypes['AliasDTO']> = ResolversObject<{
  address?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  mosaicId?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  type?: Resolver<ResolversTypes['AliasTypeEnum'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type AliasTypeEnumResolvers = { _0: 'undefined', _1: 1, _2: 2 };

export type NamespaceRegistrationTypeEnumResolvers = { _0: 'undefined', _1: 1 };

export type NetworkConfigurationDtoResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['NetworkConfigurationDTO'] = ResolversParentTypes['NetworkConfigurationDTO']> = ResolversObject<{
  chain?: Resolver<ResolversTypes['ChainPropertiesDTO'], ParentType, ContextType>;
  network?: Resolver<ResolversTypes['NetworkPropertiesDTO'], ParentType, ContextType>;
  plugins?: Resolver<ResolversTypes['PluginsPropertiesDTO'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type ChainPropertiesDtoResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['ChainPropertiesDTO'] = ResolversParentTypes['ChainPropertiesDTO']> = ResolversObject<{
  blockFinalizationInterval?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  blockGenerationTargetTime?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  blockPruneInterval?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  blockTimeSmoothingFactor?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  currencyMosaicId?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  defaultDynamicFeeMultiplier?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  enableVerifiableReceipts?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
  enableVerifiableState?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
  harvestBeneficiaryPercentage?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  harvestNetworkFeeSinkAddress?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  harvestNetworkPercentage?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  harvestingMosaicId?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  importanceActivityPercentage?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  importanceGrouping?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  initialCurrencyAtomicUnits?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  maxBlockFutureTime?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  maxDifficultyBlocks?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  maxHarvesterBalance?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  maxMosaicAtomicUnits?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  maxRollbackBlocks?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  maxTransactionLifetime?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  maxTransactionsPerBlock?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  maxVotingKeyLifetime?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  maxVotingKeysPerAccount?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  minHarvesterBalance?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  minVoterBalance?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  minVotingKeyLifetime?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  totalChainImportance?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type NetworkPropertiesDtoResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['NetworkPropertiesDTO'] = ResolversParentTypes['NetworkPropertiesDTO']> = ResolversObject<{
  epochAdjustment?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  generationHashSeed?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  identifier?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  nemesisSignerPublicKey?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  nodeEqualityStrategy?: Resolver<Maybe<ResolversTypes['NodeIdentityEqualityStrategy']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type NodeIdentityEqualityStrategyResolvers = { HOST: 'host', PUBLIC_KEY: 'public-key' };

export type PluginsPropertiesDtoResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['PluginsPropertiesDTO'] = ResolversParentTypes['PluginsPropertiesDTO']> = ResolversObject<{
  accountlink?: Resolver<Maybe<ResolversTypes['AccountKeyLinkNetworkPropertiesDTO']>, ParentType, ContextType>;
  aggregate?: Resolver<Maybe<ResolversTypes['AggregateNetworkPropertiesDTO']>, ParentType, ContextType>;
  lockhash?: Resolver<Maybe<ResolversTypes['HashLockNetworkPropertiesDTO']>, ParentType, ContextType>;
  locksecret?: Resolver<Maybe<ResolversTypes['SecretLockNetworkPropertiesDTO']>, ParentType, ContextType>;
  metadata?: Resolver<Maybe<ResolversTypes['MetadataNetworkPropertiesDTO']>, ParentType, ContextType>;
  mosaic?: Resolver<Maybe<ResolversTypes['MosaicNetworkPropertiesDTO']>, ParentType, ContextType>;
  multisig?: Resolver<Maybe<ResolversTypes['MultisigNetworkPropertiesDTO']>, ParentType, ContextType>;
  namespace?: Resolver<Maybe<ResolversTypes['NamespaceNetworkPropertiesDTO']>, ParentType, ContextType>;
  restrictionaccount?: Resolver<Maybe<ResolversTypes['AccountRestrictionNetworkPropertiesDTO']>, ParentType, ContextType>;
  restrictionmosaic?: Resolver<Maybe<ResolversTypes['MosaicRestrictionNetworkPropertiesDTO']>, ParentType, ContextType>;
  transfer?: Resolver<Maybe<ResolversTypes['TransferNetworkPropertiesDTO']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type AccountKeyLinkNetworkPropertiesDtoResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['AccountKeyLinkNetworkPropertiesDTO'] = ResolversParentTypes['AccountKeyLinkNetworkPropertiesDTO']> = ResolversObject<{
  dummy?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type AggregateNetworkPropertiesDtoResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['AggregateNetworkPropertiesDTO'] = ResolversParentTypes['AggregateNetworkPropertiesDTO']> = ResolversObject<{
  enableBondedAggregateSupport?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
  enableStrictCosignatureCheck?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
  maxBondedTransactionLifetime?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  maxCosignaturesPerAggregate?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  maxTransactionsPerAggregate?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type HashLockNetworkPropertiesDtoResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['HashLockNetworkPropertiesDTO'] = ResolversParentTypes['HashLockNetworkPropertiesDTO']> = ResolversObject<{
  lockedFundsPerAggregate?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  maxHashLockDuration?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type SecretLockNetworkPropertiesDtoResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['SecretLockNetworkPropertiesDTO'] = ResolversParentTypes['SecretLockNetworkPropertiesDTO']> = ResolversObject<{
  maxProofSize?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  maxSecretLockDuration?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  minProofSize?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type MetadataNetworkPropertiesDtoResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['MetadataNetworkPropertiesDTO'] = ResolversParentTypes['MetadataNetworkPropertiesDTO']> = ResolversObject<{
  maxValueSize?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type MosaicNetworkPropertiesDtoResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['MosaicNetworkPropertiesDTO'] = ResolversParentTypes['MosaicNetworkPropertiesDTO']> = ResolversObject<{
  maxMosaicDivisibility?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  maxMosaicDuration?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  maxMosaicsPerAccount?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  mosaicRentalFee?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  mosaicRentalFeeSinkAddress?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type MultisigNetworkPropertiesDtoResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['MultisigNetworkPropertiesDTO'] = ResolversParentTypes['MultisigNetworkPropertiesDTO']> = ResolversObject<{
  maxCosignatoriesPerAccount?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  maxCosignedAccountsPerAccount?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  maxMultisigDepth?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type NamespaceNetworkPropertiesDtoResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['NamespaceNetworkPropertiesDTO'] = ResolversParentTypes['NamespaceNetworkPropertiesDTO']> = ResolversObject<{
  childNamespaceRentalFee?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  maxChildNamespaces?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  maxNameSize?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  maxNamespaceDepth?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  maxNamespaceDuration?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  minNamespaceDuration?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  namespaceGracePeriodDuration?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  namespaceRentalFeeSinkAddress?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  reservedRootNamespaceNames?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  rootNamespaceRentalFeePerBlock?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type AccountRestrictionNetworkPropertiesDtoResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['AccountRestrictionNetworkPropertiesDTO'] = ResolversParentTypes['AccountRestrictionNetworkPropertiesDTO']> = ResolversObject<{
  maxAccountRestrictionValues?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type MosaicRestrictionNetworkPropertiesDtoResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['MosaicRestrictionNetworkPropertiesDTO'] = ResolversParentTypes['MosaicRestrictionNetworkPropertiesDTO']> = ResolversObject<{
  maxMosaicRestrictionValues?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type TransferNetworkPropertiesDtoResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['TransferNetworkPropertiesDTO'] = ResolversParentTypes['TransferNetworkPropertiesDTO']> = ResolversObject<{
  maxMessageSize?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type NetworkTypeDtoResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['NetworkTypeDTO'] = ResolversParentTypes['NetworkTypeDTO']> = ResolversObject<{
  description?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  name?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type NodeHealthInfoDtoResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['NodeHealthInfoDTO'] = ResolversParentTypes['NodeHealthInfoDTO']> = ResolversObject<{
  status?: Resolver<ResolversTypes['NodeHealthDTO'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type NodeHealthDtoResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['NodeHealthDTO'] = ResolversParentTypes['NodeHealthDTO']> = ResolversObject<{
  apiNode?: Resolver<ResolversTypes['NodeStatusEnum'], ParentType, ContextType>;
  db?: Resolver<ResolversTypes['NodeStatusEnum'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type NodeStatusEnumResolvers = { UP: 'up', DOWN: 'down' };

export type NodeInfoDtoResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['NodeInfoDTO'] = ResolversParentTypes['NodeInfoDTO']> = ResolversObject<{
  friendlyName?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  host?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  networkGenerationHashSeed?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  networkIdentifier?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  nodePublicKey?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  port?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  publicKey?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  roles?: Resolver<ResolversTypes['RolesTypeEnum'], ParentType, ContextType>;
  version?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type RolesTypeEnumResolvers = { _1: 1, _2: 2, _3: 3, _4: 4, _5: 5, _6: 6, _7: 7 };

export type StorageInfoDtoResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['StorageInfoDTO'] = ResolversParentTypes['StorageInfoDTO']> = ResolversObject<{
  numAccounts?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  numBlocks?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  numTransactions?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type NodeTimeDtoResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['NodeTimeDTO'] = ResolversParentTypes['NodeTimeDTO']> = ResolversObject<{
  communicationTimestamps?: Resolver<ResolversTypes['CommunicationTimestampsDTO'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type CommunicationTimestampsDtoResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['CommunicationTimestampsDTO'] = ResolversParentTypes['CommunicationTimestampsDTO']> = ResolversObject<{
  receiveTimestamp?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  sendTimestamp?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type RentalFeesDtoResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['RentalFeesDTO'] = ResolversParentTypes['RentalFeesDTO']> = ResolversObject<{
  effectiveChildNamespaceRentalFee?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  effectiveMosaicRentalFee?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  effectiveRootNamespaceRentalFeePerBlock?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type SecretLockInfoDtoResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['SecretLockInfoDTO'] = ResolversParentTypes['SecretLockInfoDTO']> = ResolversObject<{
  id?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  lock?: Resolver<ResolversTypes['SecretLockEntryDTO'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type SecretLockEntryDtoResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['SecretLockEntryDTO'] = ResolversParentTypes['SecretLockEntryDTO']> = ResolversObject<{
  amount?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  compositeHash?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  endHeight?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  hashAlgorithm?: Resolver<ResolversTypes['LockHashAlgorithmEnum'], ParentType, ContextType>;
  mosaicId?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  ownerAddress?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  recipientAddress?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  secret?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  status?: Resolver<ResolversTypes['LockStatus'], ParentType, ContextType>;
  version?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type LockHashAlgorithmEnumResolvers = { _0: 'undefined', _1: 1, _2: 2 };

export type ServerInfoDtoResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['ServerInfoDTO'] = ResolversParentTypes['ServerInfoDTO']> = ResolversObject<{
  serverInfo?: Resolver<ResolversTypes['ServerDTO'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type ServerDtoResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['ServerDTO'] = ResolversParentTypes['ServerDTO']> = ResolversObject<{
  restVersion?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  sdkVersion?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type TransactionFeesDtoResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['TransactionFeesDTO'] = ResolversParentTypes['TransactionFeesDTO']> = ResolversObject<{
  averageFeeMultiplier?: Resolver<ResolversTypes['Float'], ParentType, ContextType>;
  highestFeeMultiplier?: Resolver<ResolversTypes['Float'], ParentType, ContextType>;
  lowestFeeMultiplier?: Resolver<ResolversTypes['Float'], ParentType, ContextType>;
  medianFeeMultiplier?: Resolver<ResolversTypes['Float'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type TransactionStatusDtoResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['TransactionStatusDTO'] = ResolversParentTypes['TransactionStatusDTO']> = ResolversObject<{
  code?: Resolver<Maybe<ResolversTypes['TransactionStatusEnum']>, ParentType, ContextType>;
  deadline?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  group?: Resolver<ResolversTypes['TransactionGroupEnum'], ParentType, ContextType>;
  hash?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  height?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type TransactionStatusEnumResolvers = { SUCCESS: 'Success', NEUTRAL: 'Neutral', FAILURE: 'Failure', FAILURE_CORE_PAST_DEADLINE: 'Failure_Core_Past_Deadline', FAILURE_CORE_FUTURE_DEADLINE: 'Failure_Core_Future_Deadline', FAILURE_CORE_INSUFFICIENT_BALANCE: 'Failure_Core_Insufficient_Balance', FAILURE_CORE_TOO_MANY_TRANSACTIONS: 'Failure_Core_Too_Many_Transactions', FAILURE_CORE_NEMESIS_ACCOUNT_SIGNED_AFTER_NEMESIS_BLOCK: 'Failure_Core_Nemesis_Account_Signed_After_Nemesis_Block', FAILURE_CORE_WRONG_NETWORK: 'Failure_Core_Wrong_Network', FAILURE_CORE_INVALID_ADDRESS: 'Failure_Core_Invalid_Address', FAILURE_CORE_INVALID_VERSION: 'Failure_Core_Invalid_Version', FAILURE_CORE_INVALID_TRANSACTION_FEE: 'Failure_Core_Invalid_Transaction_Fee', FAILURE_CORE_BLOCK_HARVESTER_INELIGIBLE: 'Failure_Core_Block_Harvester_Ineligible', FAILURE_CORE_ZERO_ADDRESS: 'Failure_Core_Zero_Address', FAILURE_CORE_ZERO_PUBLIC_KEY: 'Failure_Core_Zero_Public_Key', FAILURE_CORE_NONZERO_INTERNAL_PADDING: 'Failure_Core_Nonzero_Internal_Padding', FAILURE_CORE_ADDRESS_COLLISION: 'Failure_Core_Address_Collision', FAILURE_CORE_IMPORTANCE_BLOCK_MISMATCH: 'Failure_Core_Importance_Block_Mismatch', FAILURE_CORE_UNEXPECTED_BLOCK_TYPE: 'Failure_Core_Unexpected_Block_Type', FAILURE_CORE_INVALID_LINK_ACTION: 'Failure_Core_Invalid_Link_Action', FAILURE_CORE_LINK_ALREADY_EXISTS: 'Failure_Core_Link_Already_Exists', FAILURE_CORE_INCONSISTENT_UNLINK_DATA: 'Failure_Core_Inconsistent_Unlink_Data', FAILURE_CORE_INVALID_LINK_RANGE: 'Failure_Core_Invalid_Link_Range', FAILURE_CORE_TOO_MANY_LINKS: 'Failure_Core_Too_Many_Links', FAILURE_HASH_ALREADY_EXISTS: 'Failure_Hash_Already_Exists', FAILURE_SIGNATURE_NOT_VERIFIABLE: 'Failure_Signature_Not_Verifiable', FAILURE_ACCOUNTLINK_LINK_ALREADY_EXISTS: 'Failure_AccountLink_Link_Already_Exists', FAILURE_ACCOUNTLINK_INCONSISTENT_UNLINK_DATA: 'Failure_AccountLink_Inconsistent_Unlink_Data', FAILURE_ACCOUNTLINK_UNKNOWN_LINK: 'Failure_AccountLink_Unknown_Link', FAILURE_ACCOUNTLINK_REMOTE_ACCOUNT_INELIGIBLE: 'Failure_AccountLink_Remote_Account_Ineligible', FAILURE_ACCOUNTLINK_REMOTE_ACCOUNT_SIGNER_PROHIBITED: 'Failure_AccountLink_Remote_Account_Signer_Prohibited', FAILURE_ACCOUNTLINK_REMOTE_ACCOUNT_PARTICIPANT_PROHIBITED: 'Failure_AccountLink_Remote_Account_Participant_Prohibited', FAILURE_AGGREGATE_TOO_MANY_TRANSACTIONS: 'Failure_Aggregate_Too_Many_Transactions', FAILURE_AGGREGATE_NO_TRANSACTIONS: 'Failure_Aggregate_No_Transactions', FAILURE_AGGREGATE_TOO_MANY_COSIGNATURES: 'Failure_Aggregate_Too_Many_Cosignatures', FAILURE_AGGREGATE_REDUNDANT_COSIGNATURES: 'Failure_Aggregate_Redundant_Cosignatures', FAILURE_AGGREGATE_INELIGIBLE_COSIGNATORIES: 'Failure_Aggregate_Ineligible_Cosignatories', FAILURE_AGGREGATE_MISSING_COSIGNATURES: 'Failure_Aggregate_Missing_Cosignatures', FAILURE_AGGREGATE_TRANSACTIONS_HASH_MISMATCH: 'Failure_Aggregate_Transactions_Hash_Mismatch', FAILURE_LOCKHASH_INVALID_MOSAIC_ID: 'Failure_LockHash_Invalid_Mosaic_Id', FAILURE_LOCKHASH_INVALID_MOSAIC_AMOUNT: 'Failure_LockHash_Invalid_Mosaic_Amount', FAILURE_LOCKHASH_HASH_ALREADY_EXISTS: 'Failure_LockHash_Hash_Already_Exists', FAILURE_LOCKHASH_UNKNOWN_HASH: 'Failure_LockHash_Unknown_Hash', FAILURE_LOCKHASH_INACTIVE_HASH: 'Failure_LockHash_Inactive_Hash', FAILURE_LOCKHASH_INVALID_DURATION: 'Failure_LockHash_Invalid_Duration', FAILURE_LOCKSECRET_INVALID_HASH_ALGORITHM: 'Failure_LockSecret_Invalid_Hash_Algorithm', FAILURE_LOCKSECRET_HASH_ALREADY_EXISTS: 'Failure_LockSecret_Hash_Already_Exists', FAILURE_LOCKSECRET_PROOF_SIZE_OUT_OF_BOUNDS: 'Failure_LockSecret_Proof_Size_Out_Of_Bounds', FAILURE_LOCKSECRET_SECRET_MISMATCH: 'Failure_LockSecret_Secret_Mismatch', FAILURE_LOCKSECRET_UNKNOWN_COMPOSITE_KEY: 'Failure_LockSecret_Unknown_Composite_Key', FAILURE_LOCKSECRET_INACTIVE_SECRET: 'Failure_LockSecret_Inactive_Secret', FAILURE_LOCKSECRET_HASH_ALGORITHM_MISMATCH: 'Failure_LockSecret_Hash_Algorithm_Mismatch', FAILURE_LOCKSECRET_INVALID_DURATION: 'Failure_LockSecret_Invalid_Duration', FAILURE_METADATA_VALUE_TOO_SMALL: 'Failure_Metadata_Value_Too_Small', FAILURE_METADATA_VALUE_TOO_LARGE: 'Failure_Metadata_Value_Too_Large', FAILURE_METADATA_VALUE_SIZE_DELTA_TOO_LARGE: 'Failure_Metadata_Value_Size_Delta_Too_Large', FAILURE_METADATA_VALUE_SIZE_DELTA_MISMATCH: 'Failure_Metadata_Value_Size_Delta_Mismatch', FAILURE_METADATA_VALUE_CHANGE_IRREVERSIBLE: 'Failure_Metadata_Value_Change_Irreversible', FAILURE_MOSAIC_INVALID_DURATION: 'Failure_Mosaic_Invalid_Duration', FAILURE_MOSAIC_INVALID_NAME: 'Failure_Mosaic_Invalid_Name', FAILURE_MOSAIC_NAME_ID_MISMATCH: 'Failure_Mosaic_Name_Id_Mismatch', FAILURE_MOSAIC_EXPIRED: 'Failure_Mosaic_Expired', FAILURE_MOSAIC_OWNER_CONFLICT: 'Failure_Mosaic_Owner_Conflict', FAILURE_MOSAIC_ID_MISMATCH: 'Failure_Mosaic_Id_Mismatch', FAILURE_MOSAIC_PARENT_ID_CONFLICT: 'Failure_Mosaic_Parent_Id_Conflict', FAILURE_MOSAIC_INVALID_PROPERTY: 'Failure_Mosaic_Invalid_Property', FAILURE_MOSAIC_INVALID_FLAGS: 'Failure_Mosaic_Invalid_Flags', FAILURE_MOSAIC_INVALID_DIVISIBILITY: 'Failure_Mosaic_Invalid_Divisibility', FAILURE_MOSAIC_INVALID_SUPPLY_CHANGE_ACTION: 'Failure_Mosaic_Invalid_Supply_Change_Action', FAILURE_MOSAIC_INVALID_SUPPLY_CHANGE_AMOUNT: 'Failure_Mosaic_Invalid_Supply_Change_Amount', FAILURE_MOSAIC_INVALID_ID: 'Failure_Mosaic_Invalid_Id', FAILURE_MOSAIC_MODIFICATION_DISALLOWED: 'Failure_Mosaic_Modification_Disallowed', FAILURE_MOSAIC_MODIFICATION_NO_CHANGES: 'Failure_Mosaic_Modification_No_Changes', FAILURE_MOSAIC_SUPPLY_IMMUTABLE: 'Failure_Mosaic_Supply_Immutable', FAILURE_MOSAIC_SUPPLY_NEGATIVE: 'Failure_Mosaic_Supply_Negative', FAILURE_MOSAIC_SUPPLY_EXCEEDED: 'Failure_Mosaic_Supply_Exceeded', FAILURE_MOSAIC_NON_TRANSFERABLE: 'Failure_Mosaic_Non_Transferable', FAILURE_MOSAIC_MAX_MOSAICS_EXCEEDED: 'Failure_Mosaic_Max_Mosaics_Exceeded', FAILURE_MOSAIC_REQUIRED_PROPERTY_FLAG_UNSET: 'Failure_Mosaic_Required_Property_Flag_Unset', FAILURE_MULTISIG_ACCOUNT_IN_BOTH_SETS: 'Failure_Multisig_Account_In_Both_Sets', FAILURE_MULTISIG_MULTIPLE_DELETES: 'Failure_Multisig_Multiple_Deletes', FAILURE_MULTISIG_REDUNDANT_MODIFICATION: 'Failure_Multisig_Redundant_Modification', FAILURE_MULTISIG_UNKNOWN_MULTISIG_ACCOUNT: 'Failure_Multisig_Unknown_Multisig_Account', FAILURE_MULTISIG_NOT_A_COSIGNATORY: 'Failure_Multisig_Not_A_Cosignatory', FAILURE_MULTISIG_ALREADY_A_COSIGNATORY: 'Failure_Multisig_Already_A_Cosignatory', FAILURE_MULTISIG_MIN_SETTING_OUT_OF_RANGE: 'Failure_Multisig_Min_Setting_Out_Of_Range', FAILURE_MULTISIG_MIN_SETTING_LARGER_THAN_NUM_COSIGNATORIES: 'Failure_Multisig_Min_Setting_Larger_Than_Num_Cosignatories', FAILURE_MULTISIG_INVALID_MODIFICATION_ACTION: 'Failure_Multisig_Invalid_Modification_Action', FAILURE_MULTISIG_MAX_COSIGNED_ACCOUNTS: 'Failure_Multisig_Max_Cosigned_Accounts', FAILURE_MULTISIG_MAX_COSIGNATORIES: 'Failure_Multisig_Max_Cosignatories', FAILURE_MULTISIG_LOOP: 'Failure_Multisig_Loop', FAILURE_MULTISIG_MAX_MULTISIG_DEPTH: 'Failure_Multisig_Max_Multisig_Depth', FAILURE_MULTISIG_OPERATION_PROHIBITED_BY_ACCOUNT: 'Failure_Multisig_Operation_Prohibited_By_Account', FAILURE_NAMESPACE_INVALID_DURATION: 'Failure_Namespace_Invalid_Duration', FAILURE_NAMESPACE_INVALID_NAME: 'Failure_Namespace_Invalid_Name', FAILURE_NAMESPACE_NAME_ID_MISMATCH: 'Failure_Namespace_Name_Id_Mismatch', FAILURE_NAMESPACE_EXPIRED: 'Failure_Namespace_Expired', FAILURE_NAMESPACE_OWNER_CONFLICT: 'Failure_Namespace_Owner_Conflict', FAILURE_NAMESPACE_ID_MISMATCH: 'Failure_Namespace_Id_Mismatch', FAILURE_NAMESPACE_INVALID_REGISTRATION_TYPE: 'Failure_Namespace_Invalid_Registration_Type', FAILURE_NAMESPACE_ROOT_NAME_RESERVED: 'Failure_Namespace_Root_Name_Reserved', FAILURE_NAMESPACE_TOO_DEEP: 'Failure_Namespace_Too_Deep', FAILURE_NAMESPACE_UNKNOWN_PARENT: 'Failure_Namespace_Unknown_Parent', FAILURE_NAMESPACE_ALREADY_EXISTS: 'Failure_Namespace_Already_Exists', FAILURE_NAMESPACE_ALREADY_ACTIVE: 'Failure_Namespace_Already_Active', FAILURE_NAMESPACE_ETERNAL_AFTER_NEMESIS_BLOCK: 'Failure_Namespace_Eternal_After_Nemesis_Block', FAILURE_NAMESPACE_MAX_CHILDREN_EXCEEDED: 'Failure_Namespace_Max_Children_Exceeded', FAILURE_NAMESPACE_ALIAS_INVALID_ACTION: 'Failure_Namespace_Alias_Invalid_Action', FAILURE_NAMESPACE_UNKNOWN: 'Failure_Namespace_Unknown', FAILURE_NAMESPACE_ALIAS_ALREADY_EXISTS: 'Failure_Namespace_Alias_Already_Exists', FAILURE_NAMESPACE_UNKNOWN_ALIAS: 'Failure_Namespace_Unknown_Alias', FAILURE_NAMESPACE_ALIAS_INCONSISTENT_UNLINK_TYPE: 'Failure_Namespace_Alias_Inconsistent_Unlink_Type', FAILURE_NAMESPACE_ALIAS_INCONSISTENT_UNLINK_DATA: 'Failure_Namespace_Alias_Inconsistent_Unlink_Data', FAILURE_NAMESPACE_ALIAS_INVALID_ADDRESS: 'Failure_Namespace_Alias_Invalid_Address', FAILURE_RESTRICTIONACCOUNT_INVALID_RESTRICTION_FLAGS: 'Failure_RestrictionAccount_Invalid_Restriction_Flags', FAILURE_RESTRICTIONACCOUNT_INVALID_MODIFICATION_ACTION: 'Failure_RestrictionAccount_Invalid_Modification_Action', FAILURE_RESTRICTIONACCOUNT_INVALID_MODIFICATION_ADDRESS: 'Failure_RestrictionAccount_Invalid_Modification_Address', FAILURE_RESTRICTIONACCOUNT_MODIFICATION_OPERATION_TYPE_INCOMPATIBLE: 'Failure_RestrictionAccount_Modification_Operation_Type_Incompatible', FAILURE_RESTRICTIONACCOUNT_REDUNDANT_MODIFICATION: 'Failure_RestrictionAccount_Redundant_Modification', FAILURE_RESTRICTIONACCOUNT_INVALID_MODIFICATION: 'Failure_RestrictionAccount_Invalid_Modification', FAILURE_RESTRICTIONACCOUNT_MODIFICATION_COUNT_EXCEEDED: 'Failure_RestrictionAccount_Modification_Count_Exceeded', FAILURE_RESTRICTIONACCOUNT_NO_MODIFICATIONS: 'Failure_RestrictionAccount_No_Modifications', FAILURE_RESTRICTIONACCOUNT_VALUES_COUNT_EXCEEDED: 'Failure_RestrictionAccount_Values_Count_Exceeded', FAILURE_RESTRICTIONACCOUNT_INVALID_VALUE: 'Failure_RestrictionAccount_Invalid_Value', FAILURE_RESTRICTIONACCOUNT_ADDRESS_INTERACTION_PROHIBITED: 'Failure_RestrictionAccount_Address_Interaction_Prohibited', FAILURE_RESTRICTIONACCOUNT_MOSAIC_TRANSFER_PROHIBITED: 'Failure_RestrictionAccount_Mosaic_Transfer_Prohibited', FAILURE_RESTRICTIONACCOUNT_OPERATION_TYPE_PROHIBITED: 'Failure_RestrictionAccount_Operation_Type_Prohibited', FAILURE_RESTRICTIONMOSAIC_INVALID_RESTRICTION_TYPE: 'Failure_RestrictionMosaic_Invalid_Restriction_Type', FAILURE_RESTRICTIONMOSAIC_PREVIOUS_VALUE_MISMATCH: 'Failure_RestrictionMosaic_Previous_Value_Mismatch', FAILURE_RESTRICTIONMOSAIC_PREVIOUS_VALUE_MUST_BE_ZERO: 'Failure_RestrictionMosaic_Previous_Value_Must_Be_Zero', FAILURE_RESTRICTIONMOSAIC_MAX_RESTRICTIONS_EXCEEDED: 'Failure_RestrictionMosaic_Max_Restrictions_Exceeded', FAILURE_RESTRICTIONMOSAIC_CANNOT_DELETE_NONEXISTENT_RESTRICTION: 'Failure_RestrictionMosaic_Cannot_Delete_Nonexistent_Restriction', FAILURE_RESTRICTIONMOSAIC_UNKNOWN_GLOBAL_RESTRICTION: 'Failure_RestrictionMosaic_Unknown_Global_Restriction', FAILURE_RESTRICTIONMOSAIC_INVALID_GLOBAL_RESTRICTION: 'Failure_RestrictionMosaic_Invalid_Global_Restriction', FAILURE_RESTRICTIONMOSAIC_ACCOUNT_UNAUTHORIZED: 'Failure_RestrictionMosaic_Account_Unauthorized', FAILURE_TRANSFER_MESSAGE_TOO_LARGE: 'Failure_Transfer_Message_Too_Large', FAILURE_TRANSFER_OUT_OF_ORDER_MOSAICS: 'Failure_Transfer_Out_Of_Order_Mosaics', FAILURE_CHAIN_UNLINKED: 'Failure_Chain_Unlinked', FAILURE_CHAIN_BLOCK_NOT_HIT: 'Failure_Chain_Block_Not_Hit', FAILURE_CHAIN_BLOCK_INCONSISTENT_STATE_HASH: 'Failure_Chain_Block_Inconsistent_State_Hash', FAILURE_CHAIN_BLOCK_INCONSISTENT_RECEIPTS_HASH: 'Failure_Chain_Block_Inconsistent_Receipts_Hash', FAILURE_CHAIN_BLOCK_INVALID_VRF_PROOF: 'Failure_Chain_Block_Invalid_Vrf_Proof', FAILURE_CHAIN_BLOCK_UNKNOWN_SIGNER: 'Failure_Chain_Block_Unknown_Signer', FAILURE_CHAIN_UNCONFIRMED_CACHE_TOO_FULL: 'Failure_Chain_Unconfirmed_Cache_Too_Full', FAILURE_CONSUMER_EMPTY_INPUT: 'Failure_Consumer_Empty_Input', FAILURE_CONSUMER_BLOCK_TRANSACTIONS_HASH_MISMATCH: 'Failure_Consumer_Block_Transactions_Hash_Mismatch', NEUTRAL_CONSUMER_HASH_IN_RECENCY_CACHE: 'Neutral_Consumer_Hash_In_Recency_Cache', FAILURE_CONSUMER_REMOTE_CHAIN_TOO_MANY_BLOCKS: 'Failure_Consumer_Remote_Chain_Too_Many_Blocks', FAILURE_CONSUMER_REMOTE_CHAIN_IMPROPER_LINK: 'Failure_Consumer_Remote_Chain_Improper_Link', FAILURE_CONSUMER_REMOTE_CHAIN_DUPLICATE_TRANSACTIONS: 'Failure_Consumer_Remote_Chain_Duplicate_Transactions', FAILURE_CONSUMER_REMOTE_CHAIN_UNLINKED: 'Failure_Consumer_Remote_Chain_Unlinked', FAILURE_CONSUMER_REMOTE_CHAIN_DIFFICULTIES_MISMATCH: 'Failure_Consumer_Remote_Chain_Difficulties_Mismatch', FAILURE_CONSUMER_REMOTE_CHAIN_SCORE_NOT_BETTER: 'Failure_Consumer_Remote_Chain_Score_Not_Better', FAILURE_CONSUMER_REMOTE_CHAIN_TOO_FAR_BEHIND: 'Failure_Consumer_Remote_Chain_Too_Far_Behind', FAILURE_CONSUMER_REMOTE_CHAIN_TOO_FAR_IN_FUTURE: 'Failure_Consumer_Remote_Chain_Too_Far_In_Future', FAILURE_CONSUMER_BATCH_SIGNATURE_NOT_VERIFIABLE: 'Failure_Consumer_Batch_Signature_Not_Verifiable', FAILURE_CONSUMER_REMOTE_CHAIN_IMPROPER_IMPORTANCE_LINK: 'Failure_Consumer_Remote_Chain_Improper_Importance_Link', FAILURE_EXTENSION_PARTIAL_TRANSACTION_CACHE_PRUNE: 'Failure_Extension_Partial_Transaction_Cache_Prune', FAILURE_EXTENSION_PARTIAL_TRANSACTION_DEPENDENCY_REMOVED: 'Failure_Extension_Partial_Transaction_Dependency_Removed', FAILURE_EXTENSION_READ_RATE_LIMIT_EXCEEDED: 'Failure_Extension_Read_Rate_Limit_Exceeded' };

export type TransactionGroupEnumResolvers = { UNCONFIRMED: 'unconfirmed', CONFIRMED: 'confirmed', FAILED: 'failed', PARTIAL: 'partial' };

export type UnlockedAccountDtoResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['UnlockedAccountDTO'] = ResolversParentTypes['UnlockedAccountDTO']> = ResolversObject<{
  unlockedAccount?: Resolver<Array<Maybe<ResolversTypes['String']>>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type AccountRestrictionsPageResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['AccountRestrictionsPage'] = ResolversParentTypes['AccountRestrictionsPage']> = ResolversObject<{
  data?: Resolver<Array<Maybe<ResolversTypes['AccountRestrictionsInfoDTO']>>, ParentType, ContextType>;
  pagination?: Resolver<ResolversTypes['Pagination'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type PaginationResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['Pagination'] = ResolversParentTypes['Pagination']> = ResolversObject<{
  pageNumber?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  pageSize?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type OrderResolvers = { ASC: 'asc', DESC: 'desc' };

export type AccountPageResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['AccountPage'] = ResolversParentTypes['AccountPage']> = ResolversObject<{
  data?: Resolver<Array<Maybe<ResolversTypes['AccountInfoDTO']>>, ParentType, ContextType>;
  pagination?: Resolver<ResolversTypes['Pagination'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type OrderByResolvers = { ID: 'id', BALANCE: 'balance' };

export type ResolutionStatementPageResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['ResolutionStatementPage'] = ResolversParentTypes['ResolutionStatementPage']> = ResolversObject<{
  data?: Resolver<Array<Maybe<ResolversTypes['ResolutionStatementInfoDTO']>>, ParentType, ContextType>;
  pagination?: Resolver<ResolversTypes['Pagination'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type ResolutionStatementInfoDtoResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['ResolutionStatementInfoDTO'] = ResolversParentTypes['ResolutionStatementInfoDTO']> = ResolversObject<{
  id?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  statement?: Resolver<ResolversTypes['ResolutionStatementDTO'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type ResolutionStatementDtoResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['ResolutionStatementDTO'] = ResolversParentTypes['ResolutionStatementDTO']> = ResolversObject<{
  height?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  resolutionEntries?: Resolver<Array<Maybe<ResolversTypes['ResolutionEntryDTO']>>, ParentType, ContextType>;
  unresolved?: Resolver<ResolversTypes['JSON'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type ResolutionEntryDtoResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['ResolutionEntryDTO'] = ResolversParentTypes['ResolutionEntryDTO']> = ResolversObject<{
  resolved?: Resolver<ResolversTypes['JSON'], ParentType, ContextType>;
  source?: Resolver<ResolversTypes['SourceDTO'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type SourceDtoResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['SourceDTO'] = ResolversParentTypes['SourceDTO']> = ResolversObject<{
  primaryId?: Resolver<ResolversTypes['Float'], ParentType, ContextType>;
  secondaryId?: Resolver<ResolversTypes['Float'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type BlockPageResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['BlockPage'] = ResolversParentTypes['BlockPage']> = ResolversObject<{
  data?: Resolver<Array<Maybe<ResolversTypes['BlockInfoDTO']>>, ParentType, ContextType>;
  pagination?: Resolver<ResolversTypes['Pagination'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type OrderBy2Resolvers = { ID: 'id', HEIGHT: 'height' };

export type TransactionPageResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['TransactionPage'] = ResolversParentTypes['TransactionPage']> = ResolversObject<{
  data?: Resolver<Array<Maybe<ResolversTypes['TransactionInfoDTO']>>, ParentType, ContextType>;
  pagination?: Resolver<ResolversTypes['Pagination'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type TransactionTypeEnumResolvers = { _16716: 16716, _16963: 16963, _16707: 16707, _16972: 16972, _16705: 16705, _16961: 16961, _16717: 16717, _16973: 16973, _16718: 16718, _16974: 16974, _17230: 17230, _16708: 16708, _16964: 16964, _17220: 17220, _16725: 16725, _16712: 16712, _16722: 16722, _16978: 16978, _16720: 16720, _16976: 16976, _17232: 17232, _16721: 16721, _16977: 16977, _16724: 16724 };

export type HashLockPageResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['HashLockPage'] = ResolversParentTypes['HashLockPage']> = ResolversObject<{
  data?: Resolver<Array<Maybe<ResolversTypes['HashLockInfoDTO']>>, ParentType, ContextType>;
  pagination?: Resolver<ResolversTypes['Pagination'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type MetadataPageResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['MetadataPage'] = ResolversParentTypes['MetadataPage']> = ResolversObject<{
  data?: Resolver<Array<Maybe<ResolversTypes['MetadataInfoDTO']>>, ParentType, ContextType>;
  pagination?: Resolver<ResolversTypes['Pagination'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type MetadataTypeResolvers = { _0: 'undefined', _1: 1, _2: 2 };

export type MosaicRestrictionsPageResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['MosaicRestrictionsPage'] = ResolversParentTypes['MosaicRestrictionsPage']> = ResolversObject<{
  data?: Resolver<Array<Maybe<ResolversTypes['Data12ListItem']>>, ParentType, ContextType>;
  pagination?: Resolver<ResolversTypes['Pagination'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type Data12ListItemResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['Data12ListItem'] = ResolversParentTypes['Data12ListItem']> = ResolversObject<{
  id?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  mosaicRestrictionEntry?: Resolver<Maybe<ResolversTypes['JSON']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type EntryTypeResolvers = { _0: 'undefined', _1: 1 };

export type MosaicPageResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['MosaicPage'] = ResolversParentTypes['MosaicPage']> = ResolversObject<{
  data?: Resolver<Array<Maybe<ResolversTypes['MosaicInfoDTO']>>, ParentType, ContextType>;
  pagination?: Resolver<ResolversTypes['Pagination'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type NamespacePageResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['NamespacePage'] = ResolversParentTypes['NamespacePage']> = ResolversObject<{
  data?: Resolver<Array<Maybe<ResolversTypes['NamespaceInfoDTO']>>, ParentType, ContextType>;
  pagination?: Resolver<ResolversTypes['Pagination'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type AliasTypeResolvers = { _0: 'undefined', _1: 1, _2: 2 };

export type RegistrationTypeResolvers = { _0: 'undefined', _1: 1 };

export type TransactionStatementPageResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['TransactionStatementPage'] = ResolversParentTypes['TransactionStatementPage']> = ResolversObject<{
  data?: Resolver<Array<Maybe<ResolversTypes['TransactionStatementInfoDTO']>>, ParentType, ContextType>;
  pagination?: Resolver<ResolversTypes['Pagination'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type TransactionStatementInfoDtoResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['TransactionStatementInfoDTO'] = ResolversParentTypes['TransactionStatementInfoDTO']> = ResolversObject<{
  id?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  statement?: Resolver<ResolversTypes['TransactionStatementDTO'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type TransactionStatementDtoResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['TransactionStatementDTO'] = ResolversParentTypes['TransactionStatementDTO']> = ResolversObject<{
  height?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  receipts?: Resolver<Array<Maybe<ResolversTypes['JSON']>>, ParentType, ContextType>;
  source?: Resolver<ResolversTypes['SourceDTO'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type ReceiptTypeEnumResolvers = { _4685: 4685, _4942: 4942, _8515: 8515, _8776: 8776, _9032: 9032, _8786: 8786, _9042: 9042, _12616: 12616, _12626: 12626, _16717: 16717, _16718: 16718, _16974: 16974, _20803: 20803, _57667: 57667, _61763: 61763, _62019: 62019 };

export type SecretLockPageResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['SecretLockPage'] = ResolversParentTypes['SecretLockPage']> = ResolversObject<{
  data?: Resolver<Array<Maybe<ResolversTypes['SecretLockInfoDTO']>>, ParentType, ContextType>;
  pagination?: Resolver<ResolversTypes['Pagination'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type MutationResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['Mutation'] = ResolversParentTypes['Mutation']> = ResolversObject<{
  announceCosignatureTransaction?: Resolver<Maybe<ResolversTypes['AnnounceTransactionInfoDTO']>, ParentType, ContextType, RequireFields<MutationAnnounceCosignatureTransactionArgs, 'cosignatureInput'>>;
  announcePartialTransaction?: Resolver<Maybe<ResolversTypes['AnnounceTransactionInfoDTO']>, ParentType, ContextType, RequireFields<MutationAnnouncePartialTransactionArgs, 'transactionPayloadInput'>>;
  announceTransaction?: Resolver<Maybe<ResolversTypes['AnnounceTransactionInfoDTO']>, ParentType, ContextType, RequireFields<MutationAnnounceTransactionArgs, 'transactionPayloadInput'>>;
  getAccountsInfo?: Resolver<Maybe<Array<Maybe<ResolversTypes['AccountInfoDTO']>>>, ParentType, ContextType, RequireFields<MutationGetAccountsInfoArgs, never>>;
  getAccountsNames?: Resolver<Maybe<ResolversTypes['AccountsNamesDTO']>, ParentType, ContextType, RequireFields<MutationGetAccountsNamesArgs, 'namespacesAccountNamesInput'>>;
  getConfirmedTransactions?: Resolver<Maybe<Array<Maybe<ResolversTypes['TransactionInfoDTO']>>>, ParentType, ContextType, RequireFields<MutationGetConfirmedTransactionsArgs, 'transactionIdsInput'>>;
  getMosaics?: Resolver<Maybe<Array<Maybe<ResolversTypes['MosaicInfoDTO']>>>, ParentType, ContextType, RequireFields<MutationGetMosaicsArgs, 'mosaicIdsInput'>>;
  getMosaicsNames?: Resolver<Maybe<ResolversTypes['MosaicsNamesDTO']>, ParentType, ContextType, RequireFields<MutationGetMosaicsNamesArgs, 'mosaicIdsInput'>>;
  getNamespacesNames?: Resolver<Maybe<Array<Maybe<ResolversTypes['NamespaceNameDTO']>>>, ParentType, ContextType, RequireFields<MutationGetNamespacesNamesArgs, 'namespaceIdsInput'>>;
  getPartialTransactions?: Resolver<Maybe<Array<Maybe<ResolversTypes['TransactionInfoDTO']>>>, ParentType, ContextType, RequireFields<MutationGetPartialTransactionsArgs, 'transactionIdsInput'>>;
  getTransactionStatuses?: Resolver<Maybe<Array<Maybe<ResolversTypes['TransactionStatusDTO']>>>, ParentType, ContextType, RequireFields<MutationGetTransactionStatusesArgs, 'transactionHashesInput'>>;
  getUnconfirmedTransactions?: Resolver<Maybe<Array<Maybe<ResolversTypes['TransactionInfoDTO']>>>, ParentType, ContextType, RequireFields<MutationGetUnconfirmedTransactionsArgs, 'transactionIdsInput'>>;
}>;

export type AnnounceTransactionInfoDtoResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['AnnounceTransactionInfoDTO'] = ResolversParentTypes['AnnounceTransactionInfoDTO']> = ResolversObject<{
  message?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type AccountsNamesDtoResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['AccountsNamesDTO'] = ResolversParentTypes['AccountsNamesDTO']> = ResolversObject<{
  accountNames?: Resolver<Array<Maybe<ResolversTypes['AccountNamesDTO']>>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type AccountNamesDtoResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['AccountNamesDTO'] = ResolversParentTypes['AccountNamesDTO']> = ResolversObject<{
  address?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  names?: Resolver<Array<Maybe<ResolversTypes['String']>>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type MosaicsNamesDtoResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['MosaicsNamesDTO'] = ResolversParentTypes['MosaicsNamesDTO']> = ResolversObject<{
  mosaicNames?: Resolver<Array<Maybe<ResolversTypes['MosaicNamesDTO']>>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type MosaicNamesDtoResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['MosaicNamesDTO'] = ResolversParentTypes['MosaicNamesDTO']> = ResolversObject<{
  mosaicId?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  names?: Resolver<Array<Maybe<ResolversTypes['String']>>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type NamespaceNameDtoResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['NamespaceNameDTO'] = ResolversParentTypes['NamespaceNameDTO']> = ResolversObject<{
  id?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  name?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  parentId?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type BlockResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['Block'] = ResolversParentTypes['Block']> = ResolversObject<{
  meta?: Resolver<Maybe<ResolversTypes['BlockMetaDTO']>, ParentType, ContextType>;
  block?: Resolver<Maybe<ResolversTypes['BlockDTO']>, ParentType, ContextType>;
  signerAccount?: Resolver<Maybe<ResolversTypes['AccountInfoDTO']>, ParentType, ContextType>;
  beneficiaryAccount?: Resolver<Maybe<ResolversTypes['AccountInfoDTO']>, ParentType, ContextType>;
  transactions?: Resolver<Maybe<ResolversTypes['TransactionPage']>, ParentType, ContextType, RequireFields<BlockTransactionsArgs, never>>;
  statementsResolutionsAddress?: Resolver<Maybe<ResolversTypes['ResolutionStatementPage']>, ParentType, ContextType, RequireFields<BlockStatementsResolutionsAddressArgs, never>>;
  statementsResolutionsMosaic?: Resolver<Maybe<ResolversTypes['ResolutionStatementPage']>, ParentType, ContextType, RequireFields<BlockStatementsResolutionsMosaicArgs, never>>;
  receipts?: Resolver<Maybe<ResolversTypes['TransactionStatementPage']>, ParentType, ContextType, RequireFields<BlockReceiptsArgs, never>>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type BlockDtoResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['BlockDTO'] = ResolversParentTypes['BlockDTO']> = ResolversObject<{
  size?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  signature?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  signerPublicKey?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  version?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  network?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  type?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  height?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  timestamp?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  difficulty?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  proofGamma?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  proofVerificationHash?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  proofScalar?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  previousBlockHash?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  transactionsHash?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  receiptsHash?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  stateHash?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  beneficiaryAddress?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  feeMultiplier?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  votingEligibleAccountsCount?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  harvestingEligibleAccountsCount?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  totalVotingBalance?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  previousImportanceBlockHash?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type RentalFeeResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['RentalFee'] = ResolversParentTypes['RentalFee']> = ResolversObject<{
  effectiveChildNamespaceRentalFee?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  effectiveMosaicRentalFee?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  effectiveRootNamespaceRentalFeePerBlock?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type Resolvers<ContextType = MeshContext> = ResolversObject<{
  Query?: QueryResolvers<ContextType>;
  AccountInfoDTO?: AccountInfoDtoResolvers<ContextType>;
  AccountDTO?: AccountDtoResolvers<ContextType>;
  AccountTypeEnum?: AccountTypeEnumResolvers;
  ActivityBucketDTO?: ActivityBucketDtoResolvers<ContextType>;
  Mosaic?: MosaicResolvers<ContextType>;
  SupplementalPublicKeysDTO?: SupplementalPublicKeysDtoResolvers<ContextType>;
  AccountLinkPublicKeyDTO?: AccountLinkPublicKeyDtoResolvers<ContextType>;
  AccountLinkVotingKeysDTO?: AccountLinkVotingKeysDtoResolvers<ContextType>;
  AccountLinkVotingKeyDTO?: AccountLinkVotingKeyDtoResolvers<ContextType>;
  MerkleStateInfoDTO?: MerkleStateInfoDtoResolvers<ContextType>;
  TreeListItem?: TreeListItemResolvers<ContextType>;
  JSON?: GraphQLScalarType;
  MerkleTreeBranchLinkDTO?: MerkleTreeBranchLinkDtoResolvers<ContextType>;
  Type?: TypeResolvers;
  MultisigAccountInfoDTO?: MultisigAccountInfoDtoResolvers<ContextType>;
  MultisigDTO?: MultisigDtoResolvers<ContextType>;
  MultisigAccountGraphInfoDTO?: MultisigAccountGraphInfoDtoResolvers<ContextType>;
  AccountRestrictionsInfoDTO?: AccountRestrictionsInfoDtoResolvers<ContextType>;
  AccountRestrictionsDTO?: AccountRestrictionsDtoResolvers<ContextType>;
  AccountRestrictionDTO?: AccountRestrictionDtoResolvers<ContextType>;
  AccountRestrictionFlagsEnum?: AccountRestrictionFlagsEnumResolvers;
  BlockInfoDTO?: BlockInfoDtoResolvers<ContextType>;
  BlockMetaDTO?: BlockMetaDtoResolvers<ContextType>;
  ChainInfoDTO?: ChainInfoDtoResolvers<ContextType>;
  FinalizedBlockDTO?: FinalizedBlockDtoResolvers<ContextType>;
  TransactionInfoDTO?: TransactionInfoDtoResolvers<ContextType>;
  Meta?: MetaResolvers<ContextType>;
  FinalizationProofDTO?: FinalizationProofDtoResolvers<ContextType>;
  MessageGroup?: MessageGroupResolvers<ContextType>;
  BmTreeSignature?: BmTreeSignatureResolvers<ContextType>;
  ParentPublicKeySignaturePair?: ParentPublicKeySignaturePairResolvers<ContextType>;
  StageEnum?: StageEnumResolvers;
  HashLockInfoDTO?: HashLockInfoDtoResolvers<ContextType>;
  HashLockEntryDTO?: HashLockEntryDtoResolvers<ContextType>;
  LockStatus?: LockStatusResolvers;
  MerkleProofInfoDTO?: MerkleProofInfoDtoResolvers<ContextType>;
  MerklePathItemDTO?: MerklePathItemDtoResolvers<ContextType>;
  PositionEnum?: PositionEnumResolvers;
  MetadataInfoDTO?: MetadataInfoDtoResolvers<ContextType>;
  MetadataEntryDTO?: MetadataEntryDtoResolvers<ContextType>;
  MetadataTypeEnum?: MetadataTypeEnumResolvers;
  MosaicInfoDTO?: MosaicInfoDtoResolvers<ContextType>;
  MosaicDTO?: MosaicDtoResolvers<ContextType>;
  MosaicRestrictionDTO?: MosaicRestrictionDtoResolvers<ContextType>;
  NamespaceInfoDTO?: NamespaceInfoDtoResolvers<ContextType>;
  NamespaceMetaDTO?: NamespaceMetaDtoResolvers<ContextType>;
  NamespaceDTO?: NamespaceDtoResolvers<ContextType>;
  AliasDTO?: AliasDtoResolvers<ContextType>;
  AliasTypeEnum?: AliasTypeEnumResolvers;
  NamespaceRegistrationTypeEnum?: NamespaceRegistrationTypeEnumResolvers;
  NetworkConfigurationDTO?: NetworkConfigurationDtoResolvers<ContextType>;
  ChainPropertiesDTO?: ChainPropertiesDtoResolvers<ContextType>;
  NetworkPropertiesDTO?: NetworkPropertiesDtoResolvers<ContextType>;
  NodeIdentityEqualityStrategy?: NodeIdentityEqualityStrategyResolvers;
  PluginsPropertiesDTO?: PluginsPropertiesDtoResolvers<ContextType>;
  AccountKeyLinkNetworkPropertiesDTO?: AccountKeyLinkNetworkPropertiesDtoResolvers<ContextType>;
  AggregateNetworkPropertiesDTO?: AggregateNetworkPropertiesDtoResolvers<ContextType>;
  HashLockNetworkPropertiesDTO?: HashLockNetworkPropertiesDtoResolvers<ContextType>;
  SecretLockNetworkPropertiesDTO?: SecretLockNetworkPropertiesDtoResolvers<ContextType>;
  MetadataNetworkPropertiesDTO?: MetadataNetworkPropertiesDtoResolvers<ContextType>;
  MosaicNetworkPropertiesDTO?: MosaicNetworkPropertiesDtoResolvers<ContextType>;
  MultisigNetworkPropertiesDTO?: MultisigNetworkPropertiesDtoResolvers<ContextType>;
  NamespaceNetworkPropertiesDTO?: NamespaceNetworkPropertiesDtoResolvers<ContextType>;
  AccountRestrictionNetworkPropertiesDTO?: AccountRestrictionNetworkPropertiesDtoResolvers<ContextType>;
  MosaicRestrictionNetworkPropertiesDTO?: MosaicRestrictionNetworkPropertiesDtoResolvers<ContextType>;
  TransferNetworkPropertiesDTO?: TransferNetworkPropertiesDtoResolvers<ContextType>;
  NetworkTypeDTO?: NetworkTypeDtoResolvers<ContextType>;
  NodeHealthInfoDTO?: NodeHealthInfoDtoResolvers<ContextType>;
  NodeHealthDTO?: NodeHealthDtoResolvers<ContextType>;
  NodeStatusEnum?: NodeStatusEnumResolvers;
  NodeInfoDTO?: NodeInfoDtoResolvers<ContextType>;
  RolesTypeEnum?: RolesTypeEnumResolvers;
  StorageInfoDTO?: StorageInfoDtoResolvers<ContextType>;
  NodeTimeDTO?: NodeTimeDtoResolvers<ContextType>;
  CommunicationTimestampsDTO?: CommunicationTimestampsDtoResolvers<ContextType>;
  RentalFeesDTO?: RentalFeesDtoResolvers<ContextType>;
  SecretLockInfoDTO?: SecretLockInfoDtoResolvers<ContextType>;
  SecretLockEntryDTO?: SecretLockEntryDtoResolvers<ContextType>;
  LockHashAlgorithmEnum?: LockHashAlgorithmEnumResolvers;
  ServerInfoDTO?: ServerInfoDtoResolvers<ContextType>;
  ServerDTO?: ServerDtoResolvers<ContextType>;
  TransactionFeesDTO?: TransactionFeesDtoResolvers<ContextType>;
  TransactionStatusDTO?: TransactionStatusDtoResolvers<ContextType>;
  TransactionStatusEnum?: TransactionStatusEnumResolvers;
  TransactionGroupEnum?: TransactionGroupEnumResolvers;
  UnlockedAccountDTO?: UnlockedAccountDtoResolvers<ContextType>;
  AccountRestrictionsPage?: AccountRestrictionsPageResolvers<ContextType>;
  Pagination?: PaginationResolvers<ContextType>;
  Order?: OrderResolvers;
  AccountPage?: AccountPageResolvers<ContextType>;
  OrderBy?: OrderByResolvers;
  ResolutionStatementPage?: ResolutionStatementPageResolvers<ContextType>;
  ResolutionStatementInfoDTO?: ResolutionStatementInfoDtoResolvers<ContextType>;
  ResolutionStatementDTO?: ResolutionStatementDtoResolvers<ContextType>;
  ResolutionEntryDTO?: ResolutionEntryDtoResolvers<ContextType>;
  SourceDTO?: SourceDtoResolvers<ContextType>;
  BlockPage?: BlockPageResolvers<ContextType>;
  OrderBy2?: OrderBy2Resolvers;
  TransactionPage?: TransactionPageResolvers<ContextType>;
  TransactionTypeEnum?: TransactionTypeEnumResolvers;
  HashLockPage?: HashLockPageResolvers<ContextType>;
  MetadataPage?: MetadataPageResolvers<ContextType>;
  MetadataType?: MetadataTypeResolvers;
  MosaicRestrictionsPage?: MosaicRestrictionsPageResolvers<ContextType>;
  Data12ListItem?: Data12ListItemResolvers<ContextType>;
  EntryType?: EntryTypeResolvers;
  MosaicPage?: MosaicPageResolvers<ContextType>;
  NamespacePage?: NamespacePageResolvers<ContextType>;
  AliasType?: AliasTypeResolvers;
  RegistrationType?: RegistrationTypeResolvers;
  TransactionStatementPage?: TransactionStatementPageResolvers<ContextType>;
  TransactionStatementInfoDTO?: TransactionStatementInfoDtoResolvers<ContextType>;
  TransactionStatementDTO?: TransactionStatementDtoResolvers<ContextType>;
  ReceiptTypeEnum?: ReceiptTypeEnumResolvers;
  SecretLockPage?: SecretLockPageResolvers<ContextType>;
  Mutation?: MutationResolvers<ContextType>;
  AnnounceTransactionInfoDTO?: AnnounceTransactionInfoDtoResolvers<ContextType>;
  AccountsNamesDTO?: AccountsNamesDtoResolvers<ContextType>;
  AccountNamesDTO?: AccountNamesDtoResolvers<ContextType>;
  MosaicsNamesDTO?: MosaicsNamesDtoResolvers<ContextType>;
  MosaicNamesDTO?: MosaicNamesDtoResolvers<ContextType>;
  NamespaceNameDTO?: NamespaceNameDtoResolvers<ContextType>;
  Block?: BlockResolvers<ContextType>;
  BlockDTO?: BlockDtoResolvers<ContextType>;
  RentalFee?: RentalFeeResolvers<ContextType>;
}>;


/**
 * @deprecated
 * Use "Resolvers" root object instead. If you wish to get "IResolvers", add "typesPrefix: I" to your config.
 */
export type IResolvers<ContextType = MeshContext> = Resolvers<ContextType>;

import { MeshContext as BaseMeshContext, ProjectionOptions } from '@graphql-mesh/runtime';

export type SymbolSdk = {
  getAccountInfo: (args: QueryGetAccountInfoArgs, projectionOptions?: ProjectionOptions) => Promise<Query['getAccountInfo']>,
  getAccountInfoMerkle: (args: QueryGetAccountInfoMerkleArgs, projectionOptions?: ProjectionOptions) => Promise<Query['getAccountInfoMerkle']>,
  getAccountMultisig: (args: QueryGetAccountMultisigArgs, projectionOptions?: ProjectionOptions) => Promise<Query['getAccountMultisig']>,
  getAccountMultisigGraph: (args: QueryGetAccountMultisigGraphArgs, projectionOptions?: ProjectionOptions) => Promise<Query['getAccountMultisigGraph']>,
  getAccountMultisigMerkle: (args: QueryGetAccountMultisigMerkleArgs, projectionOptions?: ProjectionOptions) => Promise<Query['getAccountMultisigMerkle']>,
  getAccountRestrictions: (args: QueryGetAccountRestrictionsArgs, projectionOptions?: ProjectionOptions) => Promise<Query['getAccountRestrictions']>,
  getAccountRestrictionsMerkle: (args: QueryGetAccountRestrictionsMerkleArgs, projectionOptions?: ProjectionOptions) => Promise<Query['getAccountRestrictionsMerkle']>,
  getBlockByHeight: (args: QueryGetBlockByHeightArgs, projectionOptions?: ProjectionOptions) => Promise<Query['getBlockByHeight']>,
  getChainInfo: (args?: {}, projectionOptions?: ProjectionOptions) => Promise<Query['getChainInfo']>,
  getConfirmedTransaction: (args: QueryGetConfirmedTransactionArgs, projectionOptions?: ProjectionOptions) => Promise<Query['getConfirmedTransaction']>,
  getFinalizationProofAtEpoch: (args: QueryGetFinalizationProofAtEpochArgs, projectionOptions?: ProjectionOptions) => Promise<Query['getFinalizationProofAtEpoch']>,
  getFinalizationProofAtHeight: (args: QueryGetFinalizationProofAtHeightArgs, projectionOptions?: ProjectionOptions) => Promise<Query['getFinalizationProofAtHeight']>,
  getHashLock: (args: QueryGetHashLockArgs, projectionOptions?: ProjectionOptions) => Promise<Query['getHashLock']>,
  getHashLockMerkle: (args: QueryGetHashLockMerkleArgs, projectionOptions?: ProjectionOptions) => Promise<Query['getHashLockMerkle']>,
  getMerkleReceipts: (args: QueryGetMerkleReceiptsArgs, projectionOptions?: ProjectionOptions) => Promise<Query['getMerkleReceipts']>,
  getMerkleTransaction: (args: QueryGetMerkleTransactionArgs, projectionOptions?: ProjectionOptions) => Promise<Query['getMerkleTransaction']>,
  getMetadata: (args: QueryGetMetadataArgs, projectionOptions?: ProjectionOptions) => Promise<Query['getMetadata']>,
  getMetadataMerkle: (args: QueryGetMetadataMerkleArgs, projectionOptions?: ProjectionOptions) => Promise<Query['getMetadataMerkle']>,
  getMosaic: (args: QueryGetMosaicArgs, projectionOptions?: ProjectionOptions) => Promise<Query['getMosaic']>,
  getMosaicMerkle: (args: QueryGetMosaicMerkleArgs, projectionOptions?: ProjectionOptions) => Promise<Query['getMosaicMerkle']>,
  getMosaicRestrictions: (args: QueryGetMosaicRestrictionsArgs, projectionOptions?: ProjectionOptions) => Promise<Query['getMosaicRestrictions']>,
  getMosaicRestrictionsMerkle: (args: QueryGetMosaicRestrictionsMerkleArgs, projectionOptions?: ProjectionOptions) => Promise<Query['getMosaicRestrictionsMerkle']>,
  getNamespace: (args: QueryGetNamespaceArgs, projectionOptions?: ProjectionOptions) => Promise<Query['getNamespace']>,
  getNamespaceMerkle: (args: QueryGetNamespaceMerkleArgs, projectionOptions?: ProjectionOptions) => Promise<Query['getNamespaceMerkle']>,
  getNetworkProperties: (args?: {}, projectionOptions?: ProjectionOptions) => Promise<Query['getNetworkProperties']>,
  getNetworkType: (args?: {}, projectionOptions?: ProjectionOptions) => Promise<Query['getNetworkType']>,
  getNodeHealth: (args?: {}, projectionOptions?: ProjectionOptions) => Promise<Query['getNodeHealth']>,
  getNodeInfo: (args?: {}, projectionOptions?: ProjectionOptions) => Promise<Query['getNodeInfo']>,
  getNodePeers: (args: QueryGetNodePeersArgs, projectionOptions?: ProjectionOptions) => Promise<Query['getNodePeers']>,
  getNodeStorage: (args?: {}, projectionOptions?: ProjectionOptions) => Promise<Query['getNodeStorage']>,
  getNodeTime: (args?: {}, projectionOptions?: ProjectionOptions) => Promise<Query['getNodeTime']>,
  getPartialTransaction: (args: QueryGetPartialTransactionArgs, projectionOptions?: ProjectionOptions) => Promise<Query['getPartialTransaction']>,
  getRentalFees: (args?: {}, projectionOptions?: ProjectionOptions) => Promise<Query['getRentalFees']>,
  getSecretLock: (args: QueryGetSecretLockArgs, projectionOptions?: ProjectionOptions) => Promise<Query['getSecretLock']>,
  getSecretLockMerkle: (args: QueryGetSecretLockMerkleArgs, projectionOptions?: ProjectionOptions) => Promise<Query['getSecretLockMerkle']>,
  getServerInfo: (args?: {}, projectionOptions?: ProjectionOptions) => Promise<Query['getServerInfo']>,
  getTransactionFees: (args?: {}, projectionOptions?: ProjectionOptions) => Promise<Query['getTransactionFees']>,
  getTransactionStatus: (args: QueryGetTransactionStatusArgs, projectionOptions?: ProjectionOptions) => Promise<Query['getTransactionStatus']>,
  getUnconfirmedTransaction: (args: QueryGetUnconfirmedTransactionArgs, projectionOptions?: ProjectionOptions) => Promise<Query['getUnconfirmedTransaction']>,
  getUnlockedAccount: (args?: {}, projectionOptions?: ProjectionOptions) => Promise<Query['getUnlockedAccount']>,
  searchAccountRestrictions: (args: QuerySearchAccountRestrictionsArgs, projectionOptions?: ProjectionOptions) => Promise<Query['searchAccountRestrictions']>,
  searchAccounts: (args: QuerySearchAccountsArgs, projectionOptions?: ProjectionOptions) => Promise<Query['searchAccounts']>,
  searchAddressResolutionStatements: (args: QuerySearchAddressResolutionStatementsArgs, projectionOptions?: ProjectionOptions) => Promise<Query['searchAddressResolutionStatements']>,
  searchBlocks: (args: QuerySearchBlocksArgs, projectionOptions?: ProjectionOptions) => Promise<Query['searchBlocks']>,
  searchConfirmedTransactions: (args: QuerySearchConfirmedTransactionsArgs, projectionOptions?: ProjectionOptions) => Promise<Query['searchConfirmedTransactions']>,
  searchHashLock: (args: QuerySearchHashLockArgs, projectionOptions?: ProjectionOptions) => Promise<Query['searchHashLock']>,
  searchMetadataEntries: (args: QuerySearchMetadataEntriesArgs, projectionOptions?: ProjectionOptions) => Promise<Query['searchMetadataEntries']>,
  searchMosaicResolutionStatements: (args: QuerySearchMosaicResolutionStatementsArgs, projectionOptions?: ProjectionOptions) => Promise<Query['searchMosaicResolutionStatements']>,
  searchMosaicRestrictions: (args: QuerySearchMosaicRestrictionsArgs, projectionOptions?: ProjectionOptions) => Promise<Query['searchMosaicRestrictions']>,
  searchMosaics: (args: QuerySearchMosaicsArgs, projectionOptions?: ProjectionOptions) => Promise<Query['searchMosaics']>,
  searchNamespaces: (args: QuerySearchNamespacesArgs, projectionOptions?: ProjectionOptions) => Promise<Query['searchNamespaces']>,
  searchPartialTransactions: (args: QuerySearchPartialTransactionsArgs, projectionOptions?: ProjectionOptions) => Promise<Query['searchPartialTransactions']>,
  searchReceipts: (args: QuerySearchReceiptsArgs, projectionOptions?: ProjectionOptions) => Promise<Query['searchReceipts']>,
  searchSecretLock: (args: QuerySearchSecretLockArgs, projectionOptions?: ProjectionOptions) => Promise<Query['searchSecretLock']>,
  searchUnconfirmedTransactions: (args: QuerySearchUnconfirmedTransactionsArgs, projectionOptions?: ProjectionOptions) => Promise<Query['searchUnconfirmedTransactions']>,
  block: (args: QueryBlockArgs, projectionOptions?: ProjectionOptions) => Promise<Query['block']>,
  announceCosignatureTransaction: (args: MutationAnnounceCosignatureTransactionArgs, projectionOptions?: ProjectionOptions) => Promise<Mutation['announceCosignatureTransaction']>,
  announcePartialTransaction: (args: MutationAnnouncePartialTransactionArgs, projectionOptions?: ProjectionOptions) => Promise<Mutation['announcePartialTransaction']>,
  announceTransaction: (args: MutationAnnounceTransactionArgs, projectionOptions?: ProjectionOptions) => Promise<Mutation['announceTransaction']>,
  getAccountsInfo: (args: MutationGetAccountsInfoArgs, projectionOptions?: ProjectionOptions) => Promise<Mutation['getAccountsInfo']>,
  getAccountsNames: (args: MutationGetAccountsNamesArgs, projectionOptions?: ProjectionOptions) => Promise<Mutation['getAccountsNames']>,
  getConfirmedTransactions: (args: MutationGetConfirmedTransactionsArgs, projectionOptions?: ProjectionOptions) => Promise<Mutation['getConfirmedTransactions']>,
  getMosaics: (args: MutationGetMosaicsArgs, projectionOptions?: ProjectionOptions) => Promise<Mutation['getMosaics']>,
  getMosaicsNames: (args: MutationGetMosaicsNamesArgs, projectionOptions?: ProjectionOptions) => Promise<Mutation['getMosaicsNames']>,
  getNamespacesNames: (args: MutationGetNamespacesNamesArgs, projectionOptions?: ProjectionOptions) => Promise<Mutation['getNamespacesNames']>,
  getPartialTransactions: (args: MutationGetPartialTransactionsArgs, projectionOptions?: ProjectionOptions) => Promise<Mutation['getPartialTransactions']>,
  getTransactionStatuses: (args: MutationGetTransactionStatusesArgs, projectionOptions?: ProjectionOptions) => Promise<Mutation['getTransactionStatuses']>,
  getUnconfirmedTransactions: (args: MutationGetUnconfirmedTransactionsArgs, projectionOptions?: ProjectionOptions) => Promise<Mutation['getUnconfirmedTransactions']>
};

export type SymbolContext = { 
      Symbol: { api: SymbolSdk }, 
    };

export type MeshContext = SymbolContext & BaseMeshContext;