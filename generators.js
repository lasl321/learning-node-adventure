'use strict';

function* makeGenerator() {
    yield 'Hello';
    yield 'Hello';
    yield 'Hello';
    return 'Hello';
}

const g = makeGenerator();
console.log(g.next());
console.log(g.next());
console.log(g.next());
console.log(g.next());
console.log(g.next());
console.log(g.next());
console.log(g.next());