// @generated by protoc-gen-es v0.1.1 with parameter "target=js"
// @generated from file ibc/lightclients/solomachine/v2/solomachine.proto (package ibc.lightclients.solomachine.v2, syntax proto3)
/* eslint-disable */
/* @ts-nocheck */

import {Any, proto3} from "@bufbuild/protobuf";
import {ConnectionEnd} from "../../../core/connection/v1/connection_pb.js";
import {Channel} from "../../../core/channel/v1/channel_pb.js";

/**
 * DataType defines the type of solo machine proof being created. This is done
 * to preserve uniqueness of different data sign byte encodings.
 *
 * @generated from enum ibc.lightclients.solomachine.v2.DataType
 */
export const DataType = proto3.makeEnum(
  "ibc.lightclients.solomachine.v2.DataType",
  [
    {no: 0, name: "DATA_TYPE_UNINITIALIZED_UNSPECIFIED", localName: "UNINITIALIZED_UNSPECIFIED"},
    {no: 1, name: "DATA_TYPE_CLIENT_STATE", localName: "CLIENT_STATE"},
    {no: 2, name: "DATA_TYPE_CONSENSUS_STATE", localName: "CONSENSUS_STATE"},
    {no: 3, name: "DATA_TYPE_CONNECTION_STATE", localName: "CONNECTION_STATE"},
    {no: 4, name: "DATA_TYPE_CHANNEL_STATE", localName: "CHANNEL_STATE"},
    {no: 5, name: "DATA_TYPE_PACKET_COMMITMENT", localName: "PACKET_COMMITMENT"},
    {no: 6, name: "DATA_TYPE_PACKET_ACKNOWLEDGEMENT", localName: "PACKET_ACKNOWLEDGEMENT"},
    {no: 7, name: "DATA_TYPE_PACKET_RECEIPT_ABSENCE", localName: "PACKET_RECEIPT_ABSENCE"},
    {no: 8, name: "DATA_TYPE_NEXT_SEQUENCE_RECV", localName: "NEXT_SEQUENCE_RECV"},
    {no: 9, name: "DATA_TYPE_HEADER", localName: "HEADER"},
  ],
);

/**
 * ClientState defines a solo machine client that tracks the current consensus
 * state and if the client is frozen.
 *
 * @generated from message ibc.lightclients.solomachine.v2.ClientState
 */
export const ClientState = proto3.makeMessageType(
  "ibc.lightclients.solomachine.v2.ClientState",
  () => [
    { no: 1, name: "sequence", kind: "scalar", T: 4 /* ScalarType.UINT64 */ },
    { no: 2, name: "is_frozen", kind: "scalar", T: 8 /* ScalarType.BOOL */ },
    { no: 3, name: "consensus_state", kind: "message", T: ConsensusState },
    { no: 4, name: "allow_update_after_proposal", kind: "scalar", T: 8 /* ScalarType.BOOL */ },
  ],
);

/**
 * ConsensusState defines a solo machine consensus state. The sequence of a
 * consensus state is contained in the "height" key used in storing the
 * consensus state.
 *
 * @generated from message ibc.lightclients.solomachine.v2.ConsensusState
 */
export const ConsensusState = proto3.makeMessageType(
  "ibc.lightclients.solomachine.v2.ConsensusState",
  () => [
    { no: 1, name: "public_key", kind: "message", T: Any },
    { no: 2, name: "diversifier", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 3, name: "timestamp", kind: "scalar", T: 4 /* ScalarType.UINT64 */ },
  ],
);

/**
 * Header defines a solo machine consensus header
 *
 * @generated from message ibc.lightclients.solomachine.v2.Header
 */
export const Header = proto3.makeMessageType(
  "ibc.lightclients.solomachine.v2.Header",
  () => [
    { no: 1, name: "sequence", kind: "scalar", T: 4 /* ScalarType.UINT64 */ },
    { no: 2, name: "timestamp", kind: "scalar", T: 4 /* ScalarType.UINT64 */ },
    { no: 3, name: "signature", kind: "scalar", T: 12 /* ScalarType.BYTES */ },
    { no: 4, name: "new_public_key", kind: "message", T: Any },
    { no: 5, name: "new_diversifier", kind: "scalar", T: 9 /* ScalarType.STRING */ },
  ],
);

/**
 * Misbehaviour defines misbehaviour for a solo machine which consists
 * of a sequence and two signatures over different messages at that sequence.
 *
 * @generated from message ibc.lightclients.solomachine.v2.Misbehaviour
 */
export const Misbehaviour = proto3.makeMessageType(
  "ibc.lightclients.solomachine.v2.Misbehaviour",
  () => [
    { no: 1, name: "client_id", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 2, name: "sequence", kind: "scalar", T: 4 /* ScalarType.UINT64 */ },
    { no: 3, name: "signature_one", kind: "message", T: SignatureAndData },
    { no: 4, name: "signature_two", kind: "message", T: SignatureAndData },
  ],
);

/**
 * SignatureAndData contains a signature and the data signed over to create that
 * signature.
 *
 * @generated from message ibc.lightclients.solomachine.v2.SignatureAndData
 */
export const SignatureAndData = proto3.makeMessageType(
  "ibc.lightclients.solomachine.v2.SignatureAndData",
  () => [
    { no: 1, name: "signature", kind: "scalar", T: 12 /* ScalarType.BYTES */ },
    { no: 2, name: "data_type", kind: "enum", T: proto3.getEnumType(DataType) },
    { no: 3, name: "data", kind: "scalar", T: 12 /* ScalarType.BYTES */ },
    { no: 4, name: "timestamp", kind: "scalar", T: 4 /* ScalarType.UINT64 */ },
  ],
);

/**
 * TimestampedSignatureData contains the signature data and the timestamp of the
 * signature.
 *
 * @generated from message ibc.lightclients.solomachine.v2.TimestampedSignatureData
 */
export const TimestampedSignatureData = proto3.makeMessageType(
  "ibc.lightclients.solomachine.v2.TimestampedSignatureData",
  () => [
    { no: 1, name: "signature_data", kind: "scalar", T: 12 /* ScalarType.BYTES */ },
    { no: 2, name: "timestamp", kind: "scalar", T: 4 /* ScalarType.UINT64 */ },
  ],
);

/**
 * SignBytes defines the signed bytes used for signature verification.
 *
 * @generated from message ibc.lightclients.solomachine.v2.SignBytes
 */
export const SignBytes = proto3.makeMessageType(
  "ibc.lightclients.solomachine.v2.SignBytes",
  () => [
    { no: 1, name: "sequence", kind: "scalar", T: 4 /* ScalarType.UINT64 */ },
    { no: 2, name: "timestamp", kind: "scalar", T: 4 /* ScalarType.UINT64 */ },
    { no: 3, name: "diversifier", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 4, name: "data_type", kind: "enum", T: proto3.getEnumType(DataType) },
    { no: 5, name: "data", kind: "scalar", T: 12 /* ScalarType.BYTES */ },
  ],
);

/**
 * HeaderData returns the SignBytes data for update verification.
 *
 * @generated from message ibc.lightclients.solomachine.v2.HeaderData
 */
export const HeaderData = proto3.makeMessageType(
  "ibc.lightclients.solomachine.v2.HeaderData",
  () => [
    { no: 1, name: "new_pub_key", kind: "message", T: Any },
    { no: 2, name: "new_diversifier", kind: "scalar", T: 9 /* ScalarType.STRING */ },
  ],
);

/**
 * ClientStateData returns the SignBytes data for client state verification.
 *
 * @generated from message ibc.lightclients.solomachine.v2.ClientStateData
 */
export const ClientStateData = proto3.makeMessageType(
  "ibc.lightclients.solomachine.v2.ClientStateData",
  () => [
    { no: 1, name: "path", kind: "scalar", T: 12 /* ScalarType.BYTES */ },
    { no: 2, name: "client_state", kind: "message", T: Any },
  ],
);

/**
 * ConsensusStateData returns the SignBytes data for consensus state
 * verification.
 *
 * @generated from message ibc.lightclients.solomachine.v2.ConsensusStateData
 */
export const ConsensusStateData = proto3.makeMessageType(
  "ibc.lightclients.solomachine.v2.ConsensusStateData",
  () => [
    { no: 1, name: "path", kind: "scalar", T: 12 /* ScalarType.BYTES */ },
    { no: 2, name: "consensus_state", kind: "message", T: Any },
  ],
);

/**
 * ConnectionStateData returns the SignBytes data for connection state
 * verification.
 *
 * @generated from message ibc.lightclients.solomachine.v2.ConnectionStateData
 */
export const ConnectionStateData = proto3.makeMessageType(
  "ibc.lightclients.solomachine.v2.ConnectionStateData",
  () => [
    { no: 1, name: "path", kind: "scalar", T: 12 /* ScalarType.BYTES */ },
    { no: 2, name: "connection", kind: "message", T: ConnectionEnd },
  ],
);

/**
 * ChannelStateData returns the SignBytes data for channel state
 * verification.
 *
 * @generated from message ibc.lightclients.solomachine.v2.ChannelStateData
 */
export const ChannelStateData = proto3.makeMessageType(
  "ibc.lightclients.solomachine.v2.ChannelStateData",
  () => [
    { no: 1, name: "path", kind: "scalar", T: 12 /* ScalarType.BYTES */ },
    { no: 2, name: "channel", kind: "message", T: Channel },
  ],
);

/**
 * PacketCommitmentData returns the SignBytes data for packet commitment
 * verification.
 *
 * @generated from message ibc.lightclients.solomachine.v2.PacketCommitmentData
 */
export const PacketCommitmentData = proto3.makeMessageType(
  "ibc.lightclients.solomachine.v2.PacketCommitmentData",
  () => [
    { no: 1, name: "path", kind: "scalar", T: 12 /* ScalarType.BYTES */ },
    { no: 2, name: "commitment", kind: "scalar", T: 12 /* ScalarType.BYTES */ },
  ],
);

/**
 * PacketAcknowledgementData returns the SignBytes data for acknowledgement
 * verification.
 *
 * @generated from message ibc.lightclients.solomachine.v2.PacketAcknowledgementData
 */
export const PacketAcknowledgementData = proto3.makeMessageType(
  "ibc.lightclients.solomachine.v2.PacketAcknowledgementData",
  () => [
    { no: 1, name: "path", kind: "scalar", T: 12 /* ScalarType.BYTES */ },
    { no: 2, name: "acknowledgement", kind: "scalar", T: 12 /* ScalarType.BYTES */ },
  ],
);

/**
 * PacketReceiptAbsenceData returns the SignBytes data for
 * packet receipt absence verification.
 *
 * @generated from message ibc.lightclients.solomachine.v2.PacketReceiptAbsenceData
 */
export const PacketReceiptAbsenceData = proto3.makeMessageType(
  "ibc.lightclients.solomachine.v2.PacketReceiptAbsenceData",
  () => [
    { no: 1, name: "path", kind: "scalar", T: 12 /* ScalarType.BYTES */ },
  ],
);

/**
 * NextSequenceRecvData returns the SignBytes data for verification of the next
 * sequence to be received.
 *
 * @generated from message ibc.lightclients.solomachine.v2.NextSequenceRecvData
 */
export const NextSequenceRecvData = proto3.makeMessageType(
  "ibc.lightclients.solomachine.v2.NextSequenceRecvData",
  () => [
    { no: 1, name: "path", kind: "scalar", T: 12 /* ScalarType.BYTES */ },
    { no: 2, name: "next_seq_recv", kind: "scalar", T: 4 /* ScalarType.UINT64 */ },
  ],
);

