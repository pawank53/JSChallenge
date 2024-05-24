const compareArray=(arr, brr)=>{
    if(arr.length !=brr.length){
        return false;
    }
    let i=0, j=0, count=0;
    while(i< arr.length && j<brr.length){
        if(arr[i]==brr[j]){
            i++;
            j++;
            count++;
        }else{
            i++;
        }
    }
    if(count==arr.length){
        return true;
    }
    return false;
}
console.log(compareArray([1, 2, 3], [1, 2, 3]));
console.log(compareArray([1, 2], [1, 2, 3]));
console.log(compareArray([1, 2, 3], [1, 2, 3, 4]));
console.log(compareArray([1, 2, 3], [1, 2, 4]));
console.log(compareArray([], []));