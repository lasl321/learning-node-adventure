'use strict';

var fs = require('fs');
fs.exists('foo.js', function (exists) {
    console.log(exists);
});

fs.exists('callbacks.js', function (exists) {
    console.log(exists);
});
