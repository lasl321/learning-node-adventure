var fs = require('fs');
function readJSONThrows(filename, callback) {
  fs.readFile(filename, function (err, data) {
    if (err) {
      return callback(err);
    }

    callback(null, JSON.parse(data));
  })
}

// Try-catch blocks will not work since the callback is in a different stack
try {
  readJSONThrows('printer.js', function (err) {
    console.log(err);
  });
} catch (e) {
  console.log(e);
}

process.on('uncaughtException', err => {
  console.error('Parse error', err);
  /**
   * It is advised, especially in production, to exit anyway from the
   * application after an uncaught exception is received.
   */
  process.exit(1);
});
