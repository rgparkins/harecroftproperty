'use strict';
let config = require('config'),
    mongoose = require('mongoose'),
    Product = mongoose.model('Products');

console.log(config);

exports.updateProduct = async function(reference, payload) {
    return await Product.findOneAndUpdate({reference: reference}, payload, {new: true});
};

exports.addProduct = async function(payload) {
    let new_task = new Product(payload);

    return await new_task.save();
};

exports.getProduct = async function(reference) {
    return await Product.findOne({reference: reference});
};

// exports.list_all_properties = async function(params) {
//     params = params || {radius : config.search.defaults.radius, api_key : config.api_key, postcode : "PE150LL"};
//
//     let uri = "http://api.zoopla.co.uk/api/v1/property_listings.json?" + queryString.stringify(params);
//
//     console.log(uri);
//
//     let promise = new Promise(function (resolve, reject) {
//         request(uri, function (error, res, body) {
//             if (!error && res.statusCode == 200) {
//                 resolve(body);
//             } else {
//                 reject(error);
//             }
//         });
//     });
//
//     return JSON.parse(await promise);
// };