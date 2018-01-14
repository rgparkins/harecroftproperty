process.env.NODE_ENV = 'test';

//Require the dev-dependencies
let server = require('../server');
let mongoose = require("mongoose");
let Product = require('../api/models/productModel');
var request = require('supertest')(server);
var should = require('should');

//Our parent block
describe('Adding an invalid product', () => {
    // beforeEach((done) => {
    //     Product.remove({}, (err) => {
    //         done();
    //     });
    // });

    describe('Empty payload', () => {
        it('it should return validation errors', (done) => {
            request
                .post('/products')
                .set('content-type', 'application/json')
                .send({})
                .expect(400)
                .end(function(err, res) {
                    if (err) return done(err);

                    res.body.error.error.message.should.equal('Products validation failed: title: Quick highlight of the product, name: Reference is required');

                    done();
                });
        });
    });
});