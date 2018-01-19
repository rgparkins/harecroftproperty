'use strict';
var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var ProductSchema = new Schema({
    reference: {
        type: String,
        required: "Reference is required",
        unique : true
    },
    title: {
        type: String,
        required: "Quick highlight of the product"
    },
    description: {
        type: String,
    },
    status: {
        type: [{
            type: String,
            enum: ['pending', 'public', 'sold']
        }],
        default: ['pending']
    }
}, { strict : false});

module.exports = mongoose.model('Products', ProductSchema);