'use strict';
let config = require('config'),
    mongoose = require('mongoose'),
    product = mongoose.model('Products');

console.log(config);

exports.addProduct = async function(payload) {
    let new_task = new product(payload);

    return await new_task.save();
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