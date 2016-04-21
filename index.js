var fs = require('fs'),
    filenames,
    i,
    processId;

filenames = fs.readdirSync(".");

for (i = 0; i < filenames.length; i++) {
    console.log(filenames[i]);
}
console.log("Ready.");
console.log('after the iteration blocking\n\n\n');

// Doesn't work in Windows allegedly
// processId = process.getuid();

function iterateThroughFiles(filenames) {
    for (i = 0; i < filenames.length; i++) {
        console.log(filenames[i]);
    }
}

fs.readdir('.', function (err, filenames) {
    filenames.forEach(function (item) {
        console.log(item);
    })
    console.log("Ready.");
});

console.log('after the iteration async');
