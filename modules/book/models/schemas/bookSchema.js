const { Schema, model } = require('mongoose'),
    config = require('../../../../config');

const options = {
    timestamps: true
};

const bookSchema = new Schema(
    {
        bookName: { type: String, minlength: 1, default: null },
        releaseDate: { type: Number, default: null },
        authorName: { type: String, minlength: 1, default: null }

    },
    options
);

module.exports = bookSchema;
