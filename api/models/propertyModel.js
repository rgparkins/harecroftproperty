'use strict';
var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var PropertySchema = new Schema({
    name: {
        type: Ref
    }
}, { strict: false});

module.exports = mongoose.model('Property', PropertySchema);