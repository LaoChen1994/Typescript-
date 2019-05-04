// 类型+方括号定义法
// let fibonacci1: number[] = ['1', 2, 3]; // 报错 因为'1'不是number类型

let fibonacci: (number | string) [] = [1, 2, 3];

fibonacci.push("5"); // 被允许的
console.log("fibonacci: ",fibonacci);

// 数组泛型定义法

let fibonacci2: Array<number | string > = [1, 1, 2, 3, 5];
fibonacci2.push("6");
console.log("fibonacci2: ", fibonacci2);

// 接口表示法

// interface NumberArray{
//     [props: number]: number
// }
interface NumberArray{
    [props: number]: number
}

let fibonacci3: NumberArray = [1, 2, 3, 4];
console.log(fibonacci3);

// 定义 原来的数组(即可以包含任何类型的数组)

let list: any[] = [1, '2', {3: 3}];
console.log('list=', list);

// reduce 方法使用的案例
let arr: Array<number> = [1, 2, 3, 4];

// interface Score{
//     readonly subject: string;
//     score: number;
//     teacher?: string;
// }

// let t1: Score = {
//     subject: 'math',
//     score: 88
// }

let p1 = [
    { subject: 'math', score: 88 },
    { subject: 'chinese', score: 85 },
    { subject: 'english', score: 80 },
    { subject: 'science', score: 90 }
]


let result1: number = arr.reduce((prev, curr) => {
    console.log(prev, curr);
    return prev + curr;
})
let result2:number = 0;
arr.forEach(element => {
    result2 += element;
    return result2
});

// 第二个０是给函数的初始值　第一个prev为０

let result3: number = p1.reduce(function(prev, curr){
    return curr.score + prev;
}, 0)

console.log(result1);
console.log(result2);
console.log(result3);


