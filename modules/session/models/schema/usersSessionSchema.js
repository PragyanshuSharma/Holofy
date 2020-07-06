const { Schema, model } = require('mongoose'),
  config = require('../../../../config');

const options = {
  timestamps: true
};

const userSessionSchema = new Schema(
  {
    userId: { type: Schema.Types.ObjectId, ref: 'User' },
    token: [{ type: String }]
  },
  options
);

userSessionSchema.index({ userId: 1 }, { unique: true });
module.exports = userSessionSchema;
