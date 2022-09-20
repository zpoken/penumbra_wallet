// source: dex.proto
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

goog.provide('proto.penumbra.dex.TradingPair');

goog.require('jspb.BinaryReader');
goog.require('jspb.BinaryWriter');
goog.require('jspb.Message');
goog.require('proto.penumbra.crypto.AssetId');

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
proto.penumbra.dex.TradingPair = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.penumbra.dex.TradingPair, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.penumbra.dex.TradingPair.displayName = 'proto.penumbra.dex.TradingPair';
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
proto.penumbra.dex.TradingPair.prototype.toObject = function(opt_includeInstance) {
  return proto.penumbra.dex.TradingPair.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.penumbra.dex.TradingPair} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.penumbra.dex.TradingPair.toObject = function(includeInstance, msg) {
  var f, obj = {
    asset1: (f = msg.getAsset1()) && proto.penumbra.crypto.AssetId.toObject(includeInstance, f),
    asset2: (f = msg.getAsset2()) && proto.penumbra.crypto.AssetId.toObject(includeInstance, f)
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
 * @return {!proto.penumbra.dex.TradingPair}
 */
proto.penumbra.dex.TradingPair.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.penumbra.dex.TradingPair;
  return proto.penumbra.dex.TradingPair.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.penumbra.dex.TradingPair} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.penumbra.dex.TradingPair}
 */
proto.penumbra.dex.TradingPair.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.penumbra.crypto.AssetId;
      reader.readMessage(value,proto.penumbra.crypto.AssetId.deserializeBinaryFromReader);
      msg.setAsset1(value);
      break;
    case 2:
      var value = new proto.penumbra.crypto.AssetId;
      reader.readMessage(value,proto.penumbra.crypto.AssetId.deserializeBinaryFromReader);
      msg.setAsset2(value);
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
proto.penumbra.dex.TradingPair.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.penumbra.dex.TradingPair.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.penumbra.dex.TradingPair} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.penumbra.dex.TradingPair.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getAsset1();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      proto.penumbra.crypto.AssetId.serializeBinaryToWriter
    );
  }
  f = message.getAsset2();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      proto.penumbra.crypto.AssetId.serializeBinaryToWriter
    );
  }
};


/**
 * optional penumbra.crypto.AssetId asset_1 = 1;
 * @return {?proto.penumbra.crypto.AssetId}
 */
proto.penumbra.dex.TradingPair.prototype.getAsset1 = function() {
  return /** @type{?proto.penumbra.crypto.AssetId} */ (
    jspb.Message.getWrapperField(this, proto.penumbra.crypto.AssetId, 1));
};


/**
 * @param {?proto.penumbra.crypto.AssetId|undefined} value
 * @return {!proto.penumbra.dex.TradingPair} returns this
*/
proto.penumbra.dex.TradingPair.prototype.setAsset1 = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.penumbra.dex.TradingPair} returns this
 */
proto.penumbra.dex.TradingPair.prototype.clearAsset1 = function() {
  return this.setAsset1(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.penumbra.dex.TradingPair.prototype.hasAsset1 = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional penumbra.crypto.AssetId asset_2 = 2;
 * @return {?proto.penumbra.crypto.AssetId}
 */
proto.penumbra.dex.TradingPair.prototype.getAsset2 = function() {
  return /** @type{?proto.penumbra.crypto.AssetId} */ (
    jspb.Message.getWrapperField(this, proto.penumbra.crypto.AssetId, 2));
};


/**
 * @param {?proto.penumbra.crypto.AssetId|undefined} value
 * @return {!proto.penumbra.dex.TradingPair} returns this
*/
proto.penumbra.dex.TradingPair.prototype.setAsset2 = function(value) {
  return jspb.Message.setWrapperField(this, 2, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.penumbra.dex.TradingPair} returns this
 */
proto.penumbra.dex.TradingPair.prototype.clearAsset2 = function() {
  return this.setAsset2(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.penumbra.dex.TradingPair.prototype.hasAsset2 = function() {
  return jspb.Message.getField(this, 2) != null;
};

