var EventEmitter = require('events').EventEmitter;
var fs = require('fs');

function readFile(files) {
  var emitter = new EventEmitter();
  files.forEach(function (file) {
    fs.readFile(file, function (err, content) {
      if (err) {
        /**
         * The EventEmitter cannot just throw exceptions when an error condition
         * occurs, as they would be lost in the event loop if the event is emitted
         * asynchronously. Instead, the convention is to emit a special event, called
         * error, and to pass an Error object as an argument.
         */
        return emitter.emit('error', err, file);
      }

      emitter.emit('fileread', file, content);
    });
  });

  return emitter;
}

var e = readFile(['index.js', 'foo.js']);

e.on('fileread', function (file, content) {
  console.log('file read', file, content);
});

e.on('error', function (err, file) {
  console.log('error', file, err);
});