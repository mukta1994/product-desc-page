
const path = require('path');
const express = require('express')
const helmet = require("helmet");

const app = express();
app.use(helmet());

const port = process.env.PORT || 5001

const buildPath = path.join(__dirname, '..', 'build');
app.use(express.static(buildPath));
// const { products,
//   productVariants,
//   images } = require('./data');

var routes = require('./api/product-api/routes');
routes(app);

app.listen(port, () => console.log(`Example app listening on port ${port}!`))

