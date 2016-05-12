'use strict';

let RandomStream = require('./random-stream');
let rs = new RandomStream();
let chunk;
while((chunk = rs.read()) !== null) {
    console.log(chunk.toString());
}