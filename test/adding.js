process.env.NODE_ENV = 'test';

//Require the dev-dependencies
let server = require('../server');
let mongoose = require("mongoose");
let Product = require('../api/models/productModel');
var request = require('supertest')(server);

//Our parent block
describe('Adding an invalid product', () => {
    beforeEach((done) => {
        Product.remove({}, (err) => {
            done();
        });
    });

    describe('Empty payload', () => {
        it('it should return validation errors', (done) => {
            request
                .post('/products')
                .set('content-type', 'application/json')
                .send({})
                .end((err, res) => {
                    res.should.have.status(401);
                    done();
                });
        });
    });
});