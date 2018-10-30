const validateJson = require('is-my-json-valid');

class SwaggerResponseValidator {

    constructor(swaggerSpec) {
        this._swaggerSpec = swaggerSpec;
    }

    validate(method, endpointPath, responseBody) {

    }

}


module.exports = SwaggerResponseValidator
