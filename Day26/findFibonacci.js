const findFibonacci=(num)=>{

    if(num==1|| num==0){
        return num;
    }
    return findFibonacci(num-1)+findFibonacci(num-2);
}
console.log(findFibonacci(0));
console.log(findFibonacci(1));
console.log(findFibonacci(2));
console.log(findFibonacci(3));
console.log(findFibonacci(4));
console.log(findFibonacci(5));
console.log(findFibonacci(6));