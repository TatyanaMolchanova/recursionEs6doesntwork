'use strict';

// let countDownFrom = (num) => {
//     if (num === 0) return;
//     console.log(num)
//     countDownFrom(num - 1)
// }

// countDownFrom(10)

var categories = [{ id: 'animals', 'parent': null }, { id: 'mammals', 'parent': 'animals' }, { id: 'cats', 'parent': 'mammals' }, { id: 'dogs', 'parent': 'mammals' }, { id: 'chihuahua', 'parent': 'dogs' }, { id: 'labrador', 'parent': 'dogs' }, { id: 'persian', 'parent': 'cats' }, { id: 'siamese', 'parent': 'cats' }];

var makeTree = function makeTree(categories) {
    var node = {};
    categories.filter(c = c.parent === parent).forEach(function (c) {
        return node[c.id] = makeTree(categories, c.id);
    });
    return node;
};

console.log(JSON.stringify(makeTree(categories, null), null, 2));