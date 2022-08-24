const express = require('express');
const app = express();
var port = 3000;
const swaggerJsdoc = require('swagger-jsdoc');
const swaggerUi = require('swagger-ui-express');

const swaggeroptions = {
    definition: {
      info: {
        title: 'swagger works :)',
        description: "node-ex-api works",
        contact:{
            name:"amazing developer"
        }
      },
      servers:["http://localhost:3000"]
    },
    // apis: ['./src/routes*.js'],
    apis: ['app.js'],
  };
  const swaggerDocs = swaggerJsdoc(swaggeroptions);
  app.use('/api-docs',swaggerUi.serve,swaggerUi.setup(swaggerDocs))

  //Routes
    /**
    * @swagger
    * /customers:
    *  get:
    *    description: Use to request all customers
    *    responses:
    *      '200':
    *        description: A successful response
    */  app.get('/customers', function(req, res) {
    res.status(200).send('node-ex-api works :-)');
});

//listen to port
app.listen(port, () => {
    console.log(`Server is listening on port ${port}`);
 });