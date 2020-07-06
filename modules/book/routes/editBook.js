const route = require('../../../lib/route');
const validate = require('../../../lib/validate');
const logger = require('../../../lib/logger');
const {editBookDetails} = require('../bookController');
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

const editBookDataHandler = async (req, res) => {
  // Validate if admin request body data is valid
  validate(req.body, validateBody);


  const result = await editBookDetails(req.body,req.params.bookId);
  return apiResponse(200, [result], '1010', true, res);
};

module.exports = route.put('/user/book/:bookId', editBookDataHandler);
