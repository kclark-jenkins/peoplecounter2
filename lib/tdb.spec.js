'use strict';

const expect = require('chai').expect;

const tdb    = require('../src/tdb');

describe('The TDB Module', function () {
    it('Testing tingodb is setup and running properly', function * () {
        const result = tdb.setup();
        expect(result).to.eql(true);
    });

    it('Testing write to database', function * () {
       const result = tdb.insert();
       expect(result).to.eql(true);
    });

    it('Testing findOne(queryObject)', function * () {
       const result = tdb.findOne({hello:'world_safe2'});
       expect(result).to.eql(true);
    });
});
