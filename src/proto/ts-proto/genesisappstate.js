// source: chain.proto
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

goog.provide('proto.penumbra.chain.GenesisAppState');
goog.provide('proto.penumbra.chain.GenesisAppState.Allocation');

goog.require('jspb.BinaryReader');
goog.require('jspb.BinaryWriter');
goog.require('jspb.Message');
goog.require('proto.penumbra.chain.ChainParameters');
goog.require('proto.penumbra.crypto.Address');
goog.require('proto.penumbra.stake.Validator');

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
proto.penumbra.chain.GenesisAppState = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.penumbra.chain.GenesisAppState.repeatedFields_, null);
};
goog.inherits(proto.penumbra.chain.GenesisAppState, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.penumbra.chain.GenesisAppState.displayName = 'proto.penumbra.chain.GenesisAppState';
}
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
proto.penumbra.chain.GenesisAppState.Allocation = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.penumbra.chain.GenesisAppState.Allocation, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.penumbra.chain.GenesisAppState.Allocation.displayName = 'proto.penumbra.chain.GenesisAppState.Allocation';
}

/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.penumbra.chain.GenesisAppState.repeatedFields_ = [2,3];



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
proto.penumbra.chain.GenesisAppState.prototype.toObject = function(opt_includeInstance) {
  return proto.penumbra.chain.GenesisAppState.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.penumbra.chain.GenesisAppState} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.penumbra.chain.GenesisAppState.toObject = function(includeInstance, msg) {
  var f, obj = {
    chainParams: (f = msg.getChainParams()) && proto.penumbra.chain.ChainParameters.toObject(includeInstance, f),
    validatorsList: jspb.Message.toObjectList(msg.getValidatorsList(),
    proto.penumbra.stake.Validator.toObject, includeInstance),
    allocationsList: jspb.Message.toObjectList(msg.getAllocationsList(),
    proto.penumbra.chain.GenesisAppState.Allocation.toObject, includeInstance)
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
 * @return {!proto.penumbra.chain.GenesisAppState}
 */
proto.penumbra.chain.GenesisAppState.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.penumbra.chain.GenesisAppState;
  return proto.penumbra.chain.GenesisAppState.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.penumbra.chain.GenesisAppState} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.penumbra.chain.GenesisAppState}
 */
proto.penumbra.chain.GenesisAppState.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.penumbra.chain.ChainParameters;
      reader.readMessage(value,proto.penumbra.chain.ChainParameters.deserializeBinaryFromReader);
      msg.setChainParams(value);
      break;
    case 2:
      var value = new proto.penumbra.stake.Validator;
      reader.readMessage(value,proto.penumbra.stake.Validator.deserializeBinaryFromReader);
      msg.addValidators(value);
      break;
    case 3:
      var value = new proto.penumbra.chain.GenesisAppState.Allocation;
      reader.readMessage(value,proto.penumbra.chain.GenesisAppState.Allocation.deserializeBinaryFromReader);
      msg.addAllocations(value);
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
proto.penumbra.chain.GenesisAppState.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.penumbra.chain.GenesisAppState.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.penumbra.chain.GenesisAppState} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.penumbra.chain.GenesisAppState.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getChainParams();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      proto.penumbra.chain.ChainParameters.serializeBinaryToWriter
    );
  }
  f = message.getValidatorsList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      2,
      f,
      proto.penumbra.stake.Validator.serializeBinaryToWriter
    );
  }
  f = message.getAllocationsList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      3,
      f,
      proto.penumbra.chain.GenesisAppState.Allocation.serializeBinaryToWriter
    );
  }
};





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
proto.penumbra.chain.GenesisAppState.Allocation.prototype.toObject = function(opt_includeInstance) {
  return proto.penumbra.chain.GenesisAppState.Allocation.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.penumbra.chain.GenesisAppState.Allocation} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.penumbra.chain.GenesisAppState.Allocation.toObject = function(includeInstance, msg) {
  var f, obj = {
    amount: jspb.Message.getFieldWithDefault(msg, 1, 0),
    denom: jspb.Message.getFieldWithDefault(msg, 2, ""),
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
 * @return {!proto.penumbra.chain.GenesisAppState.Allocation}
 */
proto.penumbra.chain.GenesisAppState.Allocation.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.penumbra.chain.GenesisAppState.Allocation;
  return proto.penumbra.chain.GenesisAppState.Allocation.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.penumbra.chain.GenesisAppState.Allocation} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.penumbra.chain.GenesisAppState.Allocation}
 */
proto.penumbra.chain.GenesisAppState.Allocation.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readUint64());
      msg.setAmount(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setDenom(value);
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
proto.penumbra.chain.GenesisAppState.Allocation.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.penumbra.chain.GenesisAppState.Allocation.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.penumbra.chain.GenesisAppState.Allocation} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.penumbra.chain.GenesisAppState.Allocation.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getAmount();
  if (f !== 0) {
    writer.writeUint64(
      1,
      f
    );
  }
  f = message.getDenom();
  if (f.length > 0) {
    writer.writeString(
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
 * optional uint64 amount = 1;
 * @return {number}
 */
proto.penumbra.chain.GenesisAppState.Allocation.prototype.getAmount = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {number} value
 * @return {!proto.penumbra.chain.GenesisAppState.Allocation} returns this
 */
proto.penumbra.chain.GenesisAppState.Allocation.prototype.setAmount = function(value) {
  return jspb.Message.setProto3IntField(this, 1, value);
};


/**
 * optional string denom = 2;
 * @return {string}
 */
proto.penumbra.chain.GenesisAppState.Allocation.prototype.getDenom = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.penumbra.chain.GenesisAppState.Allocation} returns this
 */
proto.penumbra.chain.GenesisAppState.Allocation.prototype.setDenom = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional penumbra.crypto.Address address = 3;
 * @return {?proto.penumbra.crypto.Address}
 */
proto.penumbra.chain.GenesisAppState.Allocation.prototype.getAddress = function() {
  return /** @type{?proto.penumbra.crypto.Address} */ (
    jspb.Message.getWrapperField(this, proto.penumbra.crypto.Address, 3));
};


/**
 * @param {?proto.penumbra.crypto.Address|undefined} value
 * @return {!proto.penumbra.chain.GenesisAppState.Allocation} returns this
*/
proto.penumbra.chain.GenesisAppState.Allocation.prototype.setAddress = function(value) {
  return jspb.Message.setWrapperField(this, 3, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.penumbra.chain.GenesisAppState.Allocation} returns this
 */
proto.penumbra.chain.GenesisAppState.Allocation.prototype.clearAddress = function() {
  return this.setAddress(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.penumbra.chain.GenesisAppState.Allocation.prototype.hasAddress = function() {
  return jspb.Message.getField(this, 3) != null;
};


/**
 * optional ChainParameters chain_params = 1;
 * @return {?proto.penumbra.chain.ChainParameters}
 */
proto.penumbra.chain.GenesisAppState.prototype.getChainParams = function() {
  return /** @type{?proto.penumbra.chain.ChainParameters} */ (
    jspb.Message.getWrapperField(this, proto.penumbra.chain.ChainParameters, 1));
};


/**
 * @param {?proto.penumbra.chain.ChainParameters|undefined} value
 * @return {!proto.penumbra.chain.GenesisAppState} returns this
*/
proto.penumbra.chain.GenesisAppState.prototype.setChainParams = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.penumbra.chain.GenesisAppState} returns this
 */
proto.penumbra.chain.GenesisAppState.prototype.clearChainParams = function() {
  return this.setChainParams(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.penumbra.chain.GenesisAppState.prototype.hasChainParams = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * repeated penumbra.stake.Validator validators = 2;
 * @return {!Array<!proto.penumbra.stake.Validator>}
 */
proto.penumbra.chain.GenesisAppState.prototype.getValidatorsList = function() {
  return /** @type{!Array<!proto.penumbra.stake.Validator>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.penumbra.stake.Validator, 2));
};


/**
 * @param {!Array<!proto.penumbra.stake.Validator>} value
 * @return {!proto.penumbra.chain.GenesisAppState} returns this
*/
proto.penumbra.chain.GenesisAppState.prototype.setValidatorsList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 2, value);
};


/**
 * @param {!proto.penumbra.stake.Validator=} opt_value
 * @param {number=} opt_index
 * @return {!proto.penumbra.stake.Validator}
 */
proto.penumbra.chain.GenesisAppState.prototype.addValidators = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 2, opt_value, proto.penumbra.stake.Validator, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.penumbra.chain.GenesisAppState} returns this
 */
proto.penumbra.chain.GenesisAppState.prototype.clearValidatorsList = function() {
  return this.setValidatorsList([]);
};


/**
 * repeated Allocation allocations = 3;
 * @return {!Array<!proto.penumbra.chain.GenesisAppState.Allocation>}
 */
proto.penumbra.chain.GenesisAppState.prototype.getAllocationsList = function() {
  return /** @type{!Array<!proto.penumbra.chain.GenesisAppState.Allocation>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.penumbra.chain.GenesisAppState.Allocation, 3));
};


/**
 * @param {!Array<!proto.penumbra.chain.GenesisAppState.Allocation>} value
 * @return {!proto.penumbra.chain.GenesisAppState} returns this
*/
proto.penumbra.chain.GenesisAppState.prototype.setAllocationsList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 3, value);
};


/**
 * @param {!proto.penumbra.chain.GenesisAppState.Allocation=} opt_value
 * @param {number=} opt_index
 * @return {!proto.penumbra.chain.GenesisAppState.Allocation}
 */
proto.penumbra.chain.GenesisAppState.prototype.addAllocations = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 3, opt_value, proto.penumbra.chain.GenesisAppState.Allocation, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.penumbra.chain.GenesisAppState} returns this
 */
proto.penumbra.chain.GenesisAppState.prototype.clearAllocationsList = function() {
  return this.setAllocationsList([]);
};

