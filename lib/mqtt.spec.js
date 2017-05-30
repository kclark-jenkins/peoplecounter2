'use strict';

const expect = require('chai').expect;

const mqtt   = require('../src/mqtt');

describe('The MQTT Module', function () {
    it('Testing Mosca is setup and running properly', function * () {
        const result = mqtt.helloWorld();
        expect(result).to.eql('Hello, World!');
    });

    it('Testing that we can start the MQTT Server', function * () {
        const result = mqtt.start();
    });
});
