function getLength(param: string | number): number {
    if ((<string>param).length) {
        return (<string>param).length;
    } else {
        return param.toString().length;
    }
}

function getParamLength(param: Array<any>): number;
function getParamLength(param: string): number;
function getParamLength(param: number): number;
function getParamLength(param: Array<any> | string | number): number{
    let paramLength: number = 0;
    switch (Object.prototype.toString.call(param)) {
        case "[object Array]":
            paramLength = (<Array<any>>param).length;
            break;
        case "[object String]":
            paramLength = (<string>param).length;
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
console.log("************************")
console.log(getLength(123));
console.log(getLength('123456'));
