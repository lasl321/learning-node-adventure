'use strict';

function* makeGenerator() {
    yield 'Hello';
    yield 'Hello';
    yield 'Hello';
    yield 'Hello';
}

const g = makeGenerator();
let x = g.next();
while (!x.done) {
    console.log(x.value);
    x = g.next();
}