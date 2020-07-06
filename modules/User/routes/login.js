const route = require('../../../lib/route'),
  validate = require('../../../lib/validate'),
  logger = require('../../../lib/logger'),
  UserController = require('../UserController'),
  apiResponse = require('../../../lib/apiResponse');

const validateBody = {
  type: 'object',
  properties: {
    email: { type: 'string', format: 'email' },
    password: { type: 'string', format: 'password', minlength: 8 }
  },
  required: ['email', 'password'],
  additionalProperties: false
};

const loginHandler = async (req, res) => {
  // Validate if  request body data is valid
  validate(req.body, validateBody);

  //log request
  // logger.info("login request", req.body);

  const result = await UserController.loginHandler(req.body);
  res.setHeader('authorization', result.token);
  return apiResponse(200, result, '1002', true, res);
};

module.exports = route.post('/user/login', loginHandler, { isPublic: true });
