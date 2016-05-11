'use strict';

function* makeGenerator() {
    let x = yield null;
    console.log('Got', x);
    return;
}

const g = makeGenerator();
console.log(g.next());
console.log(g.next('foo'));
console.log(g.next());