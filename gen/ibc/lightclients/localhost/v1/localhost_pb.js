// @generated by protoc-gen-es v0.1.1 with parameter "target=js"
// @generated from file ibc/lightclients/localhost/v1/localhost.proto (package ibc.lightclients.localhost.v1, syntax proto3)
/* eslint-disable */
/* @ts-nocheck */

import {proto3} from "@bufbuild/protobuf";
import {Height} from "../../../core/client/v1/client_pb.js";

/**
 * ClientState defines a loopback (localhost) client. It requires (read-only)
 * access to keys outside the client prefix.
 *
 * @generated from message ibc.lightclients.localhost.v1.ClientState
 */
export const ClientState = proto3.makeMessageType(
  "ibc.lightclients.localhost.v1.ClientState",
  () => [
    { no: 1, name: "chain_id", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 2, name: "height", kind: "message", T: Height },
  ],
);
