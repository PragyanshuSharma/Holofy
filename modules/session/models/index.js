const mongoose = require('mongoose');

const mongoosePaginate = require('mongoose-paginate-v2');
const userSessionSchema = require('./schema/usersSessionSchema');
userSessionSchema.plugin(mongoosePaginate);

/**
 * @type {Model}
 */
module.exports = mongoose.model('userSession', userSessionSchema);
