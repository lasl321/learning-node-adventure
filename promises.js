// Promises
'use strict';

const p = new Promise(function (resolve, reject) {
    // reject(new Error('Something went wrong!'))
    resolve('foo');
});

p.then(function (result) {
    console.log('got ', result);
    throw new Error('Exception in rejection handler')
}).catch(function (err) {
    console.log(err);
});

