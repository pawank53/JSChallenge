// Solution 1
const toCamelCase=(str)=>{
    let arr= str.split(/[-_\s]/);
    let res="";
    for(let i=0;i<arr.length;i++){
        if(i==0){
            res += arr[i].toLowerCase();
        }else{
            res+=(arr[i].charAt(0).toUpperCase()+ arr[i].slice(1).toLowerCase());
        }
    }
    return res;
}
// Solution 2
const camelCase=(str)=>{
    return str.split(/[-_\s]/).map((word, index)=>{
        if(index===0){
            return word.toLowerCase();
        }else{
            return word.charAt(0).toUpperCase()+ word.slice(1).toLowerCase();
        }
    }).join("");
}
console.log(toCamelCase("This is Pawan"));
console.log(toCamelCase("foo-bar-baz"));
console.log(toCamelCase("this_is_a_test"));
console.log(toCamelCase("hello world tHaPa"));
console.log("####################");
console.log(camelCase("This is Pawan"));
console.log(camelCase("foo-bar-baz"));
console.log(camelCase("this_is_a_test"));
console.log(camelCase("hello world tHaPa"));

