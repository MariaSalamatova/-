function inc(n) {
    return n + 1;
}


function incObj(num) {
    if (num && typeof num.n === 'number') {
        num.n += 1;
    }
}


const a = 5;
const b = inc(a);
console.dir({ a, b }); // { a: 5, b: 6 }

const obj = { n: 5 };
incObj(obj);
console.dir(obj); // { n: 6 }


const array = [true, 'hello', 5, 12, -200, false, false, 'word', {}, [], null, undefined, 42n, Symbol('sym')];


const typeCounts = {};

for (const item of array) {
    const type = typeof item;
    if (!(type in typeCounts)) {
        typeCounts[type] = 0;
    }
    typeCounts[type]++;
}

console.dir(typeCounts);