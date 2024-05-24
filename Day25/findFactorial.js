const findFactorial=(num)=>{
    if(num==0){
        return 1;
    }
    return num * findFactorial(num-1);
}
console.log(findFactorial(5));
console.log(findFactorial(0));
console.log(findFactorial(9));