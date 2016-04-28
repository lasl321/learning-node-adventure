'use strict';

var EventEmitter = require('events').EventEmitter;
var fs = require('fs');
var util = require('util');

function MyCustomEmitter() {
  this.name = 'my custom emitter';
  util.inherits(MyCustomEmitter, EventEmitter);
}

MyCustomEmitter.prototype.readFile = function (files) {
  let self = this;

  files.forEach(function (file) {
    fs.readFile(file, function (err, content) {
      if (err) {
        return self.emit('error', err, file);
      }

      self.emit('fileread', file, content);
    });
  });

  return self;
}

const e = new MyCustomEmitter()
e.readFile(['index.js', 'foo.js'])
  .on('fileread', function (file, content) {
    console.log('file read', file, content);
    console.log();
  }).on('error', function (err, file) {
    console.log('error', file, err);
    console.log();
  });
