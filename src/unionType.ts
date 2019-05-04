let setterNumber: string | number;
setterNumber = 'seven';
console.log(givenString(setterNumber));

setterNumber = 7;
console.log(givenString(setterNumber));

// function givenLength(param:string|number): number {
//     return param.length; // 报错 因为number没有length属性
// }

function givenString(param:string|number): string {
    return param.toString(); // 正确使用,因为number 和 string都有toString 方法
}
