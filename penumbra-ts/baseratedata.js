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

goog.provide('proto.penumbra.stake.BaseRateData');

goog.require('jspb.BinaryReader');
goog.require('jspb.BinaryWriter');
goog.require('jspb.Message');

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
proto.penumbra.stake.BaseRateData = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.penumbra.stake.BaseRateData, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.penumbra.stake.BaseRateData.displayName = 'proto.penumbra.stake.BaseRateData';
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
proto.penumbra.stake.BaseRateData.prototype.toObject = function(opt_includeInstance) {
  return proto.penumbra.stake.BaseRateData.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.penumbra.stake.BaseRateData} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.penumbra.stake.BaseRateData.toObject = function(includeInstance, msg) {
  var f, obj = {
    epochIndex: jspb.Message.getFieldWithDefault(msg, 1, 0),
    baseRewardRate: jspb.Message.getFieldWithDefault(msg, 2, 0),
    baseExchangeRate: jspb.Message.getFieldWithDefault(msg, 3, 0)
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
 * @return {!proto.penumbra.stake.BaseRateData}
 */
proto.penumbra.stake.BaseRateData.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.penumbra.stake.BaseRateData;
  return proto.penumbra.stake.BaseRateData.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.penumbra.stake.BaseRateData} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.penumbra.stake.BaseRateData}
 */
proto.penumbra.stake.BaseRateData.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readUint64());
      msg.setEpochIndex(value);
      break;
    case 2:
      var value = /** @type {number} */ (reader.readUint64());
      msg.setBaseRewardRate(value);
      break;
    case 3:
      var value = /** @type {number} */ (reader.readUint64());
      msg.setBaseExchangeRate(value);
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
proto.penumbra.stake.BaseRateData.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.penumbra.stake.BaseRateData.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.penumbra.stake.BaseRateData} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.penumbra.stake.BaseRateData.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getEpochIndex();
  if (f !== 0) {
    writer.writeUint64(
      1,
      f
    );
  }
  f = message.getBaseRewardRate();
  if (f !== 0) {
    writer.writeUint64(
      2,
      f
    );
  }
  f = message.getBaseExchangeRate();
  if (f !== 0) {
    writer.writeUint64(
      3,
      f
    );
  }
};


/**
 * optional uint64 epoch_index = 1;
 * @return {number}
 */
proto.penumbra.stake.BaseRateData.prototype.getEpochIndex = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {number} value
 * @return {!proto.penumbra.stake.BaseRateData} returns this
 */
proto.penumbra.stake.BaseRateData.prototype.setEpochIndex = function(value) {
  return jspb.Message.setProto3IntField(this, 1, value);
};


/**
 * optional uint64 base_reward_rate = 2;
 * @return {number}
 */
proto.penumbra.stake.BaseRateData.prototype.getBaseRewardRate = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};


/**
 * @param {number} value
 * @return {!proto.penumbra.stake.BaseRateData} returns this
 */
proto.penumbra.stake.BaseRateData.prototype.setBaseRewardRate = function(value) {
  return jspb.Message.setProto3IntField(this, 2, value);
};


/**
 * optional uint64 base_exchange_rate = 3;
 * @return {number}
 */
proto.penumbra.stake.BaseRateData.prototype.getBaseExchangeRate = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 3, 0));
};


/**
 * @param {number} value
 * @return {!proto.penumbra.stake.BaseRateData} returns this
 */
proto.penumbra.stake.BaseRateData.prototype.setBaseExchangeRate = function(value) {
  return jspb.Message.setProto3IntField(this, 3, value);
};


