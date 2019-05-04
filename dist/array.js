"use strict";
// 类型+方括号定义法
// let fibonacci1: number[] = ['1', 2, 3]; // 报错 因为'1'不是number类型
var fibonacci = [1, 2, 3];
fibonacci.push("5"); // 被允许的
console.log("fibonacci: ", fibonacci);
// 数组泛型定义法
var fibonacci2 = [1, 1, 2, 3, 5];
fibonacci2.push("6");
console.log("fibonacci2: ", fibonacci2);
var fibonacci3 = [1, 2, 3, 4];
console.log(fibonacci3);
// 定义 原来的数组(即可以包含任何类型的数组)
var list = [1, '2', { 3: 3 }];
console.log('list=', list);
// reduce 方法使用的案例
var arr = [1, 2, 3, 4];
// interface Score{
//     readonly subject: string;
//     score: number;
//     teacher?: string;
// }
// let t1: Score = {
//     subject: 'math',
//     score: 88
// }
var p1 = [
    { subject: 'math', score: 88 },
    { subject: 'chinese', score: 85 },
    { subject: 'english', score: 80 },
    { subject: 'science', score: 90 }
];
var result1 = arr.reduce(function (prev, curr) {
    console.log(prev, curr);
    return prev + curr;
});
var result2 = 0;
arr.forEach(function (element) {
    result2 += element;
    return result2;
});
// 第二个０是给函数的初始值　第一个prev为０
var result3 = p1.reduce(function (prev, curr) {
    return curr.score + prev;
}, 0);
console.log(result1);
console.log(result2);
console.log(result3);
