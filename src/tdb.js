'use strict';

var Db = require('tingodb')().Db, assert = require('assert');
var db = new Db('./data', {});

// Fetch a collection to insert document into
var collection;

let setup = function() {
    try {
        collection = db.collection("peoplecounter2");
    }catch(err){
        return err;
    }
    return true;
};

let insert = function() {
    // Insert a single document
    collection.insert([{hello:'world_safe1'}
        , {hello:'world_safe2'}], {w:1}, function(err, result) {
        assert.equal(null, err);

        if(err)
            return false;
    });

    return true;
};

let findOne = function(query) {
    // Fetch the document
    collection.findOne(query, function(err, item) {
        if(err)
            return false;
    });

    return true;
};

module.exports = {
    setup,
    insert,
    findOne
};