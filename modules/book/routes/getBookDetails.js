const route = require('../../../lib/route');
const validate = require('../../../lib/validate');
const logger = require('../../../lib/logger');
const { getBookDetails } = require('../bookController');
const apiResponse = require('../../../lib/apiResponse');

const validateQueryParam = {
    type: 'object',
    properties: {
        bookId: { type: 'string', format: 'objectId' },
    },
    required: ['bookId'],
    additionalProperties: false
};

const getBookDataHandler = async (req, res) => {
    // Validate if admin request body data is valid
    validate(req.query, validateQueryParam);


    const result = await getBookDetails(req.query, req.params.bookId);
    return apiResponse(200, [result], '1010', true, res);
};

module.exports = route.get('/user/book', getBookDataHandler);
