// source: src/proto/crypto.proto
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

goog.provide('proto.penumbra.crypto.MerklePathChunk');

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
proto.penumbra.crypto.MerklePathChunk = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.penumbra.crypto.MerklePathChunk, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.penumbra.crypto.MerklePathChunk.displayName = 'proto.penumbra.crypto.MerklePathChunk';
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
proto.penumbra.crypto.MerklePathChunk.prototype.toObject = function(opt_includeInstance) {
  return proto.penumbra.crypto.MerklePathChunk.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.penumbra.crypto.MerklePathChunk} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.penumbra.crypto.MerklePathChunk.toObject = function(includeInstance, msg) {
  var f, obj = {
    sibling1: msg.getSibling1_asB64(),
    sibling2: msg.getSibling2_asB64(),
    sibling3: msg.getSibling3_asB64()
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
 * @return {!proto.penumbra.crypto.MerklePathChunk}
 */
proto.penumbra.crypto.MerklePathChunk.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.penumbra.crypto.MerklePathChunk;
  return proto.penumbra.crypto.MerklePathChunk.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.penumbra.crypto.MerklePathChunk} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.penumbra.crypto.MerklePathChunk}
 */
proto.penumbra.crypto.MerklePathChunk.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {!Uint8Array} */ (reader.readBytes());
      msg.setSibling1(value);
      break;
    case 2:
      var value = /** @type {!Uint8Array} */ (reader.readBytes());
      msg.setSibling2(value);
      break;
    case 3:
      var value = /** @type {!Uint8Array} */ (reader.readBytes());
      msg.setSibling3(value);
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
proto.penumbra.crypto.MerklePathChunk.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.penumbra.crypto.MerklePathChunk.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.penumbra.crypto.MerklePathChunk} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.penumbra.crypto.MerklePathChunk.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getSibling1_asU8();
  if (f.length > 0) {
    writer.writeBytes(
      1,
      f
    );
  }
  f = message.getSibling2_asU8();
  if (f.length > 0) {
    writer.writeBytes(
      2,
      f
    );
  }
  f = message.getSibling3_asU8();
  if (f.length > 0) {
    writer.writeBytes(
      3,
      f
    );
  }
};


/**
 * optional bytes sibling_1 = 1;
 * @return {!(string|Uint8Array)}
 */
proto.penumbra.crypto.MerklePathChunk.prototype.getSibling1 = function() {
  return /** @type {!(string|Uint8Array)} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * optional bytes sibling_1 = 1;
 * This is a type-conversion wrapper around `getSibling1()`
 * @return {string}
 */
proto.penumbra.crypto.MerklePathChunk.prototype.getSibling1_asB64 = function() {
  return /** @type {string} */ (jspb.Message.bytesAsB64(
      this.getSibling1()));
};


/**
 * optional bytes sibling_1 = 1;
 * Note that Uint8Array is not supported on all browsers.
 * @see http://caniuse.com/Uint8Array
 * This is a type-conversion wrapper around `getSibling1()`
 * @return {!Uint8Array}
 */
proto.penumbra.crypto.MerklePathChunk.prototype.getSibling1_asU8 = function() {
  return /** @type {!Uint8Array} */ (jspb.Message.bytesAsU8(
      this.getSibling1()));
};


/**
 * @param {!(string|Uint8Array)} value
 * @return {!proto.penumbra.crypto.MerklePathChunk} returns this
 */
proto.penumbra.crypto.MerklePathChunk.prototype.setSibling1 = function(value) {
  return jspb.Message.setProto3BytesField(this, 1, value);
};


/**
 * optional bytes sibling_2 = 2;
 * @return {!(string|Uint8Array)}
 */
proto.penumbra.crypto.MerklePathChunk.prototype.getSibling2 = function() {
  return /** @type {!(string|Uint8Array)} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * optional bytes sibling_2 = 2;
 * This is a type-conversion wrapper around `getSibling2()`
 * @return {string}
 */
proto.penumbra.crypto.MerklePathChunk.prototype.getSibling2_asB64 = function() {
  return /** @type {string} */ (jspb.Message.bytesAsB64(
      this.getSibling2()));
};


/**
 * optional bytes sibling_2 = 2;
 * Note that Uint8Array is not supported on all browsers.
 * @see http://caniuse.com/Uint8Array
 * This is a type-conversion wrapper around `getSibling2()`
 * @return {!Uint8Array}
 */
proto.penumbra.crypto.MerklePathChunk.prototype.getSibling2_asU8 = function() {
  return /** @type {!Uint8Array} */ (jspb.Message.bytesAsU8(
      this.getSibling2()));
};


/**
 * @param {!(string|Uint8Array)} value
 * @return {!proto.penumbra.crypto.MerklePathChunk} returns this
 */
proto.penumbra.crypto.MerklePathChunk.prototype.setSibling2 = function(value) {
  return jspb.Message.setProto3BytesField(this, 2, value);
};


/**
 * optional bytes sibling_3 = 3;
 * @return {!(string|Uint8Array)}
 */
proto.penumbra.crypto.MerklePathChunk.prototype.getSibling3 = function() {
  return /** @type {!(string|Uint8Array)} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/**
 * optional bytes sibling_3 = 3;
 * This is a type-conversion wrapper around `getSibling3()`
 * @return {string}
 */
proto.penumbra.crypto.MerklePathChunk.prototype.getSibling3_asB64 = function() {
  return /** @type {string} */ (jspb.Message.bytesAsB64(
      this.getSibling3()));
};


/**
 * optional bytes sibling_3 = 3;
 * Note that Uint8Array is not supported on all browsers.
 * @see http://caniuse.com/Uint8Array
 * This is a type-conversion wrapper around `getSibling3()`
 * @return {!Uint8Array}
 */
proto.penumbra.crypto.MerklePathChunk.prototype.getSibling3_asU8 = function() {
  return /** @type {!Uint8Array} */ (jspb.Message.bytesAsU8(
      this.getSibling3()));
};


/**
 * @param {!(string|Uint8Array)} value
 * @return {!proto.penumbra.crypto.MerklePathChunk} returns this
 */
proto.penumbra.crypto.MerklePathChunk.prototype.setSibling3 = function(value) {
  return jspb.Message.setProto3BytesField(this, 3, value);
};


