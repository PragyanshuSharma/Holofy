const route = require('../../../lib/route');
const validate = require('../../../lib/validate');
const logger = require('../../../lib/logger');
const { getBooksList } = require('../bookController');
const apiResponse = require('../../../lib/apiResponse');

const validateQueryParam = {
    type: 'object',
    properties: {
        page: { format: 'positiveInteger' },
        limit: { format: 'positiveInteger' },
    },
    required: [],
    additionalProperties: false
};

const getBookListHandler = async (req, res) => {
    // Validate if admin request body data is valid
    validate(req.query, validateQueryParam);


    const result = await getBooksList(req.query);
    return apiResponse(200, result, '1011', true, res);
};

module.exports = route.get('/user/books', getBookListHandler);
