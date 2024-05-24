const FindMinimumElement=(arr)=>{ // Solution 1
    let min=Number.MAX_SAFE_INTEGER;
    if(arr.length==0){
        return "Empty";
    }
let ans= arr.reduce((preVal, currVal)=>{
    if(preVal> currVal){
        preVal=currVal;
    }
    return preVal;
}, min)
return ans;
}
// Solution 2
const findMin=(arr)=>{
    if(arr.length>0){
        let min=Number.MAX_SAFE_INTEGER;
        for(let i=0;i<arr.length;i++){
            min=Math.min(arr[i], min);
        }
        return min;
    }else{
        return "Empty"
    }
}
console.log(FindMinimumElement([5, 2, 2 ,8, 5, 10]));
console.log(FindMinimumElement([-5, -3 ,-5 ,12, -7, -3, 5, 4]));
console.log(FindMinimumElement([]));
console.log(FindMinimumElement([5, 2, 2 ,8, 5, 10]));
console.log(FindMinimumElement([-5, -3 ,-5 ,12, -7, -3, 5, 4]));
console.log(FindMinimumElement([]));
