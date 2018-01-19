'use strict';
const products = require('../controllers/productController');

module.exports = function(app) {
    app.post('/products', async function(req, res, next) {
        try {
            const result = await products.addProduct(req.body);

            res.location('/products/' + result.reference);
            res.status(201).json(result);
        } catch(err) {
            //res.body(err);
            res.status(400).send({'error': { error: err }});

            next(err);
        }
    });

    app.get('/products/:reference', async function(req, res, next) {
        try {
            const result = await products.getProduct(req.params.reference);

            if (result) {
                res.status(200).json(result);
            } else {
                res.status(404).json({});
            }
        } catch(err) {
            res.status(400).send({'error': { error: err }});

            next(err);
        }
    });

    app.put('/products/:reference', async function(req, res, next) {

        try {
            const result = await products.updateProduct(req.params.reference, req.body);

            res.status(200).json(result);
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