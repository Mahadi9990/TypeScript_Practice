"use strict";
let a1 = 1;
a1 = 10;
function add1(a, b) {
    return a + b;
}
const addAll = add1(2, 5);
a1 = addAll;
console.log(a1);
//# sourceMappingURL=index.js.map