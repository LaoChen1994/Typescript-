// boolean

let isDone: boolean = false
// let isDone2: boolean = new Boolean(1); // 错误因为new Boolean是一个对象类型
let isDone3: boolean = Boolean(1);

console.log(isDone, isDone3);

// Number 支持各种进制

let isNumber: number = 0x2fff;
let isNumber2: number = 3;
// isNumber = 'cyx' //报错 因为isNumber 只能是number类型
console.log(isNumber, isNumber2);

// 用void来定义没有返回值的函数 和undefine

// let u: void = null; // 报错
let unuse: void = undefined;

console.log(`unuse is ${unuse}`);

function alertvoid(): void {
    console.log('this is void');
}

alertvoid();

// 利用null和undefined 来定义null和undefined类型

let nullType: null = null;
let undefinedType: undefined = undefined;

// 不建议使用any类型,any能够无视数据的类型
let anyInfo: any = 'typescript';

anyInfo = 123;


