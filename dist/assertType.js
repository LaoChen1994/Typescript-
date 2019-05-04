"use strict";
function getLength(param) {
    if (param.length) {
        return param.length;
    }
    else {
        return param.toString().length;
    }
}
function getParamLength(param) {
    var paramLength = 0;
    switch (Object.prototype.toString.call(param)) {
        case "[object Array]":
            paramLength = param.length;
            break;
        case "[object String]":
            paramLength = param.length;
            break;
        case "[object Number]":
            paramLength = param.toString().length;
            break;
    }
    return paramLength;
}
console.log(getParamLength([1, 2, 3, 4]));
console.log(getParamLength(123));
console.log(getParamLength('1231dasd'));
console.log("************************");
console.log(getLength(123));
console.log(getLength('123456'));
