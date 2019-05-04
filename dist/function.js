"use strict";
// 函数声明法定义
function sum(x, y) {
    return x + y;
}
console.log(sum(1, 2));
//　函数字面量定义法
var myfunction = function (x, y) {
    return x + y;
};
console.log(myfunction(4, 5));
function buildName(firstName, secondName, defaultParam) {
    if (defaultParam === void 0) { defaultParam = 'Default'; }
    var items = [];
    for (var _i = 3; _i < arguments.length; _i++) {
        items[_i - 3] = arguments[_i];
    }
    if (secondName) {
        console.log(defaultParam);
        items.forEach(function (item) { console.log(item); });
        return firstName + ' ' + secondName;
    }
    else {
        return firstName;
    }
}
function reverse(x) {
    if (typeof x === 'string') {
        return x.split("").reverse().join("");
    }
    else {
        return Number(x.toString().split("").reverse().join(""));
    }
}
console.log(buildName('Tom', 'Cirus'));
console.log(buildName('Nicole'));
console.log('*******************');
console.log(buildName('Nicole', 'kidman', 'changeDefault', 'items1', 'items2'));
console.log(reverse(123456));
console.log(reverse('123456abc'));
