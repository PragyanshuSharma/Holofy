const { Schema, model } = require('mongoose'),
  config = require('../../../../config');

const options = {
  timestamps: true
};

const userSchema = new Schema(
  {
    firstName: { type: String, minlength: 1, default: null },
    lastName: { type: String, minlength: 1, default: null },
    email: { type: String, unique: true, lowercase: true, trim: true },
    password: { type: String, required: true },
    profileImage: {
      type: Object,
      items: {
        url: { type: String },
        metaData: {
          mimeType: { type: String },
          fileSize: { type: Number },
          fileName: { type: String }
        }
      }
    },
    isSocialLogin: { type: Boolean, default: false },
    lastActive: { type: Date, default: null }
  },
  options
);

module.exports = userSchema;
