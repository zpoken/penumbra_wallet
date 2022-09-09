// source: src/proto/stake.proto
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

goog.provide('proto.penumbra.stake.CurrentConsensusKeys');

goog.require('jspb.BinaryReader');
goog.require('jspb.BinaryWriter');
goog.require('jspb.Message');
goog.require('proto.penumbra.crypto.ConsensusKey');

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
proto.penumbra.stake.CurrentConsensusKeys = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.penumbra.stake.CurrentConsensusKeys.repeatedFields_, null);
};
goog.inherits(proto.penumbra.stake.CurrentConsensusKeys, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.penumbra.stake.CurrentConsensusKeys.displayName = 'proto.penumbra.stake.CurrentConsensusKeys';
}

/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.penumbra.stake.CurrentConsensusKeys.repeatedFields_ = [1];



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
proto.penumbra.stake.CurrentConsensusKeys.prototype.toObject = function(opt_includeInstance) {
  return proto.penumbra.stake.CurrentConsensusKeys.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.penumbra.stake.CurrentConsensusKeys} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.penumbra.stake.CurrentConsensusKeys.toObject = function(includeInstance, msg) {
  var f, obj = {
    consensusKeysList: jspb.Message.toObjectList(msg.getConsensusKeysList(),
    proto.penumbra.crypto.ConsensusKey.toObject, includeInstance)
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
 * @return {!proto.penumbra.stake.CurrentConsensusKeys}
 */
proto.penumbra.stake.CurrentConsensusKeys.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.penumbra.stake.CurrentConsensusKeys;
  return proto.penumbra.stake.CurrentConsensusKeys.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.penumbra.stake.CurrentConsensusKeys} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.penumbra.stake.CurrentConsensusKeys}
 */
proto.penumbra.stake.CurrentConsensusKeys.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.penumbra.crypto.ConsensusKey;
      reader.readMessage(value,proto.penumbra.crypto.ConsensusKey.deserializeBinaryFromReader);
      msg.addConsensusKeys(value);
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
proto.penumbra.stake.CurrentConsensusKeys.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.penumbra.stake.CurrentConsensusKeys.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.penumbra.stake.CurrentConsensusKeys} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.penumbra.stake.CurrentConsensusKeys.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getConsensusKeysList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      1,
      f,
      proto.penumbra.crypto.ConsensusKey.serializeBinaryToWriter
    );
  }
};


/**
 * repeated penumbra.crypto.ConsensusKey consensus_keys = 1;
 * @return {!Array<!proto.penumbra.crypto.ConsensusKey>}
 */
proto.penumbra.stake.CurrentConsensusKeys.prototype.getConsensusKeysList = function() {
  return /** @type{!Array<!proto.penumbra.crypto.ConsensusKey>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.penumbra.crypto.ConsensusKey, 1));
};


/**
 * @param {!Array<!proto.penumbra.crypto.ConsensusKey>} value
 * @return {!proto.penumbra.stake.CurrentConsensusKeys} returns this
*/
proto.penumbra.stake.CurrentConsensusKeys.prototype.setConsensusKeysList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 1, value);
};


/**
 * @param {!proto.penumbra.crypto.ConsensusKey=} opt_value
 * @param {number=} opt_index
 * @return {!proto.penumbra.crypto.ConsensusKey}
 */
proto.penumbra.stake.CurrentConsensusKeys.prototype.addConsensusKeys = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 1, opt_value, proto.penumbra.crypto.ConsensusKey, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.penumbra.stake.CurrentConsensusKeys} returns this
 */
proto.penumbra.stake.CurrentConsensusKeys.prototype.clearConsensusKeysList = function() {
  return this.setConsensusKeysList([]);
};


