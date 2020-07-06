const route = require('../../../lib/route');
const validate = require('../../../lib/validate');
const { deleteBookData } = require('../bookController');
const apiResponse = require('../../../lib/apiResponse');

const validateQueryParam = {
    type: 'object',
    properties: {
        bookId: { type: 'string', format: 'objectId' },
    },
    required: ['bookId'],
    additionalProperties: false
};

const editBookDataHandler = async (req, res) => {
    // Validate if admin request body data is valid
    validate(req.query, validateQueryParam);


    const result = await deleteBookData(req.query.bookId);
    return apiResponse(200, [result], '1011', true, res);
};

module.exports = route.delete('/user/books/', editBookDataHandler);
