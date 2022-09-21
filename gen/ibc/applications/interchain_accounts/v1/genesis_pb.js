// @generated by protoc-gen-es v0.1.1 with parameter "target=js"
// @generated from file ibc/applications/interchain_accounts/v1/genesis.proto (package ibc.applications.interchain_accounts.v1, syntax proto3)
/* eslint-disable */
/* @ts-nocheck */

import {proto3} from "@bufbuild/protobuf";
import {Params} from "../controller/v1/controller_pb.js";
import {Params as Params$1} from "../host/v1/host_pb.js";

/**
 * GenesisState defines the interchain accounts genesis state
 *
 * @generated from message ibc.applications.interchain_accounts.v1.GenesisState
 */
export const GenesisState = proto3.makeMessageType(
  "ibc.applications.interchain_accounts.v1.GenesisState",
  () => [
    { no: 1, name: "controller_genesis_state", kind: "message", T: ControllerGenesisState },
    { no: 2, name: "host_genesis_state", kind: "message", T: HostGenesisState },
  ],
);

/**
 * ControllerGenesisState defines the interchain accounts controller genesis state
 *
 * @generated from message ibc.applications.interchain_accounts.v1.ControllerGenesisState
 */
export const ControllerGenesisState = proto3.makeMessageType(
  "ibc.applications.interchain_accounts.v1.ControllerGenesisState",
  () => [
    { no: 1, name: "active_channels", kind: "message", T: ActiveChannel, repeated: true },
    { no: 2, name: "interchain_accounts", kind: "message", T: RegisteredInterchainAccount, repeated: true },
    { no: 3, name: "ports", kind: "scalar", T: 9 /* ScalarType.STRING */, repeated: true },
    { no: 4, name: "params", kind: "message", T: Params },
  ],
);

/**
 * HostGenesisState defines the interchain accounts host genesis state
 *
 * @generated from message ibc.applications.interchain_accounts.v1.HostGenesisState
 */
export const HostGenesisState = proto3.makeMessageType(
  "ibc.applications.interchain_accounts.v1.HostGenesisState",
  () => [
    { no: 1, name: "active_channels", kind: "message", T: ActiveChannel, repeated: true },
    { no: 2, name: "interchain_accounts", kind: "message", T: RegisteredInterchainAccount, repeated: true },
    { no: 3, name: "port", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 4, name: "params", kind: "message", T: Params$1 },
  ],
);

/**
 * ActiveChannel contains a connection ID, port ID and associated active channel ID
 *
 * @generated from message ibc.applications.interchain_accounts.v1.ActiveChannel
 */
export const ActiveChannel = proto3.makeMessageType(
  "ibc.applications.interchain_accounts.v1.ActiveChannel",
  () => [
    { no: 1, name: "connection_id", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 2, name: "port_id", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 3, name: "channel_id", kind: "scalar", T: 9 /* ScalarType.STRING */ },
  ],
);

/**
 * RegisteredInterchainAccount contains a connection ID, port ID and associated interchain account address
 *
 * @generated from message ibc.applications.interchain_accounts.v1.RegisteredInterchainAccount
 */
export const RegisteredInterchainAccount = proto3.makeMessageType(
  "ibc.applications.interchain_accounts.v1.RegisteredInterchainAccount",
  () => [
    { no: 1, name: "connection_id", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 2, name: "port_id", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 3, name: "account_address", kind: "scalar", T: 9 /* ScalarType.STRING */ },
  ],
);

