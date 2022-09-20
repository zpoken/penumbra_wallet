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

goog.provide('proto.penumbra.transaction.Output');

goog.require('jspb.BinaryReader');
goog.require('jspb.BinaryWriter');
goog.require('jspb.Message');
goog.require('proto.penumbra.transaction.OutputBody');

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
proto.penumbra.transaction.Output = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.penumbra.transaction.Output, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.penumbra.transaction.Output.displayName = 'proto.penumbra.transaction.Output';
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
proto.penumbra.transaction.Output.prototype.toObject = function(opt_includeInstance) {
  return proto.penumbra.transaction.Output.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.penumbra.transaction.Output} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.penumbra.transaction.Output.toObject = function(includeInstance, msg) {
  var f, obj = {
    body: (f = msg.getBody()) && proto.penumbra.transaction.OutputBody.toObject(includeInstance, f),
    proof: msg.getProof_asB64()
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
 * @return {!proto.penumbra.transaction.Output}
 */
proto.penumbra.transaction.Output.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.penumbra.transaction.Output;
  return proto.penumbra.transaction.Output.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.penumbra.transaction.Output} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.penumbra.transaction.Output}
 */
proto.penumbra.transaction.Output.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.penumbra.transaction.OutputBody;
      reader.readMessage(value,proto.penumbra.transaction.OutputBody.deserializeBinaryFromReader);
      msg.setBody(value);
      break;
    case 2:
      var value = /** @type {!Uint8Array} */ (reader.readBytes());
      msg.setProof(value);
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
proto.penumbra.transaction.Output.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.penumbra.transaction.Output.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.penumbra.transaction.Output} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.penumbra.transaction.Output.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getBody();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      proto.penumbra.transaction.OutputBody.serializeBinaryToWriter
    );
  }
  f = message.getProof_asU8();
  if (f.length > 0) {
    writer.writeBytes(
      2,
      f
    );
  }
};


/**
 * optional OutputBody body = 1;
 * @return {?proto.penumbra.transaction.OutputBody}
 */
proto.penumbra.transaction.Output.prototype.getBody = function() {
  return /** @type{?proto.penumbra.transaction.OutputBody} */ (
    jspb.Message.getWrapperField(this, proto.penumbra.transaction.OutputBody, 1));
};


/**
 * @param {?proto.penumbra.transaction.OutputBody|undefined} value
 * @return {!proto.penumbra.transaction.Output} returns this
*/
proto.penumbra.transaction.Output.prototype.setBody = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.penumbra.transaction.Output} returns this
 */
proto.penumbra.transaction.Output.prototype.clearBody = function() {
  return this.setBody(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.penumbra.transaction.Output.prototype.hasBody = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional bytes proof = 2;
 * @return {!(string|Uint8Array)}
 */
proto.penumbra.transaction.Output.prototype.getProof = function() {
  return /** @type {!(string|Uint8Array)} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * optional bytes proof = 2;
 * This is a type-conversion wrapper around `getProof()`
 * @return {string}
 */
proto.penumbra.transaction.Output.prototype.getProof_asB64 = function() {
  return /** @type {string} */ (jspb.Message.bytesAsB64(
      this.getProof()));
};


/**
 * optional bytes proof = 2;
 * Note that Uint8Array is not supported on all browsers.
 * @see http://caniuse.com/Uint8Array
 * This is a type-conversion wrapper around `getProof()`
 * @return {!Uint8Array}
 */
proto.penumbra.transaction.Output.prototype.getProof_asU8 = function() {
  return /** @type {!Uint8Array} */ (jspb.Message.bytesAsU8(
      this.getProof()));
};


/**
 * @param {!(string|Uint8Array)} value
 * @return {!proto.penumbra.transaction.Output} returns this
 */
proto.penumbra.transaction.Output.prototype.setProof = function(value) {
  return jspb.Message.setProto3BytesField(this, 2, value);
};

