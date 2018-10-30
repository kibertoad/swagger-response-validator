const SwaggerResponseValidator = require('../lib/SwaggerResponseValidator');
const { assert } = require('chai');

const spec = require('./spec/swagger.json')

describe('SwaggerResponseValidator', () => {
  describe('validate', () => {
    it('happy path', () => {
      const validator = new SwaggerResponseValidator(spec);
      validator.validate('get', '/pets', [{
        id: 1,
        name: "Dogmeat"
      }])
    });
  });
});
