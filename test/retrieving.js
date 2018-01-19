process.env.NODE_ENV = 'test';

//Require the dev-dependencies
let server = require('../server'); //use const if it is never re-assigned
let mongoose = require("mongoose");
let Product = require('../api/models/productModel');
let request = require('supertest')(server);
let should = require('should');


describe('fetching a single product', () => {
    beforeEach((done) => {
        Product.remove({}, (err) => {
            done();
        });
    });

    describe('given a product in the database', () => {
        beforeEach((done) => {
            var p = new Product({
                reference : "RGP12367890",
                title : "This is mine and only mine" + new Date().getTime(),
                description: "hello"
            });

            p.save(function(err) {
                if (err)
                    throw new err;

                done();
            });
        });

        it('it can be returned by reference', (done) => {
            request
                .get('/products/RGP12367890')
                .set('content-type', 'application/json')
                .expect(200)
                .end(function(err, res) {
                    res.body.reference.should.eql("RGP12367890");
                    res.body.title.should.startWith("This is mine and only mine");
                    res.body.description.should.eql("hello");
                    done();
                });
        });
    });
});

describe('fetching a non existent product', () => {
    beforeEach((done) => {
        Product.remove({}, (err) => {
            done();
        });
    });

    it('does not find the product', (done) => {
        request
            .get('/products/unknown')
            .set('content-type', 'application/json')
            .expect(404)
            .end(function(err, res) {
                done();
            });
    });
});