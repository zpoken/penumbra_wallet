// source: src/proto/chain.proto
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

goog.provide('proto.penumbra.chain.AssetInfo');

goog.require('jspb.BinaryReader');
goog.require('jspb.BinaryWriter');
goog.require('jspb.Message');
goog.require('proto.penumbra.crypto.AssetId');
goog.require('proto.penumbra.crypto.Denom');

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
proto.penumbra.chain.AssetInfo = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.penumbra.chain.AssetInfo, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.penumbra.chain.AssetInfo.displayName = 'proto.penumbra.chain.AssetInfo';
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
proto.penumbra.chain.AssetInfo.prototype.toObject = function(opt_includeInstance) {
  return proto.penumbra.chain.AssetInfo.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.penumbra.chain.AssetInfo} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.penumbra.chain.AssetInfo.toObject = function(includeInstance, msg) {
  var f, obj = {
    assetId: (f = msg.getAssetId()) && proto.penumbra.crypto.AssetId.toObject(includeInstance, f),
    denom: (f = msg.getDenom()) && proto.penumbra.crypto.Denom.toObject(includeInstance, f),
    asOfBlockHeight: jspb.Message.getFieldWithDefault(msg, 3, 0),
    totalSupply: jspb.Message.getFieldWithDefault(msg, 4, 0)
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
 * @return {!proto.penumbra.chain.AssetInfo}
 */
proto.penumbra.chain.AssetInfo.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.penumbra.chain.AssetInfo;
  return proto.penumbra.chain.AssetInfo.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.penumbra.chain.AssetInfo} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.penumbra.chain.AssetInfo}
 */
proto.penumbra.chain.AssetInfo.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.penumbra.crypto.AssetId;
      reader.readMessage(value,proto.penumbra.crypto.AssetId.deserializeBinaryFromReader);
      msg.setAssetId(value);
      break;
    case 2:
      var value = new proto.penumbra.crypto.Denom;
      reader.readMessage(value,proto.penumbra.crypto.Denom.deserializeBinaryFromReader);
      msg.setDenom(value);
      break;
    case 3:
      var value = /** @type {number} */ (reader.readUint64());
      msg.setAsOfBlockHeight(value);
      break;
    case 4:
      var value = /** @type {number} */ (reader.readUint64());
      msg.setTotalSupply(value);
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
proto.penumbra.chain.AssetInfo.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.penumbra.chain.AssetInfo.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.penumbra.chain.AssetInfo} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.penumbra.chain.AssetInfo.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getAssetId();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      proto.penumbra.crypto.AssetId.serializeBinaryToWriter
    );
  }
  f = message.getDenom();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      proto.penumbra.crypto.Denom.serializeBinaryToWriter
    );
  }
  f = message.getAsOfBlockHeight();
  if (f !== 0) {
    writer.writeUint64(
      3,
      f
    );
  }
  f = message.getTotalSupply();
  if (f !== 0) {
    writer.writeUint64(
      4,
      f
    );
  }
};


/**
 * optional penumbra.crypto.AssetId asset_id = 1;
 * @return {?proto.penumbra.crypto.AssetId}
 */
proto.penumbra.chain.AssetInfo.prototype.getAssetId = function() {
  return /** @type{?proto.penumbra.crypto.AssetId} */ (
    jspb.Message.getWrapperField(this, proto.penumbra.crypto.AssetId, 1));
};


/**
 * @param {?proto.penumbra.crypto.AssetId|undefined} value
 * @return {!proto.penumbra.chain.AssetInfo} returns this
*/
proto.penumbra.chain.AssetInfo.prototype.setAssetId = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.penumbra.chain.AssetInfo} returns this
 */
proto.penumbra.chain.AssetInfo.prototype.clearAssetId = function() {
  return this.setAssetId(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.penumbra.chain.AssetInfo.prototype.hasAssetId = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional penumbra.crypto.Denom denom = 2;
 * @return {?proto.penumbra.crypto.Denom}
 */
proto.penumbra.chain.AssetInfo.prototype.getDenom = function() {
  return /** @type{?proto.penumbra.crypto.Denom} */ (
    jspb.Message.getWrapperField(this, proto.penumbra.crypto.Denom, 2));
};


/**
 * @param {?proto.penumbra.crypto.Denom|undefined} value
 * @return {!proto.penumbra.chain.AssetInfo} returns this
*/
proto.penumbra.chain.AssetInfo.prototype.setDenom = function(value) {
  return jspb.Message.setWrapperField(this, 2, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.penumbra.chain.AssetInfo} returns this
 */
proto.penumbra.chain.AssetInfo.prototype.clearDenom = function() {
  return this.setDenom(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.penumbra.chain.AssetInfo.prototype.hasDenom = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * optional uint64 as_of_block_height = 3;
 * @return {number}
 */
proto.penumbra.chain.AssetInfo.prototype.getAsOfBlockHeight = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 3, 0));
};


/**
 * @param {number} value
 * @return {!proto.penumbra.chain.AssetInfo} returns this
 */
proto.penumbra.chain.AssetInfo.prototype.setAsOfBlockHeight = function(value) {
  return jspb.Message.setProto3IntField(this, 3, value);
};


/**
 * optional uint64 total_supply = 4;
 * @return {number}
 */
proto.penumbra.chain.AssetInfo.prototype.getTotalSupply = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 4, 0));
};


/**
 * @param {number} value
 * @return {!proto.penumbra.chain.AssetInfo} returns this
 */
proto.penumbra.chain.AssetInfo.prototype.setTotalSupply = function(value) {
  return jspb.Message.setProto3IntField(this, 4, value);
};


