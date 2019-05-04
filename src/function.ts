// 函数声明法定义
function sum(x:number, y:number): number {
    return x + y;
}

console.log(sum(1, 2));

//　函数字面量定义法

let myfunction: (x: number, y:number) => number = function(x:number, y:number): number{
    return x + y;
}

console.log(myfunction(4, 5));

function buildName(firstName: string, secondName?: string, defaultParam: string = 'Default', ...items:any[]): string{
    if (secondName) {
        console.log(defaultParam);
        items.forEach((item)=>{console.log(item)});
        return firstName + ' ' + secondName;
    } else {
        return firstName;
    }
}

// 函数重载

function reverse(x:number): number;
function reverse(x:string): string;

function reverse(x: string | number):string | number {
    if (typeof x === 'string') {
        return x.split("").reverse().join("");
    } else {
        return Number(x.toString().split("").reverse().join(""));
    }
}

console.log(buildName('Tom', 'Cirus'));
console.log(buildName('Nicole'));
console.log('*******************')
console.log(buildName('Nicole', 'kidman', 'changeDefault', 'items1', 'items2'));
console.log(reverse(123456));
console.log(reverse('123456abc'));