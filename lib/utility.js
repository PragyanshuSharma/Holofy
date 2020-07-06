const _ = require("lodash");
const mongoose = require("mongoose");

/**
 * Numeric characters string: 0-9.
 * @type {string}
 */
const NUMERIC = "0123456789";

/**
 * Utility class define common utility function that used throughout the system.
 *
 * @class Utility
 */
class Utility {
  /**
   * Generate a string of given length of random numeric digits.
   * @param {Number} length - desired output length. Must be > 0;
   * @return {string} generated output string.
   */
  static randomNumeric(length) {
    if (!_.isNumber(length) || length < 1) {
      throw new Error("length should be a non zero number.");
    }

    let random = [];
    for (let i = 0; i < length; i++) {
      random.push(NUMERIC[_.random(0, NUMERIC.length - 1)]);
    }

    return random.join("");
  }

  /**
   * @description Custom schema validation for schema variable array max length.
   *
   * @param {Number} minLength
   */
  static maxArrayLimit(maxLength) {
    return function(val) {
      return Promise.resolve(val.length <= maxLength);
    };
  }

  /**
   * @description Custom schema validation for schema variable array min length.
   *
   * @param {Number} minLength
   */
  static minArrayLimit(minLength) {
    return function(val) {
      return Promise.resolve(val.length >= minLength);
    };
  }

  /**
   * convert array of string ids to array of object ids
   * @params {Array} - array of string ids
   * @return {Array} array of object ids
   */
  static convertStringIdsToObjectIds(ids) {
    return _.map(ids, function(id) {
      return new mongoose.Types.ObjectId(id);
    });
  }

  /**
   * Convert string object id to mongoose object id.
   *
   * @static
   * @param {any} id
   * @returns
   * @memberof Utility
   */
  static convertToObjectId(id) {
    return new mongoose.Types.ObjectId(id);
  }
}

/**
 * @type {Utility}
 */
module.exports = Utility;
