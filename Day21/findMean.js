// Solution 1
const findMean=(arr)=>{
    if(arr.length==0){
        return 0;
    }
    let sum=arr.reduce((preVal, currVal)=>{
       return preVal+currVal;
    }, 0)
    let mean=sum/arr.length;
    return mean;
}
console.log(findMean([1, 2, 3, 4, 5]));
console.log(findMean([10, 20, 30]));
console.log(findMean([-1, 0, 1]));
console.log(findMean([]));
console.log("###############");
// Solution 2
const getMean=(arr)=>{
    if(arr.length==0){
        return 0;
    }
    let sum=0;
    for(let i=0;i<arr.length;i++){
        sum+=arr[i];
    }
    return sum/arr.length;
}
console.log(getMean([1, 2, 3, 4, 5]));
console.log(getMean([10, 20, 30]));
console.log(getMean([-1, 0, 1]));
console.log(getMean([]));