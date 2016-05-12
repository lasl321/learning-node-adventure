'use strict';

process.stdin.on('readable', function () {
    console.log('new data available');
    let chunk = null;
    while ((chunk = process.stdin.read()) !== null) {
        console.log('read', chunk.length, 'bytes', ':', chunk.toString());
    }
});

process.stdin.on('end', function () {
    process.stdout.write('end of stream');
});