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

goog.provide('proto.penumbra.crypto.Note');

goog.require('jspb.BinaryReader');
goog.require('jspb.BinaryWriter');
goog.require('jspb.Message');
goog.require('proto.penumbra.crypto.Address');
goog.require('proto.penumbra.crypto.Value');

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
proto.penumbra.crypto.Note = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.penumbra.crypto.Note, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.penumbra.crypto.Note.displayName = 'proto.penumbra.crypto.Note';
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
proto.penumbra.crypto.Note.prototype.toObject = function(opt_includeInstance) {
  return proto.penumbra.crypto.Note.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.penumbra.crypto.Note} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.penumbra.crypto.Note.toObject = function(includeInstance, msg) {
  var f, obj = {
    value: (f = msg.getValue()) && proto.penumbra.crypto.Value.toObject(includeInstance, f),
    noteBlinding: msg.getNoteBlinding_asB64(),
    address: (f = msg.getAddress()) && proto.penumbra.crypto.Address.toObject(includeInstance, f)
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
 * @return {!proto.penumbra.crypto.Note}
 */
proto.penumbra.crypto.Note.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.penumbra.crypto.Note;
  return proto.penumbra.crypto.Note.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.penumbra.crypto.Note} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.penumbra.crypto.Note}
 */
proto.penumbra.crypto.Note.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.penumbra.crypto.Value;
      reader.readMessage(value,proto.penumbra.crypto.Value.deserializeBinaryFromReader);
      msg.setValue(value);
      break;
    case 2:
      var value = /** @type {!Uint8Array} */ (reader.readBytes());
      msg.setNoteBlinding(value);
      break;
    case 3:
      var value = new proto.penumbra.crypto.Address;
      reader.readMessage(value,proto.penumbra.crypto.Address.deserializeBinaryFromReader);
      msg.setAddress(value);
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
proto.penumbra.crypto.Note.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.penumbra.crypto.Note.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.penumbra.crypto.Note} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.penumbra.crypto.Note.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getValue();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      proto.penumbra.crypto.Value.serializeBinaryToWriter
    );
  }
  f = message.getNoteBlinding_asU8();
  if (f.length > 0) {
    writer.writeBytes(
      2,
      f
    );
  }
  f = message.getAddress();
  if (f != null) {
    writer.writeMessage(
      3,
      f,
      proto.penumbra.crypto.Address.serializeBinaryToWriter
    );
  }
};


/**
 * optional Value value = 1;
 * @return {?proto.penumbra.crypto.Value}
 */
proto.penumbra.crypto.Note.prototype.getValue = function() {
  return /** @type{?proto.penumbra.crypto.Value} */ (
    jspb.Message.getWrapperField(this, proto.penumbra.crypto.Value, 1));
};


/**
 * @param {?proto.penumbra.crypto.Value|undefined} value
 * @return {!proto.penumbra.crypto.Note} returns this
*/
proto.penumbra.crypto.Note.prototype.setValue = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.penumbra.crypto.Note} returns this
 */
proto.penumbra.crypto.Note.prototype.clearValue = function() {
  return this.setValue(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.penumbra.crypto.Note.prototype.hasValue = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional bytes note_blinding = 2;
 * @return {!(string|Uint8Array)}
 */
proto.penumbra.crypto.Note.prototype.getNoteBlinding = function() {
  return /** @type {!(string|Uint8Array)} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * optional bytes note_blinding = 2;
 * This is a type-conversion wrapper around `getNoteBlinding()`
 * @return {string}
 */
proto.penumbra.crypto.Note.prototype.getNoteBlinding_asB64 = function() {
  return /** @type {string} */ (jspb.Message.bytesAsB64(
      this.getNoteBlinding()));
};


/**
 * optional bytes note_blinding = 2;
 * Note that Uint8Array is not supported on all browsers.
 * @see http://caniuse.com/Uint8Array
 * This is a type-conversion wrapper around `getNoteBlinding()`
 * @return {!Uint8Array}
 */
proto.penumbra.crypto.Note.prototype.getNoteBlinding_asU8 = function() {
  return /** @type {!Uint8Array} */ (jspb.Message.bytesAsU8(
      this.getNoteBlinding()));
};


/**
 * @param {!(string|Uint8Array)} value
 * @return {!proto.penumbra.crypto.Note} returns this
 */
proto.penumbra.crypto.Note.prototype.setNoteBlinding = function(value) {
  return jspb.Message.setProto3BytesField(this, 2, value);
};


/**
 * optional Address address = 3;
 * @return {?proto.penumbra.crypto.Address}
 */
proto.penumbra.crypto.Note.prototype.getAddress = function() {
  return /** @type{?proto.penumbra.crypto.Address} */ (
    jspb.Message.getWrapperField(this, proto.penumbra.crypto.Address, 3));
};


/**
 * @param {?proto.penumbra.crypto.Address|undefined} value
 * @return {!proto.penumbra.crypto.Note} returns this
*/
proto.penumbra.crypto.Note.prototype.setAddress = function(value) {
  return jspb.Message.setWrapperField(this, 3, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.penumbra.crypto.Note} returns this
 */
proto.penumbra.crypto.Note.prototype.clearAddress = function() {
  return this.setAddress(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.penumbra.crypto.Note.prototype.hasAddress = function() {
  return jspb.Message.getField(this, 3) != null;
};


