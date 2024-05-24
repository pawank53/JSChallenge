const SumOfSquares=(arr)=>{
    let ans=arr.reduce((preVal, currVal)=>{
        return preVal +(currVal*currVal);
    })
    return ans;
}
console.log(SumOfSquares([1, 2, 3, 4]));
console.log(SumOfSquares([1, 2, 3]));