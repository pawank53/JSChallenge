const factorial=(num)=>{
    if(num===0){
        return 1;
    }
    let res=num*factorial(num-1);
    return res;
}
console.log(factorial(6));
console.log(factorial(1));
console.log(factorial(0));
console.log(factorial(5));