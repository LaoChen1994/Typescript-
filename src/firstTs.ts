function createTextHello(){
    let $span = document.createElement('span');
    $span.innerHTML = "Hello";
    return $span;
}

console.log(createTextHello())

document.body.appendChild(createTextHello());
