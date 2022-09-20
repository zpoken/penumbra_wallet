// source: transaction.proto
/**
 * @fileoverview
 * @enhanceable
 * @suppress {missingRequire} reports error on implicit type usages.
 * @suppress {messageConventions} JS Compiler reports an error if a variable or
 *     field starts with 'MSG_' and isn't a translatable message.
 * @public
 */
// GENERATED CODE -- DO NOT EDIT!
/* eslint-disable */
// @ts-nocheck

goog.provide('proto.penumbra.transaction.ValidatorVoteBody');

goog.require('jspb.BinaryReader');
goog.require('jspb.BinaryWriter');
goog.require('jspb.Message');
goog.require('proto.penumbra.crypto.GovernanceKey');
goog.require('proto.penumbra.crypto.IdentityKey');
goog.require('proto.penumbra.governance.Vote');

/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.penumbra.transaction.ValidatorVoteBody = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.penumbra.transaction.ValidatorVoteBody, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.penumbra.transaction.ValidatorVoteBody.displayName = 'proto.penumbra.transaction.ValidatorVoteBody';
}



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.penumbra.transaction.ValidatorVoteBody.prototype.toObject = function(opt_includeInstance) {
  return proto.penumbra.transaction.ValidatorVoteBody.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.penumbra.transaction.ValidatorVoteBody} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.penumbra.transaction.ValidatorVoteBody.toObject = function(includeInstance, msg) {
  var f, obj = {
    proposal: jspb.Message.getFieldWithDefault(msg, 1, 0),
    vote: (f = msg.getVote()) && proto.penumbra.governance.Vote.toObject(includeInstance, f),
    identityKey: (f = msg.getIdentityKey()) && proto.penumbra.crypto.IdentityKey.toObject(includeInstance, f),
    governanceKey: (f = msg.getGovernanceKey()) && proto.penumbra.crypto.GovernanceKey.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.penumbra.transaction.ValidatorVoteBody}
 */
proto.penumbra.transaction.ValidatorVoteBody.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.penumbra.transaction.ValidatorVoteBody;
  return proto.penumbra.transaction.ValidatorVoteBody.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.penumbra.transaction.ValidatorVoteBody} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.penumbra.transaction.ValidatorVoteBody}
 */
proto.penumbra.transaction.ValidatorVoteBody.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readUint64());
      msg.setProposal(value);
      break;
    case 2:
      var value = new proto.penumbra.governance.Vote;
      reader.readMessage(value,proto.penumbra.governance.Vote.deserializeBinaryFromReader);
      msg.setVote(value);
      break;
    case 3:
      var value = new proto.penumbra.crypto.IdentityKey;
      reader.readMessage(value,proto.penumbra.crypto.IdentityKey.deserializeBinaryFromReader);
      msg.setIdentityKey(value);
      break;
    case 4:
      var value = new proto.penumbra.crypto.GovernanceKey;
      reader.readMessage(value,proto.penumbra.crypto.GovernanceKey.deserializeBinaryFromReader);
      msg.setGovernanceKey(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.penumbra.transaction.ValidatorVoteBody.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.penumbra.transaction.ValidatorVoteBody.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.penumbra.transaction.ValidatorVoteBody} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.penumbra.transaction.ValidatorVoteBody.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getProposal();
  if (f !== 0) {
    writer.writeUint64(
      1,
      f
    );
  }
  f = message.getVote();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      proto.penumbra.governance.Vote.serializeBinaryToWriter
    );
  }
  f = message.getIdentityKey();
  if (f != null) {
    writer.writeMessage(
      3,
      f,
      proto.penumbra.crypto.IdentityKey.serializeBinaryToWriter
    );
  }
  f = message.getGovernanceKey();
  if (f != null) {
    writer.writeMessage(
      4,
      f,
      proto.penumbra.crypto.GovernanceKey.serializeBinaryToWriter
    );
  }
};


/**
 * optional uint64 proposal = 1;
 * @return {number}
 */
proto.penumbra.transaction.ValidatorVoteBody.prototype.getProposal = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {number} value
 * @return {!proto.penumbra.transaction.ValidatorVoteBody} returns this
 */
proto.penumbra.transaction.ValidatorVoteBody.prototype.setProposal = function(value) {
  return jspb.Message.setProto3IntField(this, 1, value);
};


/**
 * optional penumbra.governance.Vote vote = 2;
 * @return {?proto.penumbra.governance.Vote}
 */
proto.penumbra.transaction.ValidatorVoteBody.prototype.getVote = function() {
  return /** @type{?proto.penumbra.governance.Vote} */ (
    jspb.Message.getWrapperField(this, proto.penumbra.governance.Vote, 2));
};


/**
 * @param {?proto.penumbra.governance.Vote|undefined} value
 * @return {!proto.penumbra.transaction.ValidatorVoteBody} returns this
*/
proto.penumbra.transaction.ValidatorVoteBody.prototype.setVote = function(value) {
  return jspb.Message.setWrapperField(this, 2, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.penumbra.transaction.ValidatorVoteBody} returns this
 */
proto.penumbra.transaction.ValidatorVoteBody.prototype.clearVote = function() {
  return this.setVote(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.penumbra.transaction.ValidatorVoteBody.prototype.hasVote = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * optional penumbra.crypto.IdentityKey identity_key = 3;
 * @return {?proto.penumbra.crypto.IdentityKey}
 */
proto.penumbra.transaction.ValidatorVoteBody.prototype.getIdentityKey = function() {
  return /** @type{?proto.penumbra.crypto.IdentityKey} */ (
    jspb.Message.getWrapperField(this, proto.penumbra.crypto.IdentityKey, 3));
};


/**
 * @param {?proto.penumbra.crypto.IdentityKey|undefined} value
 * @return {!proto.penumbra.transaction.ValidatorVoteBody} returns this
*/
proto.penumbra.transaction.ValidatorVoteBody.prototype.setIdentityKey = function(value) {
  return jspb.Message.setWrapperField(this, 3, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.penumbra.transaction.ValidatorVoteBody} returns this
 */
proto.penumbra.transaction.ValidatorVoteBody.prototype.clearIdentityKey = function() {
  return this.setIdentityKey(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.penumbra.transaction.ValidatorVoteBody.prototype.hasIdentityKey = function() {
  return jspb.Message.getField(this, 3) != null;
};


/**
 * optional penumbra.crypto.GovernanceKey governance_key = 4;
 * @return {?proto.penumbra.crypto.GovernanceKey}
 */
proto.penumbra.transaction.ValidatorVoteBody.prototype.getGovernanceKey = function() {
  return /** @type{?proto.penumbra.crypto.GovernanceKey} */ (
    jspb.Message.getWrapperField(this, proto.penumbra.crypto.GovernanceKey, 4));
};


/**
 * @param {?proto.penumbra.crypto.GovernanceKey|undefined} value
 * @return {!proto.penumbra.transaction.ValidatorVoteBody} returns this
*/
proto.penumbra.transaction.ValidatorVoteBody.prototype.setGovernanceKey = function(value) {
  return jspb.Message.setWrapperField(this, 4, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.penumbra.transaction.ValidatorVoteBody} returns this
 */
proto.penumbra.transaction.ValidatorVoteBody.prototype.clearGovernanceKey = function() {
  return this.setGovernanceKey(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.penumbra.transaction.ValidatorVoteBody.prototype.hasGovernanceKey = function() {
  return jspb.Message.getField(this, 4) != null;
};

