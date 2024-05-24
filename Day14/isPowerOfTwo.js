const isPowerOfTwo=(num)=>{
    if(num==0){
        return false;
    }
    if(num==1){
        return true;
    }
    return ((num & (num-1))==0);
}
console.log(isPowerOfTwo(8));
console.log(isPowerOfTwo(7));






