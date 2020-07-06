const route = require('../../../lib/route');
const validate = require('../../../lib/validate');
const logger = require('../../../lib/logger');
const {createBook} = require('../bookController');
const apiResponse = require('../../../lib/apiResponse');

const validateBody = {
  type: 'object',
  properties: {
    bookName: { type: 'string', minlength: 1 },
    releaseDate: { type: 'number' },
    authorName: { type: 'string', minlength: 1 }
  },
  required: ['bookName', 'releaseDate','authorName'],
  additionalProperties: false
};

const createBookDataHandler = async (req, res) => {
  // Validate if admin request body data is valid
  validate(req.body, validateBody);


  const result = await createBook(req.body);
  return apiResponse(200, [result], '1008', true, res);
};

module.exports = route.post('/user/book', createBookDataHandler);
