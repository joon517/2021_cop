const swaggerUi = require('swagger-ui-express');
const swaggerJsdoc = require('swagger-jsdoc');

const options = {
    swaggerDefinition : {
        info : {
            title : "FASTMVPCOP TEST API",
            version : "1.0.0",
            description : "FastmvpCOP REST API TEST"
        },
        host : "localhost:3000",
        basePath : '/app/v1'
    },
    apis : [
        '../routes/index.js', '../routes/upload/index.js', '../routes/update/index.js', './swagger.yaml'
    ]
}

const specs = swaggerJsdoc(options);

module.exports = {
    swaggerUi,
    specs
}