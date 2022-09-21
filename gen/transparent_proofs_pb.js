// @generated by protoc-gen-es v0.1.1 with parameter "target=js"
// @generated from file transparent_proofs.proto (package penumbra.transparent_proofs, syntax proto3)
/* eslint-disable */
/* @ts-nocheck */

import {proto3} from "@bufbuild/protobuf";
import {Address, Fee, NoteCommitmentProof} from "./crypto_pb.js";
import {TradingPair} from "./dex_pb.js";

/**
 * A Penumbra transparent Spend Proof.
 *
 * @generated from message penumbra.transparent_proofs.SpendProof
 */
export const SpendProof = proto3.makeMessageType(
  "penumbra.transparent_proofs.SpendProof",
  () => [
    { no: 1, name: "note_commitment_proof", kind: "message", T: NoteCommitmentProof },
    { no: 2, name: "g_d", kind: "scalar", T: 12 /* ScalarType.BYTES */ },
    { no: 3, name: "pk_d", kind: "scalar", T: 12 /* ScalarType.BYTES */ },
    { no: 4, name: "value_amount", kind: "scalar", T: 4 /* ScalarType.UINT64 */ },
    { no: 5, name: "value_asset_id", kind: "scalar", T: 12 /* ScalarType.BYTES */ },
    { no: 6, name: "v_blinding", kind: "scalar", T: 12 /* ScalarType.BYTES */ },
    { no: 8, name: "note_blinding", kind: "scalar", T: 12 /* ScalarType.BYTES */ },
    { no: 9, name: "spend_auth_randomizer", kind: "scalar", T: 12 /* ScalarType.BYTES */ },
    { no: 10, name: "ak", kind: "scalar", T: 12 /* ScalarType.BYTES */ },
    { no: 11, name: "nk", kind: "scalar", T: 12 /* ScalarType.BYTES */ },
    { no: 12, name: "ck_d", kind: "scalar", T: 12 /* ScalarType.BYTES */ },
  ],
);

/**
 * A Penumbra transparent output proof.
 *
 * @generated from message penumbra.transparent_proofs.OutputProof
 */
export const OutputProof = proto3.makeMessageType(
  "penumbra.transparent_proofs.OutputProof",
  () => [
    { no: 1, name: "g_d", kind: "scalar", T: 12 /* ScalarType.BYTES */ },
    { no: 2, name: "pk_d", kind: "scalar", T: 12 /* ScalarType.BYTES */ },
    { no: 3, name: "value_amount", kind: "scalar", T: 4 /* ScalarType.UINT64 */ },
    { no: 4, name: "value_asset_id", kind: "scalar", T: 12 /* ScalarType.BYTES */ },
    { no: 5, name: "v_blinding", kind: "scalar", T: 12 /* ScalarType.BYTES */ },
    { no: 6, name: "note_blinding", kind: "scalar", T: 12 /* ScalarType.BYTES */ },
    { no: 7, name: "esk", kind: "scalar", T: 12 /* ScalarType.BYTES */ },
    { no: 8, name: "ck_d", kind: "scalar", T: 12 /* ScalarType.BYTES */ },
  ],
);

/**
 * A Penumbra transparent SwapClaimProof.
 *
 * @generated from message penumbra.transparent_proofs.SwapClaimProof
 */
export const SwapClaimProof = proto3.makeMessageType(
  "penumbra.transparent_proofs.SwapClaimProof",
  () => [
    { no: 1, name: "swap_nft_asset_id", kind: "scalar", T: 12 /* ScalarType.BYTES */ },
    { no: 2, name: "claim_address", kind: "message", T: Address },
    { no: 4, name: "note_commitment_proof", kind: "message", T: NoteCommitmentProof },
    { no: 5, name: "note_blinding", kind: "scalar", T: 12 /* ScalarType.BYTES */ },
    { no: 6, name: "nk", kind: "scalar", T: 12 /* ScalarType.BYTES */ },
    { no: 10, name: "trading_pair", kind: "message", T: TradingPair },
    { no: 11, name: "delta_1_i", kind: "scalar", T: 4 /* ScalarType.UINT64 */ },
    { no: 12, name: "delta_2_i", kind: "scalar", T: 4 /* ScalarType.UINT64 */ },
    { no: 20, name: "lambda_1", kind: "scalar", T: 4 /* ScalarType.UINT64 */ },
    { no: 21, name: "lambda_2", kind: "scalar", T: 4 /* ScalarType.UINT64 */ },
    { no: 30, name: "note_blinding_1", kind: "scalar", T: 12 /* ScalarType.BYTES */ },
    { no: 31, name: "esk_1", kind: "scalar", T: 12 /* ScalarType.BYTES */ },
    { no: 40, name: "note_blinding_2", kind: "scalar", T: 12 /* ScalarType.BYTES */ },
    { no: 41, name: "esk_2", kind: "scalar", T: 12 /* ScalarType.BYTES */ },
  ],
);

/**
 * A Penumbra transparent SwapProof.
 *
 *
 * @exclude
 * Describes swap inputs
 *
 * @generated from message penumbra.transparent_proofs.SwapProof
 */
export const SwapProof = proto3.makeMessageType(
  "penumbra.transparent_proofs.SwapProof",
  () => [
    { no: 1, name: "delta_1", kind: "scalar", T: 4 /* ScalarType.UINT64 */ },
    { no: 2, name: "t1", kind: "scalar", T: 12 /* ScalarType.BYTES */ },
    { no: 3, name: "delta_2", kind: "scalar", T: 4 /* ScalarType.UINT64 */ },
    { no: 4, name: "t2", kind: "scalar", T: 12 /* ScalarType.BYTES */ },
    { no: 10, name: "fee", kind: "message", T: Fee },
    { no: 11, name: "fee_blinding", kind: "scalar", T: 12 /* ScalarType.BYTES */ },
    { no: 30, name: "swap_nft_asset_id", kind: "scalar", T: 12 /* ScalarType.BYTES */ },
    { no: 40, name: "claim_address", kind: "message", T: Address },
    { no: 42, name: "note_blinding", kind: "scalar", T: 12 /* ScalarType.BYTES */ },
    { no: 43, name: "esk", kind: "scalar", T: 12 /* ScalarType.BYTES */ },
  ],
);

