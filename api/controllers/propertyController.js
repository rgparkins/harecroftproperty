'use strict';
const request = require('request');

exports.list_all_properties = async function(req, res) {
    var promise = new Promise(function (resolve, reject) {
        request("http://api.zoopla.co.uk/api/v1/property_listings.json?postcode=Pe150ll&api_key=dq7wypbe8esu2mx9zbwuu2kv", function (error, res, body) {
            if (!error && res.statusCode == 200) {
                resolve(body);
            } else {
                reject(error);
            }
        });
    });

    return JSON.parse(await promise);
};