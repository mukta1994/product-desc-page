const path = require('path');
const express = require('express')
const { graphql } = require('graphql');
const rawSchema = require('./api/pdp-api/schema');
var { graphqlHTTP } = require('express-graphql');
const cors = require('cors')
var app = express()

app.use(cors())

const buildPath = path.join(__dirname, '..', 'build');
app.use(express.static(buildPath));

const port = process.env.PORT || 5004

//const query = `{ hello products { name, description } reviews { title, comment, grade, product { name, description } } }`;

app.use('/graphql', graphqlHTTP({
  schema: rawSchema,
  //source: query,
  graphiql: true,
}));


 app.listen(port, () => console.log(`Example app listening on port ${port}!`))