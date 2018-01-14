'use strict';
const products = require('../controllers/productController');

module.exports = function(app) {
    app.post('/products', async function(req, res, next) {
        try {
            const result = await products.addProduct(req.body);

            res.location('/products/' + result.reference);
            res.json(result);
        } catch(err) {
            //res.body(err);
            res.status(400).send({'error': { error: err }});

            next(err);
        }
    });

    app.use((err, req, res, next) => {
        /* do something with the error */
        console.error(err);
    });
};