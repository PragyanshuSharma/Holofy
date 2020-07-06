const route = require('../../../lib/route');
const validate = require('../../../lib/validate');
const logger = require('../../../lib/logger');
const UserController = require('../UserController');
const apiResponse = require('../../../lib/apiResponse');
const ApiError = require('../../../lib/apiError');
const error = require('../../../lib/errorCodes'); 

const validateBody = {
  type: 'object',
  properties: {
    email: { type: 'string', format: 'email' },
    password: { type: 'string', format: 'password' }
  },
  required: ['email', 'password'],
  additionalProperties: false
};

const signUpHandler = async (req, res) => {
  // Validate if admin request body data is valid
  validate(req.body, validateBody);

  //log request
  logger.info('signup request', req.body);

  const user = await UserController.checkDocumentExists({ email: req.body.email, password: { $exists: true } });
  if (user) throw new ApiError('1001', error.ALREADY_EXISTS.status);
  const result = await UserController.createUser(req.body);
  return apiResponse(200, [result], '1002', true, res);
};

module.exports = route.post('/user/signUpWithEmail', signUpHandler, { isPublic: true });
