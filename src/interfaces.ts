interface Person{
    readonly id: number;
    name: string;
    age: number;
    gender?: string;
    [props: string]: any;
}

let tom: Person = {
    id: 1,
    name: 'tom',
    age: 18,
    // job: 'writer'
}

let fox: Person = {
    id: 2,
    name: 'fox',
    age: 20,
    gender : 'male'
}

console.log(JSON.stringify(tom));
console.log(JSON.stringify(fox));