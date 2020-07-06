const mongoose = require('mongoose');
const mongoosePaginate = require('mongoose-paginate-v2');

const bookSchema = require('./schemas/bookSchema');

bookSchema.plugin(mongoosePaginate);
/**
 * @type {Model}
 */
module.exports = mongoose.model('Book', bookSchema);
