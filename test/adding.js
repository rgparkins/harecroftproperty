process.env.NODE_ENV = 'test';

//Require the dev-dependencies
let server = require('../server');
let mongoose = require("mongoose");
let Product = require('../api/models/productModel');
var request = require('supertest')(server);
var should = require('should');

describe('Adding a valid product', () => {
    beforeEach((done) => {
        Product.remove({}, (err) => {
            done();
        });
    });

    describe('Given a system', () => {
        it('it should return the product', (done) => {
            let payLoad = { reference : "RGP123678", title : "This is mine and only mine" + new Date().getTime()};

            request
                .post('/products')
                .set('content-type', 'application/json')
                .send(payLoad)
                .expect(201)
                .expect('Location', "/products/RGP123678", done);
        });
    });
});

describe('Adding an invalid product', () => {
    beforeEach((done) => {
        Product.remove({}, (err) => {
            done();
        });
    });

    describe('Empty payload', () => {
        it('it should return all validation errors', (done) => {
            request
                .post('/products')
                .set('content-type', 'application/json')
                .send({})
                .expect(400)
                .end(function(err, res) {
                    if (err) return done(err);

                    res.body.error.error.message.should.equal('Products validation failed: title: Quick highlight of the product, reference: Reference is required');

                    done();
                });
        });
    });
});