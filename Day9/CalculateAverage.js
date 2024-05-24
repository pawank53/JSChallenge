const calculateAverage=(arr)=>{

    let sum=arr.reduce(
        (prevValue, currVal)=> prevValue+currVal, 0);
    let res= sum/ arr.length;
    return res;
}
console.log(calculateAverage([5, 10, 2, 8]));
console.log(calculateAverage([1, 2, 3, 4, 5, 6, 12]));