// source: view.proto
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

goog.provide('proto.penumbra.view.NotesRequest');

goog.require('jspb.BinaryReader');
goog.require('jspb.BinaryWriter');
goog.require('jspb.Message');
goog.require('proto.penumbra.crypto.AccountID');
goog.require('proto.penumbra.crypto.AddressIndex');
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
proto.penumbra.view.NotesRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.penumbra.view.NotesRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.penumbra.view.NotesRequest.displayName = 'proto.penumbra.view.NotesRequest';
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
proto.penumbra.view.NotesRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.penumbra.view.NotesRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.penumbra.view.NotesRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.penumbra.view.NotesRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    accountId: (f = msg.getAccountId()) && proto.penumbra.crypto.AccountID.toObject(includeInstance, f),
    includeSpent: jspb.Message.getBooleanFieldWithDefault(msg, 2, false),
    assetId: (f = msg.getAssetId()) && proto.penumbra.crypto.AssetId.toObject(includeInstance, f),
    addressIndex: (f = msg.getAddressIndex()) && proto.penumbra.crypto.AddressIndex.toObject(includeInstance, f),
    amountToSpend: jspb.Message.getFieldWithDefault(msg, 5, 0)
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
 * @return {!proto.penumbra.view.NotesRequest}
 */
proto.penumbra.view.NotesRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.penumbra.view.NotesRequest;
  return proto.penumbra.view.NotesRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.penumbra.view.NotesRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.penumbra.view.NotesRequest}
 */
proto.penumbra.view.NotesRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.penumbra.crypto.AccountID;
      reader.readMessage(value,proto.penumbra.crypto.AccountID.deserializeBinaryFromReader);
      msg.setAccountId(value);
      break;
    case 2:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setIncludeSpent(value);
      break;
    case 3:
      var value = new proto.penumbra.crypto.AssetId;
      reader.readMessage(value,proto.penumbra.crypto.AssetId.deserializeBinaryFromReader);
      msg.setAssetId(value);
      break;
    case 4:
      var value = new proto.penumbra.crypto.AddressIndex;
      reader.readMessage(value,proto.penumbra.crypto.AddressIndex.deserializeBinaryFromReader);
      msg.setAddressIndex(value);
      break;
    case 5:
      var value = /** @type {number} */ (reader.readUint64());
      msg.setAmountToSpend(value);
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
proto.penumbra.view.NotesRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.penumbra.view.NotesRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.penumbra.view.NotesRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.penumbra.view.NotesRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getAccountId();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      proto.penumbra.crypto.AccountID.serializeBinaryToWriter
    );
  }
  f = message.getIncludeSpent();
  if (f) {
    writer.writeBool(
      2,
      f
    );
  }
  f = message.getAssetId();
  if (f != null) {
    writer.writeMessage(
      3,
      f,
      proto.penumbra.crypto.AssetId.serializeBinaryToWriter
    );
  }
  f = message.getAddressIndex();
  if (f != null) {
    writer.writeMessage(
      4,
      f,
      proto.penumbra.crypto.AddressIndex.serializeBinaryToWriter
    );
  }
  f = message.getAmountToSpend();
  if (f !== 0) {
    writer.writeUint64(
      5,
      f
    );
  }
};


/**
 * optional penumbra.crypto.AccountID account_id = 1;
 * @return {?proto.penumbra.crypto.AccountID}
 */
proto.penumbra.view.NotesRequest.prototype.getAccountId = function() {
  return /** @type{?proto.penumbra.crypto.AccountID} */ (
    jspb.Message.getWrapperField(this, proto.penumbra.crypto.AccountID, 1));
};


/**
 * @param {?proto.penumbra.crypto.AccountID|undefined} value
 * @return {!proto.penumbra.view.NotesRequest} returns this
*/
proto.penumbra.view.NotesRequest.prototype.setAccountId = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.penumbra.view.NotesRequest} returns this
 */
proto.penumbra.view.NotesRequest.prototype.clearAccountId = function() {
  return this.setAccountId(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.penumbra.view.NotesRequest.prototype.hasAccountId = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional bool include_spent = 2;
 * @return {boolean}
 */
proto.penumbra.view.NotesRequest.prototype.getIncludeSpent = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 2, false));
};


/**
 * @param {boolean} value
 * @return {!proto.penumbra.view.NotesRequest} returns this
 */
proto.penumbra.view.NotesRequest.prototype.setIncludeSpent = function(value) {
  return jspb.Message.setProto3BooleanField(this, 2, value);
};


/**
 * optional penumbra.crypto.AssetId asset_id = 3;
 * @return {?proto.penumbra.crypto.AssetId}
 */
proto.penumbra.view.NotesRequest.prototype.getAssetId = function() {
  return /** @type{?proto.penumbra.crypto.AssetId} */ (
    jspb.Message.getWrapperField(this, proto.penumbra.crypto.AssetId, 3));
};


/**
 * @param {?proto.penumbra.crypto.AssetId|undefined} value
 * @return {!proto.penumbra.view.NotesRequest} returns this
*/
proto.penumbra.view.NotesRequest.prototype.setAssetId = function(value) {
  return jspb.Message.setWrapperField(this, 3, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.penumbra.view.NotesRequest} returns this
 */
proto.penumbra.view.NotesRequest.prototype.clearAssetId = function() {
  return this.setAssetId(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.penumbra.view.NotesRequest.prototype.hasAssetId = function() {
  return jspb.Message.getField(this, 3) != null;
};


/**
 * optional penumbra.crypto.AddressIndex address_index = 4;
 * @return {?proto.penumbra.crypto.AddressIndex}
 */
proto.penumbra.view.NotesRequest.prototype.getAddressIndex = function() {
  return /** @type{?proto.penumbra.crypto.AddressIndex} */ (
    jspb.Message.getWrapperField(this, proto.penumbra.crypto.AddressIndex, 4));
};


/**
 * @param {?proto.penumbra.crypto.AddressIndex|undefined} value
 * @return {!proto.penumbra.view.NotesRequest} returns this
*/
proto.penumbra.view.NotesRequest.prototype.setAddressIndex = function(value) {
  return jspb.Message.setWrapperField(this, 4, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.penumbra.view.NotesRequest} returns this
 */
proto.penumbra.view.NotesRequest.prototype.clearAddressIndex = function() {
  return this.setAddressIndex(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.penumbra.view.NotesRequest.prototype.hasAddressIndex = function() {
  return jspb.Message.getField(this, 4) != null;
};


/**
 * optional uint64 amount_to_spend = 5;
 * @return {number}
 */
proto.penumbra.view.NotesRequest.prototype.getAmountToSpend = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 5, 0));
};


/**
 * @param {number} value
 * @return {!proto.penumbra.view.NotesRequest} returns this
 */
proto.penumbra.view.NotesRequest.prototype.setAmountToSpend = function(value) {
  return jspb.Message.setProto3IntField(this, 5, value);
};

