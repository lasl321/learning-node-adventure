// Promises
'use strict';

const p = new Promise(function (resolve, reject) {
    reject(new Error('Something went wrong!'))
});

p.catch(function (err) {
    console.log('Error: ' + err);
});

