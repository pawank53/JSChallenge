// Solution 1
const toSnakeCase=(str)=>{
    let arr= str.split(/[-_\s]/);
    let res=[];
    for(let i=0;i<arr.length;i++){
        res.push(arr[i].toLowerCase());
    }
    res=res.join('_');
    return res;
}
// Solution 2
const snakeCase=(str)=>{
    return str.split(/[-_\s]/).map(word => word.toLowerCase()).join('_');
}
console.log(toSnakeCase("foo-bar-baz"));
console.log(toSnakeCase("This is Pawan"));
console.log(toSnakeCase("this_is_a_test"));
console.log(toSnakeCase("hello world tHaPa"));
console.log("########################");
console.log(snakeCase("foo-bar-baz"));
console.log(snakeCase("This is Pawan"));
console.log(snakeCase("this_is_a_test"));
console.log(snakeCase("hello world tHaPa"));