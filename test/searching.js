// process.env.NODE_ENV = 'test';
//
// //Require the dev-dependencies
// let server = require('../server'); //use const if it is never re-assigned
// let mongoose = require("mongoose");
// let Product = require('../api/models/productModel');
// let request = require('supertest')(server);
// let should = require('should');
//
//
// var descriptions = [
//     "Departure so attention pronounce satisfied daughters am. But shy tedious pressed studied opinion entered windows off",
//     "Advantage dependent suspicion convinced provision him yet. Timed balls match at by rooms we",
//     "Fat not boy neat left had with past here call. Court nay merit few nor party learn",
//     "Mr immediate remaining conveying allowance do or"
// ];
//
// describe('Fetching products', () => {
//     beforeEach((done) => {
//         Product.remove({}, (err) => {
//             done();
//         });
//     });
//
//     describe('searching by description', () => {
//         beforeEach((done) => {
//             for (var i in descriptions) {
//                 var payload = {
//                     reference : "RGP1236789" + i + new Date().getMilliseconds(),
//                     title : "This is mine and only mine" + new Date().getTime(),
//                     description: descriptions[i]
//                 };
//
//                 var p = new Product(payload);
//                 p.save();
//             }
//
//             done();
//         });
//
//         it('searching by keyword returns product', (done) => {
//             console.log("sdsadas");
//             request
//                 .get('/products?description=immediate')
//                 .set('content-type', 'application/json')
//                 .expect(200)
//                 .end(function(err, res) {
//                     done();
//                 });
//         });
//     });
// });