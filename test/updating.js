process.env.NODE_ENV = 'test';

//Require the dev-dependencies
let server = require('../server'); //use const if it is never re-assigned
let mongoose = require("mongoose");
let Product = require('../api/models/productModel');
let request = require('supertest')(server);
let should = require('should');

var payload = {
    reference : "RGP1236789",
    title : "This is mine and only mine" + new Date().getTime()
};


describe('Updating a valid product', () => {
    beforeEach((done) => {
        Product.remove({}, (err) => {
            done();
        });
    });

    describe('updating a single product', () => {
        beforeEach((done) => {
            request
                .post('/products')
                .set('content-type', 'application/json')
                .send(payload)
                .expect(201)
                .expect('Location', "/products/RGP1236789", done);
        });

        it('it should update the product', (done) => {
            payload.extra = "added after save";

            request
                .put('/products/RGP1236789')
                .set('content-type', 'application/json')
                .send(payload)
                .expect(200)
                .end(function(err, res) {
                    if (err) return done(err);

                    Product.findOne({ 'reference': 'RGP1236789' }, function (err, product) {
                        var parsedProduct = JSON.parse(JSON.stringify(product));

                        parsedProduct.extra.should.eql("added after save");
                        done();
                    });
                });
        });
    });
});