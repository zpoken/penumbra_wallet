// @generated by protoc-gen-es v0.1.1 with parameter "target=js"
// @generated from file dex.proto (package penumbra.dex, syntax proto3)
/* eslint-disable */
/* @ts-nocheck */

import {proto3} from "@bufbuild/protobuf";
import {Address, AssetId, Fee, NotePayload, Nullifier, ValueCommitment} from "./crypto_pb.js";

/**
 * A transaction action that submits a swap to the dex.
 *
 * @generated from message penumbra.dex.Swap
 */
export const Swap = proto3.makeMessageType(
  "penumbra.dex.Swap",
  () => [
    { no: 1, name: "proof", kind: "scalar", T: 12 /* ScalarType.BYTES */ },
    { no: 4, name: "body", kind: "message", T: SwapBody },
  ],
);

/**
 * A transaction action that obtains assets previously confirmed
 * via a Swap transaction. Does not include a spend authorization
 * signature, as it is only capable of consuming the NFT from a
 * Swap transaction.
 *
 * @generated from message penumbra.dex.SwapClaim
 */
export const SwapClaim = proto3.makeMessageType(
  "penumbra.dex.SwapClaim",
  () => [
    { no: 1, name: "proof", kind: "scalar", T: 12 /* ScalarType.BYTES */ },
    { no: 2, name: "body", kind: "message", T: SwapClaimBody },
  ],
);

/**
 * Encapsulates the authorized fields of the SwapClaim action, used in signing.
 *
 * @generated from message penumbra.dex.SwapClaimBody
 */
export const SwapClaimBody = proto3.makeMessageType(
  "penumbra.dex.SwapClaimBody",
  () => [
    { no: 1, name: "nullifier", kind: "message", T: Nullifier },
    { no: 2, name: "fee", kind: "message", T: Fee },
    { no: 3, name: "output_1", kind: "message", T: NotePayload },
    { no: 4, name: "output_2", kind: "message", T: NotePayload },
    { no: 6, name: "output_data", kind: "message", T: BatchSwapOutputData },
    { no: 7, name: "epoch_duration", kind: "scalar", T: 4 /* ScalarType.UINT64 */ },
  ],
);

/**
 * For storing the list of claimed swaps between the dex and shielded pool components.
 *
 * @generated from message penumbra.dex.ClaimedSwapList
 */
export const ClaimedSwapList = proto3.makeMessageType(
  "penumbra.dex.ClaimedSwapList",
  () => [
    { no: 1, name: "claims", kind: "message", T: ClaimedSwap, repeated: true },
  ],
);

/**
 * Represents a swap claimed in a particular transaction.
 *
 * @generated from message penumbra.dex.ClaimedSwap
 */
export const ClaimedSwap = proto3.makeMessageType(
  "penumbra.dex.ClaimedSwap",
  () => [
    { no: 1, name: "claim", kind: "message", T: SwapClaimBody },
    { no: 2, name: "txid", kind: "scalar", T: 12 /* ScalarType.BYTES */ },
  ],
);

/**
 * The authorized data of a Swap transaction.
 *
 * @generated from message penumbra.dex.SwapBody
 */
export const SwapBody = proto3.makeMessageType(
  "penumbra.dex.SwapBody",
  () => [
    { no: 1, name: "trading_pair", kind: "message", T: TradingPair },
    { no: 2, name: "delta_1_i", kind: "scalar", T: 4 /* ScalarType.UINT64 */ },
    { no: 3, name: "delta_2_i", kind: "scalar", T: 4 /* ScalarType.UINT64 */ },
    { no: 4, name: "fee_commitment", kind: "scalar", T: 12 /* ScalarType.BYTES */ },
    { no: 5, name: "swap_nft", kind: "message", T: NotePayload },
    { no: 6, name: "swap_ciphertext", kind: "scalar", T: 12 /* ScalarType.BYTES */ },
  ],
);

/**
 * @generated from message penumbra.dex.SwapPlaintext
 */
export const SwapPlaintext = proto3.makeMessageType(
  "penumbra.dex.SwapPlaintext",
  () => [
    { no: 1, name: "trading_pair", kind: "message", T: TradingPair },
    { no: 2, name: "delta_1_i", kind: "scalar", T: 4 /* ScalarType.UINT64 */ },
    { no: 3, name: "delta_2_i", kind: "scalar", T: 4 /* ScalarType.UINT64 */ },
    { no: 4, name: "claim_fee", kind: "message", T: Fee },
    { no: 5, name: "claim_address", kind: "message", T: Address },
  ],
);

/**
 * @generated from message penumbra.dex.MockFlowCiphertext
 */
export const MockFlowCiphertext = proto3.makeMessageType(
  "penumbra.dex.MockFlowCiphertext",
  () => [
    { no: 1, name: "value", kind: "scalar", T: 4 /* ScalarType.UINT64 */ },
  ],
);

/**
 * Holds two asset IDs. Ordering doesn't reflect trading direction, however
 * since the `AssetId` type is `Ord + PartialOrd`, there can be only one
 * `TradingPair` per asset pair.
 *
 * @generated from message penumbra.dex.TradingPair
 */
export const TradingPair = proto3.makeMessageType(
  "penumbra.dex.TradingPair",
  () => [
    { no: 1, name: "asset_1", kind: "message", T: AssetId },
    { no: 2, name: "asset_2", kind: "message", T: AssetId },
  ],
);

/**
 * Records the result of a batch swap on-chain.
 *
 * Used as a public input to a swap claim proof, as it implies the effective
 * clearing price for the batch.
 *
 * @generated from message penumbra.dex.BatchSwapOutputData
 */
export const BatchSwapOutputData = proto3.makeMessageType(
  "penumbra.dex.BatchSwapOutputData",
  () => [
    { no: 1, name: "delta_1", kind: "scalar", T: 4 /* ScalarType.UINT64 */ },
    { no: 2, name: "delta_2", kind: "scalar", T: 4 /* ScalarType.UINT64 */ },
    { no: 3, name: "lambda_1", kind: "scalar", T: 4 /* ScalarType.UINT64 */ },
    { no: 4, name: "lambda_2", kind: "scalar", T: 4 /* ScalarType.UINT64 */ },
    { no: 5, name: "success", kind: "scalar", T: 8 /* ScalarType.BOOL */ },
    { no: 6, name: "height", kind: "scalar", T: 4 /* ScalarType.UINT64 */ },
    { no: 7, name: "trading_pair", kind: "message", T: TradingPair },
  ],
);

/**
 * The data describing a trading function.
 *
 * This implicitly treats the trading function as being between assets 1 and 2,
 * without specifying what those assets are, to avoid duplicating data (each
 * asset ID alone is twice the size of the trading function).
 *
 * The trading function is `phi(R) = p*R_1 + q*R_2`.
 * This is used as a CFMM with constant `k` and fee `fee` (gamma).
 *
 * @generated from message penumbra.dex.TradingFunction
 */
export const TradingFunction = proto3.makeMessageType(
  "penumbra.dex.TradingFunction",
  () => [
    { no: 2, name: "fee", kind: "scalar", T: 1 /* ScalarType.DOUBLE */ },
    { no: 3, name: "k", kind: "scalar", T: 1 /* ScalarType.DOUBLE */ },
    { no: 4, name: "p", kind: "scalar", T: 1 /* ScalarType.DOUBLE */ },
    { no: 5, name: "q", kind: "scalar", T: 1 /* ScalarType.DOUBLE */ },
  ],
);

/**
 * The reserves of a position.
 *
 * Like a position, this implicitly treats the trading function as being
 * between assets 1 and 2, without specifying what those assets are, to avoid
 * duplicating data (each asset ID alone is four times the size of the
 * reserves).
 *
 * @generated from message penumbra.dex.Reserves
 */
export const Reserves = proto3.makeMessageType(
  "penumbra.dex.Reserves",
  () => [
    { no: 1, name: "r1", kind: "scalar", T: 4 /* ScalarType.UINT64 */ },
    { no: 2, name: "r2", kind: "scalar", T: 4 /* ScalarType.UINT64 */ },
  ],
);

/**
 * Data identifying a position.
 *
 * @generated from message penumbra.dex.Position
 */
export const Position = proto3.makeMessageType(
  "penumbra.dex.Position",
  () => [
    { no: 1, name: "pair", kind: "message", T: TradingPair },
    { no: 2, name: "phi", kind: "message", T: TradingFunction },
    { no: 3, name: "nonce", kind: "scalar", T: 12 /* ScalarType.BYTES */ },
  ],
);

/**
 * A hash of a `Position`.
 *
 * @generated from message penumbra.dex.PositionId
 */
export const PositionId = proto3.makeMessageType(
  "penumbra.dex.PositionId",
  () => [
    { no: 1, name: "inner", kind: "scalar", T: 12 /* ScalarType.BYTES */ },
  ],
);

/**
 * The state of a position.
 *
 * @generated from message penumbra.dex.PositionState
 */
export const PositionState = proto3.makeMessageType(
  "penumbra.dex.PositionState",
  () => [
    { no: 1, name: "state", kind: "enum", T: proto3.getEnumType(PositionState_PositionStateEnum) },
  ],
);

/**
 * @generated from enum penumbra.dex.PositionState.PositionStateEnum
 */
export const PositionState_PositionStateEnum = proto3.makeEnum(
  "penumbra.dex.PositionState.PositionStateEnum",
  [
    {no: 0, name: "OPENED"},
    {no: 1, name: "CLOSED"},
    {no: 2, name: "WITHDRAWN"},
    {no: 3, name: "CLAIMED"},
  ],
);

/**
 * An LPNFT tracking both ownership and state of a position.
 *
 * Tracking the state as part of the LPNFT means that all LP-related actions can
 * be authorized by spending funds: a state transition (e.g., closing a
 * position) is modeled as spending an "open position LPNFT" and minting a
 * "closed position LPNFT" for the same (globally unique) position ID.
 *
 * This means that the LP mechanics can be agnostic to the mechanism used to
 * record custody and spend authorization.  For instance, they can be recorded
 * in the shielded pool, where custody is based on off-chain keys, or they could
 * be recorded in a programmatic on-chain account (in the future, e.g., to
 * support interchain accounts).  This also means that LP-related actions don't
 * require any cryptographic implementation (proofs, signatures, etc), other
 * than hooking into the value commitment mechanism used for transaction
 * balances.
 *
 * @generated from message penumbra.dex.LpNft
 */
export const LpNft = proto3.makeMessageType(
  "penumbra.dex.LpNft",
  () => [
    { no: 1, name: "position_id", kind: "message", T: PositionId },
    { no: 2, name: "state", kind: "message", T: PositionState },
  ],
);

/**
 * A transaction action that opens a new position.
 *
 * This action's contribution to the transaction's value balance is to consume
 * the initial reserves and contribute an opened position NFT.
 *
 * @generated from message penumbra.dex.PositionOpen
 */
export const PositionOpen = proto3.makeMessageType(
  "penumbra.dex.PositionOpen",
  () => [
    { no: 1, name: "position", kind: "message", T: Position },
    { no: 2, name: "initial_reserves", kind: "message", T: Reserves },
  ],
);

/**
 * A transaction action that closes a position.
 *
 * This action's contribution to the transaction's value balance is to consume
 * an opened position NFT and contribute a closed position NFT.
 *
 * Closing a position does not immediately withdraw funds, because Penumbra
 * transactions (like any ZK transaction model) are early-binding: the prover
 * must know the state transition they prove knowledge of, and they cannot know
 * the final reserves with certainty until after the position has been deactivated.
 *
 * @generated from message penumbra.dex.PositionClose
 */
export const PositionClose = proto3.makeMessageType(
  "penumbra.dex.PositionClose",
  () => [
    { no: 1, name: "position_id", kind: "message", T: PositionId },
  ],
);

/**
 * A transaction action that withdraws funds from a closed position.
 *
 * This action's contribution to the transaction's value balance is to consume a
 * closed position NFT and contribute a withdrawn position NFT, as well as all
 * of the funds that were in the position at the time of closing.
 *
 * @generated from message penumbra.dex.PositionWithdraw
 */
export const PositionWithdraw = proto3.makeMessageType(
  "penumbra.dex.PositionWithdraw",
  () => [
    { no: 1, name: "position_id", kind: "message", T: PositionId },
    { no: 2, name: "reserves_commitment", kind: "message", T: ValueCommitment },
  ],
);

/**
 * A transaction action that claims retroactive rewards for a historical
 * position.
 *
 * This action's contribution to the transaction's value balance is to consume a
 * withdrawn position NFT and contribute its reward balance.
 *
 * @generated from message penumbra.dex.PositionRewardClaim
 */
export const PositionRewardClaim = proto3.makeMessageType(
  "penumbra.dex.PositionRewardClaim",
  () => [
    { no: 1, name: "position_id", kind: "message", T: PositionId },
    { no: 2, name: "rewards_commitment", kind: "message", T: ValueCommitment },
  ],
);

