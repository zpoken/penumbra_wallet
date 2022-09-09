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

goog.provide('proto.penumbra.chain.DelibleNoteSource');

goog.require('jspb.BinaryReader');
goog.require('jspb.BinaryWriter');
goog.require('jspb.Message');
goog.require('proto.penumbra.chain.NoteSource');

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
proto.penumbra.chain.DelibleNoteSource = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.penumbra.chain.DelibleNoteSource, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.penumbra.chain.DelibleNoteSource.displayName = 'proto.penumbra.chain.DelibleNoteSource';
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
proto.penumbra.chain.DelibleNoteSource.prototype.toObject = function(opt_includeInstance) {
  return proto.penumbra.chain.DelibleNoteSource.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.penumbra.chain.DelibleNoteSource} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.penumbra.chain.DelibleNoteSource.toObject = function(includeInstance, msg) {
  var f, obj = {
    source: (f = msg.getSource()) && proto.penumbra.chain.NoteSource.toObject(includeInstance, f)
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
 * @return {!proto.penumbra.chain.DelibleNoteSource}
 */
proto.penumbra.chain.DelibleNoteSource.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.penumbra.chain.DelibleNoteSource;
  return proto.penumbra.chain.DelibleNoteSource.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.penumbra.chain.DelibleNoteSource} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.penumbra.chain.DelibleNoteSource}
 */
proto.penumbra.chain.DelibleNoteSource.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.penumbra.chain.NoteSource;
      reader.readMessage(value,proto.penumbra.chain.NoteSource.deserializeBinaryFromReader);
      msg.setSource(value);
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
proto.penumbra.chain.DelibleNoteSource.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.penumbra.chain.DelibleNoteSource.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.penumbra.chain.DelibleNoteSource} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.penumbra.chain.DelibleNoteSource.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getSource();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      proto.penumbra.chain.NoteSource.serializeBinaryToWriter
    );
  }
};


/**
 * optional NoteSource source = 1;
 * @return {?proto.penumbra.chain.NoteSource}
 */
proto.penumbra.chain.DelibleNoteSource.prototype.getSource = function() {
  return /** @type{?proto.penumbra.chain.NoteSource} */ (
    jspb.Message.getWrapperField(this, proto.penumbra.chain.NoteSource, 1));
};


/**
 * @param {?proto.penumbra.chain.NoteSource|undefined} value
 * @return {!proto.penumbra.chain.DelibleNoteSource} returns this
*/
proto.penumbra.chain.DelibleNoteSource.prototype.setSource = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.penumbra.chain.DelibleNoteSource} returns this
 */
proto.penumbra.chain.DelibleNoteSource.prototype.clearSource = function() {
  return this.setSource(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.penumbra.chain.DelibleNoteSource.prototype.hasSource = function() {
  return jspb.Message.getField(this, 1) != null;
};


