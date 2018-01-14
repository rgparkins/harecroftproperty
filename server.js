let app = require('express')(),
    config = require("config"),
    port = process.env.PORT || 3000,
    mongoose = require('mongoose'),
    Task = require('./api/models/productModel'), //created model loading here
    bodyParser = require('body-parser');

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

mongoose.Promise = global.Promise;
mongoose.connect(config.get("mongo_connection"));

var routes = require('./api/routes/productRoutes'); //importing route
routes(app); //register the route

console.log('Product REST API started on: ' + port);

app.listen(port);

module.exports = app; // for testing