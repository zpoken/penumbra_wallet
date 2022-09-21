// @generated by protoc-gen-es v0.1.1 with parameter "target=js"
// @generated from file governance.proto (package penumbra.governance, syntax proto3)
/* eslint-disable */
/* @ts-nocheck */

import {proto3} from "@bufbuild/protobuf";

/**
 * A vote on a proposal.
 *
 * @generated from message penumbra.governance.Vote
 */
export const Vote = proto3.makeMessageType(
  "penumbra.governance.Vote",
  () => [
    { no: 1, name: "vote", kind: "enum", T: proto3.getEnumType(Vote_Vote) },
  ],
);

/**
 * A vote.
 *
 * @generated from enum penumbra.governance.Vote.Vote
 */
export const Vote_Vote = proto3.makeEnum(
  "penumbra.governance.Vote.Vote",
  [
    {no: 0, name: "ABSTAIN"},
    {no: 1, name: "YES"},
    {no: 2, name: "NO"},
    {no: 3, name: "NO_WITH_VETO"},
  ],
);

/**
 * The current state of a proposal.
 *
 * @generated from message penumbra.governance.ProposalState
 */
export const ProposalState = proto3.makeMessageType(
  "penumbra.governance.ProposalState",
  () => [
    { no: 2, name: "voting", kind: "message", T: ProposalState_Voting, oneof: "state" },
    { no: 3, name: "withdrawn", kind: "message", T: ProposalState_Withdrawn, oneof: "state" },
    { no: 4, name: "finished", kind: "message", T: ProposalState_Finished, oneof: "state" },
  ],
);

/**
 * Voting is in progress and the proposal has not yet concluded voting or been withdrawn.
 *
 * @generated from message penumbra.governance.ProposalState.Voting
 */
export const ProposalState_Voting = proto3.makeMessageType(
  "penumbra.governance.ProposalState.Voting",
  [],
  {localName: "ProposalState_Voting"},
);

/**
 * The proposal has been withdrawn but the voting period is not yet concluded.
 *
 * @generated from message penumbra.governance.ProposalState.Withdrawn
 */
export const ProposalState_Withdrawn = proto3.makeMessageType(
  "penumbra.governance.ProposalState.Withdrawn",
  () => [
    { no: 1, name: "reason", kind: "scalar", T: 9 /* ScalarType.STRING */ },
  ],
  {localName: "ProposalState_Withdrawn"},
);

/**
 * The voting period has ended, and the proposal has been assigned an outcome.
 *
 * @generated from message penumbra.governance.ProposalState.Finished
 */
export const ProposalState_Finished = proto3.makeMessageType(
  "penumbra.governance.ProposalState.Finished",
  () => [
    { no: 1, name: "outcome", kind: "message", T: ProposalOutcome },
  ],
  {localName: "ProposalState_Finished"},
);

/**
 * The outcome of a concluded proposal.
 *
 * @generated from message penumbra.governance.ProposalOutcome
 */
export const ProposalOutcome = proto3.makeMessageType(
  "penumbra.governance.ProposalOutcome",
  () => [
    { no: 1, name: "passed", kind: "message", T: ProposalOutcome_Passed, oneof: "outcome" },
    { no: 2, name: "failed", kind: "message", T: ProposalOutcome_Failed, oneof: "outcome" },
    { no: 3, name: "vetoed", kind: "message", T: ProposalOutcome_Vetoed, oneof: "outcome" },
  ],
);

/**
 * The proposal was passed.
 *
 * @generated from message penumbra.governance.ProposalOutcome.Passed
 */
export const ProposalOutcome_Passed = proto3.makeMessageType(
  "penumbra.governance.ProposalOutcome.Passed",
  [],
  {localName: "ProposalOutcome_Passed"},
);

/**
 * The proposal did not pass.
 *
 * @generated from message penumbra.governance.ProposalOutcome.Failed
 */
export const ProposalOutcome_Failed = proto3.makeMessageType(
  "penumbra.governance.ProposalOutcome.Failed",
  () => [
    { no: 1, name: "withdrawn_with_reason", kind: "scalar", T: 9 /* ScalarType.STRING */, opt: true },
  ],
  {localName: "ProposalOutcome_Failed"},
);

/**
 * The proposal did not pass, and was vetoed.
 *
 * @generated from message penumbra.governance.ProposalOutcome.Vetoed
 */
export const ProposalOutcome_Vetoed = proto3.makeMessageType(
  "penumbra.governance.ProposalOutcome.Vetoed",
  () => [
    { no: 1, name: "withdrawn_with_reason", kind: "scalar", T: 9 /* ScalarType.STRING */, opt: true },
  ],
  {localName: "ProposalOutcome_Vetoed"},
);

/**
 * A list of proposal ids.
 *
 * @generated from message penumbra.governance.ProposalList
 */
export const ProposalList = proto3.makeMessageType(
  "penumbra.governance.ProposalList",
  () => [
    { no: 1, name: "proposals", kind: "scalar", T: 4 /* ScalarType.UINT64 */, repeated: true },
  ],
);

