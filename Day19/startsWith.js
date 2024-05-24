// Solution 1
const startsWith=(str, word)=>{
return str.toLowerCase().startsWith(word.toLowerCase());
}
console.log(startsWith("Hello word", "hello"));
console.log(startsWith("Hello word", "Hello"));
console.log(startsWith("Hello word", "word"));
console.log("############################");
// Solution 2
const startsWith2=(str, word)=>{
    return (str.toLowerCase().substring(0, word.length) === word.toLowerCase());
}
console.log(startsWith2("Hello word", "hello"));
console.log(startsWith2("Hello word", "Hello"));
console.log(startsWith2("Hello word", "word"));
console.log("############################");
// Solution 3
const startsWith3=(str, word)=>{
    return (str.toLowerCase().slice(0, word.length) === word.toLowerCase());
}
console.log(startsWith3("Hello word", "hello"));
console.log(startsWith3("Hello word", "Hello"));
console.log(startsWith3("Hello word", "word"));