'use strict';

let util = require('util');
let stream = require('stream');
let chance = require('chance').Chance();

function RandomStream(options) {
    stream.Readable.call(this, options);
}

util.inherits(RandomStream, stream.Readable);

RandomStream.prototype._read = function _read(size) {
    let chunk = chance.string();
    this.push(chunk, 'utf8');
    if (chance.bool({ likelihood: 5 })) {
        this.push(null);
    }
};

module.exports = RandomStream;
