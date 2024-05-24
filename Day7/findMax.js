const findMax=(arr)=>{
    let max=Number.MIN_SAFE_INTEGER;
    for(let i=0;i<arr.length;i++){
        if(arr[i]> max){
            max=arr[i];
        }
    }
    console.log(max);
}
findMax([1, 5, 3, 9, 2]);
findMax([-10, -5, -3, -9, -2]);
findMax([5]);