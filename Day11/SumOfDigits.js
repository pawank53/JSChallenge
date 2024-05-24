const SumOfDigits=(num)=>{
    let sum=0;
    while(num>0){
        let rem=num%10;
        sum+= rem;
        num=Math.floor(num/10);
    }
    return sum;
}
console.log(SumOfDigits(1234));
console.log(SumOfDigits(4321));
console.log(SumOfDigits(123456));


